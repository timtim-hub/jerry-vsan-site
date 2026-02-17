export type Locale = "de" | "en";

export const siteUrl = "https://jerry-vsan-site.netlify.app";

export const youtube = {
  featuredId: "-xwzkdixG-8",
  channelUrl: "https://www.youtube.com/channel/UCS78eYkuXFeg9ai3hdfLTcA"
};

export const socials = {
  instagram: "https://www.instagram.com/Jerryvsan/",
  tiktok: "https://www.tiktok.com/@jerryvsan",
  youtube: youtube.channelUrl,
  spotify: "https://open.spotify.com/artist/24U2CZi9ZLpHnn3IxKCqoG",
  onlyfans: "https://onlyfans.com/jerryvsan"
} as const;

export type TourStop = {
  city: string;
  venue: string;
  dates: { label: string; isoDate: string }[];
  ticketUrl: string;
  soldOut: boolean;
};

export const tour2026: TourStop[] = [
  {
    city: "Berlin",
    venue: "Downstairs Comedyclub",
    dates: [
      { label: "8. Nov. 2026", isoDate: "2026-11-08T19:00:00.000Z" },
      { label: "10. Nov. 2026", isoDate: "2026-11-10T19:00:00.000Z" }
    ],
    ticketUrl: "https://www.downstairscomedy.shop/",
    soldOut: true
  },
  {
    city: "Hamburg",
    venue: "Reeperbahn ComedyClub",
    dates: [
      { label: "15. Nov. 2026", isoDate: "2026-11-15T19:00:00.000Z" },
      { label: "16. Nov. 2026", isoDate: "2026-11-16T19:00:00.000Z" }
    ],
    ticketUrl: "https://www.reeperbahncomedyclub.de/",
    soldOut: true
  },
  {
    city: "Köln",
    venue: "Atelier Theater",
    dates: [
      { label: "17. Nov. 2026", isoDate: "2026-11-17T19:00:00.000Z" },
      { label: "18. Nov. 2026", isoDate: "2026-11-18T19:00:00.000Z" }
    ],
    ticketUrl: "https://www.ateliertheater.de/tickets",
    soldOut: true
  },
  {
    city: "Frankfurt",
    venue: "Comedy Club Frankfurt",
    dates: [
      { label: "25. Nov. 2026", isoDate: "2026-11-25T19:00:00.000Z" },
      { label: "26. Nov. 2026", isoDate: "2026-11-26T19:00:00.000Z" }
    ],
    ticketUrl: "https://www.comedyclubfrankfurt.de/shows",
    soldOut: true
  },
  {
    city: "München",
    venue: "Heppel & Ettlich",
    dates: [
      { label: "27. Nov. 2026", isoDate: "2026-11-27T19:00:00.000Z" },
      { label: "28. Nov. 2026", isoDate: "2026-11-28T19:00:00.000Z" }
    ],
    ticketUrl: "https://www.heppel-ettlich.de/",
    soldOut: true
  }
];

type LocaleCopy = {
  htmlLang: string;
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  nav: {
    about: string;
    tour: string;
    features: string;
    media: string;
    press: string;
    contact: string;
    languageSwitch: string;
  };
  hero: {
    kicker: string;
    headline: string[];
    intro: string;
    ctaTickets: string;
    ctaTour: string;
    ctaWatch: string;
    assetLabel: string;
  };
  about: {
    title: string;
    body: string[];
  };
  tour: {
    title: string;
    badge: string;
    intro: string;
    soldOut: string;
    tickets: string;
  };
  features: {
    title: string;
    intro: string;
    bullets: string[];
  };
  media: {
    title: string;
    intro: string;
    watchOnYouTube: string;
    gridTitle: string;
  };
  press: {
    title: string;
    intro: string;
    quotes: { who: string; text: string }[];
    note: string;
  };
  contact: {
    title: string;
    intro: string;
    ctaMail: string;
    ctaBooking: string;
  };
  footer: {
    legal: string;
    rights: string;
  };
};

