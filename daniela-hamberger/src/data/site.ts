// Zentrale Datenquelle — überarbeitete Webseiten-Fassung Daniela Britta Hamberger
// Inhalt 1:1 nach Briefing "Gesamtstruktur Website Daniela Britta Hamberger"

export const SITE = {
  name: 'Daniela Britta Hamberger',
  brand: 'Fokus Schöner Leben',
  tagline:
    'Mentorin mit pädagogischer Expertise für innere Stabilität, bewusste Entwicklung und gelingendes Miteinander',
  motto: 'Innere Ordnung. Neue Klarheit. Freude am Leben.',
  description:
    'Daniela Britta Hamberger — Mentorin mit pädagogischer Expertise für Bewusstsein, innere Stabilität und gelingendes Miteinander. 1:1 Begleitung für Frauen, Teams & Workshops, Publikationen unter dem thematischen Rahmen Fokus Schöner Leben. Online sowie vor Ort in Wiesbaden, Idstein und im Rhein-Main-Gebiet.',
  url: 'https://danielabrittahamberger.de',
  locale: 'de-DE',
  language: 'de',
} as const;

// Ladungsfähige Anschrift (Pflichtangabe Impressum) — bitte verifizieren / bei Bedarf anpassen
export const CONTACT = {
  email: 'info@danielabrittahamberger.de',
  emailShort: 'info@danielahamberger.de',
  // phone bewusst nicht veröffentlicht — Kontakt nur per E-Mail / Kontaktformular
  // phone: '',
  street: 'Schwalbacher Straße 30A',
  postalCode: '65510',
  city: 'Idstein',
  region: 'Hessen',
  country: 'Deutschland',
  countryCode: 'DE',
} as const;

// Veranstaltungsort für Vor-Ort-Termine, Workshops und Teamformate
export const VENUE = {
  name: 'Seminarraum Schöne Aussichten',
  street: 'Fritz-Philippi-Straße 24',
  postalCode: '65195',
  city: 'Wiesbaden',
  country: 'Deutschland',
  note: 'Termine und Formate werden ausschließlich über Daniela Britta Hamberger abgestimmt — keine externe Buchung über die Website.',
} as const;

export const SOCIAL = {
  instagram: 'https://instagram.com/danielabrittahamberger',
  instagramHandle: '@danielabrittahamberger',
  linkedin: 'https://www.linkedin.com/in/danielabrittahamberger',
} as const;

// Bild-Pfade (lokal in /public/images)
export const IMAGES = {
  logo:                    '/images/logo.png',
  heroStartseite:          '/images/hero-startseite.jpg',
  // Daniela-Portraits & echte Fotos
  danielaHeroPortrait:     '/images/daniela-hero-portrait.jpg',
  danielaPortrait:         '/images/daniela-portrait.jpg',
  danielaPortraitStehend:  '/images/daniela-portrait-stehend.jpg',
  danielaKuenstlerin:      '/images/daniela-kuenstlerin.jpg',
  danielaWieseBluse:       '/images/daniela-wiese-bluse.jpg',
  danielaAutorin:          '/images/daniela-autorin.jpg',
  daniela1zu1Hero:         '/images/daniela-1zu1-hero-feld.jpg',
  daniela1zu1Coaching:     '/images/daniela-1zu1-coaching.jpg',
  klarheitsresetFeld:      '/images/klarheitsreset-feld.jpg',
  visionLandschaft:        '/images/vision-landschaft.jpg',
  danielaTeams:            '/images/daniela-teams.jpg',
  teamsHighfive:           '/images/teams-highfive.jpg',
  danielaCoaching:         '/images/daniela-coaching.jpg',
  danielaKontakt:          '/images/daniela-kontakt.jpg',
  // Atmosphäre
  begleitungAnkommen:      '/images/begleitung-ankommen.jpg',
  begleitungNebelweg:      '/images/begleitung-nebelweg.jpg',
  begleitungMeditation:    '/images/begleitung-meditation.jpg',
  teamsErschoepft:         '/images/teams-erschoepft.jpg',
  teamsHarmonisch:         '/images/teams-harmonisch.jpg',
  teamsWorkshop:           '/images/teams-workshop.jpg',
  raumEingang:             '/images/raum-eingang.jpg',
  raumBestuhlung:          '/images/raum-bestuhlung.jpg',
  raumMeditation:          '/images/raum-meditation.jpg',
  publikationenSchreiben:  '/images/publikationen-schreiben.jpg',
  impulseLebensfreude:     '/images/impulse-lebensfreude.jpg',
  impulseAufbruch:         '/images/impulse-aufbruch.jpg',
  stimmenWertschaetzung:   '/images/stimmen-wertschaetzung.jpg',
  visionNatur:             '/images/vision-natur.jpg',
  kontaktGespraech:        '/images/kontakt-gespraech.jpg',
  freilegen:               '/images/freilegen.jpg',
  // Neue Bilder (Relaunch)
  danielaImagefoto:        '/images/daniela-imagefoto.jpg',          // Über mich — Imagefoto
  klarheitsresetInnehalten:'/images/klarheitsreset-innehalten.jpg',  // KlarheitsReset Stimmungsbild
  impulsHappiness:         '/images/impuls-happiness.jpg',           // Impuls Hoffnung & Happiness
  stimmungWohnraum:        '/images/stimmung-wohnraum.jpg',          // 1:1 Stimmungsbild 1
  stimmungSessel:          '/images/stimmung-sessel.jpg',            // 1:1 Stimmungsbild 2
  seminarraumSchoeneAussichten: '/images/seminarraum-schoene-aussichten.jpg', // 1:1 Stimmungsbild 3 (realer Raum)
} as const;

// Hauptnavigation — exakt nach Briefing
export const NAV = [
  { label: '1:1 Begleitung', href: '/1-zu-1-begleitung' },
  { label: 'Teams', href: '/teams-workshops' },
  { label: 'Publikationen', href: '/publikationen-materialien' },
  { label: 'Impulse', href: '/impulse' },
  { label: 'Über mich', href: '/ueber-mich' },
  { label: 'Kontakt', href: '/kontakt' },
] as const;

// Footer-Navigation
export const FOOTER_NAV = {
  angebot: [
    { label: '1:1 Begleitung', href: '/1-zu-1-begleitung' },
    { label: 'Fokus KlarheitsReset', href: '/klarheitsreset' },
    { label: 'Teams & Workshops', href: '/teams-workshops' },
    { label: 'TeamBalance', href: '/teambalance' },
  ],
  wissen: [
    { label: 'Über mich', href: '/ueber-mich' },
    { label: 'Publikationen', href: '/publikationen-materialien' },
    { label: 'Fokus Impulse', href: '/impulse' },
    { label: 'Vision & Stiftung', href: '/vision-stiftung' },
    { label: 'Stimmen & Erfahrungen', href: '/stimmen-erfahrungen' },
  ],
  rechtliches: [
    { label: 'Kontakt', href: '/kontakt' },
    { label: 'Wichtiger Hinweis', href: '/wichtiger-hinweis' },
    { label: 'Impressum', href: '/impressum' },
    { label: 'Datenschutz', href: '/datenschutz' },
    { label: 'Bildnachweise', href: '/bildnachweise' },
  ],
};

