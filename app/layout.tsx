import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import { Toaster } from "@/components/ui/sonner";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://blockfestafrica.com";
const siteName = "Blockfest Africa";
const siteDescription =
  "Africa's premier blockchain conference bringing together builders, founders, investors, and DeFi professionals in Africa.";
const twitterHandle =
  process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@blockfestafrica";
const instagramHandle =
  process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE || "blockfestafrica";
const linkedinPage =
  process.env.NEXT_PUBLIC_LINKEDIN_PAGE || "company/blockfestafrica";
const youtubeChannel =
  process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL || "@blockfestafrica";
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "blockchain",
    "web3",
    "cryptocurrency",
    "africa",
    "conference",
    "bitcoin",
    "ethereum",
    "defi",
    "nft",
    "smart contracts",
    "decentralized",
    "fintech",
    "innovation",
    "technology",
    "networking",
    "startup",
    "venture capital",
    "developers",
    "builders",
  ],
  authors: [
    {
      name: "Blockfest Africa",
      url: siteUrl,
    },
  ],
  creator: "Blockfest Africa",
  publisher: "Blockfest Africa",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Blockfest Africa - Premier Blockchain Conference",
      },
      {
        url: `${siteUrl}/images/og-image-square.jpg`,
        width: 1200,
        height: 1200,
        alt: "Blockfest Africa Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: twitterHandle,
    creator: twitterHandle,
    title: siteName,
    description: siteDescription,
    images: [`${siteUrl}/images/twitter-image.jpg`],
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: googleVerification
    ? {
        google: googleVerification,
      }
    : undefined,
  category: "technology",
  classification: "Business",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": siteName,
    "application-name": siteName,
    "msapplication-TileColor": "#7c3aed",
    "theme-color": "#7c3aed",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const eventStartDate =
    process.env.NEXT_PUBLIC_EVENT_START_DATE || "2025-10-11T09:00:00+01:00";
  const eventEndDate =
    process.env.NEXT_PUBLIC_EVENT_END_DATE || "2025-10-11T18:00:00+01:00";
  const eventLocation =
    process.env.NEXT_PUBLIC_EVENT_LOCATION || "Lagos, Nigeria";
  const eventVenue =
    process.env.NEXT_PUBLIC_EVENT_VENUE || "Landmark Event Center";

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteName,
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/images/logo.svg`,
        },
        sameAs: [
          `https://twitter.com/${twitterHandle.replace("@", "")}`,
          `https://linkedin.com/${linkedinPage}`,
          `https://instagram.com/${instagramHandle}`,
          `https://youtube.com/${youtubeChannel}`,
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        description: siteDescription,
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "Event",
        "@id": `${siteUrl}/#event`,
        name: "Blockfest Africa 2025",
        description:
          "Africa's premier blockchain conference bringing together the Web3 community",
        startDate: eventStartDate,
        endDate: eventEndDate,
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        location: {
          "@type": "Place",
          name: eventVenue,
          address: {
            "@type": "PostalAddress",
            addressCountry: "NG",
            addressLocality: eventLocation.split(",")[0].trim(),
          },
        },
        organizer: {
          "@id": `${siteUrl}/#organization`,
        },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        {/* Performance optimization: preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />

        {/* DNS prefetch for social media domains */}
        <link rel="dns-prefetch" href="//twitter.com" />
        <link rel="dns-prefetch" href="//linkedin.com" />
        <link rel="dns-prefetch" href="//instagram.com" />
        <link rel="dns-prefetch" href="//youtube.com" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_title: document.title,
                    page_location: window.location.href,
                  });
                `,
              }}
            />
          </>
        )}

        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#7c3aed" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className="antialiased w-full mx-auto [@media(min-width:1920px)]:max-w-[1440px]">
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
