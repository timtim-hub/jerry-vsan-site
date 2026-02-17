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

export type SocialLink = {
  label: string;
  url: string;
  logoUrl: string;
  background: string;
  accent: string;
  description: { de: string; en: string };
};

export const siteBaseUrl = "https://jerry-vsan-site.netlify.app";

export const legalAddress = {
  name: "Jeremi Winter",
  careOf: "c/o Impressumservice Dein-Impressum",
  street: "Stettiner Straße 41",
  zipCity: "35410 Hungen",
  packageNote: "Bitte versenden Sie keine Pakete an dieser Adresse.",
  email: "mail@jerryvsan.com",
  phone: "vorhanden"
};

export const managementContact = {
  name: "Leo Kleber",
  role: "Management & Booking",
  email: "mail@jerryvsan.com",
  responseTime: "~ 24h",
  baseCity: "Köln"
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
    ctas: { tickets: string; tour: string; watch: string; joke: string };
  };
  about: {
    title: string;
    paragraphs: string[];
    note: string;
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
    quotes: { source: string; text: string; sourceUrl?: string }[];
  };
  contact: {
    title: string;
    text: string;
    cta: string;
    quickFacts: string[];
  };
  legal: {
    title: string;
    footerLabel: string;
  };
  marquee: string[];
  quoteTape: string[];
};