// Methodenliste — nur diese verwenden, keine Doppelung
export const METHODEN_LISTE = [
  'Mentaltraining',
  'Bewusstseinsarbeit',
  'Achtsamkeit',
  'Hypnose',
  'Positive Psychologie',
  'Entspannungspädagogik',
  'systemischer Blick',
  'PSYCH-K®',
  'bioenergetische Zugänge',
] as const;

// 1:1 Begleitformate — neue Preise, „Fokus Schöner Leben Intensiv" entfernt
export const COACHING_FORMATS = [
  {
    id: 'orientierung',
    name: 'Kostenfreies Orientierungsgespräch',
    duration: '15–30 Minuten · online oder telefonisch · unverbindlich',
    description:
      'Du bist nicht sicher, ob eine Begleitung gerade das Richtige für dich ist? In einem ersten Gespräch schauen wir gemeinsam, wo du stehst, was dich bewegt und welches Format zu dir passen könnte.',
    suitableFor: '',
    price: 'kostenfrei',
    cta: 'Orientierungsgespräch buchen',
    href: '/kontakt',
    featured: false,
  },
  {
    id: 'klarheitssitzung',
    name: 'KlarheitsSitzung',
    duration: '60 Minuten für dein konkretes Anliegen',
    description:
      'Die KlarheitsSitzung ist passend, wenn du ein bestimmtes Thema sortieren, eine Entscheidung klarer betrachten oder einen ersten Impuls für dich mitnehmen möchtest. Wir schauen gemeinsam hin: Was bewegt dich gerade? Was braucht Ordnung? Was darf klarer werden? Und welcher nächste Schritt fühlt sich für dich stimmig an?',
    suitableFor: 'Geeignet für: Entscheidungsfragen, innere Unruhe, emotionale Sortierung, Perspektivwechsel, erste Orientierung.',
    price: '160 €',
    cta: 'KlarheitsSitzung anfragen',
    href: '/kontakt',
    featured: false,
  },
  {
    id: 'klarheitsstart',
    name: 'KlarheitsStart',
    duration: '3 Sitzungen für innere Ordnung, Stabilität und neue Ausrichtung',
    description:
      'Der KlarheitsStart ist für dich geeignet, wenn du spürst, dass ein Thema mehr Raum braucht. In drei Sitzungen sortieren wir deine aktuelle Situation, betrachten wiederkehrende Muster, stärken deine innere Stabilität und entwickeln konkrete nächste Schritte. Dieses Format eignet sich besonders, wenn du nicht nur kurz über ein Thema sprechen, sondern wirklich beginnen möchtest, dich innerlich neu auszurichten.',
    suitableFor: 'Rhythmus: idealerweise wöchentlich · 3 × 60 Minuten',
    price: '450 €',
    cta: 'KlarheitsStart anfragen',
    href: '/kontakt',
    featured: true,
  },
  {
    id: 'klarheitsreset',
    name: 'Fokus KlarheitsReset',
    duration: 'Intensive Begleitung für Frauen in Krisen- oder Umbruchphasen',
    description:
      'Der Fokus KlarheitsReset ist für dich geeignet, wenn du gerade den Boden unter den Füßen, deinen inneren Fokus oder deine Orientierung verloren hast — beruflich, privat oder in dir selbst. In zwei vorbereitenden Online-Sitzungen schauen wir gemeinsam, wo deine wichtigsten Stellschrauben liegen. Anschließend arbeiten wir vor Ort in Idstein oder im Raum Wiesbaden intensiv mit dem, was sich bei dir zeigt — achtsam, empathisch und individuell, mit Gespräch, Körperwahrnehmung, inneren Bildern, hypnotherapeutischen Ansätzen oder Hypnose sowie energetischen Impulsen. Danach begleiten dich ein bis zwei Online-Coachings dabei, das Erlebte zu integrieren und nächste Schritte klarer zu setzen.',
    suitableFor: 'Rhythmus: 2 Online-Sitzungen · Intensivzeit vor Ort · 1–2 Online-Nachbegleitungen · Ort: Idstein / Raum Wiesbaden (Unterkunft separat, Empfehlungen möglich)',
    price: '1.999 €',
    cta: 'Mehr über den Fokus KlarheitsReset erfahren',
    href: '/klarheitsreset',
    featured: false,
  },
] as const;

// Team-Formate — neue Preise, kürzere Liste
export const TEAM_FORMATS = [
  {
    id: 'impulsvortrag',
    name: 'Impulsvortrag: Miteinander wirkt',
    label: 'Impulsvortrag',
    duration: '60–90 Minuten für Teams, Einrichtungen und Organisationen',
    description:
      'Ein Impulsvortrag eignet sich, wenn ihr ein Thema bewusst anstoßen möchtet — etwa bei Teamtagen, pädagogischen Konferenzen, Gesundheitstagen oder internen Veranstaltungen.',
    topics:
      'Mögliche Themen: Wertschätzung im Arbeitsalltag · Sprache, die verbindet · Achtsamkeit und Stressresilienz im Team · Kommunikation auf Augenhöhe · Perspektivwechsel als Schlüssel für Zusammenarbeit · Innere Stabilität im beruflichen Alltag · Menschlichkeit als Kraft im Team',
    suitableFor: '',
    price: 'ab 450 €',
    cta: 'Impulsvortrag anfragen',
    href: '/kontakt',
    featured: false,
  },
  {
    id: 'teambalance',
    name: 'TeamBalance Workshop',
    label: 'Halbtag',
    duration: '3–3,5 Stunden für Klarheit, Wertschätzung und stabile Zusammenarbeit',
    description:
      'Im TeamBalance Workshop schaut ihr gemeinsam auf euer Miteinander: Was läuft gut? Wo entstehen Reibungen? Welche Rollen, Erwartungen oder unausgesprochenen Themen wirken im Hintergrund? Was braucht ihr, damit Wertschätzung wieder spürbarer wird? Wir arbeiten mit Reflexion, Austausch, Achtsamkeitstools, Perspektivwechsel, spielerischen Elementen und konkreten Übungen für euren Alltag. Gerade spielerische und interaktive Elemente können helfen, festgefahrene Muster zu lockern. Manchmal entsteht genau dort, wo vorher Spannung war, wieder Humor, Verbindung und ein neuer gemeinsamer Blick.',
    topics: '',
    suitableFor:
      'Geeignet für: pädagogische Teams, soziale Einrichtungen, Projektteams, Praxisteams, kleinere Organisationen.',
    price: 'ab 890 €',
    cta: 'TeamBalance anfragen',
    href: '/teambalance',
    featured: true,
  },
  {
    id: 'teamreset',
    name: 'Team Reset Mentoring',
    label: 'Mehrere Wochen',
    duration: 'Für Teams, die sich neu sortieren und bewusster ausrichten möchten',
    description:
      'Das Team Reset Mentoring ist für euch, wenn euer Miteinander einen echten Neustart braucht – sei es als neu entstehendes Team, nach alten Spannungen, bei verlorengegangenem Vertrauen oder aus dem Wunsch heraus, bewusster und menschlicher zusammenzuarbeiten. Anders als ein einzelner Workshop ist das Team Reset Mentoring ein intensiver, begleiteter Prozess. Den Anfang machen zwei vorgeschaltete Gespräche: Darin schauen wir gemeinsam genau hin und definieren, an welchen Stellschrauben sich wirklich etwas verändern soll. Ich arbeite dabei mit einem systemischen Ansatz – wir betrachten also nicht einzelne Personen, sondern das Zusammenspiel im Team als Ganzes. Auf dieser Grundlage arbeitet ihr anschließend intensiv miteinander an den Themen, die zählen: Wir klären, lösen und richten neu aus – konzentriert, ehrlich und in einem geschützten Rahmen.',
    topics:
      'Möglicher Ablauf: Zwei vorgeschaltete Gespräche zur Standortbestimmung und Zielklärung (systemischer Blick auf die Stellschrauben) · intensive gemeinsame Arbeitsphase im Team · Klären und Bearbeiten der zentralen Themen · gemeinsame Ausrichtung und Verankerung für den Alltag',
    suitableFor: '',
    price: 'individuelles Angebot nach Umfang und Zielsetzung',
    cta: 'Team Reset Mentoring anfragen',
    href: '/kontakt',
    featured: false,
  },
] as const;

