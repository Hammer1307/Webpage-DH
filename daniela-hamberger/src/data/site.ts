// Zentrale Datenquelle für die gesamte Website
// Diese Datei enthält die strukturellen Informationen — Service-Namen, Preise, Daten —
// die als Single Source of Truth dienen.

export const SITE = {
  name: 'Daniela Britta Hamberger',
  brand: 'Fokus Schöner Leben',
  tagline: 'Innere Ordnung. Neue Klarheit. Freude am Leben.',
  description:
    'Mentorin für innere Stabilität, bewusste Entwicklung und gelingendes Miteinander. 1:1 Begleitung, Workshops für Teams und Publikationen unter dem Leitgedanken Fokus Schöner Leben.',
  url: 'https://danielahamberger.de',
  locale: 'de-DE',
  language: 'de',
  region: 'Idstein, Rhein-Main, Deutschland',
} as const;

export const CONTACT = {
  email: 'info@danielahamberger.de',
  emailLong: 'info@danielabrittahamberger.de',
  street: 'Schwalbacherstraße 30A',
  postalCode: '65510',
  city: 'Idstein',
  region: 'Hessen',
  country: 'Deutschland',
  countryCode: 'DE',
  responseTime: '1–2 Werktagen',
} as const;

export const SOCIAL = {
  instagram: 'https://www.instagram.com',
  linkedin: 'https://www.linkedin.com/in/danielabrittahamberger',
} as const;

export const NAV: { label: string; href: string }[] = [
  { label: 'Über mich', href: '/ueber-mich' },
  { label: '1:1 Begleitung', href: '/1-zu-1-begleitung' },
  { label: 'Teams & Workshops', href: '/teams-workshops' },
  { label: 'Publikationen', href: '/publikationen-materialien' },
  { label: 'Vision', href: '/vision-stiftung' },
  { label: 'Impulse', href: '/fokus-impulse' },
  { label: 'Kontakt', href: '/kontakt' },
];

export const FOOTER_NAV = {
  angebot: [
    { label: '1:1 Begleitung', href: '/1-zu-1-begleitung' },
    { label: 'KlarheitsReset', href: '/klarheitsreset' },
    { label: 'Teams & Workshops', href: '/teams-workshops' },
    { label: 'TeamBalance', href: '/teambalance' },
  ],
  wissen: [
    { label: 'Über mich', href: '/ueber-mich' },
    { label: 'Publikationen', href: '/publikationen-materialien' },
    { label: 'Vision & Stiftung', href: '/vision-stiftung' },
    { label: 'Stimmen', href: '/stimmen' },
    { label: 'Fokus Impulse', href: '/fokus-impulse' },
  ],
  rechtliches: [
    { label: 'Kontakt', href: '/kontakt' },
    { label: 'Impressum', href: '/impressum' },
    { label: 'Datenschutz', href: '/datenschutz' },
  ],
};

