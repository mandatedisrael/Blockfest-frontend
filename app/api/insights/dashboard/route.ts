import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// This would typically connect to your actual database
// For now, we'll structure it to work with CSV data processing

interface GuestRegistration {
  id: string;
  timestamp: string;
  email: string;
  firstName: string;
  lastName: string;
  country: string;
  city: string;
  profession: string;
  company: string;
  experience: string;
  interests: string;
  source: string;
  status: "confirmed" | "pending" | "cancelled";
}

// Utility function to parse CSV line with proper quoted field handling
function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    const nextChar = line[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        // Escaped quote within quoted field
        current += '"';
        i++; // Skip next quote
      } else {
        // Toggle quote mode
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      result.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }

  result.push(current.trim());
  // Remove surrounding quotes from parsed values
  return result.map((v) => v.replace(/^"|"$/g, ""));
}

/**
 * Parse experience text into standardized level
 */
function parseExperienceLevel(expText: string): string {
  const normalized = expText.toLowerCase();

  if (normalized.includes("newcomer") || normalized.includes("just learning")) {
    return "Newcomer";
  }
  if (normalized.includes("intermediate") || normalized.includes("familiar")) {
    return "Intermediate";
  }
  if (
    normalized.includes("advanced") ||
    normalized.includes("actively building")
  ) {
    return "Advanced";
  }
  if (normalized.includes("web2") && normalized.includes("transitioning")) {
    return "Web2 Transitioning";
  }

  return "Unknown";
}

