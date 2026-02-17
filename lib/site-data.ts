export type Locale = "de" | "en";

export type TourDate = {
  id: string;
  city: string;
  venue: string;
  isoDate: string;
  displayDate: { de: string; en: string };
  ticketUrl: string;
  soldOut: boolean;
};

export const siteBaseUrl = "https://jerryvsan-showcase.vercel.app";

export const legalAddress = {
  company: "House of Hoff - Jerry Vsan Entertainment",
  type: "Einzelunternehmen",
  street: "Colmantstr. 22",
  zipCity: "53115 Bonn",
  email: "haha@hahacomedy.de",
  phone: "0177 / 8354707"
};

export const tourDates: TourDate[] = [
  {
    id: "berlin-1",
    city: "Berlin",
    venue: "Downstairs Comedyclub",
    isoDate: "2026-11-08T20:00:00+01:00",
    displayDate: { de: "8. November 2026", en: "November 8, 2026" },
    ticketUrl: "https://downstairscomedy.club/",
    soldOut: true
  },
  {
    id: "berlin-2",
    city: "Berlin",
    venue: "Downstairs Comedyclub",
    isoDate: "2026-11-10T20:00:00+01:00",
    displayDate: { de: "10. November 2026", en: "November 10, 2026" },
    ticketUrl: "https://downstairscomedy.club/",
    soldOut: true
  },
  {
    id: "hamburg-1",
    city: "Hamburg",
    venue: "Reeperbahn ComedyClub",
    isoDate: "2026-11-15T20:00:00+01:00",
    displayDate: { de: "15. November 2026", en: "November 15, 2026" },
    ticketUrl: "https://reeperbahncomedyclub.de/",
    soldOut: true
  },
  {
    id: "hamburg-2",
    city: "Hamburg",
    venue: "Reeperbahn ComedyClub",
    isoDate: "2026-11-16T20:00:00+01:00",
    displayDate: { de: "16. November 2026", en: "November 16, 2026" },
    ticketUrl: "https://reeperbahncomedyclub.de/",
    soldOut: true
  },
  {
    id: "koeln-1",
    city: "Köln",
    venue: "Atelier Theater",
    isoDate: "2026-11-17T20:00:00+01:00",
    displayDate: { de: "17. November 2026", en: "November 17, 2026" },
    ticketUrl: "https://www.ateliertheater.de/",
    soldOut: true
  },
  {
    id: "koeln-2",
    city: "Köln",
    venue: "Atelier Theater",
    isoDate: "2026-11-18T20:00:00+01:00",
    displayDate: { de: "18. November 2026", en: "November 18, 2026" },
    ticketUrl: "https://www.ateliertheater.de/",
    soldOut: true
  },
  {
    id: "frankfurt-1",
    city: "Frankfurt am Main",
    venue: "Comedy Club Frankfurt",
    isoDate: "2026-11-25T20:00:00+01:00",
    displayDate: { de: "25. November 2026", en: "November 25, 2026" },
    ticketUrl: "https://www.comedyclubfrankfurt.de/",
    soldOut: true
  },
  {
    id: "frankfurt-2",
    city: "Frankfurt am Main",
    venue: "Comedy Club Frankfurt",
    isoDate: "2026-11-26T20:00:00+01:00",
    displayDate: { de: "26. November 2026", en: "November 26, 2026" },
    ticketUrl: "https://www.comedyclubfrankfurt.de/",
    soldOut: true
  },
  {
    id: "muenchen-1",
    city: "München",
    venue: "Heppel & Ettlich",
    isoDate: "2026-11-27T20:00:00+01:00",
    displayDate: { de: "27. November 2026", en: "November 27, 2026" },
    ticketUrl: "https://heppel-ettlich.de/programm/27_11_26_jerry_vsan_try_out_tour_2026",
    soldOut: true
  },
  {
    id: "muenchen-2",
    city: "München",
    venue: "Heppel & Ettlich",
    isoDate: "2026-11-28T20:00:00+01:00",
    displayDate: { de: "28. November 2026", en: "November 28, 2026" },
    ticketUrl: "https://heppel-ettlich.de/programm/28_11_26_jerry_vsan_try_out_tour_2026",
    soldOut: true
  }
];

export type SiteCopy = {
  lang: Locale;
  title: string;
  description: string;
  keyword: string;
  nav: {
    about: string;
    tour: string;
    features: string;
    media: string;
    press: string;
    contact: string;
    langSwitch: string;
  };
  hero: {
    kicker: string;
    headline: string;
    subline: string;
    ctas: { tickets: string; tour: string; watch: string };
  };
  about: {
    title: string;
    text: string;
  };
  tour: {
    title: string;
    subtitle: string;
    soldOut: string;
    cityIntro: string;
  };
  features: {
    title: string;
    intro: string;
    items: string[];
  };
  media: {
    title: string;
    subtitle: string;
  };
  press: {
    title: string;
    subtitle: string;
    quotes: { source: string; text: string }[];
  };
  contact: {
    title: string;
    text: string;
    cta: string;
  };
  legal: {
    title: string;
    footerLabel: string;
  };
  marquee: string[];
};