// 1:1 Begleitformate
export const COACHING_FORMATS = [
  {
    id: 'orientierung',
    name: 'Orientierungsgespräch',
    subtitle: 'Kostenfrei · 15–30 Min · online oder telefonisch',
    description:
      'Ein unverbindliches Erstgespräch, in dem wir gemeinsam schauen, wo du stehst und welches Format dich am besten unterstützt.',
    price: 'kostenfrei',
    duration: '15–30 Min',
    cta: 'Gespräch buchen',
    href: '/kontakt',
    featured: false,
  },
  {
    id: 'einzel',
    name: 'Einzelsitzung',
    subtitle: 'Eine intensive 1:1 Stunde für dein konkretes Anliegen',
    description:
      'Verbindet positive Psychologie, Mentaltraining, bioenergetische Zugänge, Hypnotherapie und systemische Arbeit – passend zu deinem Thema.',
    price: '250–300 €',
    duration: '60 Min',
    cta: 'Einzelsitzung anfragen',
    href: '/kontakt',
    featured: false,
  },
  {
    id: 'starter',
    name: 'Coaching-Starterpaket',
    subtitle: 'Drei Sitzungen für einen nachhaltigen Einstieg',
    description:
      'Effektiver und günstiger als Einzelsitzungen. Ideal, wenn du Veränderung wirklich verankern möchtest. Vorzugsweise im Wochenrhythmus.',
    price: '600 € gesamt',
    duration: '3 × 60 Min',
    cta: 'Starterpaket anfragen',
    href: '/kontakt',
    featured: true,
  },
  {
    id: 'klarheitsreset',
    name: 'KlarheitsReset',
    subtitle: 'Intensive Einzelsitzung für ein konkretes Thema',
    description:
      'Wenn etwas dringend geklärt werden möchte: Wir sortieren, vertiefen und öffnen Raum für eine neue Perspektive — alles in einer Session.',
    price: '490 €',
    duration: '2,5–3 Std.',
    cta: 'KlarheitsReset buchen',
    href: '/klarheitsreset',
    featured: false,
  },
  {
    id: 'intensiv',
    name: 'Individual-Intensiv-Paket',
    subtitle: 'Tiefe Begleitung über mehrere Tage',
    description:
      'Das umfassendste Format: Online-Sessions plus 2–3 Tage Vor-Ort-Arbeit. Systemische Aufstellung, bioenergetische und hypnotherapeutische Ansätze, Arbeit mit dem inneren Kind, Mentaltraining und Achtsamkeit.',
    price: '1.798 € zzgl. MwSt.',
    duration: '2–3 Tage',
    cta: 'Intensivpaket anfragen',
    href: '/kontakt',
    featured: false,
  },
] as const;

// Team-Formate
export const TEAM_FORMATS = [
  {
    id: 'impuls',
    name: 'Impulsvortrag »Miteinander wirkt«',
    subtitle: 'Kompakter Einstieg',
    description:
      'Ein 60-minütiger Impulsvortrag zu Wertschätzung, Kommunikation und innerer Stabilität im Team. Ideal für Teamtage, pädagogische Einrichtungen und Gesundheitstage.',
    price: 'ab 350–550 € zzgl. MwSt.',
    duration: '60 Min',
    cta: 'Impulsvortrag anfragen',
    href: '/kontakt',
    featured: false,
  },
  {
    id: 'teambalance',
    name: 'TeamBalance Workshop',
    subtitle: 'Halbtags · Reflexion und Wertschätzung',
    description:
      'Teamdynamiken bewusst wahrnehmen, Kommunikation reflektieren, konkrete Impulse für ein wertschätzenderes Miteinander entwickeln. Geeignet für pädagogische Teams, soziale Einrichtungen, Praxisteams und Projektteams.',
    price: '550–750 € zzgl. MwSt.',
    duration: '3–3,5 Std.',
    cta: 'TeamBalance anfragen',
    href: '/teambalance',
    featured: true,
  },
  {
    id: 'teamklarheit',
    name: 'TeamKlarheit Intensiv',
    subtitle: 'Ganztag · Rollen, Kommunikation, Ausrichtung',
    description:
      'Ein ganzer Tag, um tiefer in Teamdynamiken einzusteigen. Enthalten: Vorgespräch, individuelle Konzeption, Durchführung und Nachbereitung. Geschaffen für Teams, die nachhaltig etwas bewegen wollen.',
    price: '850–1.100 € zzgl. MwSt.',
    duration: '6–7 Std.',
    cta: 'TeamKlarheit anfragen',
    href: '/kontakt',
    featured: false,
  },
  {
    id: 'teamstarter',
    name: 'Team-Starterpaket',
    subtitle: 'Drei Sitzungen für nachhaltigen Einstieg',
    description:
      'Drei Coaching-Einheiten im Wochenrhythmus. Effektiver und günstiger als Einzelsitzungen. Ideal, wenn ihr eine Veränderung wirklich verankern wollt.',
    price: '600 € gesamt',
    duration: '3 Sitzungen',
    cta: 'Starterpaket anfragen',
    href: '/kontakt',
    featured: false,
  },
  {
    id: 'teamreset',
    name: 'TeamReset',
    subtitle: '6–8 Wochen Begleitprogramm',
    description:
      'Für neu zu bildende oder bestehende Teams: ein positives Reset für wertschätzenderes, klareres und harmonischeres Miteinander. Online-Sessions, Vor-Ort-Begleitung und Folgegespräche zur Justierung.',
    price: '1.200 € zzgl. MwSt.',
    duration: '6–8 Wochen',
    cta: 'TeamReset anfragen',
    href: '/kontakt',
    featured: false,
  },
] as const;