// Function to normalize country names
function normalizeCountry(country: string): string {
  if (!country) return "Nigeria"; // Default for Nigerian event

  // Clean and normalize the input
  const cleaned = country
    .toLowerCase()
    .trim()
    .replace(/^["'\s]+|["'\s]+$/g, "") // Remove quotes and spaces from start/end
    .replace(/[.,\s)(\-]+$/, "") // Remove trailing punctuation, spaces, parentheses, hyphens
    .replace(/^[.,\s)(\-]+/, "") // Remove leading punctuation, spaces, parentheses, hyphens
    .replace(/\s+/g, " "); // Normalize multiple spaces to single space

  // Handle empty or invalid entries
  if (
    !cleaned ||
    cleaned === "nil" ||
    cleaned === "none" ||
    cleaned === "n/a" ||
    cleaned === "null" ||
    cleaned === "-" ||
    cleaned === "nah" ||
    cleaned === "no"
  ) {
    return "Nigeria";
  }

  // Handle direct Nigerian variants and typos
  if (
    cleaned.match(/^nigeri[a-z]*$/i) ||
    cleaned === "ng" ||
    cleaned === "nige" ||
    cleaned === "nigerai" ||
    cleaned === "nigera" ||
    cleaned === "nigerua" ||
    cleaned === "nigerian" ||
    cleaned === "nigerians"
  ) {
    return "Nigeria";
  }

  // Handle international cities/countries
  const internationalMappings: { [key: string]: string } = {
    nairobi: "Kenya",
    kenya: "Kenya",
    poland: "Poland",
    türkiye: "Turkey",
    turkey: "Turkey",
    ghana: "Ghana",
    "south africa": "South Africa",
    "benin republic": "Benin",
  };

  if (internationalMappings[cleaned]) {
    return internationalMappings[cleaned];
  }

  // Comprehensive Nigerian locations mapping
  const nigerianKeywords = [
    // Direct Nigeria references
    "nigeria",
    "ng",
    "nige",
    "nigerian",
    "nigerians",

    // Major cities
    "lagos",
    "abuja",
    "ibadan",
    "kano",
    "port harcourt",
    "portharcourt",
    "benin city",
    "maiduguri",
    "zaria",
    "aba",
    "jos",
    "ilorin",
    "enugu",
    "abeokuta",
    "sokoto",
    "onitsha",
    "warri",
    "calabar",
    "uyo",
    "kaduna",
    "bauchi",
    "akure",
    "osogbo",
    "gombe",
    "minna",
    "owerri",
    "asaba",
    "abakaliki",
    "umuahia",
    "awka",
    "makurdi",
    "yenagoa",
    "lafia",
    "jalingo",
    "gusau",
    "dutse",
    "birnin kebbi",
    "yola",

    // Lagos areas
    "ikeja",
    "lekki",
    "victoria island",
    "ikoyi",
    "surulere",
    "mushin",
    "isolo",
    "agege",
    "ikorodu",
    "epe",
    "badagry",
    "egbeda",
    "yaba",
    "apapa",
    "alaba",
    "ogba",
    "berger",
    "gbagada",
    "bariga",
    "shomolu",
    "ojo",
    "island",
    "mainland",
    "ikotun",
    "ipaja",
    "igando",
    "alakuko",
    "abule egba",
    "mowe",
    "magboro",
    "arepo",
    "ifo",
    "ota",
    "agbara",
    "badore",
    "ajah",
    "sangotedo",

    // Other Nigerian cities/towns
    "ile ife",
    "itori",
    "ogbomosho",
    "ogbomoso",
    "ijebu ode",
    "sagamu",
    "offa",
    "ado ekiti",
    "akoka",
    "ebutte meta",
    "meiran",
    "ewekoro",
    "akute",
    "sango",
    "agbor",
    "warri",
    "sapele",
    "benin",
    "asaba",
    "onitsha",
    "nnewi",
    "awka",
    "enugu",
    "nsukka",
    "abakaliki",
    "ebonyi",
    "abia",
    "umuahia",
    "aba",
    "owerri",
    "orlu",
    "okigwe",
    "imo",

    // All 36 Nigerian states (with variations)
    "abia",
    "abia state",
    "adamawa",
    "adamawa state",
    "akwa ibom",
    "akwaibom",
    "akwa ibom state",
    "anambra",
    "anambra state",
    "bauchi",
    "bauchi state",
    "bayelsa",
    "bayelsa state",
    "benue",
    "benue state",
    "borno",
    "borno state",
    "cross river",
    "cross river state",
    "delta",
    "delta state",
    "ebonyi",
    "ebonyi state",
    "edo",
    "edo state",
    "ekiti",
    "ekiti state",
    "enugu",
    "enugu state",
    "gombe",
    "gombe state",
    "imo",
    "imo state",
    "jigawa",
    "jigawa state",
    "kaduna",
    "kaduna state",
    "kano",
    "kano state",
    "katsina",
    "katsina state",
    "kebbi",
    "kebbi state",
    "kogi",
    "kogi state",
    "kwara",
    "kwara state",
    "lagos",
    "lagos state",
    "nasarawa",
    "nasarawa state",
    "niger",
    "niger state",
    "ogun",
    "ogun state",
    "ondo",
    "ondo state",
    "osun",
    "osun state",
    "oyo",
    "oyo state",
    "plateau",
    "plateau state",
    "rivers",
    "rivers state",
    "sokoto",
    "sokoto state",
    "taraba",
    "taraba state",
    "yobe",
    "yobe state",
    "zamfara",
    "zamfara state",
    "fct",
    "federal capital territory",
    "abuja fct",

    // State abbreviations and variations
    "rivers state",
    "riverstate",
    "river state",
    "oyo nigeria",
    "lagos nigeria",
    "abuja nigeria",
    "ibadan nigeria",
    "port harcourt nigeria",
    "lagos epe",
    "lagos island",
    "lagos mainland",
    "lagos ikotun",
  ];

  // Check if any Nigerian keyword matches
  for (const keyword of nigerianKeywords) {
    if (cleaned.includes(keyword) || keyword.includes(cleaned)) {
      return "Nigeria";
    }
  }

  // If it contains "state" without a country, assume Nigeria
  if (cleaned.includes("state") && !cleaned.includes("united")) {
    return "Nigeria";
  }

  // Handle university names, job titles, and other non-location entries
  const nonLocationKeywords = [
    "university",
    "college",
    "school",
    "polytechnic",
    "institute",
    "founder",
    "ceo",
    "manager",
    "developer",
    "designer",
    "creator",
    "ambassador",
    "moderator",
    "lead",
    "analyst",
    "director",
    "officer",
    "student",
    "graduate",
    "undergraduate",
    "corper",
    "nysc",
    "ltd",
    "limited",
    "inc",
    "company",
    "corp",
    "enterprise",
    "academy",
    "tech",
    "technology",
    "web3",
    "blockchain",
    "protocol",
  ];

  const hasNonLocationKeyword = nonLocationKeywords.some((keyword) =>
    cleaned.includes(keyword)
  );

  if (hasNonLocationKeyword) {
    return "Nigeria"; // Default for Nigerian event when non-location detected
  }

  // Common country normalizations for remaining entries
  const countryMappings: { [key: string]: string } = {
    "united states": "United States",
    usa: "United States",
    us: "United States",
    uk: "United Kingdom",
    "united kingdom": "United Kingdom",
    uae: "United Arab Emirates",
    "south africa": "South Africa",
    ghana: "Ghana",
    kenya: "Kenya",
    egypt: "Egypt",
    morocco: "Morocco",
    tunisia: "Tunisia",
    algeria: "Algeria",
    ethiopia: "Ethiopia",
    uganda: "Uganda",
    tanzania: "Tanzania",
    rwanda: "Rwanda",
    senegal: "Senegal",
    "ivory coast": "Ivory Coast",
    cameroon: "Cameroon",
    zimbabwe: "Zimbabwe",
    zambia: "Zambia",
    botswana: "Botswana",
    canada: "Canada",
    france: "France",
    germany: "Germany",
    netherlands: "Netherlands",
    spain: "Spain",
    italy: "Italy",
    portugal: "Portugal",
    india: "India",
    china: "China",
    japan: "Japan",
    australia: "Australia",
    brazil: "Brazil",
    mexico: "Mexico",
    argentina: "Argentina",
    poland: "Poland",
    turkey: "Turkey",
    türkiye: "Turkey",
  };

  // Return normalized country name or default to Nigeria for unrecognized entries
  return countryMappings[cleaned] || "Nigeria";
}

// Function to parse CSV data from the guest list
function parseGuestCSV(csvContent: string): GuestRegistration[] {
  const lines = csvContent.trim().split("\n");
  if (lines.length <= 1) return [];

  const headers = parseCSVLine(lines[0]);
  const registrations: GuestRegistration[] = [];

  // Map CSV column indices
  const getColumnIndex = (possibleNames: string[]) => {
    for (const name of possibleNames) {
      const index = headers.findIndex(
        (header) => header.toLowerCase().trim() === name.toLowerCase()
      );
      if (index !== -1) return index;
    }
    // Fallback to partial matching
    for (const name of possibleNames) {
      const index = headers.findIndex((header) =>
        header.toLowerCase().includes(name.toLowerCase())
      );
      if (index !== -1) return index;
    }
    return -1;
  };

  const indices = {
    id: getColumnIndex(["api_id"]),
    name: getColumnIndex(["name"]),
    firstName: getColumnIndex(["first_name"]),
    lastName: getColumnIndex(["last_name"]),
    email: getColumnIndex(["email"]),
    phone: getColumnIndex(["phone_number"]),
    timestamp: getColumnIndex(["created_at"]),
    approvalStatus: getColumnIndex(["approval_status"]),
    checkedIn: getColumnIndex(["checked_in_at"]),
    ticketType: getColumnIndex(["ticket_name"]),
    gender: getColumnIndex(["gender"]),
    experience: getColumnIndex([
      "what is your current experience level in web3?",
    ]),
    profession: getColumnIndex([
      "which of the following best describes you? select all that applies",
    ]),
    company: getColumnIndex([
      "which project or company are you representing? (if any)?",
    ]),
    role: getColumnIndex(["what is your role at the company?"]),
    school: getColumnIndex([
      "if you're a student, what's the name of your school?",
    ]),
    location: getColumnIndex([
      "city & country of residence (e.g abuja, nigeria)",
    ]),
    transportation: getColumnIndex([
      "transportation might be provided (within lagos). where will you be coming from that day?",
    ]),
    dietary: getColumnIndex([
      "we will be providing lunch. do you have any dietary restrictions or special needs we should be aware of?",
    ]),
    source: getColumnIndex(["how did you hear about this event?"]),
    photoConsent: getColumnIndex([
      "i consent to photos/videos being taken during the event for promotional use",
    ]),
    emailConsent: getColumnIndex([
      "do you consent to receive email updates and event information from blockfest africa?",
    ]),
  };

  for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue;

    try {
      const fields = parseCSVLine(lines[i]);

      // Map approval_status to our expected status values
      const approvalStatus = fields[indices.approvalStatus] || "";
      let status: "confirmed" | "pending" | "cancelled";

      switch (approvalStatus.toLowerCase().trim()) {
        case "approved":
          status = "confirmed";
          break;
        case "pending_approval":
          status = "pending";
          break;
        case "declined":
          status = "cancelled";
          break;
        default:
          status = "pending"; // Default for any unknown status
      }

      // Extract location (City & Country) with normalization
      const locationField = fields[indices.location] || "";
      const locationParts = locationField.split(",").map((p) => p.trim());
      const city = locationParts.length > 0 ? locationParts[0] : "";
      const rawCountry =
        locationParts.length > 1 ? locationParts[locationParts.length - 1] : "";
      const country = normalizeCountry(rawCountry);

      // Parse profession from "describes you" field with better logic
      const professionField = fields[indices.profession] || "";
      let profession = "Other";
      const professionLower = professionField.toLowerCase();

      if (professionLower.includes("developer")) profession = "Developer";
      else if (professionLower.includes("student")) profession = "Student";
      else if (professionLower.includes("creator")) profession = "Creator";
      else if (professionLower.includes("researcher"))
        profession = "Researcher";
      else if (
        professionLower.includes("founder") ||
        professionLower.includes("entrepreneur")
      )
        profession = "Founder";
      else if (professionLower.includes("designer")) profession = "Designer";
      else if (
        professionLower.includes("bd/sales") ||
        professionLower.includes("business")
      )
        profession = "Business Development";
      else if (professionLower.includes("marketing")) profession = "Marketing";

      // Parse experience level more accurately
      const experienceField = fields[indices.experience] || "";
      const experienceLevel = parseExperienceLevel(experienceField);

      // Clean up source field
      const sourceField = fields[indices.source] || "";
      let source = "Unknown";
      const sourceLower = sourceField.toLowerCase();

      if (sourceLower.includes("friend") || sourceLower.includes("referral"))
        source = "Friend/Referral";
      else if (sourceLower.includes("x") || sourceLower.includes("twitter"))
        source = "X (Twitter)";
      else if (sourceLower.includes("linkedin")) source = "LinkedIn";
      else if (sourceLower.includes("instagram")) source = "Instagram";
      else if (sourceLower.includes("telegram")) source = "Telegram";
      else if (sourceLower.includes("other")) source = "Other";
      else if (sourceField.trim()) source = sourceField.trim();

      const registration: GuestRegistration = {
        id: fields[indices.id] || `guest-${i}`,
        timestamp: fields[indices.timestamp] || new Date().toISOString(),
        email: fields[indices.email] || "",
        firstName: fields[indices.firstName] || "",
        lastName: fields[indices.lastName] || "",
        country: country || "Nigeria", // Default to Nigeria for Nigerian event
        city: city || "",
        profession,
        company: fields[indices.company] || "",
        experience: experienceLevel,
        interests: professionField || "",
        source,
        status,
      };

      registrations.push(registration);
    } catch (error) {
      console.error(`Error parsing line ${i}:`, error);
      continue;
    }
  }

  console.log(`Parsed ${registrations.length} registrations from CSV`);
  return registrations;
}

// Function to process CSV data or database results into dashboard stats
function calculateDashboardStats(registrations: GuestRegistration[]) {
  const now = new Date().toISOString();

  // Ensure we have valid data
  if (!registrations || registrations.length === 0) {
    return {
      totalGuests: 0,
      confirmedGuests: 0,
      pendingGuests: 0,
      cancelledGuests: 0,
      countriesRepresented: 0,
      citiesRepresented: 0,
      averageExperience: 0,
      topInterests: [],
      registrationTrend: [],
      locationBreakdown: [],
      recentRegistrations: [],
      lastUpdated: now,
    };
  }

  // Basic counts
  const totalGuests = registrations.length;
  const confirmedGuests = registrations.filter(
    (r) => r.status === "confirmed"
  ).length;
  const pendingGuests = registrations.filter(
    (r) => r.status === "pending"
  ).length;
  const cancelledGuests = registrations.filter(
    (r) => r.status === "cancelled"
  ).length;

  // Geographic analysis - countries are already normalized during parsing
  const validCountries = registrations
    .map((r) => r.country)
    .filter(
      (country) => country && country.trim() !== "" && country !== "Unknown"
    );
  const countryCount = new Set(validCountries).size;

  const validCities = registrations
    .filter(
      (r) =>
        r.city &&
        r.city.trim() !== "" &&
        r.city !== "Unknown" &&
        r.country &&
        r.country.trim() !== "" &&
        r.country !== "Unknown"
    )
    .map((r) => `${r.city.trim()}, ${r.country.trim()}`);
  const cityCount = new Set(validCities).size;

  // Experience level analysis - now using categorical data
  const experienceCounts: { [key: string]: number } = {};
  registrations.forEach((reg) => {
    if (reg.experience && reg.experience !== "Unknown") {
      experienceCounts[reg.experience] =
        (experienceCounts[reg.experience] || 0) + 1;
    }
  });

  // Create experience breakdown with percentages
  const experienceBreakdown = Object.entries(experienceCounts)
    .map(([level, count]) => ({
      level,
      count,
      percentage: totalGuests > 0 ? (count / totalGuests) * 100 : 0,
    }))
    .sort((a, b) => b.count - a.count);

  // Get the most common experience level
  const topExperienceLevel =
    experienceBreakdown.length > 0 ? experienceBreakdown[0].level : "Unknown";

  // Calculate a numeric score for average (Newcomer=1, Intermediate=2, Advanced=3, Web2=2.5)
  const experienceScores: number[] = registrations
    .map((r) => {
      const exp = r.experience;
      if (exp === "Newcomer") return 1;
      else if (exp === "Intermediate") return 2;
      else if (exp === "Web2 Transitioning") return 2.5;
      else if (exp === "Advanced") return 3;
      else return 0;
    })
    .filter((score) => score > 0);

  const averageExperience =
    experienceScores.length > 0
      ? experienceScores.reduce((sum, score) => sum + score, 0) /
        experienceScores.length
      : 0;

  // Interest/Profession analysis - based on the profession categorization
  const professionCounts: { [key: string]: number } = {};
  registrations.forEach((reg) => {
    if (
      reg.profession &&
      reg.profession !== "Other" &&
      reg.profession !== "Unknown"
    ) {
      professionCounts[reg.profession] =
        (professionCounts[reg.profession] || 0) + 1;
    }
  });

  const topInterests = Object.entries(professionCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10)
    .map(([interest, count]) => ({ interest, count }));

  // Registration trends (weekly) - handle invalid dates
  const registrationsByWeek: { [key: string]: number } = {};
  registrations.forEach((reg) => {
    try {
      const date = new Date(reg.timestamp);
      if (isNaN(date.getTime())) {
        // Use current date if timestamp is invalid
        const fallbackDate = new Date();
        const weekStart = new Date(
          fallbackDate.setDate(fallbackDate.getDate() - fallbackDate.getDay())
        );
        const weekKey = weekStart.toISOString().split("T")[0];
        registrationsByWeek[weekKey] = (registrationsByWeek[weekKey] || 0) + 1;
      } else {
        const weekStart = new Date(
          date.setDate(date.getDate() - date.getDay())
        );
        const weekKey = weekStart.toISOString().split("T")[0];
        registrationsByWeek[weekKey] = (registrationsByWeek[weekKey] || 0) + 1;
      }
    } catch {
      console.warn(
        "Invalid timestamp for registration:",
        reg.id,
        reg.timestamp
      );
    }
  });

  const registrationTrend = Object.entries(registrationsByWeek)
    .sort(([a], [b]) => a.localeCompare(b))
    .slice(-8) // Last 8 weeks
    .map(([date, count]) => ({ date, count }));

  // Location breakdown - countries are already normalized during parsing
  const locationCounts: { [key: string]: number } = {};
  registrations.forEach((reg) => {
    const country =
      reg.country && reg.country.trim() !== "" && reg.country !== "Unknown"
        ? reg.country.trim()
        : "Unknown";
    locationCounts[country] = (locationCounts[country] || 0) + 1;
  });

  const locationBreakdown = Object.entries(locationCounts)
    .sort(([, a], [, b]) => b - a)
    .map(([country, count]) => ({
      country,
      count,
      percentage: totalGuests > 0 ? (count / totalGuests) * 100 : 0,
    }));

  return {
    totalGuests,
    confirmedGuests,
    pendingGuests,
    cancelledGuests,
    countriesRepresented: countryCount,
    citiesRepresented: cityCount,
    averageExperience: isNaN(averageExperience)
      ? 0
      : Math.round(averageExperience * 10) / 10,
    experienceBreakdown,
    topExperienceLevel,
    topInterests,
    registrationTrend,
    locationBreakdown,
    recentRegistrations: registrations
      .filter((r) => r.status === "confirmed")
      .sort((a, b) => {
        const dateA = new Date(a.timestamp);
        const dateB = new Date(b.timestamp);
        if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) return 0;
        return dateB.getTime() - dateA.getTime();
      })
      .slice(0, 10),
    lastUpdated: now,
  };
}