// Publikationen — neue Reihenfolge: Zurück zu dir zuerst, dazu Kunst
export const PUBLICATIONS = [
  {
    id: 'zurueck-zu-dir',
    label: 'Selbstcoachingbuch',
    name: 'Zurück zu dir',
    subtitle: 'Selbstcoachingbuch mit integriertem Workbook',
    description:
      'Zurück zu dir ist ein Selbstcoachingbuch für Menschen, die sich selbst besser verstehen, innere Ordnung entwickeln und bewusster durch Veränderungsphasen gehen möchten. Mit Reflexionsfragen, Schreibimpulsen und alltagstauglichen Übungen lädt es dazu ein, Gedanken zu sortieren, Bedürfnisse wahrzunehmen, Grenzen zu stärken und wieder mehr Lebensfreude aus sich selbst heraus zu entwickeln.',
    meta: 'Status: erscheint in Kürze · in Vorbereitung',
  },
  {
    id: 'vermaechtnis',
    label: 'Weisheitsgeschichte',
    name: 'Das Vermächtnis des Herzens',
    subtitle: 'Eine mythologische Reise zu innerer Weisheit · Für ältere Jugendliche und Erwachsene',
    description:
      'In einer Zeit, in der alte Geheimnisse wieder sichtbar werden, begegnen sich zwei ungleiche Wesen der keltischen Mythologie: eine stolze Drachin und ein listiger Fuchs. Aus anfänglicher Distanz entsteht eine unerwartete Reise — voller Prüfungen, Begegnungen und der gemeinsamen Verantwortung für ein geheimnisvolles Ei. Die Geschichte erzählt von Missverständnissen, die zu Verständnis werden, von Einsamkeit, die sich in Gemeinschaft verwandelt, und von dem Mut, über die eigenen Grenzen hinauszuwachsen. So entfaltet sich eine Weisheitsgeschichte über Naturverbundenheit, Harmonie, Verantwortung, Sinnsuche und den Weg des Herzens.',
    meta: 'Status: erscheint in Kürze · in Vorbereitung',
  },
  {
    id: 'coaching-karten',
    label: 'Coaching-Karten',
    name: 'Coaching- und Impulskarten',
    subtitle: 'Für Selbstreflexion, Coaching, Gruppenarbeit und Workshops',
    description:
      'Geplant sind bebilderte Coaching- und Impulskarten mit Fragen, Gedankenanstößen und Reflexionsimpulsen. Sie können genutzt werden als Tagesimpuls, Einstieg in Coaching-Sessions, Icebreaker in Gruppen, Reflexionshilfe in Teams, Begleitmaterial für Workshops oder Gesprächsimpuls bei sensiblen Themen. Mögliche Themen: innere Ordnung · Klarheit · Selbstwahrnehmung · Bedürfnisse und Grenzen · Wertschätzung · Empathie · Lebensfreude · gelingendes Miteinander.',
    meta: 'Status: in Planung',
  },
  {
    id: 'kunst',
    label: 'Kunst & kreative Arbeiten',
    name: 'Bilder, Formen und Motive',
    subtitle: 'Kreative Arbeiten, die innere Prozesse sichtbar machen',
    description:
      'Neben meinen Buchprojekten entstehen auch künstlerische Arbeiten, Motive und gestalterische Ideen. Ich male, zeichne, gestalte keramisch, arbeite mit Mosaik und entwickle Motive, die mit meinen Themen verbunden sind: Natur, Menschlichkeit, Symbolik, Wandel, innere Entwicklung und Verbundenheit. Einige meiner Arbeiten wurden in der Vergangenheit bereits verkauft oder ausgestellt. Perspektivisch möchte ich ausgewählte Originale, Kunstdrucke, Kartenmotive oder begleitende Produkte zu meinen Buchprojekten zugänglich machen.',
    meta: '',
  },
] as const;