export const copyByLocale: Record<Locale, SiteCopy> = {
  de: {
    lang: "de",
    title: "Jerry Vsan | Comedian aus Köln – Try Out Tour 2026",
    description:
      "Jerry Vsan ist Comedian aus Köln. Hier findest du Tourtermine, Presse-Infos, Videos und Kontakt für Booking & Medien.",
    keyword: "Comedian aus Köln",
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
      kicker: "Comedian aus Köln",
      headline: "JERRY VSAN",
      subline:
        "Vom Bordstein direkt auf die Bühnenkante: Street-Stories, silly Selbstironie und Show-Qualität auf Anschlag.",
      ctas: {
        tickets: "Tickets",
        tour: "Tour ansehen",
        watch: "Watch",
        joke: "Kostenlose Tickets*"
      }
    },
    about: {
      title: "Der Newcomer-Vibe mit echtem Live-Handwerk.",
      paragraphs: [
        "Jerry startete 2019 in der Kölner Hip-Hop-Szene. Mit dem Move Richtung Stand-up hat er seine Sprache behalten, aber das Timing geschärft.",
        "Seit Ende 2024 hat sich die Dynamik massiv beschleunigt: Sieg bei Rebell's Most Wanted, Headliner-Slots bei NightWash und Auftritte im 1LIVE-Umfeld.",
        "Die Try Out Tour 2026 war früh komplett ausverkauft. Auf der Bühne trifft rohe Alltagserfahrung auf präzise gesetzte Punchlines."
      ],
      note: "Pressetext frei redaktionell nutzbar, gekürzt oder angepasst."
    },
    tour: {
      title: "Try Out Tour 2026",
      subtitle: "10 Shows. 5 Städte. Alles dicht.",
      soldOut: "Ausverkauft",
      cityIntro: "Offizielle Ticket-Hosts pro Stadt"
    },
    features: {
      title: "Features & Lineups",
      intro:
        "Umschrieben aus veröffentlichten Infos von Website, Pressekit und Tourumfeld.",
      items: [
        "Gewinner bei Rebell's Most Wanted inklusive Preisgeld und Branchen-Spotlight.",
        "Regelmäßige Headliner-Slots in NightWash-Programmen.",
        "Gast-Auftritte im Umfeld der 1LIVE Comedy-Nacht XXL.",
        "Aktive Presse- und Medienarbeit über das veröffentlichte Kit.",
        "Klares Profil: Straßenbeobachtung, Figurenbau und hohes Reaktions-Tempo mit Publikum."
      ]
    },
    media: {
      title: "Media",
      subtitle:
        "Hero-Foto, starke Live-Ausschnitte, Pressebilder und alle relevanten Plattformen in einer Bühne."
    },
    press: {
      title: "Was die Szene sagt",
      subtitle:
        "Kurzparaphrasen auf Basis veröffentlichter Aussagen, nicht 1:1 übernommen.",
      quotes: [
        {
          source: "Felix Lobrecht",
          text: "Er beschreibt Jerry als sehr rohe, aber handwerklich sauber gebaute Live-Energie.",
          sourceUrl: "https://www.youtube.com/watch?v=FJfXOGDikiM"
        },
        {
          source: "Filiz Tasdan",
          text: "Sie betont den klaren Charakter und die Runde im Set, die sofort hängen bleibt.",
          sourceUrl: "https://www.youtube.com/watch?v=FJfXOGDikiM"
        },
        {
          source: "RebellComedy / Usus",
          text: "Das Feedback aus der Crew: unverwechselbare Figur, kantiger Inhalt, trotzdem charmant geführt.",
          sourceUrl: "https://www.youtube.com/watch?v=FEXYFjD0ruc"
        }
      ]
    },
    contact: {
      title: "Kontakt & Booking",
      text: "Anfragen von Veranstalter:innen, Redaktionen und Partner:innen direkt per Mail an das Management.",
      cta: "E-Mail schreiben",
      quickFacts: ["Antwortzeit: ~ 24h", "Base: Köln", "Ansprechpartner: Leo Kleber"]
    },
    legal: {
      title: "Impressum",
      footerLabel: "Impressum"
    },
    marquee: [
      "COMEDIAN AUS KÖLN",
      "TRY OUT TOUR 2026",
      "KOMPLETT AUSVERKAUFT",
      "STREET STORIES",
      "LIVE TIMING"
    ],
    quoteTape: [
      "Einer der stabilsten Newcomer gerade.",
      "Die Zukunft der deutschen Stand-up Szene.",
      "Timing, das man nicht lernen kann.",
      "Vom Bordstein zur Bühnenkante."
    ]
  },
  en: {
    lang: "en",
    title: "Jerry Vsan | Comedian from Cologne – Try Out Tour 2026",
    description:
      "Jerry Vsan is a comedian from Cologne. Tour dates, press material, videos, and booking contact in one place.",
    keyword: "Comedian aus Köln",
    nav: {
      about: "About",
      tour: "Tour 2026",
      features: "Lineups",
      media: "Media",
      press: "Quotes",
      contact: "Contact",
      langSwitch: "DE"
    },
    hero: {
      kicker: "Comedian from Cologne",
      headline: "JERRY VSAN",
      subline:
        "From curbside stories to center stage: raw street detail, silly self-irony, and high-production delivery.",
      ctas: {
        tickets: "Tickets",
        tour: "View Tour",
        watch: "Watch",
        joke: "Free Tickets*"
      }
    },
    about: {
      title: "Newcomer momentum, built on real stage craft.",
      paragraphs: [
        "Jerry started in Cologne's hip-hop scene around 2019. The move into stand-up kept the writing edge and sharpened the timing.",
        "Since late 2024, momentum accelerated fast: winning Rebell's Most Wanted, landing NightWash headliner slots, and entering the 1LIVE comedy context.",
        "The entire Try Out Tour 2026 sold out early. On stage, hard everyday observations meet highly controlled punchline rhythm."
      ],
      note: "Press text may be used editorially in shortened or adapted form."
    },
    tour: {
      title: "Try Out Tour 2026",
      subtitle: "10 shows. 5 cities. Fully packed.",
      soldOut: "Sold Out",
      cityIntro: "Official ticket hosts by city"
    },
    features: {
      title: "Features & Lineups",
      intro:
        "Rewritten from published website notes, press kit highlights, and currently listed show context.",
      items: [
        "Winner of Rebell's Most Wanted with prize money and strong industry visibility.",
        "Recurring headliner slots in NightWash programming.",
        "Guest presence in the 1LIVE Comedy-Nacht XXL ecosystem.",
        "Active press handling through the published media kit.",
        "Clear signature: street observation, character work, and high-speed audience control."
      ]
    },
    media: {
      title: "Media",
      subtitle:
        "Hero visual, strong live footage, press images, and every key platform in one animated stage."
    },
    press: {
      title: "What the Scene Says",
      subtitle:
        "Short paraphrases based on published statements, not copied word-for-word.",
      quotes: [
        {
          source: "Felix Lobrecht",
          text: "He frames Jerry as raw and highly technical at the same time.",
          sourceUrl: "https://www.youtube.com/watch?v=FJfXOGDikiM"
        },
        {
          source: "Filiz Tasdan",
          text: "She highlights how complete and recognizable the stage persona already feels.",
          sourceUrl: "https://www.youtube.com/watch?v=FJfXOGDikiM"
        },
        {
          source: "RebellComedy / Usus",
          text: "Crew perspective: distinct character, rough themes, but delivered with charm.",
          sourceUrl: "https://www.youtube.com/watch?v=FEXYFjD0ruc"
        }
      ]
    },
    contact: {
      title: "Contact & Booking",
      text: "For promoters, media teams, and brand partners, reach out directly via management email.",
      cta: "Send Email",
      quickFacts: ["Response time: ~ 24h", "Base: Cologne", "Contact: Leo Kleber"]
    },
    legal: {
      title: "Legal Notice",
      footerLabel: "Legal"
    },
    marquee: [
      "COMEDIAN AUS KOLN",
      "TRY OUT TOUR 2026",
      "FULLY SOLD OUT",
      "STREET STORIES",
      "LIVE TIMING"
    ],
    quoteTape: [
      "One of the strongest newcomers right now.",
      "A future signal for German stand-up.",
      "Timing you cannot fake.",
      "From curbside to spotlight."
    ]
  }
};