// Function to load guest data from CSV file
async function loadGuestData(): Promise<GuestRegistration[]> {
  try {
    // Look for CSV file in the components/insights directory
    const csvPath = path.join(
      process.cwd(),
      "components",
      "insights",
      "guest-list.csv"
    );

    // Check if file exists
    if (!fs.existsSync(csvPath)) {
      console.warn("CSV file not found at:", csvPath);
      return [];
    }

    // Read and parse CSV file
    const csvContent = fs.readFileSync(csvPath, "utf8");
    console.log(`CSV file size: ${csvContent.length} characters`);
    console.log(`First 200 characters: ${csvContent.substring(0, 200)}`);

    const registrations = parseGuestCSV(csvContent);

    console.log(`Loaded ${registrations.length} registrations from CSV`);
    if (registrations.length > 0) {
      console.log(`First registration:`, registrations[0]);
    }
    return registrations;
  } catch (error) {
    console.error("Error loading guest data:", error);
    return [];
  }
}

export async function GET() {
  try {
    // Load the guest registration data
    const guestData = await loadGuestData();

    // Calculate dashboard statistics
    const stats = calculateDashboardStats(guestData);

    return NextResponse.json(stats, {
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
    });
  } catch (error) {
    console.error("Dashboard API error:", error);

    return NextResponse.json(
      {
        error: "Failed to load dashboard data",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// Optional: POST endpoint for manual data refresh/upload
export async function POST(request: NextRequest) {
  try {
    // This could be used to trigger a data refresh or upload new CSV data
    const body = await request.json();

    if (body.action === "refresh") {
      // Trigger data refresh
      const guestData = await loadGuestData();
      const stats = calculateDashboardStats(guestData);

      return NextResponse.json({
        success: true,
        message: "Data refreshed successfully",
        stats,
      });
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (error) {
    console.error("Dashboard POST API error:", error);

    return NextResponse.json(
      {
        error: "Failed to process request",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
