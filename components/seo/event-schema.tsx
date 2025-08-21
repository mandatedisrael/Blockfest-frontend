import { EventDetails } from "@/types";

interface EventSchemaProps {
  event: EventDetails;
  siteUrl: string;
}

export function EventSchema({ event, siteUrl }: EventSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.name,
    startDate: event.date,
    endDate: event.date,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: event.venue,
      address: {
        "@type": "PostalAddress",
        addressLocality: event.location,
        addressCountry: "NG",
      },
    },
    description: event.description,
    offers: {
      "@type": "Offer",
      url: siteUrl,
      price: "0",
      priceCurrency: "USD",
      availability: event.registrationOpen
        ? "https://schema.org/InStock"
        : "https://schema.org/SoldOut",
    },
    organizer: {
      "@type": "Organization",
      name: "Blockfest Africa",
      url: siteUrl,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
