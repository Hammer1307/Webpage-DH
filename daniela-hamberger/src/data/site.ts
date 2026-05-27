// Zentrale Datenquelle — Inhalte 1:1 aus der Gamma "Daniela Hamberger" (Theme finesse)
// Quelle: Gamma ID g_2fysu7di9lnx81o, Stand 27.05.2026

export const SITE = {
  name: 'Daniela Britta Hamberger',
  brand: 'Fokus Schöner Leben',
  tagline:
    'Mentorin für innere Stabilität, bewusste Entwicklung und gelingendes Miteinander',
  motto: 'Innere Ordnung · Neue Klarheit · Freude am Leben',
  description:
    'Mentorin für innere Stabilität, bewusste Entwicklung und gelingendes Miteinander. 1:1 Begleitung, Workshops für Teams und Publikationen unter dem Leitgedanken Fokus Schöner Leben.',
  url: 'https://danielabrittahamberger.de',
  locale: 'de-DE',
  language: 'de',
} as const;

export const CONTACT = {
  email: 'info@danielabrittahamberger.de',
  emailShort: 'info@danielahamberger.de',
  phone: '+49 6126 71705',
  street: 'Schwalbacherstraße 30A',
  postalCode: '65510',
  city: 'Idstein',
  region: 'Hessen',
  country: 'Deutschland',
  countryCode: 'DE',
} as const;

export const SOCIAL = {
  instagram: 'https://instagram.com/fokus_schoener_leben',
  instagramHandle: '@fokus_schoener_leben',
  linkedin: 'https://www.linkedin.com/in/danielabrittahamberger',
} as const;

// Bild-URLs aus Gamma CDN (für späteres Localizing in /public)
export const IMAGES = {
  hero: 'https://cdn.gamma.app/bwtiitetcy0uj9u/generated-images/H_EJ4aMz-L1CwY3_n6QC3.png',
  logo: 'https://cdn.gamma.app/bwtiitetcy0uj9u/generated-images/u36ayuu5zMV5b0FSJR_gd.png',
  begleitung1zu1: 'https://cdn.gamma.app/bwtiitetcy0uj9u/generated-images/V8gHGTjJiAqmfHj5.png',
  teamsWorkshop: 'https://cdn.gamma.app/bwtiitetcy0uj9u/generated-images/r4vrtpz15ujsQ9iu.png',
  publikationen: 'https://cdn.gamma.app/bwtiitetcy0uj9u/generated-images/zSRjMLcRUTtiMeL8wgFak.png',
  teamBalance: 'https://cdn.gamma.app/bwtiitetcy0uj9u/generated-images/TfibsD7R1taJbXAr.png',
  portrait: 'https://cdn.gamma.app/bwtiitetcy0uj9u/9c6c25e6510d4f06b98c5ac935e92629/original/Ich-Buisnesslook2.png',
  wirken: 'https://cdn.gamma.app/bwtiitetcy0uj9u/edited-images/sA5Y5SZYVNzTEe4XgwSNR.png',
} as const;

// Navigation
export const NAV = [
  { label: 'Über mich', href: '/ueber-mich' },
  { label: '1:1 Begleitung', href: '/1-zu-1-begleitung' },
  { label: 'Teams & Workshops', href: '/teams-workshops' },
  { label: 'Publikationen', href: '/publikationen-materialien' },
  { label: 'Vision', href: '/vision-stiftung' },
  { label: 'Impulse', href: '/impulse' },
  { label: 'Stimmen', href: '/stimmen-erfahrungen' },
  { label: 'Kontakt', href: '/kontakt' },
] as const;