export const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    url: "https://www.instagram.com/Jerryvsan/",
    logoUrl: "https://cdn.simpleicons.org/instagram/ffffff",
    background:
      "linear-gradient(135deg, rgba(131,58,180,0.65) 0%, rgba(253,29,29,0.6) 45%, rgba(252,176,69,0.55) 100%)",
    accent: "#fd1d1d",
    description: {
      de: "Behind the scenes und Live-Momente.",
      en: "Behind-the-scenes and live moments."
    }
  },
  {
    label: "TikTok",
    url: "https://www.tiktok.com/@jerryvsan",
    logoUrl: "https://cdn.simpleicons.org/tiktok/ffffff",
    background:
      "linear-gradient(135deg, rgba(0,0,0,0.72) 0%, rgba(255,46,46,0.45) 50%, rgba(0,240,255,0.45) 100%)",
    accent: "#00f0ff",
    description: {
      de: "Clips, Bits und Crowd-Reactions.",
      en: "Clips, bits, and crowd reactions."
    }
  },
  {
    label: "YouTube",
    url: "https://www.youtube.com/channel/UCS78eYkuXFeg9ai3hdfLTcA",
    logoUrl: "https://cdn.simpleicons.org/youtube/ffffff",
    background: "linear-gradient(135deg, rgba(255,0,0,0.62) 0%, rgba(34,34,34,0.72) 100%)",
    accent: "#ff0000",
    description: {
      de: "Videos, Auftritte und Specials.",
      en: "Videos, performances, and specials."
    }
  },
  {
    label: "Spotify",
    url: "https://open.spotify.com/artist/24U2CZi9ZLpHnn3IxKCqoG",
    logoUrl: "https://cdn.simpleicons.org/spotify/ffffff",
    background: "linear-gradient(135deg, rgba(30,215,96,0.62) 0%, rgba(18,18,18,0.78) 100%)",
    accent: "#1db954",
    description: {
      de: "Tracks aus der frühen Phase.",
      en: "Tracks from the early era."
    }
  },
  {
    label: "OnlyFans",
    url: "https://onlyfans.com/jerryvsan",
    logoUrl: "https://cdn.simpleicons.org/onlyfans/ffffff",
    background: "linear-gradient(135deg, rgba(0,175,240,0.66) 0%, rgba(15,15,18,0.82) 100%)",
    accent: "#00aff0",
    description: {
      de: "Exklusive Inhalte und Extras.",
      en: "Exclusive content and extras."
    }
  }
];

export const glassesGifUrl = "https://jerryvsan.com/glasses-nav.gif";

export const heroImage = {
  src: "https://jerryvsan.com/_astro/jerry-vsan-hero.0kxwAMxH_Jljjv.avif",
  alt: {
    de: "Jerry Vsan Hero-Portrait",
    en: "Jerry Vsan hero portrait"
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
    src: "https://jerryvsan.com/_astro/jerry-vsan-hero.0kxwAMxH_Jljjv.avif",
    alt: {
      de: "Jerry Vsan Hero im Spotlight",
      en: "Jerry Vsan hero in spotlight"
    }
  },
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
