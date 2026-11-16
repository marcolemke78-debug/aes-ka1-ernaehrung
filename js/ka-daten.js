/**
 * Paket: AES Klassenarbeit 1 (Klasse 9), Mittwoch 18.11.2026
 * Inhalte: js/lessons-*.js · Karten: js/cards.js
 */
const KA = {
  id: 'aes-ka1-2627',
  subject: 'AES',
  title: 'Klassenarbeit AES: Engagement, Ernährung und Klima',
  date: '2026-11-18',
  topics: [
    { title: 'Lernen durch Engagement', page: 'Buch S. 86', lessons: [1, 2] },
    { title: 'Die 11 Regeln der DGE', page: 'Heft', lessons: [3, 4] },
    { title: 'Die (neue) Ernährungspyramide', page: 'Blatt A3', lessons: [5] },
    { title: 'Was hat unser Essen mit dem Klima zu tun?', page: 'M2', lessons: [6] },
    { title: 'Drei Klimatipps', page: 'M5a–M7a', lessons: [7] },
    { title: 'Ökologischer Fuß- und Handabdruck', page: 'M1, M3', lessons: [8] },
    { title: 'Fachbegriffe', page: '', trainer: true }
  ],
  links: [
    { label: 'Spickzettel', href: 'pdf/spickzettel.html' },
    { label: 'Lernblatt und Faltkarten', href: 'pdf/karten.html' },
    { label: 'So lerne ich am schnellsten', href: 'pdf/so-lerne-ich.html' }
  ]
};

const MODULES = {
  m1: 'Lernen durch Engagement',
  m2: 'Gesund essen',
  m3: 'Essen und Klima'
};

const LESSONS = [
  { id: 1, title: 'Engagement und Ehrenamt', module: 'm1' },
  { id: 2, title: 'Die vier Bereiche und Active Citizenship', module: 'm1' },
  { id: 3, title: 'DGE-Regeln 1 bis 5', module: 'm2' },
  { id: 4, title: 'DGE-Regeln 6 bis 11', module: 'm2' },
  { id: 5, title: 'Die Ernährungspyramide', module: 'm2' },
  { id: 6, title: 'Essen und Treibhausgase', module: 'm3' },
  { id: 7, title: 'Die drei Klimatipps', module: 'm3' },
  { id: 8, title: 'Fußabdruck und Handabdruck', module: 'm3' }
];