// 1:1 Begleitformate — exakt aus Gamma Section "1:1 Begleitung"
export const COACHING_FORMATS = [
  {
    id: 'orientierung',
    name: 'Kostenfreies Orientierungsgespräch',
    duration: '15–30 Minuten · unverbindlich · online oder telefonisch',
    description:
      'Du bist nicht sicher, welches Format zu dir passt? In einem ersten Gespräch schauen wir gemeinsam, wo du gerade stehst, was dich bewegt und welche Form der Begleitung für dich sinnvoll sein kann. Dieses Gespräch dient dem Kennenlernen — ohne Druck, ohne Verpflichtung, einfach als erster klarer Schritt.',
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
      'Die KlarheitsSitzung ist passend, wenn du ein bestimmtes Thema anschauen, eine Entscheidung sortieren oder einen ersten klaren Impuls für dich mitnehmen möchtest. Wir schauen gemeinsam hin: Was bewegt dich gerade? Was blockiert deinen Blick? Was braucht Ordnung? Und welcher nächste Schritt fühlt sich für dich stimmig an?',
    suitableFor:
      'Geeignet für: Entscheidungsfragen, innere Unruhe, emotionale Sortierung, Perspektivwechsel, erste Orientierung.',
    price: '250–300 €',
    cta: 'KlarheitsSitzung anfragen',
    href: '/kontakt',
    featured: false,
  },
  {
    id: 'klarheitsstart',
    name: 'KlarheitsStart',
    duration: '3 Sitzungen für innere Ordnung, Stabilität und neue Ausrichtung',
    description:
      'Der KlarheitsStart ist für dich geeignet, wenn du spürst, dass ein Thema mehr Raum braucht. In drei Sitzungen gehen wir tiefer: Wir sortieren deine aktuelle Situation, betrachten wiederkehrende Muster, stärken deine innere Stabilität und entwickeln konkrete nächste Schritte.',
    suitableFor: 'Rhythmus: idealerweise wöchentlich · 3 × 60 Minuten',
    price: '600 € gesamt',
    cta: 'KlarheitsStart anfragen',
    href: '/kontakt',
    featured: true,
  },
  {
    id: 'klarheitsreset',
    name: 'KlarheitsReset',
    duration: 'Intensive Begleitung, wenn etwas wirklich gesehen und geklärt werden möchte',
    description:
      'Der KlarheitsReset ist für dich, wenn du spürst: Ich möchte nicht länger kreisen. Ich möchte hinschauen, sortieren und wieder eine klare innere Richtung finden. In einer intensiven Session nehmen wir uns Zeit für dein Anliegen. Wir betrachten innere und äußere Dynamiken, öffnen Raum für neue Perspektiven und schauen, was in dir wieder freigelegt werden möchte.',
    suitableFor: 'Dauer: 2,5–3 Stunden',
    price: 'ab 490 €',
    cta: 'KlarheitsReset buchen',
    href: '/klarheitsreset',
    featured: false,
  },
  {
    id: 'intensiv',
    name: 'Fokus Schöner Leben Intensiv',
    duration: 'Mehrwöchige Begleitung für tiefergehende Veränderung und neue innere Ausrichtung',
    description:
      'Dieses Format ist für dich, wenn du dich nicht nur punktuell sortieren, sondern über mehrere Wochen bewusst begleiten lassen möchtest. Es geht um innere Stabilität, Selbstwert, Abgrenzung, Orientierung, Lebensfreude und die Rückverbindung mit dem, was dich im Kern ausmacht. Je nach Anliegen können Hypnose, Mentaltraining, Achtsamkeit, systemischer Blick, Arbeit mit inneren Anteilen, PSYCH-K® und bioenergetische Zugänge einfließen.',
    suitableFor: 'Format: individuell nach Vorgespräch',
    price: 'auf Anfrage / ab 1.798 € zzgl. MwSt.',
    cta: 'Intensivbegleitung anfragen',
    href: '/kontakt',
    featured: false,
  },
] as const;