export const copyByLocale: Record<Locale, SiteCopy> = {
  de: {
    lang: "de",
    title: "Jerry Vsan | Comedian Köln – Try Out Tour 2026",
    description:
      "Jerry Vsan ist Comedian aus Köln mit ausverkaufter Try Out Tour 2026. Termine, Presse, Media und Booking auf einen Blick.",
    keyword: "Comedian Köln",
    nav: {
      about: "Bio",
      tour: "Tour 2026",
      features: "Lineups",
      media: "Medien",
      press: "Stimmen",
      contact: "Kontakt",
      langSwitch: "EN"
    },
    hero: {
      kicker: "Comedian Köln",
      headline: "JERRY VSAN",
      subline:
        "Newcomer des Jahres mit Kölner Kante: Straße im Kopf, High-End-Show auf der Bühne.",
      ctas: { tickets: "Tickets", tour: "Tour ansehen", watch: "Watch" }
    },
    about: {
      title: "Sound der Straße. Timing aus einer anderen Liga.",
      text:
        "Jerry Vsan kommt aus Köln, schreibt wie ein Rapper und spielt Stand-up wie ein Headliner, der seit zehn Jahren ausverkauft. Nach dem Shift von Musik zu Comedy ist aus Underground-Energie in Rekordzeit ein Bühnenprojekt mit maximalem Druck geworden: schnell, ehrlich, selbstironisch und ohne Filter für peinliche Wahrheiten."
    },
    tour: {
      title: "Try Out Tour 2026",
      subtitle: "10 Shows, 5 Städte, hoher Puls.",
      soldOut: "Sold Out",
      cityIntro: "Offizielle Booking-Spots pro Stadt"
    },
    features: {
      title: "Features & Lineups",
      intro:
        "Faktische Stationen aus dem aktuellen Umfeld: von TV-nahen Lineups bis zu Branchenformaten.",
      items: [
        "Sieger bei Rebell's Most Wanted 2025.",
        "Headliner-Slots bei NightWash in 2025/2026-Programmen.",
        "Gast bei der 1LIVE Comedy-Nacht XXL laut Pressekit.",
        "Podcast-Auftritt bei RebellComedy mit Jerry-Fokusfolge.",
        "Interview- und Presseanfragen laufen aktiv über das veröffentlichte Pressekit."
      ]
    },
    media: {
      title: "Media",
      subtitle:
        "Starker Clip aus dem Jerry-Kosmos plus alle wichtigen Plattformen in einer animierten Matrix."
    },
    press: {
      title: "Press & Stimmen",
      subtitle:
        "Paraphrasierte Branchenstimmen, inspiriert von veröffentlichten Aussagen aus Pressekit und Tourumfeld.",
      quotes: [
        {
          source: "Felix Lobrecht",
          text: "Für ihn ist Jerry einer der stabilsten neuen Namen: roh, aber handwerklich auf den Punkt."
        },
        {
          source: "Rebell Comedy",
          text: "Die Crew verortet ihn als Zukunftssignal für Stand-up mit Straße, Charakter und klarer Haltung."
        },
        {
          source: "Filiz Tasdan",
          text: "Sie hebt hervor, dass sein Timing wie angeboren wirkt und sofort Wiedererkennungswert schafft."
        }
      ]
    },
    contact: {
      title: "Booking",
      text: "Anfragen für Shows, Brand-Kollabos und Presse direkt per Mail.",
      cta: "Jetzt buchen"
    },
    legal: {
      title: "Impressum",
      footerLabel: "Impressum"
    },
    marquee: [
      "COMEDIAN KÖLN",
      "TRY OUT TOUR 2026",
      "SOLD OUT ENERGY",
      "RAW STORIES",
      "HIGH-END COMEDY SHOW"
    ]
  },
  en: {
    lang: "en",
    title: "Jerry Vsan | Comedian Cologne – Try Out Tour 2026",
    description:
      "Jerry Vsan is a Cologne-based comedian with a sold-out Try Out Tour 2026. Dates, press, media and booking in one place.",
    keyword: "Comedian Köln",
    nav: {
      about: "About",
      tour: "Tour 2026",
      features: "Lineups",
      media: "Media",
      press: "Press",
      contact: "Contact",
      langSwitch: "DE"
    },
    hero: {
      kicker: "Comedian Köln",
      headline: "JERRY VSAN",
      subline:
        "Newcomer of the year energy with Cologne attitude: street-rooted voice, high-production comedy delivery.",
      ctas: { tickets: "Tickets", tour: "View Tour", watch: "Watch" }
    },
    about: {
      title: "Street voltage. Surgical timing.",
      text:
        "Jerry Vsan is based in Cologne and writes with a rapper's instinct while performing stand-up like a polished arena act. Since shifting from music into comedy, he has built a fast-rising live identity: sharp, self-aware and unapologetically direct, with crowd control that feels chaotic and premium at the same time."
    },
    tour: {
      title: "Try Out Tour 2026",
      subtitle: "10 shows, 5 cities, zero chill.",
      soldOut: "Sold Out",
      cityIntro: "Official booking spots by city"
    },
    features: {
      title: "Features & Lineups",
      intro:
        "Factual career touchpoints from current programs and comedy ecosystem coverage.",
      items: [
        "Winner of Rebell's Most Wanted 2025.",
        "NightWash headliner slots in 2025/2026 programming.",
        "Listed as guest at 1LIVE Comedy-Nacht XXL in press material.",
        "Podcast appearance on RebellComedy with a dedicated Jerry episode.",
        "Interview and press requests are handled through the published press kit."
      ]
    },
    media: {
      title: "Media",
      subtitle:
        "One strong-performing video plus every major platform in an animated reveal grid."
    },
    press: {
      title: "Press & Quotes",
      subtitle:
        "Paraphrased industry sentiment based on published statements across press kit and tour channels.",
      quotes: [
        {
          source: "Felix Lobrecht",
          text: "He frames Jerry as one of the strongest emerging acts: raw edge with real craft behind it."
        },
        {
          source: "Rebell Comedy",
          text: "Their positioning points to Jerry as a future-facing stand-up voice with street DNA and identity."
        },
        {
          source: "Filiz Tasdan",
          text: "She emphasizes that his timing feels instinctive and instantly recognizable on stage."
        }
      ]
    },
    contact: {
      title: "Booking",
      text: "For live bookings, brand collaborations, and press requests, contact the team directly.",
      cta: "Book now"
    },
    legal: {
      title: "Legal Notice",
      footerLabel: "Legal"
    },
    marquee: [
      "COMEDIAN KÖLN",
      "TRY OUT TOUR 2026",
      "SOLD OUT ENERGY",
      "RAW STORIES",
      "HIGH-END COMEDY SHOW"
    ]
  }
};