// Publikationen
export const PUBLICATIONS = [
  {
    id: 'vermaechtnis',
    type: 'Buchprojekt',
    name: 'Das Vermächtnis des Herzens',
    subtitle: 'Eine mythologische Reise zu innerer Weisheit',
    audience: 'Ältere Jugendliche und Erwachsene',
    status: 'erscheint in Kürze',
    description:
      'Eine Geschichte aus der keltischen Mythologie: zwei ungleiche Wesen — eine stolze Drachin und ein listiger Fuchs — gehen gemeinsam einen Weg, auf dem Missverständnisse zu Verständnis werden und Einsamkeit sich in Gemeinschaft verwandelt. Ein Buch über Mut, Verantwortung und die leise Kraft, über die eigenen Grenzen hinauszuwachsen.',
  },
  {
    id: 'zurueck-zu-dir',
    type: 'Selbstcoaching-Buch',
    name: 'Zurück zu dir',
    subtitle: 'Selbstcoaching-Buch mit integriertem Workbook',
    audience: 'Erwachsene in Veränderungsphasen',
    status: 'erscheint in Kürze',
    description:
      'Ein Begleiter für alle, die sich selbst besser verstehen und bewusster durch Übergangsphasen gehen möchten. Reflexionsfragen, Schreibimpulse, Übungen zur Selbstwahrnehmung und alltagstaugliche Impulse für mehr Klarheit, Selbstwert, Abgrenzung und Lebensfreude — ergänzt durch ein Workbook zum aktiven Mitarbeiten.',
  },
  {
    id: 'coaching-karten',
    type: 'Karten-Set',
    name: 'Coaching- & Impulskarten',
    subtitle: 'Für Einzelarbeit, Gruppen und Workshops',
    audience: 'Einzelpersonen, Coaches, Teams',
    status: 'in Planung',
    description:
      'Liebevoll gestaltete Karten mit Fragen, Gedankenanstößen und kleinen Übungen. Themen: innere Ordnung, Klarheit, Selbstwahrnehmung, Bedürfnisse, Grenzen, Wertschätzung, Empathie, Lebensfreude, Mut zur Veränderung und Naturverbundenheit.',
  },
] as const;

// Methoden / Was Daniela mitbringt
export const METHODS = [
  {
    name: 'Positive Psychologie',
    description:
      'Impulse aus der Glücksforschung — was Menschen wirklich stärkt, statt nur Defizite zu reparieren.',
  },
  {
    name: 'Achtsamkeit & Mentaltraining',
    description:
      'Übungen, die helfen, den eigenen Geist wieder zu beruhigen und bewusst zu lenken.',
  },
  {
    name: 'Bioenergetische Zugänge',
    description:
      'Arbeit mit der Verbindung von Körper und Gefühl — dort, wo der Verstand allein nicht hinreicht.',
  },
  {
    name: 'Hypnose & Hypnotherapie',
    description:
      'Sanfte, hypnotherapeutisch geprägte Ansätze, um tiefere Schichten zu erreichen.',
  },
  {
    name: 'Aufstellungsarbeit',
    description:
      'Systemische Perspektiven, die unsichtbare Dynamiken sichtbar machen.',
  },
  {
    name: 'Symbol- & Bildarbeit',
    description:
      'Bild- und symbolgestützte Übungen für innere Klärung jenseits der Worte.',
  },
  {
    name: 'Arbeit mit inneren Anteilen',
    description:
      'Begegnung mit dem inneren Kind und anderen Anteilen — wertschätzend und ohne Druck.',
  },
] as const;

// Themen / Tags für Impulse
export const TOPICS = [
  'Innere Ordnung',
  'Klarheit & Lebensfreude',
  'Achtsamkeit & Stressresilienz',
  'Wertschätzung & Empathie',
  'Gelingendes Miteinander',
  'Natur & Bewusstsein',
  'Bücher & Schreibprozesse',
] as const;