// Team-Formate — exakt aus Gamma Section "Workshops & Teamcoaching"
export const TEAM_FORMATS = [
  {
    id: 'impuls',
    name: 'Impulsvortrag »Miteinander wirkt«',
    label: 'Impulsvortrag',
    duration: '60–90 Minuten für Teams, Einrichtungen und Organisationen',
    description:
      'Manchmal braucht es keinen ganzen Workshop, sondern einen starken Impuls, der etwas öffnet. Der Impulsvortrag eignet sich, wenn ihr ein Thema in eurem Team bewusst anstoßen möchtet — zum Beispiel bei Teamtagen, pädagogischen Konferenzen, Gesundheitstagen oder internen Veranstaltungen.',
    topics:
      'Mögliche Themen: Wertschätzung im Arbeitsalltag · Sprache, die verbindet · Achtsamkeit und Stressresilienz im Team · Kommunikation auf Augenhöhe · Perspektivwechsel als Schlüssel für Zusammenarbeit · Innere Stabilität im beruflichen Alltag · Menschlichkeit als Kraft im Team',
    price: 'ab 750 € zzgl. MwSt.',
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
      'Im TeamBalance Workshop schaut ihr gemeinsam auf euer Miteinander: Was läuft gut? Wo entstehen Reibungen? Welche Rollen, Erwartungen oder unausgesprochenen Themen wirken im Hintergrund? Wir arbeiten mit Reflexion, Austausch, Achtsamkeitstools, Perspektivwechsel, spielerischen Elementen und konkreten Übungen für euren Alltag.',
    topics:
      'Inhalte: Teamdynamiken bewusster wahrnehmen · Kommunikation reflektieren · Rollen, Erwartungen und Bedürfnisse sichtbar machen · Selbst- und Fremdwahrnehmung stärken · Wertschätzung konkret erlebbar machen · Stressresilienz und Achtsamkeit im Team stärken · konkrete Impulse für den Alltag entwickeln',
    suitableFor:
      'Geeignet für: pädagogische Teams, soziale Einrichtungen, Projektteams, Praxisteams, kleinere Organisationen',
    price: 'ab 1.500 € zzgl. MwSt.',
    cta: 'TeamBalance anfragen',
    href: '/teambalance',
    featured: true,
  },
  {
    id: 'teamklarheit',
    name: 'TeamReset',
    label: 'Ganztag',
    duration: 'Für Teams, die sich neu sortieren und bewusster miteinander ausrichten möchten',
    description:
      'Der TeamReset ist für euch geeignet, wenn ihr spürt, dass euer Miteinander einen echten Neustart braucht. Vielleicht seid ihr ein neu entstehendes Team. Vielleicht gibt es alte Spannungen. Vielleicht ist Vertrauen verloren gegangen. Oder ihr möchtet einfach bewusster, klarer und menschlicher zusammenarbeiten.',
    topics:
      'Möglicher Ablauf: Vorgespräch zur Zielklärung · Analyse eurer aktuellen Teamdynamik · intensive Team-Session oder Workshop · Follow-up nach ca. 2–3 Wochen · erneuter Check-in nach weiteren 2–3 Wochen',
    price: 'individuelles Angebot nach Umfang und Zielsetzung',
    cta: 'TeamReset anfragen',
    href: '/kontakt',
    featured: false,
  },
  {
    id: 'teamstarter',
    name: 'Team-Starterpaket',
    label: 'Empfohlen',
    duration: '3 Sitzungen · 600 € Gesamtpreis',
    description:
      'Effektiver und kostengünstiger als Einzelsitzungen. Vorzugsweise wöchentlich. Ideal für einen nachhaltigen Einstieg.',
    price: '600 € gesamt',
    cta: 'Starterpaket anfragen',
    href: '/kontakt',
    featured: false,
  },
  {
    id: 'teamreset-intensiv',
    name: 'Intensives Teamcoaching',
    label: '6–8 Wochen',
    duration: 'Für neu zu bildende oder bestehende Teams',
    description:
      'Ein positives Reset für wertschätzenderes, kommunikativeres, harmonischeres Miteinander. Online-Sessions + Vor-Ort-Begleitung + Folgegespräche nach 2–3 Wochen zur Justierung.',
    topics: 'Teamcoaching-Stundensatz: 350–400 €/Std.',
    price: '1.200 € zzgl. MwSt.',
    cta: 'Intensives Teamcoaching anfragen',
    href: '/kontakt',
    featured: false,
  },
] as const;