// Methoden auf "Über mich" — detaillierte Beschreibungen
export const METHODEN_DETAIL = [
  {
    name: 'Mentaltraining',
    text: 'Mentaltraining unterstützt dich dabei, Gedanken zu ordnen, den inneren Fokus bewusster auszurichten und neue Handlungsmöglichkeiten zu entwickeln. Es kann helfen, belastende Denkmuster, innere Blockaden oder wiederkehrende Selbstzweifel bewusster wahrzunehmen und neue stärkende Ausrichtungen zu entwickeln. Dabei geht es nicht um positives Denken um jeden Preis, sondern um einen klareren, bewussteren Umgang mit dir selbst und deinen inneren Ressourcen.',
  },
  {
    name: 'Achtsamkeitstraining',
    text: 'Achtsamkeit hilft dir, wieder bewusster wahrzunehmen, was gerade in dir geschieht: Gedanken, Gefühle, Körperempfindungen, Grenzen und Bedürfnisse. Achtsamkeitstools können dich dabei unterstützen, aus dem reinen Funktionieren auszusteigen, innere Anspannung früher zu bemerken und wieder mehr Gegenwärtigkeit im Alltag zu entwickeln.',
  },
  {
    name: 'Entspannungspädagogik',
    text: 'Als Entspannungspädagogin arbeite ich mit Übungen, die Körper, Geist und Nervensystem zur Ruhe kommen lassen können. Dazu gehören entspannende Körper-Geist-Übungen, geführte innere Reisen, Atem- und Wahrnehmungsübungen sowie alltagstaugliche Impulse für mehr Balance. Gerade in Phasen von innerer Unruhe, Überforderung oder hoher Verantwortung kann Entspannungspädagogik helfen, wieder mehr bei sich selbst anzukommen und die eigene innere Stabilität zu stärken.',
  },
  {
    name: 'Hypnose und hypnotherapeutisch geprägte Ansätze',
    text: 'Hypnose kann einen vertieften Zugang zu inneren Bildern, Ressourcen und unbewussten Lösungsräumen ermöglichen. Ich arbeite dabei achtsam, klar und ressourcenorientiert. Ziel ist es, innere Ruhe, neue Perspektiven und stärkende Impulse zugänglich zu machen. Dabei geht es nicht um Kontrollverlust, sondern um einen geschützten, geführten Zustand vertiefter Wahrnehmung, in dem innere Klärung möglich werden kann.',
  },
  {
    name: 'Positive Psychologie und Glücksforschung',
    text: 'Impulse aus der positiven Psychologie und Glücksforschung richten den Blick auf Stärken, Ressourcen, Sinn, Selbstwirksamkeit, Motivation und Lebensfreude. Es geht nicht darum, Schwierigkeiten schönzureden. Vielmehr geht es darum, vorhandene Kraftquellen wieder bewusster wahrzunehmen und ein Leben zu gestalten, das sich stimmiger, verbundener und lebendiger anfühlt.',
  },
  {
    name: 'Systemischer Blick auf Beziehungen, Rollen und Dynamiken',
    text: 'Manche Themen entstehen nicht isoliert. Sie zeigen sich in Beziehungen, Herkunft, Familie, Beruf, inneren Anteilen, wiederkehrenden Mustern oder Teamstrukturen. Ein systemischer Blick kann helfen, solche Zusammenhänge bewusster wahrzunehmen: Was wirkt im Hintergrund? Welche Rollen oder Erwartungen prägen die Situation? Wo entsteht Druck? Welche Beziehungen stärken dich — und welche kosten Kraft? Was braucht dein Leben, damit du dich ganzheitlich wohler und stimmiger fühlen kannst? Dabei geht es nicht um Schuld oder Bewertung, sondern um Verständnis, Perspektivwechsel und neue Handlungsmöglichkeiten.',
  },
  {
    name: 'Räumliche Perspektivarbeit',
    text: 'Wenn es passend ist, können wir Themen auch räumlich sichtbar machen — etwa durch Positionierungen, Bodenanker, Symbole oder eine bewusste Betrachtung verschiedener innerer oder äußerer Perspektiven. Das kann helfen, Dynamiken, Beziehungen, Entscheidungen oder innere Anteile greifbarer zu machen. Wichtig: Ich bezeichne dies nicht als therapeutische systemische Aufstellung, sondern als achtsame Perspektivarbeit innerhalb meiner ganzheitlichen Begleitung.',
  },
  {
    name: 'PSYCH-K®',
    text: 'Wenn es passend ist, kann auch PSYCH-K® in die Begleitung einfließen. PSYCH-K® ist ein Ansatz, der mit inneren Überzeugungen, Ausrichtung und Veränderungsprozessen arbeitet. Er wird unter anderem mit Rob Williams und Konzepten rund um Bewusstsein, Glaubensmuster und Veränderung in Verbindung gebracht. Auch der Zellbiologe Bruce Lipton wird im Umfeld dieser Methode häufig genannt, insbesondere im Zusammenhang mit der Bedeutung von Überzeugungen und innerer Ausrichtung. In meiner Arbeit kann PSYCH-K® unterstützend eingesetzt werden, wenn alte Denk- oder Glaubensmuster bewusster wahrgenommen und neue innere Ausrichtungen gestärkt werden sollen.',
  },
  {
    name: 'Arbeit mit inneren Anteilen',
    text: 'In der Arbeit mit inneren Anteilen geht es darum, verschiedene innere Stimmen, Bedürfnisse, Prägungen oder Schutzmechanismen bewusster wahrzunehmen. Manchmal gibt es einen Anteil, der mutig weitergehen möchte. Einen anderen, der Angst hat. Einen, der funktionieren muss. Einen, der sich nach Ruhe sehnt. Einen, der verletzt ist. Einen, der lange übergangen wurde. Auch die Arbeit mit dem inneren Kind kann hier einfließen. Ziel ist ein wertschätzenderer Umgang mit dir selbst und ein besseres Verständnis dafür, was in dir wirkt.',
  },
  {
    name: 'Kunst- und ausdrucksorientierte Elemente',
    text: 'Bildnerisches, freies oder kreatives Gestalten kann sichtbar machen, was innerlich bereits wirkt, aber noch nicht in Worte gefasst werden kann. Farben, Formen, Bilder, Collagen, freies Zeichnen oder gestaltende Elemente können helfen, innere Prozesse, Bedürfnisse, Spannungen oder Entwicklungsthemen greifbarer zu machen. Dabei geht es nicht um künstlerische Leistung. Es geht um Ausdruck, Wahrnehmung und Klärung.',
  },
  {
    name: 'Bioenergetische Zugänge',
    text: 'Wenn es passend und gewünscht ist, können bioenergetische Zugänge in die Begleitung einfließen. Dazu können — je nach Anliegen und Offenheit — auch Reiki, Akasha-Chronik-Reading, die Arbeit mit dem Akasha-Feld, dem morphogenen Feld oder dem Quantenfeld im spirituell-energetischen Verständnis gehören. Ich verstehe diese Ebene als ergänzende Möglichkeit, innere Resonanzen, feine Wahrnehmungen, persönliche Themen und Entwicklungsschritte bewusster wahrzunehmen. Wichtig ist mir dabei: keine starren Deutungen, keine Diagnosen, keine Heilversprechen — sondern achtsame Impulse, die deinen eigenen Klärungs- und Entwicklungsprozess unterstützen können.',
  },
] as const;

// Fokus Impulse — Kategorien (Briefing Sektion 13)
export const IMPULSE_TOPICS = [
  { name: 'Innere Ordnung', text: 'Beiträge über Selbstwahrnehmung, Gedankenklärung, innere Stabilität und die Frage, wie du wieder mehr bei dir selbst ankommst.' },
  { name: 'Klarheit & Lebensfreude', text: 'Impulse zu Entscheidungen, Selbstwert, Freude am Leben, Neuorientierung und Vertrauen in den eigenen Weg.' },
  { name: 'Achtsamkeit & Stressresilienz', text: 'Texte, Übungen und Gedanken zu Stress, innerer Ruhe, Entspannung, Körper-Geist-Verbindung und alltagstauglicher Achtsamkeit.' },
  { name: 'Wertschätzung & Empathie', text: 'Beiträge über Sprache, Begegnung, Mitgefühl, Kommunikation und die Wirkung kleiner Gesten im Alltag.' },
  { name: 'Gelingendes Miteinander', text: 'Impulse für Beziehungen, Teams, Gruppen, Familie, Beruf und Kommunikation auf Augenhöhe.' },
  { name: 'Natur & Bewusstsein', text: 'Gedanken zu Naturverbundenheit, Verantwortung, Sinn, innerem Wachstum und dem Platz des Menschen im größeren Ganzen.' },
  { name: 'Bücher & Schreibprozesse', text: 'Einblicke in meine Buchprojekte, Figuren, Themen, Schreibprozesse und Hintergründe.' },
  { name: 'Audio & Video', text: 'Audio-Impulse und kurze Videos — unter anderem mit meditativen Elementen, Fantasiereisen und inneren Heilreisen, Progressiver Muskelentspannung nach Jacobson sowie Übungen zur Körperwahrnehmung.' },
] as const;

