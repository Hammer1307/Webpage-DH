// Zentrale Datenquelle — überarbeitete Webseiten-Fassung Daniela Britta Hamberger
// Inhalt 1:1 nach Briefing "Gesamtstruktur Website Daniela Britta Hamberger"

export const SITE = {
  name: 'Daniela Britta Hamberger',
  brand: 'Fokus Schöner Leben',
  tagline:
    'Mentorin mit pädagogischer Expertise für innere Stabilität, bewusste Entwicklung und gelingendes Miteinander',
  motto: 'Innere Ordnung. Neue Klarheit. Freude am Leben.',
  description:
    'Daniela Britta Hamberger — Mentorin mit pädagogischer Expertise für innere Stabilität, bewusste Entwicklung und gelingendes Miteinander. 1:1 Begleitung für Frauen, Teams & Workshops, Publikationen unter dem Leitgedanken Fokus Schöner Leben.',
  url: 'https://danielabrittahamberger.de',
  locale: 'de-DE',
  language: 'de',
} as const;

// Ladungsfähige Anschrift (Pflichtangabe Impressum) — bitte verifizieren / bei Bedarf anpassen
export const CONTACT = {
  email: 'info@danielabrittahamberger.de',
  emailShort: 'info@danielahamberger.de',
  phone: '+49 6126 71705',
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
  instagram: 'https://instagram.com/fokus_schoener_leben',
  instagramHandle: '@fokus_schoener_leben',
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
  daniela1zu1Hero:         '/images/daniela-1zu1-hero.jpg',
  danielaTeams:            '/images/daniela-teams.jpg',
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
    { label: 'KlarheitsReset', href: '/klarheitsreset' },
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
    cta: 'Kostenfreies Orientierungsgespräch buchen',
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
    name: 'KlarheitsReset',
    duration: '2,5 Stunden intensive Begleitung, wenn etwas wirklich geklärt werden möchte',
    description:
      'Der KlarheitsReset ist für dich, wenn du spürst: Ich möchte nicht länger kreisen. Ich möchte hinschauen. Ich möchte mich sortieren. Ich möchte wieder eine klare innere Richtung finden. In einer intensiven Session nehmen wir uns Zeit für dein Anliegen. Wir betrachten innere und äußere Dynamiken, öffnen Raum für neue Perspektiven und schauen, was in dir wieder freigelegt werden möchte.',
    suitableFor: 'Dauer: ca. 2,5 Stunden',
    price: '390 €',
    cta: 'KlarheitsReset buchen',
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
    name: 'TeamReset',
    label: 'Mehrere Wochen',
    duration: 'Für Teams, die sich neu sortieren und bewusster ausrichten möchten',
    description:
      'Der TeamReset ist für euch geeignet, wenn ihr spürt, dass euer Miteinander einen echten Neustart braucht. Vielleicht seid ihr ein neu entstehendes Team. Vielleicht gibt es alte Spannungen. Vielleicht ist Vertrauen verloren gegangen. Oder ihr möchtet einfach bewusster, klarer und menschlicher zusammenarbeiten.',
    topics:
      'Möglicher Ablauf: Vorgespräch zur Zielklärung · intensive Team-Session oder Workshop · Follow-up nach 2–3 Wochen · erneuter Check-in nach weiteren 2–3 Wochen',
    suitableFor: '',
    price: 'individuelles Angebot nach Umfang und Zielsetzung',
    cta: 'TeamReset anfragen',
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
  { name: 'Audio & Video', text: 'Audio-Impulse, kurze Videos, geführte Gedankenreisen, Fantasiereisen und Reflexionsübungen für innere Ordnung, Ruhe und neue Perspektiven.' },
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
  { title: 'KlarheitsReset — intensive Einzelsitzung', duration: 'ca. 2,5 Stunden', text: 'Längere Einzelsitzung für tiefer liegende Themen, Klärung oder Neuorientierung.' },
] as const;