// Publikationen — exakt aus Gamma "Publikationen & Materialien"
export const PUBLICATIONS = [
  {
    id: 'vermaechtnis',
    label: 'Buchprojekt',
    name: 'Das Vermächtnis des Herzens',
    subtitle:
      'Eine mythologische Reise zu innerer Weisheit · Für ältere Jugendliche und Erwachsene',
    description:
      'In einer Zeit, in der die Schleier des Vergessens gelüftet werden und alte Geheimnisse wieder sichtbar werden, begegnen sich zwei ungleiche Wesen der keltischen Mythologie: eine stolze Drachin und ein listiger Fuchs. Aus anfänglicher Distanz entsteht eine unerwartete Reise — voller Prüfungen, Begegnungen und der gemeinsamen Verantwortung für ein geheimnisvolles Ei. Die Geschichte erzählt von Missverständnissen, die zu Verständnis werden, von Einsamkeit, die sich in Gemeinschaft verwandelt, und von dem Mut, über die eigenen Grenzen hinauszuwachsen.',
    meta: 'Status: erscheint in Kürze · Format: Buchprojekt · Zielgruppe: ältere Jugendliche, Erwachsene, Sinnsuchende, naturverbundene Leserinnen und Leser',
  },
  {
    id: 'zurueck-zu-dir',
    label: 'Selbstcoaching-Buch',
    name: 'Zurück zu dir',
    subtitle:
      'Selbstcoaching-Buch mit integriertem Workbook · Innere Ordnung, neue Klarheit und Freude am Leben',
    description:
      'Dieses Selbstcoaching-Buch ist als Begleiter für Menschen gedacht, die sich selbst besser verstehen, innere Stabilität entwickeln und bewusster durch Veränderungsphasen gehen möchten. Es verbindet Reflexionsfragen, Schreibimpulse, Übungen zur Selbstwahrnehmung, mentale Ausrichtung und alltagstaugliche Impulse für mehr Klarheit, Selbstwert, Abgrenzung und Lebensfreude. Das integrierte Workbook lädt dazu ein, nicht nur zu lesen, sondern aktiv mit den eigenen Gedanken, Mustern, Bedürfnissen und nächsten Schritten zu arbeiten.',
    meta: 'Status: erscheint in Kürze · Format: Buch mit integriertem Workbook · Zielgruppe: Erwachsene, Menschen in Veränderungsphasen, Selbstcoaching-Interessierte',
  },
  {
    id: 'coaching-karten',
    label: 'Coaching-Karten',
    name: 'Coaching-Karten & Impulskarten',
    subtitle: 'Für Einzelpersonen, Gruppenarbeit, Coaching und Workshops',
    description:
      'Liebevoll gestaltete Coaching- und Impulskarten für die Einzelarbeit, Gruppen, Workshops oder zur eigenen Reflexion. Die Karten enthalten Fragen, Gedankenanstöße und kleine Übungen, die Menschen dabei unterstützen, ins Gespräch zu kommen, sich selbst besser wahrzunehmen und neue Perspektiven zu entwickeln. Themen: innere Ordnung · Klarheit & Orientierung · Selbstwahrnehmung · Bedürfnisse & Grenzen · Wertschätzung · Empathie · Lebensfreude · Mut & Veränderung · gelingendes Miteinander · Naturverbundenheit',
    meta: 'Status: in Planung · Format: bebildertes Karten-Set mit Impulsfragen und Reflexionskarten',
  },
  {
    id: 'weitere',
    label: 'Weitere Projekte',
    name: 'Weitere Buch- und Herzensprojekte',
    subtitle: '',
    description:
      'Neben Das Vermächtnis des Herzens und Zurück zu dir befinden sich weitere Buchideen, Texte und Herzensprojekte in Bearbeitung. In meinem Schreiben beschäftige ich mich mit Themen, die mich persönlich, gesellschaftlich und spirituell bewegen: Menschlichkeit, Naturverbundenheit, Werte, Empathie, innere Entwicklung, Bewusstsein, Miteinander und die Frage, wie aus kleinen Impulsen größere Bewegungen entstehen können.',
    meta: '',
  },
] as const;

// Methoden — aus Gamma "Über mich"
export const METHODS = [
  { name: 'Positive Psychologie', detail: 'Impulse aus der Glücksforschung' },
  { name: 'Achtsamkeit und Mentaltraining', detail: '' },
  { name: 'Bioenergetische Zugänge', detail: '' },
  { name: 'Hypnose und hypnotherapeutisch geprägte Ansätze', detail: '' },
  { name: 'Aufstellungsarbeit und systemische Perspektiven', detail: '' },
  { name: 'Bild- und symbolgestützte Übungen zur inneren Klärung', detail: '' },
  { name: 'Arbeit mit inneren Anteilen', detail: 'unter anderem dem inneren Kind' },
  { name: 'PSYCH-K®', detail: '' },
] as const;