// Stimmen — bestehende Stimmen behalten
export const STIMMEN = [
  {
    id: 'bianca',
    category: '1:1 Begleitung',
    author: 'Bianca Tamadon',
    source: 'Google Rezension ⭐⭐⭐⭐⭐',
    text: 'Daniela ist eine sehr einfühlsame und aufmerksame Coachin. Sie hat mich gut angeleitet und nahezu meditativ und hypnotisch durch meine Session geführt. Ich empfehle Dani von ganzem Herzen weiter, gerade für Personen, die sich etwas durcheinander oder verloren fühlen, kann eine Coaching Session helfen um sich neu zu sortieren. Eine einfühlsame Coachin wie Dani ist dabei sehr hilfreich.',
    response:
      'Liebe Bianca, vielen Dank für deine wertschätzenden Worte und deine herzliche Empfehlung. Es freut mich sehr, dass du dich in unserer gemeinsamen Session gut begleitet gefühlt hast und wieder mehr innere Ordnung und Klarheit für dich entstehen konnte. Danke für dein Vertrauen. Alles Liebe, Daniela',
  },
  {
    id: 'carmela',
    category: '1:1 Begleitung',
    author: 'Carmela Micciché',
    source: 'Google Rezension ⭐⭐⭐⭐⭐',
    text: 'Ich habe Frau Daniela Britta Hamberger über einen längeren Zeitraum hinweg im Rahmen ihres ganzheitlichen Coachings erlebt, in einer Phase meines Lebens, in der es mir persönlich nicht besonders gut ging. Rückblickend kann ich sagen, dass diese Begleitung für mich eine sehr wertvolle Unterstützung war. Was mich von Anfang an beeindruckt hat, war ihre außergewöhnliche Empathie. Frau Hamberger hört wirklich zu — aufmerksam, respektvoll und ohne vorschnelle Bewertungen. Gleichzeitig arbeitet sie sehr klar, strukturiert und kompetent. Sie verbindet achtsame Gespräche mit konkreten Impulsen, die im Alltag tatsächlich umsetzbar sind. Ihr ganzheitlicher Ansatz hat mir geholfen, wieder mehr Stabilität, Klarheit und Vertrauen in meine eigenen Entscheidungen zu gewinnen.',
    response:
      'Liebe Frau Micciché, danke Ihnen für die positive Rückmeldung. Genau darum geht es in dieser Arbeit: die eigene Sichtweise zu weiten, innere Klarheit zu gewinnen und sich für neue Perspektiven zu öffnen, die im Alltag oft untergehen. Herzliche Grüße und alles Liebe und Gute, Daniela Hamberger',
  },
  {
    id: 'team-rhein-main',
    category: 'Workshops & Teamcoaching',
    author: 'Team aus dem Rhein-Main-Gebiet',
    source: 'TeamBalance Workshop, April 2026 (anonym)',
    text: 'Wir haben mit Daniela Britta Hamberger den TeamBalance Workshop durchgeführt und möchten unsere Erfahrung gerne teilen, auch wenn wir als Team anonym bleiben möchten. Der Workshop hat uns geholfen, unsere Teamdynamik bewusster wahrzunehmen, Kommunikation zu reflektieren und konkrete Impulse für ein wertschätzenderes Miteinander zu entwickeln. Besonders beeindruckt hat uns Danielas Mischung aus Klarheit, Empathie, Humor und feinem Gespür für das, was im Team gerade gebraucht wird. Wir haben den Workshop als stärkend, verbindend und sehr wertvoll erlebt.',
    response: '',
  },
] as const;

// Stimmen-Auswahl für das Startseiten-Karussell (Mischung 1:1 / Teams / Stil, namentlich & anonym)
export const HOME_STIMMEN = [
  { text: 'Ich kam mit einem Kopf voller Gedanken und ging mit dem Gefühl, wieder atmen zu können. Daniela hat nichts übergestülpt, sondern mir geholfen, meine eigene Klarheit wiederzufinden.', author: 'Nina, KlarheitsStart' },
  { text: 'Ich hatte das Gefühl, nur noch zu funktionieren. In der Begleitung durfte ich zum ersten Mal seit Langem wieder sortieren, was eigentlich meins ist — und was ich nur mitgetragen habe.', author: 'Claudia, 1:1 Begleitung' },
  { text: 'Nach meiner Trennung war alles durcheinander: Gedanken, Gefühle, Alltag. Die Sitzungen haben mir geholfen, wieder Boden unter den Füßen zu bekommen und den nächsten Schritt nicht nur zu denken, sondern wirklich zu gehen.', author: 'Sabine, nach einer privaten Umbruchphase' },
  { text: 'Der Fokus KlarheitsReset war intensiv, aber auf eine gute Weise. Ich hatte Zeit, Abstand vom Alltag zu bekommen, hinzuschauen und das, was sich gezeigt hat, auch wirklich wirken zu lassen.', author: 'Anonym, Fokus KlarheitsReset' },
  { text: 'Unser Team war vorher müde, gereizt und irgendwie festgefahren. Im Workshop konnten Dinge ausgesprochen werden, ohne dass es eskaliert ist. Das war für uns ein wichtiger Wendepunkt.', author: 'Thomas, Teamleiter' },
  { text: 'Wir haben gelacht, nachgedacht und an ein paar Stellen auch geschluckt. Genau diese Mischung hat den Workshop so wertvoll gemacht.', author: 'Teilnehmer, Teamformat' },
  { text: 'Daniela hat unser Team mit viel Feingefühl durch schwierige Themen geführt. Klar, strukturiert und trotzdem menschlich.', author: 'Leitungskraft, soziale Einrichtung' },
  { text: 'Daniela ist warmherzig, klar und angenehm uneitel. Sie muss nichts beweisen — und genau dadurch entsteht ein Raum, in dem man sich traut, ehrlich zu werden.', author: 'Anja, 1:1 Begleitung' },
] as const;

// Stiftung — bleibt
export const STIFTUNG_BEREICHE = [
  { title: 'Umwelt & Artenschutz', text: 'Schutz bedrohter Arten und natürlicher Lebensräume' },
  { title: 'Meere & Natur', text: 'Projekte zur Säuberung unserer Meere und Gewässer' },
  { title: 'Upcycling & Recycling', text: 'Initiativen für nachhaltige Kreislaufwirtschaft' },
  { title: 'Soziale Hilfe', text: 'Unterstützung für einsame, benachteiligte und von Ungerechtigkeit betroffene Menschen' },
] as const;

// Buchungsoptionen Kontakt
// Booking-Optionen sauber getrennt: 1:1 vs. Teams
export const BOOKING_1ZU1 = [
  { title: 'Kostenfreies Orientierungsgespräch', duration: '15–30 Minuten', text: 'Für alle, die herausfinden möchten, ob und in welcher Form eine 1:1 Begleitung passt.' },
  { title: 'Klarheitsgespräch', duration: '60 Minuten', text: 'Einzelsitzung für ein konkretes Anliegen — Sortieren, Klären, nächste Schritte finden.' },
  { title: '1:1 Begleitung — Folgetermin', duration: '60 Minuten', text: 'Für bestehende Begleitungen und vertiefende Folgesitzungen.' },
  { title: 'Fokus KlarheitsReset — Intensivbegleitung', duration: '2 Online-Sitzungen · Intensivzeit vor Ort · 1–2 Nachbegleitungen', text: 'Intensive Begleitung für Frauen in Krisen- oder Umbruchphasen — vor Ort in Idstein bzw. im Raum Wiesbaden.' },
] as const;