export const socialLinks = [
  { label: "Instagram", url: "https://www.instagram.com/Jerryvsan/" },
  { label: "TikTok", url: "https://www.tiktok.com/@jerryvsan" },
  { label: "YouTube", url: "https://www.youtube.com/channel/UCS78eYkuXFeg9ai3hdfLTcA" },
  {
    label: "Spotify",
    url: "https://open.spotify.com/artist/24U2CZi9ZLpHnn3IxKCqoG"
  },
  { label: "OnlyFans", url: "https://onlyfans.com/jerryvsan" }
];

export const heroShowVideo = {
  id: "-xwzkdixG-8",
  title: {
    de: "NightWash Live - Jerry Vsan",
    en: "NightWash Live - Jerry Vsan"
  }
};

export const featuredVideos = [
  {
    id: "-xwzkdixG-8",
    title: {
      de: "NightWash Live - Alien-Porno",
      en: "NightWash Live - Alien-Porno"
    },
    youtubeUrl: "https://www.youtube.com/watch?v=-xwzkdixG-8"
  },
  {
    id: "l7pY0tMZyjk",
    title: {
      de: "Borros & Pivos (Official Music Video)",
      en: "Borros & Pivos (Official Music Video)"
    },
    youtubeUrl: "https://www.youtube.com/watch?v=l7pY0tMZyjk"
  },
  {
    id: "BcBqXo34LS0",
    title: {
      de: "Cornern mit den Jungs (Official Video)",
      en: "Cornern mit den Jungs (Official Video)"
    },
    youtubeUrl: "https://www.youtube.com/watch?v=BcBqXo34LS0"
  }
];

export const pressImages = [
  {
    src: "https://jerryvsan.com/_astro/jerry-jakob-fliedner-0006.rcth8Ozh_1sCWL8.jpg",
    alt: {
      de: "Jerry Vsan Portrait im warmen Licht",
      en: "Jerry Vsan portrait in warm stage light"
    }
  },
  {
    src: "https://jerryvsan.com/_astro/jerry-jakob-fliedner-0019.GCqbZsC3_Z2gTkni.jpg",
    alt: {
      de: "Jerry Vsan live mit Mikrofon",
      en: "Jerry Vsan performing live with microphone"
    }
  },
  {
    src: "https://jerryvsan.com/_astro/jerry-jakob-fliedner-9973.CCVl1T_H_vpDYP.jpg",
    alt: {
      de: "Jerry Vsan Abschluss-Pose auf der Bühne",
      en: "Jerry Vsan closing pose on stage"
    }
  }
];