// Blog-Teaser (Fokus Impulse) — aus Gamma
export const IMPULSE_POSTS = [
  {
    id: 'innere-ordnung-finden',
    category: 'Innere Ordnung',
    date: 'Mai 2026',
    title: 'Innere Ordnung finden, wenn das Leben unübersichtlich wird',
    excerpt:
      'Gedanken kreisen, Entscheidungen fühlen sich schwer an, die innere Stimme wird leiser. Was hilft, wenn der Verstand übernimmt — und wie du wieder in Verbindung mit deiner inneren Weisheit kommst.',
    href: '/impulse/innere-ordnung-finden',
  },
  {
    id: 'selbstwertschaetzung',
    category: 'Klarheit & Lebensfreude',
    date: 'Mai 2026',
    title: 'Warum Selbstwertschätzung kein Luxus ist',
    excerpt:
      'Viele Menschen wissen, was sie für andere tun würden — aber kaum, was sie sich selbst wert sind. Ein Impuls über den Unterschied zwischen Selbstfürsorge und echtem Selbstwert.',
    href: '/impulse/selbstwertschaetzung',
  },
  {
    id: 'innere-ordnung-buch',
    category: 'Ankündigung',
    date: 'Mai 2026',
    title: 'Neu: Selbstcoachingbuch »Innere Ordnung« in Vorbereitung',
    excerpt:
      'Mein Selbstcoachingbuch »Innere Ordnung« befindet sich in der finalen Vorbereitungsphase. Trag dich in die Interessentenliste ein und erfahre als Erste, wann es erscheint.',
    href: '/kontakt',
  },
  {
    id: '3-fragen',
    category: 'Achtsamkeit & Stressresilienz',
    date: 'April 2026',
    title: '3 Fragen, die dein Leben verändern können',
    excerpt:
      'Nicht große Entscheidungen verändern unser Leben — sondern die kleinen Fragen, die wir uns täglich stellen. Drei Reflexionsfragen aus meiner Arbeit, die du sofort anwenden kannst.',
    href: '/impulse/3-fragen',
  },
  {
    id: 'empathie-staerke',
    category: 'Gelingendes Miteinander',
    date: 'April 2026',
    title: 'Empathie ist keine Schwäche — sie ist Stärke',
    excerpt:
      'In einer Welt, die Leistung über alles stellt, gilt Empathie oft als weich. Dabei ist sie eine der kraftvollsten Führungsqualitäten überhaupt. Ein Gedanke aus meiner Arbeit mit Teams.',
    href: '/impulse/empathie-staerke',
  },
  {
    id: 'natur-innere-ordnung',
    category: 'Natur & Bewusstsein',
    date: 'März 2026',
    title: 'Was die Natur uns über innere Ordnung lehrt',
    excerpt:
      'Natur kennt keine Hast. Sie wächst, ruht, erneuert sich — im eigenen Rhythmus. Was wir von ihr über Stille, Geduld und innere Balance lernen können.',
    href: '/impulse/natur-innere-ordnung',
  },
] as const;

export const IMPULSE_TOPICS = [
  'Innere Ordnung',
  'Klarheit & Lebensfreude',
  'Achtsamkeit & Stressresilienz',
  'Wertschätzung & Empathie',
  'Gelingendes Miteinander',
  'Natur & Bewusstsein',
  'Bücher & Schreibprozesse',
  'Audio & Video',
] as const;

