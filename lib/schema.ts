import { legalAddress, siteBaseUrl, tourDates, type Locale } from "@/lib/site-data";

const localePath = (locale: Locale) => (locale === "de" ? "" : "/en");

export const getPersonSchema = (locale: Locale) => {
  const inLanguage = locale === "de" ? "de-DE" : "en-US";

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jerry Vsan",
    jobTitle: locale === "de" ? "Comedian Köln" : "Comedian from Cologne",
    description:
      locale === "de"
        ? "Stand-up Comedian aus Köln mit ausverkaufter Try Out Tour 2026."
        : "Stand-up comedian from Cologne with a sold-out Try Out Tour 2026.",
    url: `${siteBaseUrl}${localePath(locale) || "/"}`,
    knowsLanguage: [inLanguage, "de-DE", "en-US"],
    homeLocation: {
      "@type": "Place",
      name: "Köln"
    },
    worksFor: {
      "@type": "Organization",
      name: legalAddress.company,
      address: {
        "@type": "PostalAddress",
        streetAddress: legalAddress.street,
        postalCode: "53115",
        addressLocality: "Bonn",
        addressCountry: "DE"
      }
    },
    sameAs: [
      "https://www.instagram.com/Jerryvsan/",
      "https://www.tiktok.com/@jerryvsan",
      "https://www.youtube.com/channel/UCS78eYkuXFeg9ai3hdfLTcA",
      "https://open.spotify.com/artist/24U2CZi9ZLpHnn3IxKCqoG",
      "https://onlyfans.com/jerryvsan"
    ]
  };
};

export const getEventSchema = () =>
  tourDates.map((event) => ({
    "@type": "Event",
    name: `Jerry Vsan Try Out Tour 2026 - ${event.city}`,
    startDate: event.isoDate,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: event.soldOut
      ? "https://schema.org/EventSoldOut"
      : "https://schema.org/EventScheduled",
    image: [`${siteBaseUrl}/og-image.svg`],
    location: {
      "@type": "Place",
      name: event.venue,
      address: {
        "@type": "PostalAddress",
        addressLocality: event.city,
        addressCountry: "DE"
      }
    },
    performer: {
      "@type": "Person",
      name: "Jerry Vsan"
    },
    offers: {
      "@type": "Offer",
      url: event.ticketUrl,
      availability: event.soldOut
        ? "https://schema.org/SoldOut"
        : "https://schema.org/InStock",
      price: "29.00",
      priceCurrency: "EUR"
    }
  }));