export const BOOKING_TEAM = [
  { title: 'Kostenfreies Teamvorgespräch', duration: 'ca. 30 Minuten', text: 'Auftragsklärung: Worum geht es bei euch? Welches Format ist sinnvoll — Workshop, Team-Mentoring oder Führungskräftecoaching?' },
  { title: 'Führungskräftecoaching', duration: 'nach Absprache', text: 'Begleitung von Führungskräften in herausfordernden Phasen, Rollenklärung, bewusste Führung.' },
  { title: 'Team-Mentoring', duration: 'nach Absprache', text: 'Längerfristige Begleitung von Teams in Veränderungs- oder Reflexionsprozessen.' },
  { title: 'TeamBalance Workshop', duration: '3–3,5 Stunden', text: 'Halbtagsformat für Klarheit, Wertschätzung und stabile Zusammenarbeit.' },
  { title: 'TeamReset Workshop', duration: 'individuell', text: 'Tieferer Workshop für Teams in Spannungs- oder Umbruchsphasen.' },
  { title: 'Kleingruppen-Mentoring', duration: 'nach Absprache', text: 'Mentoringformat für kleinere Gruppen mit gemeinsamem Anliegen.' },
  { title: 'Impulsvortrag für Teams', duration: '60–90 Minuten', text: 'Themenimpuls für Teamtage, Konferenzen oder Gesundheitstage.' },
  { title: 'Begleitung von Veränderungsprozessen', duration: 'nach Absprache', text: 'Längere Begleitung organisationaler oder Team-Veränderungen.' },
] as const;

// Konkrete Workshop-Themen für Teams & Organisationen
export const WORKSHOP_TOPICS = [
  { title: 'Stressresilienz im Arbeitsalltag', text: 'Wie ihr im Alltag Stressmuster früher erkennt und gemeinsam stabiler werdet.' },
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

// 5 kuratierte Impulse-Beiträge (PLATZHALTER — bitte mit den besten Original-Posts von LinkedIn/Instagram ersetzen)
export const IMPULSE_BEITRAEGE = [
  {
    id: 'dankbarkeit',
    category: 'Dankbarkeit',
    title: 'Der Dankbarkeitsstein',
    teaser:
      'Manchmal reicht ein kleiner Stein in der Hosentasche, um den Tag zu drehen. Ein winziger Anker für einen bewussten Moment, wenn der Alltag uns mit sich reißt. Wofür darfst du heute dankbar sein — bevor du weitergehst?',
    source: 'Beitrag',
  },
  {
    id: 'waldbaden',
    category: 'Naturverbundenheit',
    title: 'Was Waldbaden mit Klarheit zu tun hat',
    teaser:
      'Wir verbringen täglich Stunden vor Bildschirmen — und wundern uns, dass der Kopf nicht zur Ruhe kommt. Schon zwanzig Minuten im Wald, ohne Aufgabe, ohne Ziel, verändern messbar etwas in uns. Was bräuchtest du heute, um wirklich anzukommen?',
    source: 'Beitrag',
  },
  {
    id: 'wertschaetzung-aelter',
    category: 'Wertschätzung im Arbeitsleben',
    title: 'Ältere Arbeitnehmer:innen — übersehene Schätze',
    teaser:
      'Wer dreißig Jahre Erfahrung mitbringt, hat etwas, das keine Stellenanzeige der Welt einfangen kann: Ruhe in Stürmen, Gespür für Menschen, Wissen um Wiederholungsmuster. Was wäre, wenn wir diesen Erfahrungsschatz aktiv in unseren Teams sichtbar machen würden?',
    source: 'Beitrag',
  },
  {
    id: 'menschlichkeit',
    category: 'Menschlichkeit im Arbeitsleben',
    title: 'Menschlichkeit ist kein Soft Skill',
    teaser:
      'In vielen Organisationen wird Menschlichkeit als „nice to have" behandelt. Dabei ist sie die Voraussetzung dafür, dass Menschen überhaupt langfristig gut zusammenarbeiten können. Klarheit, Wertschätzung, ehrliche Kommunikation — das sind keine Extras. Das ist das Fundament.',
    source: 'Beitrag',
  },
  {
    id: 'generationen',
    category: 'Generationen verbinden',
    title: 'Jung trifft erfahren — was möglich wird',
    teaser:
      'Wenn jüngere und erfahrenere Kolleg:innen sich nicht beäugen, sondern wirklich begegnen, passiert etwas Besonderes: Neugier statt Bewertung, gegenseitiges Lernen statt Reibung. Es braucht nur einen Raum, in dem das möglich wird — und Menschen, die ihn öffnen.',
    source: 'Beitrag',
  },
] as const;