export const copyByLocale: Record<Locale, LocaleCopy> = {
  de: {
    htmlLang: "de-DE",
    title: "Jerry Vsan | Comedian aus Köln – Try Out Tour 2026",
    description:
      "Jerry Vsan ist Comedian aus Köln: vom Rapper zur Stand-up-Entdeckung. Try Out Tour 2026, Clips, Lineups und Booking.",
    ogTitle: "Jerry Vsan | Comedian aus Köln",
    ogDescription:
      "Street-Energie, high-end Punchlines: Tour 2026 (ausverkauft), NightWash-Clip, Presse & Booking.",
    nav: {
      about: "Über",
      tour: "Tour",
      features: "Lineups",
      media: "Media",
      press: "Presse",
      contact: "Kontakt",
      languageSwitch: "EN"
    },
    hero: {
      kicker: "Comedian aus Köln",
      headline: ["JERRY", "VSAN"],
      intro:
        "Vom Rap zum Stand-up: Jerry bringt den Sound der Straße in eine präzise, high-end Comedy-Show. Schnell, scharf, kontrolliert unberechenbar.",
      ctaTickets: "Tickets",
      ctaTour: "Tour ansehen",
      ctaWatch: "Watch",
      assetLabel: "Pressefoto"
    },
    about: {
      title: "Köln im Rücken. Weltbühne im Blick.",
      body: [
        "Jerry Vsan steht für Stand-up mit Tempo: beobachtet hart, erzählt knapp, trifft sauber.",
        "Er kommt aus der Musik, aber auf der Bühne ist das Timing das Instrument: Druck, Pause, Punchline.",
        "Die Haltung ist Köln. Die Produktion ist groß. Und der Vibe bleibt Straße."
      ]
    },
    tour: {
      title: "Try Out Tour 2026",
      badge: "November 2026 · 5 Städte · 10 Shows",
      intro:
        "Berlin, Hamburg, Köln, Frankfurt, München. Jeder Stopp ein eigenes Kapitel, jede Show ein anderer Puls.",
      soldOut: "Ausverkauft",
      tickets: "Zum Ticketshop"
    },
    features: {
      title: "Lineups & Auftritte",
      intro:
        "Faktisch, ohne Namedropping-Overkill: Spots, bei denen er auftaucht, abliefert, wieder verschwindet.",
      bullets: [
        "NightWash: Stand-up Clip auf YouTube (NightWash club).",
        "Show- und Club-Lineups in Köln und bundesweit.",
        "Auszeichnungen/Competitions: u. a. Rebell’s Most Wanted (Gewinner-Hinweis aus Pressekit-Kontext)."
      ]
    },
    media: {
      title: "Media",
      intro:
        "Ein Clip, ein paar Frames, null Ausreden. Wenn du’s fühlst: Tickets sind (leider) weg, aber Booking ist offen.",
      watchOnYouTube: "Auf YouTube ansehen",
      gridTitle: "Pressefotos (Auswahl)"
    },
    press: {
      title: "Presse-Stimmen",
      intro:
        "Sinngemäß zusammengefasst, damit’s fair bleibt. Die Namen stehen für die Richtung.",
      quotes: [
        { who: "Felix Lobrecht", text: "Einer der stabilsten Newcomer im Moment, der Vibe sitzt." },
        { who: "Rebell Comedy", text: "Ein Kandidat für die Zukunft der deutschen Stand-up-Szene." },
        { who: "Filiz Tasdan", text: "Timing, das nicht nach Lehrbuch klingt, sondern nach Instinkt." }
      ],
      note: "Hinweis: Formulierungen sind paraphrasiert (keine 1:1 Zitate)."
    },
    contact: {
      title: "Kontakt",
      intro:
        "Booking, Presse, Kooperationen. Kurz sagen, was ihr vorhabt und wann. Der Rest ist Timing.",
      ctaMail: "Mail schreiben",
      ctaBooking: "Booking anfragen"
    },
    footer: {
      legal: "Impressum",
      rights: "Alle Rechte vorbehalten."
    }
  },
  en: {
    htmlLang: "en-US",
    title: "Jerry Vsan | Comedian from Cologne – Try Out Tour 2026",
    description:
      "Jerry Vsan is a comedian from Cologne: from rap to stand-up breakout. Try Out Tour 2026, clips, lineups and booking.",
    ogTitle: "Jerry Vsan | Comedian from Cologne",
    ogDescription:
      "Street energy, high-production punchlines: Tour 2026 (sold out), NightWash clip, press and booking.",
    nav: {
      about: "About",
      tour: "Tour",
      features: "Lineups",
      media: "Media",
      press: "Press",
      contact: "Contact",
      languageSwitch: "DE"
    },
    hero: {
      kicker: "Comedian from Cologne",
      headline: ["JERRY", "VSAN"],
      intro:
        "From rap to stand-up: Jerry brings street sound into a precise, high-production comedy show. Fast, sharp, controlled chaos.",
      ctaTickets: "Tickets",
      ctaTour: "See tour",
      ctaWatch: "Watch",
      assetLabel: "Press photo"
    },
    about: {
      title: "Cologne in the bones. Global-stage confidence.",
      body: [
        "Jerry Vsan does stand-up at speed: tight observation, lean storytelling, clean hits.",
        "He comes from music, but on stage timing is the instrument: pressure, pause, punchline.",
        "The attitude is Cologne. The production is big. The vibe stays street."
      ]
    },
    tour: {
      title: "Try Out Tour 2026",
      badge: "Nov 2026 · 5 cities · 10 shows",
      intro:
        "Berlin, Hamburg, Cologne, Frankfurt, Munich. Each stop a chapter, each show a different pulse.",
      soldOut: "Sold out",
      tickets: "Ticket shop"
    },
    features: {
      title: "Lineups & Spots",
      intro:
        "Facts only: the rooms, shows and formats where he shows up, delivers, disappears.",
      bullets: [
        "NightWash: stand-up clip on YouTube (NightWash club).",
        "Club and show lineups in Cologne and across Germany.",
        "Awards/competitions: incl. Rebell’s Most Wanted (winner note from press-kit context)."
      ]
    },
    media: {
      title: "Media",
      intro:
        "One clip, a few frames, no excuses. If you feel it: tickets are gone (sorry), but booking is open.",
      watchOnYouTube: "Watch on YouTube",
      gridTitle: "Press photos (selection)"
    },
    press: {
      title: "Press Lines",
      intro: "Paraphrased for fairness. The names signal the direction.",
      quotes: [
        { who: "Felix Lobrecht", text: "One of the most solid newcomers right now. The vibe is there." },
        { who: "Rebell Comedy", text: "A real candidate for the next wave of German stand-up." },
        { who: "Filiz Tasdan", text: "Timing that sounds like instinct, not a lesson." }
      ],
      note: "Note: wording is paraphrased (no verbatim quotes)."
    },
    contact: {
      title: "Contact",
      intro:
        "Booking, press, collaborations. Tell us what you’re planning and when. The rest is timing.",
      ctaMail: "Send email",
      ctaBooking: "Booking request"
    },
    footer: {
      legal: "Legal",
      rights: "All rights reserved."
    }
  }
};