// Stimmen & Erfahrungen — aus Gamma
export const STIMMEN = [
  {
    id: 'bianca',
    category: '1:1 Begleitung',
    author: 'Bianca Tamadon',
    source: 'Google Rezension ⭐⭐⭐⭐⭐',
    text: 'Daniela ist eine sehr einfühlsame und aufmerksame Coachin. Sie hat mich gut angeleitet und nahezu meditativ und hypnotisch durch meine Session geführt. Ich empfehle Dani von ganzem Herzen weiter, gerade für Personen, die sich etwas durcheinander oder verloren fühlen, kann eine Coaching Session helfen um sich neu zu sortieren. Eine einfühlsame Coachin wie Dani ist dabei sehr hilfreich.',
    response:
      'Liebe Bianca, vielen Dank für deine wertschätzenden Worte und deine herzliche Empfehlung. Es freut mich sehr, dass du dich in unserer gemeinsamen Session gut begleitet gefühlt hast und wieder mehr innere Ordnung und Klarheit für dich entstehen konnte. In meiner Arbeit als Mentorin geht es genau darum: Menschen in einem achtsamen, geschützten Rahmen dabei zu unterstützen, wieder stärker bei sich selbst anzukommen, innere Stabilität zu finden und neue Orientierung zu gewinnen. Danke für dein Vertrauen. Alles Liebe, Daniela',
  },
  {
    id: 'carmela',
    category: '1:1 Begleitung',
    author: 'Carmela Micciché',
    source: 'Google Rezension ⭐⭐⭐⭐⭐',
    text: 'Ich habe Frau Daniela Britta Hamberger über einen längeren Zeitraum hinweg im Rahmen ihres ganzheitlichen Coachings erlebt, in einer Phase meines Lebens, in der es mir persönlich nicht besonders gut ging. Rückblickend kann ich sagen, dass diese Begleitung für mich eine sehr wertvolle Unterstützung war. Was mich von Anfang an beeindruckt hat, war ihre außergewöhnliche Empathie. Frau Hamberger hört wirklich zu — aufmerksam, respektvoll und ohne vorschnelle Bewertungen. Dadurch entsteht ein Raum, in dem man sich öffnen kann und sich ernst genommen fühlt. Gleichzeitig arbeitet sie sehr klar, strukturiert und kompetent. Sie verbindet achtsame Gespräche mit konkreten Impulsen, die im Alltag tatsächlich umsetzbar sind. Besonders hilfreich fand ich, dass sie nicht nur kurzfristige Lösungen anbietet, sondern dabei unterstützt, eigene Denk- und Verhaltensmuster besser zu verstehen und langfristig zu verändern. Ihr ganzheitlicher Ansatz hat mir geholfen, wieder mehr Stabilität, Klarheit und Vertrauen in meine eigenen Entscheidungen zu gewinnen.',
    response:
      'Liebe Frau Micciché, danke Ihnen für die positive Rückmeldung — und entschuldigen Sie, dass ich mich erst jetzt melde. Genau darum geht es in dieser Arbeit: die eigene Sichtweise zu weiten, innere Klarheit zu gewinnen und sich für neue Perspektiven zu öffnen, die im Alltag oft untergehen. Herzliche Grüße und alles Liebe und Gute, Daniela Hamberger',
  },
  {
    id: 'team-rhein-main',
    category: 'Workshops & Teamcoaching',
    author: 'Team aus dem Rhein-Main-Gebiet',
    source: 'TeamBalance Workshop, April 2026 (anonym)',
    text: 'Wir haben mit Daniela Britta Hamberger den TeamBalance Workshop durchgeführt und möchten unsere Erfahrung gerne teilen, auch wenn wir als Team anonym bleiben möchten. Der Workshop hat uns geholfen, unsere Teamdynamik bewusster wahrzunehmen, Kommunikation zu reflektieren und konkrete Impulse für ein wertschätzenderes Miteinander zu entwickeln. Besonders beeindruckt hat uns Danielas Mischung aus Klarheit, Empathie, Humor und feinem Gespür für das, was im Team gerade gebraucht wird. Anfangs war unser Miteinander noch etwas zurückhaltend und teilweise von unterschiedlichen Sichtweisen geprägt. Durch achtsame Gesprächsführung, Reflexionsimpulse und spielerische Elemente entstand nach und nach ein offenerer, menschlicherer und harmonischerer Austausch. Gerade das Spielerische hat geholfen, Brücken zu bauen und wieder mehr Verbindung im Team entstehen zu lassen. Wir haben den Workshop als stärkend, verbindend und sehr wertvoll erlebt.',
    response: '',
  },
] as const;

// Stiftung — Wirkungsbereiche
export const STIFTUNG_BEREICHE = [
  {
    title: 'Umwelt & Artenschutz',
    text: 'Schutz bedrohter Arten und natürlicher Lebensräume',
  },
  {
    title: 'Meere & Natur',
    text: 'Projekte zur Säuberung unserer Meere und Gewässer',
  },
  {
    title: 'Upcycling & Recycling',
    text: 'Initiativen für nachhaltige Kreislaufwirtschaft',
  },
  {
    title: 'Soziale Hilfe',
    text: 'Unterstützung für einsame, benachteiligte und von Ungerechtigkeit betroffene Menschen',
  },
] as const;

// Buchungsoptionen — aus Gamma "Kontakt"
export const BOOKING_OPTIONS = [
  {
    title: 'Kostenfreies Orientierungsgespräch',
    duration: '20 Minuten',
    text: 'Für alle, die herausfinden möchten, welches Format passt.',
  },
  {
    title: '1:1 Sitzung',
    duration: '60 Minuten',
    text: 'Für bestehende Begleitungen und Folgetermine.',
  },
  {
    title: 'KlarheitsReset',
    duration: 'ca. 3 Stunden',
    text: 'Intensive Einzelsitzung für ein konkretes Thema.',
  },
  {
    title: 'Team-Vorgespräch',
    duration: '30 Minuten',
    text: 'Für Teams und Organisationen, die ein Workshopformat anfragen möchten.',
  },
] as const;
