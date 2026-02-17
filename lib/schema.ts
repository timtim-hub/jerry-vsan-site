import { copyByLocale, siteUrl, socials, tour2026, type Locale } from "@/lib/i18n";

const localePath = (locale: Locale) => (locale === "de" ? "" : "/en");

export const getPersonSchema = (locale: Locale) => {
  const copy = copyByLocale[locale];

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jerry Vsan",
    jobTitle: locale === "de" ? "Comedian" : "Comedian",
    description: copy.description,
    url: `${siteUrl}${localePath(locale) || "/"}`,
    sameAs: [socials.instagram, socials.tiktok, socials.youtube, socials.spotify, socials.onlyfans],
    homeLocation: {
      "@type": "Place",
      name: "Köln",
      address: { "@type": "PostalAddress", addressLocality: "Köln", addressCountry: "DE" }
    }
  };
};

export const getWebsiteSchema = (locale: Locale) => {
  const copy = copyByLocale[locale];
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: copy.ogTitle,
    url: `${siteUrl}${localePath(locale) || "/"}`,
    inLanguage: copy.htmlLang
  };
};

export const getTourEventSchemas = () => {
  return tour2026.flatMap((stop) =>
    stop.dates.map((date) => ({
      "@type": "Event",
      name: `Jerry Vsan Live in ${stop.city}`,
      startDate: date.isoDate,
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: stop.venue,
        address: {
          "@type": "PostalAddress",
          addressLocality: stop.city,
          addressCountry: "DE"
        }
      },
      performer: { "@type": "Person", name: "Jerry Vsan" },
      organizer: { "@type": "Person", name: "Jerry Vsan" },
      offers: {
        "@type": "Offer",
        url: stop.ticketUrl,
        availability: stop.soldOut ? "https://schema.org/SoldOut" : "https://schema.org/InStock"
      }
    }))
  );
};

export const getTourEventGraph = () => ({
  "@context": "https://schema.org",
  "@graph": getTourEventSchemas()
});
