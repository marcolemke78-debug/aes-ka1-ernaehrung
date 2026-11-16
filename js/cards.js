/**
 * Karten für den Begriffe-Trainer (AES-KA 1). IDs nie ändern.
 */
const CARDS = {
  title: 'Begriffe-Trainer',
  speak: null,
  reverse: false,
  mode: 'type',
  typePlaceholder: 'Antwort tippen …',
  items: [
    { id: 'b01', front: 'Unbezahlte, freiwillige Arbeit für das Gemeinwohl', back: 'Ehrenamt', alt: ['bürgerschaftliches Engagement'] },
    { id: 'b02', front: 'Bezahlte Arbeit', back: 'Erwerbsarbeit' },
    { id: 'b03', front: 'Was ist bürgerschaftliches Engagement?', back: 'Man setzt sich als Bürger/-in freiwillig für das Gemeinwohl in der Gesellschaft ein und bekommt dafür kein Geld (= Ehrenamt).', mode: 'reveal' },
    { id: 'b04', front: 'Nenne die vier Bereiche des Engagements.', back: 'sozial, ökologisch, kulturell, gesellschaftspolitisch', mode: 'reveal' },
    { id: 'b05', front: 'Engagement für die Umwelt, z. B. gegen den Klimawandel', back: 'ökologisch', alt: ['ökologisches Engagement'] },
    { id: 'b06', front: 'Engagement für andere Menschen, z. B. für Kinder oder bei der Feuerwehr', back: 'sozial', alt: ['soziales Engagement'] },
    { id: 'b07', front: 'Engagement in Musik, Literatur oder Kunst', back: 'kulturell', alt: ['kulturelles Engagement'] },
    { id: 'b08', front: 'Engagement in politischen Verbänden, z. B. für die Demokratie', back: 'gesellschaftspolitisch', alt: ['gesellschaftspolitisches Engagement', 'politisch'] },
    { id: 'b09', front: 'Was bedeutet Active (Global) Citizenship?', back: 'Aktive Teilhabe: Mitbestimmung und Mitgestaltung am demokratischen Zusammenleben, auch bei weltweiten Problemen (Klimawandel, Hunger, Kinderarbeit).', mode: 'reveal' },
    { id: 'b10', front: 'Wofür steht DGE?', back: 'Deutsche Gesellschaft für Ernährung' },
    { id: 'b11', front: 'DGE: Wie viel soll man täglich trinken? (in Litern)', back: '1,5', alt: ['1,5 Liter', '1.5', '1,5 l'] },
    { id: 'b12', front: 'DGE: Mindestens wie viele Portionen Obst und Gemüse pro Tag?', back: '5', alt: ['fünf', '5 Portionen'] },
    { id: 'b13', front: 'DGE: Höchstens wie viel Fleisch pro Woche? (in g)', back: '300', alt: ['300 g', '300g'] },
    { id: 'b14', front: 'DGE: Wie viele Portionen Milch und Milchprodukte pro Tag?', back: '2', alt: ['zwei', '2 Portionen'] },
    { id: 'b15', front: 'DGE: Wie oft Fisch?', back: '1–2 Portionen pro Woche', alt: ['1-2 pro Woche', '1-2 Portionen pro Woche', 'ein- bis zweimal pro Woche', '1-2'] },
    { id: 'b16', front: 'Zähle die 11 DGE-Regeln auf.', back: '1 Wasser trinken · 2 Obst und Gemüse · 3 Hülsenfrüchte und Nüsse · 4 Vollkorn · 5 Pflanzliche Öle · 6 Milch jeden Tag · 7 Fisch jede Woche · 8 Fleisch: weniger ist mehr · 9 Süßes, Salziges, Fettiges stehen lassen · 10 Mahlzeiten genießen · 11 Bewegung und Gewicht', mode: 'reveal' },
    { id: 'b17', front: 'Linsen, Bohnen, Erbsen, Kichererbsen heißen …', back: 'Hülsenfrüchte' },
    { id: 'b18', front: 'Pyramide: Was bedeuten Grün, Gelb und Rot?', back: 'Grün = reichlich, Gelb = maßvoll, Rot = sparsam', mode: 'reveal' },
    { id: 'b19', front: 'Pyramidenfrühstück: Welche vier Teile?', back: 'Getränk + Gemüse oder Obst + Getreide + Milchprodukt', mode: 'reveal' },
    { id: 'b20', front: 'Anteil der Ernährung an allen Treibhausgasen weltweit (in %)', back: '26', alt: ['26 %', '26%'] },
    { id: 'b21', front: 'Größter Treibhausgas-Anteil beim Essen (31 %)', back: 'Nutztierhaltung', alt: ['Tierhaltung'] },
    { id: 'b22', front: 'Gas, das Rinder bei der Verdauung ausstoßen', back: 'Methan' },
    { id: 'b23', front: 'Klimatipp 1 (Überschrift)', back: 'Mehr Obst, Gemüse, Hülsenfrüchte und Nüsse – weniger Fleisch, Milch und Eier essen', mode: 'reveal' },
    { id: 'b24', front: 'Klimatipp 2 (Überschrift)', back: 'Lebensmittel verwenden, nicht verschwenden!', mode: 'reveal' },
    { id: 'b25', front: 'Klimatipp 3 (Überschrift)', back: 'Bio, regional und saisonal einkaufen', mode: 'reveal' },
    { id: 'b26', front: 'Was misst der ökologische Fußabdruck?', back: 'Die Menge der Ressourcen, die ein Mensch durch seinen Lebensstil verbraucht. Je kleiner, desto besser.', mode: 'reveal' },
    { id: 'b27', front: 'Wofür steht der ökologische Handabdruck?', back: 'Für die positiven Maßnahmen, die ein Mensch unternimmt, um den Ausstoß von Emissionen zu verringern. Je größer, desto besser.', mode: 'reveal' }
  ]
};