export const BOOKING_TEAM = [
  { title: 'Kostenfreies Teamvorgespräch', duration: 'ca. 30 Minuten', text: 'Auftragsklärung: Worum geht es bei euch? Welches Format ist sinnvoll — Workshop, Team-Mentoring oder Führungskräftecoaching?' },
  { title: 'Führungskräftecoaching', duration: 'nach Absprache', text: 'Begleitung von Führungskräften in herausfordernden Phasen, Rollenklärung, bewusste Führung.' },
  { title: 'Team-Mentoring', duration: 'nach Absprache', text: 'Längerfristige Begleitung von Teams in Veränderungs- oder Reflexionsprozessen.' },
  { title: 'TeamBalance Workshop', duration: '3–3,5 Stunden', text: 'Halbtagsformat für Klarheit, Wertschätzung und stabile Zusammenarbeit.' },
  { title: 'Team Reset Mentoring', duration: 'begleiteter Prozess', text: 'Begleiteter Neustart für Teams: zwei vorgeschaltete Gespräche, systemischer Blick auf die Stellschrauben, intensive gemeinsame Arbeitsphase.' },
  { title: 'Kleingruppen-Mentoring', duration: 'nach Absprache', text: 'Mentoringformat für kleinere Gruppen mit gemeinsamem Anliegen.' },
  { title: 'Impulsvortrag für Teams', duration: '60–90 Minuten', text: 'Themenimpuls für Teamtage, Konferenzen oder Gesundheitstage.' },
  { title: 'Begleitung von Veränderungsprozessen', duration: 'nach Absprache', text: 'Längere Begleitung organisationaler oder Team-Veränderungen.' },
] as const;

// Konkrete Workshop-Themen für Teams & Organisationen
export const WORKSHOP_TOPICS = [
  { title: 'Stressresilienz im Arbeitsalltag', text: 'Wie ihr im Alltag Stressmuster früher erkennt und gemeinsam stabiler werdet — mit Methoden aus Resilienztraining und Stressmanagement.' },
  { title: 'Führungskräfte begleiten', text: 'Begleitung für Führungskräfte: Klarheit in der Rolle, gesunde Selbstführung und ein Führungsstil, der wertschätzend und tragfähig zugleich ist.' },
  { title: 'Burnout-Prävention', text: 'Frühe Warnsignale erkennen, Belastung gesund regulieren und Routinen entwickeln, die langfristig stabil halten.' },
  { title: 'Bewusste Kommunikation', text: 'Was Worte bewirken — und wie ihr klarer, wertschätzender und ehrlicher miteinander sprecht.' },
  { title: 'Wertschätzung im Team', text: 'Wie Wertschätzung im Alltag spürbar wird, nicht nur als Wort, sondern als Haltung.' },
  { title: 'Besseres Miteinander', text: 'Räume für ehrlichen Austausch, Verbindung und ein menschlicheres Miteinander.' },
  { title: 'Teamfindung und Rollenklärung', text: 'Wer trägt was? Wo überschneiden sich Rollen? Was darf klarer werden?' },
  { title: 'Generationen verbinden', text: 'Erfahrene und junge Kolleginnen und Kollegen: unterschiedliche Stärken, gemeinsamer Weg.' },
  { title: 'Umgang mit Veränderung', text: 'Wie Teams gut durch Umbrüche, Umstrukturierungen und Übergänge gehen.' },
  { title: 'Selbst- und Fremdwahrnehmung', text: 'Wie ich wirke, wie ich gemeint bin — und wie wir den Unterschied bewusst nutzen.' },
  { title: 'Führung mit Klarheit und Menschlichkeit', text: 'Bewusste Führung: klar in der Sache, wertschätzend im Ton.' },
  { title: 'Achtsame Pausen & mentale Stabilität', text: 'Kleine Routinen für mehr Ruhe, Fokus und mentale Stabilität im Arbeitsalltag.' },
  { title: 'Konflikte frühzeitig erkennen', text: 'Wie Spannungen früh sichtbar werden — bevor sie zu Konflikten eskalieren.' },
  { title: 'Zusammenarbeit stärken', text: 'Praktische Übungen und Reflexionen für ein tragfähigeres Miteinander.' },
] as const;

// Blog-Beiträge „Fokus Impulse" — je Beitrag eigene URL /impulse/{id}, mit Langversion (body)
export const IMPULSE_BEITRAEGE = [
  {
    id: 'generationen-verbinden-statt-vergleichen',
    category: 'Gelingendes Miteinander',
    title: 'Generationen verbinden statt vergleichen',
    teaser:
      'Ob im Berufsleben, in Familien oder in unserer Gesellschaft – oft werden Generationen miteinander verglichen. Dabei liegt die eigentliche Stärke nicht in den Unterschieden, sondern im Miteinander. Junge Menschen bringen neue Ideen, Offenheit und Veränderungsbereitschaft mit. Erfahrene Menschen verfügen über Wissen, Gelassenheit und einen wertvollen Blick für Zusammenhänge. Gemeinsam können sie voneinander lernen und wachsen. Vielleicht brauchen wir weniger Vergleiche und mehr Begegnungen.',
    source: 'Beitrag',
    body: [
      'Ob im Unternehmen, in der Familie oder in unserer Gesellschaft: Oft sprechen wir über Generationen, als müssten sie gegeneinander antreten.',
      'Die Jungen gelten als innovativ, flexibel und digital. Die Älteren als erfahren, zuverlässig und besonnen. Doch diese Einteilung greift zu kurz.',
      'Jede Generation bringt Fähigkeiten, Erfahrungen und Sichtweisen mit, die für unsere gemeinsame Zukunft wichtig sind. Junge Menschen hinterfragen bestehende Strukturen und bringen neue Ideen ein. Ältere Menschen verfügen über Erfahrung, Menschenkenntnis und oft über die Fähigkeit, auch in schwierigen Situationen Ruhe zu bewahren.',
      'Gerade in einer Zeit, in der sich unsere Arbeitswelt rasant verändert, brauchen wir beides: Mut zur Veränderung und Erfahrung im Umgang mit Veränderungen.',
      'Studien zeigen, dass vielfältige Teams häufig erfolgreicher sind als sehr homogene Gruppen. Unterschiedliche Perspektiven fördern Kreativität, bessere Entscheidungen und nachhaltigere Lösungen.',
      'Dabei geht es nicht darum, wer recht hat oder wer moderner ist. Es geht darum, voneinander zu lernen.',
      'Vielleicht liegt die Zukunft nicht darin, Generationen zu vergleichen, sondern darin, sie miteinander ins Gespräch zu bringen. Denn wenn Erfahrung auf Neugier trifft und Wissen auf Offenheit, entsteht etwas Wertvolles: gegenseitiger Respekt, gemeinsames Wachstum und eine Kultur des Miteinanders.',
      'Eine starke Gesellschaft braucht nicht die eine oder andere Generation. Sie braucht alle.',
    ],
  },
  {
    id: 'dankbarkeitsstein',
    category: 'Dankbarkeit',
    title: 'Der Dankbarkeitsstein',
    teaser:
      'Manchmal reicht ein kleiner Stein in der Hosentasche, um den Tag zu drehen. Ein winziger Anker für einen bewussten Moment, wenn der Alltag uns mit sich reißt. Wofür darfst du heute dankbar sein — bevor du weitergehst?',
    source: 'Beitrag',
    body: [
      'Manchmal braucht es nicht viel, um wieder bei dir anzukommen. Einen Moment. Einen Atemzug. Einen kleinen Stein in deiner Tasche.',
      'Ein Dankbarkeitsstein kann ein stiller Begleiter durch deinen Alltag sein. Immer wenn du ihn berührst, darfst du kurz innehalten und dich fragen: Wofür bin ich gerade dankbar? Vielleicht für einen freundlichen Blick. Für einen warmen Kaffee. Für ein Gespräch. Für deine Gesundheit. Für einen Moment Ruhe mitten im Trubel.',
      'Dankbarkeit bedeutet nicht, schwierige Dinge schönzureden. Sie bedeutet auch nicht, Probleme zu ignorieren. Sie richtet den Blick nur bewusst auf das, was trotz allem trägt. Gerade in einer Zeit, in der vieles schnell, laut und fordernd geworden ist, kann Dankbarkeit wie ein kleiner innerer Anker wirken.',
      'Auch aus der positiven Psychologie wissen wir: Wer regelmäßig Dankbarkeit übt, stärkt häufig die Wahrnehmung für das Gute im eigenen Leben. Nicht, weil dadurch alles leicht wird. Sondern weil unser Gehirn lernt, nicht nur Mangel, Druck und To-do-Listen zu registrieren, sondern auch Verbindung, Wert, Halt und kleine Glücksmomente.',
      'Vielleicht suchst du dir heute einen kleinen Stein. Einen, der gut in deiner Hand liegt. Trage ihn bei dir. Und jedes Mal, wenn du ihn spürst, frage dich: Was ist heute nicht selbstverständlich?',
      'Vielleicht beginnt genau dort ein anderer Blick auf deinen Tag.',
    ],
  },
  {
    id: 'waldbaden-klarheit',
    category: 'Naturverbundenheit',
    title: 'Was Waldbaden mit Klarheit zu tun hat',
    teaser:
      'Wir verbringen täglich Stunden vor Bildschirmen — und wundern uns, dass der Kopf nicht zur Ruhe kommt. Schon zwanzig Minuten im Wald, ohne Aufgabe, ohne Ziel, verändern messbar etwas in uns. Was bräuchtest du heute, um wirklich anzukommen?',
    source: 'Beitrag',
    body: [
      'Wir leben in einer Zeit, in der unser Kopf selten wirklich still wird. Nachrichten, Termine, Erwartungen, Bildschirme, Entscheidungen — vieles wirkt gleichzeitig auf uns ein. Oft merken wir erst spät, wie sehr unser inneres System unter Daueranspannung steht. Der Wald kann hier ein Gegenraum sein.',
      'Waldbaden bedeutet nicht, sportlich durch den Wald zu laufen. Es bedeutet, bewusst einzutauchen: langsamer werden, riechen, hören, sehen, fühlen. Den Boden unter den Füßen spüren. Das Licht zwischen den Bäumen wahrnehmen. Den eigenen Atem wieder bemerken.',
      'In Japan wird diese Praxis Shinrin Yoku genannt — das bewusste Baden in der Atmosphäre des Waldes. Studien weisen darauf hin, dass Aufenthalte im Wald Stress reduzieren und das Nervensystem beruhigen können. Für mich ist daran besonders wichtig: Der Wald verlangt nichts. Er bewertet nicht. Er funktioniert nicht nach Leistung, Tempo oder Optimierung.',
      'Gerade darin liegt für mich seine besondere Kraft: Der Wald schafft einen Raum, in dem sich vieles ordnen darf, ohne dass wir aktiv danach suchen müssen.',
      'Wenn du im Wald bist, darf dein Blick wieder weiter werden. Gedanken, die sich vorher eng angefühlt haben, bekommen Raum. Entscheidungen müssen nicht sofort getroffen werden. Manchmal reicht es, da zu sein. Schritt für Schritt. Atemzug für Atemzug.',
      'Klarheit entsteht nicht immer durch noch mehr Nachdenken. Manchmal entsteht sie, wenn wir aus dem Gedankenkarussell aussteigen und wieder in Verbindung kommen — mit dem Körper, mit der Natur und mit dem, was in uns oft leise ist, aber besonders wahrhaftig.',
      'Vielleicht gehst du beim nächsten Mal ohne Ziel in den Wald. Nicht, um etwas zu schaffen. Sondern um dich selbst wieder besser wahrzunehmen – mit all deinen Sinnen.',
    ],
  },
  {
    id: 'menschlichkeit-kein-soft-skill',
    category: 'Menschlichkeit im Arbeitsleben',
    title: 'Menschlichkeit ist kein Soft Skill',
    teaser:
      'In vielen Organisationen wird Menschlichkeit als „nice to have" behandelt. Dabei ist sie die Voraussetzung dafür, dass Menschen überhaupt langfristig gut zusammenarbeiten können. Klarheit, Wertschätzung, ehrliche Kommunikation — das sind keine Extras. Das ist das Fundament.',
    source: 'Beitrag',
    body: [
      'Wenn in Unternehmen über Erfolg gesprochen wird, stehen häufig Zahlen, Strategien, Prozesse und Effizienz im Mittelpunkt. Das ist verständlich und wichtig. Doch oft wird übersehen, dass hinter jeder Kennzahl Menschen stehen. Menschen, die sich gesehen fühlen möchten. Menschen, die Anerkennung brauchen. Menschen, die Belastungen tragen, die von außen nicht immer sichtbar sind.',
      'Lange Zeit wurde Menschlichkeit im Berufsleben als etwas betrachtet, das „nice to have" ist. Etwas, das man sich leisten kann, wenn Zeit dafür bleibt. Heute zeigt sich immer deutlicher: Menschlichkeit ist kein Zusatz. Sie ist eine Voraussetzung für nachhaltigen Erfolg.',
      'Studien aus der Organisationspsychologie zeigen seit Jahren, dass Vertrauen, Wertschätzung und psychologische Sicherheit einen erheblichen Einfluss auf Motivation, Leistungsfähigkeit und Zusammenarbeit haben. Teams arbeiten erfolgreicher, wenn Menschen Fragen stellen dürfen, Fehler ansprechen können und sich nicht permanent schützen müssen.',
      'Menschlichkeit bedeutet dabei nicht, Konflikten aus dem Weg zu gehen. Im Gegenteil. Sie bedeutet, auch schwierige Themen respektvoll anzusprechen. Klar zu kommunizieren. Grenzen zu setzen und gleichzeitig die Würde des anderen zu achten.',
      'Gerade in einer Zeit, in der Digitalisierung, Fachkräftemangel und Veränderungsdruck viele Unternehmen fordern, wird ein Faktor immer wichtiger: die Qualität der zwischenmenschlichen Beziehungen.',
      'Vielleicht sollten wir deshalb häufiger fragen: Wie gehen wir miteinander um? Wie sprechen wir miteinander? Und was bleibt von unserem Handeln zurück, wenn die Zahlen des Quartals längst vergessen sind?',
      'Menschlichkeit kostet oft weniger als gedacht. Ihr Fehlen dagegen kann sehr teuer werden.',
    ],
  },
  {
    id: 'hoffnung-happiness-positive-gedanken',
    category: 'Klarheit & Lebensfreude',
    title: 'Hoffnung, Happiness und die Kraft positiver Gedanken',
    teaser:
      'Unser Alltag ist häufig geprägt von Nachrichten, Terminen, Sorgen und Erwartungen. Umso wichtiger ist es, kleine Quellen der Zuversicht bewusst wahrzunehmen. Hoffnung ist dabei weit mehr als bloßes Wunschdenken. Sie hilft uns, Chancen zu erkennen, neue Perspektiven zu entwickeln und auch in schwierigen Zeiten handlungsfähig zu bleiben. Manchmal beginnen positive Veränderungen mit einem einzigen Gedanken.',
    source: 'Beitrag',
    image: '/images/impuls-happiness.jpg',
    imageAlt: 'Gelber Pfeil mit dem Schriftzug „Happiness" auf Pflastersteinen — ein Hinweis Richtung Zuversicht',
    body: [
      'Hoffnung wird häufig unterschätzt. Manche Menschen halten sie für naiv oder unrealistisch. Doch Hoffnung gehört zu den stärksten inneren Ressourcen, die wir besitzen.',
      'Hoffnung bedeutet nicht, Probleme zu ignorieren oder Schwierigkeiten auszublenden. Hoffnung bedeutet, trotz Herausforderungen daran zu glauben, dass Entwicklung möglich ist.',
      'Unser Gehirn ist von Natur aus darauf ausgerichtet, Gefahren schneller wahrzunehmen als Positives. Dieses sogenannte Negativitätsprinzip war früher überlebenswichtig. Heute führt es jedoch oft dazu, dass wir uns stärker auf Probleme als auf Möglichkeiten konzentrieren. Deshalb kann es hilfreich sein, Positivität bewusst zu trainieren.',
      'Kleine Post-its mit stärkenden Botschaften. Ein Satz am Badezimmerspiegel. Ein Lied, das gute Erinnerungen weckt. Ein Dankbarkeitstagebuch. Ein freundlicher Gedanke über uns selbst. All diese kleinen Impulse können dazu beitragen, unsere Aufmerksamkeit neu auszurichten.',
      'Auch positive Glaubenssätze spielen dabei eine wichtige Rolle. Statt „Ich schaffe das sowieso nicht" könnte ein neuer Gedanke lauten: „Ich darf Schritt für Schritt wachsen." Statt „Ich bin nicht gut genug" vielleicht: „Ich bin wertvoll, so wie ich bin." Natürlich lösen solche Sätze nicht alle Probleme. Doch sie beeinflussen, wie wir über uns selbst denken und wie wir Herausforderungen begegnen.',
      'Happiness bedeutet dabei nicht, ständig glücklich zu sein. Es bedeutet vielmehr, Lebensfreude, Sinn, Verbundenheit und Zuversicht bewusst wahrzunehmen.',
      'Vielleicht beginnt ein erfüllteres Leben nicht mit einer großen Veränderung. Vielleicht beginnt es mit einem kleinen Gedanken. Mit einem freundlichen Blick auf dich selbst. Mit einem Moment der Dankbarkeit. Mit Hoffnung.',
    ],
  },
  {
    id: 'resilienz-bedeutet-nicht-alles-auszuhalten',
    category: 'Achtsamkeit & Stressresilienz',
    title: 'Resilienz bedeutet nicht, alles auszuhalten',
    teaser:
      'Viele Menschen glauben, Resilienz bedeute, immer stark sein zu müssen. Doch wahre innere Stärke zeigt sich oft ganz anders. Resilienz bedeutet nicht, Belastungen einfach auszuhalten oder Gefühle zu unterdrücken. Sie bedeutet, Herausforderungen anzunehmen, auf die eigenen Bedürfnisse zu achten und nach schwierigen Zeiten wieder zurück in die eigene Kraft zu finden. Manchmal beginnt Stärke genau dort, wo wir uns erlauben, verletzlich zu sein.',
    source: 'Beitrag',
    body: [
      'Resilienz ist zu einem Begriff geworden, der heute häufig verwendet wird. Doch oft wird er missverstanden. Viele Menschen verbinden damit die Vorstellung, immer stark sein zu müssen, niemals zu zweifeln und jede Herausforderung allein bewältigen zu können. Doch Resilienz bedeutet etwas anderes.',
      'Resiliente Menschen erleben genauso Unsicherheit, Enttäuschungen, Stress oder Krisen wie andere Menschen auch. Der Unterschied liegt nicht darin, dass sie weniger belastet werden. Der Unterschied liegt darin, wie sie mit Belastungen umgehen.',
      'Resilienz bedeutet, die eigenen Grenzen wahrzunehmen. Sie bedeutet, Hilfe anzunehmen, wenn sie gebraucht wird. Sie bedeutet, sich nach schwierigen Zeiten wieder aufzurichten und Schritt für Schritt den eigenen Weg weiterzugehen.',
      'Dabei spielen viele Faktoren eine Rolle: soziale Beziehungen, Selbstfürsorge, Optimismus, Selbstvertrauen und die Fähigkeit, Herausforderungen als Entwicklungsmöglichkeiten zu betrachten.',
      'Vielleicht kennst du Situationen, in denen du rückblickend festgestellt hast, dass du stärker warst, als du selbst geglaubt hast. Genau dort zeigt sich oft Resilienz. Nicht im perfekten Funktionieren. Sondern im menschlichen Weitergehen.',
      'Gerade in einer Zeit voller Veränderungen, hoher Anforderungen und permanenter Erreichbarkeit wird Resilienz immer wichtiger. Sie hilft uns, nicht nur leistungsfähig zu bleiben, sondern auch mit uns selbst verbunden zu bleiben.',
      'Denn wahre Stärke bedeutet nicht, alles auszuhalten. Wahre Stärke bedeutet, gut für sich selbst zu sorgen.',
    ],
  },
  {
    id: 'zeit-fuer-dich',
    category: 'Gedanke',
    title: 'Ich wünsche dir Zeit für dich',
    teaser:
      'Ich wünsche dir Zeit. Nicht nur für das, was getan werden muss — sondern Zeit, in der du wieder spürst, wer du bist.',
    source: 'Gedanke',
    poem: true,
    body: [
      `Ich wünsche dir Zeit.
Nicht nur für das, was getan werden muss.
Nicht nur für Pflichten, Erwartungen
und die vielen kleinen Dinge,
die sich jeden Tag vor dich stellen.`,
      `Ich wünsche dir Zeit,
in der du wieder spürst,
wer du bist.`,
      `Zeit, in der deine Gedanken leiser werden
und du dich selbst wieder hören kannst —
unter all dem Lärm,
unter all dem Funktionieren,
unter all dem, was du vielleicht lange getragen hast.`,
      `Ich wünsche dir Momente,
in denen du dir selbst mit mehr Wertschätzung begegnest.
Nicht erst dann, wenn alles gelungen ist.
Nicht erst dann, wenn du stark warst.
Sondern gerade dort,
wo du ehrlich mit dir bist.`,
      `Ich wünsche dir Menschen,
die dich nicht kleiner machen,
nicht verbiegen
und nicht in ein Bild pressen,
das dir nicht entspricht.`,
      `Menschen,
die dich sehen, wie du bist.
Die dich stärken,
ohne dich festzuhalten.
Die dich unterstützen,
dein eigenes Ich-Sein mutiger zu leben.`,
      `Ich wünsche dir die Offenheit,
dich verändern zu dürfen.
Nicht, weil du falsch bist,
sondern weil Leben Bewegung ist.`,
      `Manchmal darf etwas wachsen.
Manchmal darf etwas gehen.
Manchmal darfst du dich neu sortieren,
um mehr Lebensqualität,
mehr innere Stabilität
und mehr Besonnenheit zu finden.`,
      `Ich wünsche dir Freude,
die nicht laut sein muss.
Ein Lächeln, das von innen kommt.
Ein Vertrauen, das langsam wächst.
Eine Klarheit, die dich wieder aufrichtet.`,
      `Und ich wünsche dir Zeit,
nicht um sie festzuhalten,
sondern um sie bewusster zu leben.`,
      `Zeit zum Atmen.
Zeit zum Wachsen.
Zeit zum Lieben.
Zeit, dich selbst wiederzufinden.`,
      `Zeit für dein Leben.
Und Zeit für dich.`,
    ],
  },
] as const;
