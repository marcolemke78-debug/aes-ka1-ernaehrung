// Prüfskript (Regel 7): rechnet jede Zahl-Aufgabe UNABHÄNGIG aus dem Aufgabentext nach.
// Für jede Aufgabe vom Typ 'number' muss unten eine eigene Rechnung stehen,
// die NICHT das Feld `answer` benutzt. Fehlt eine, meldet das Skript es.
// Aufruf (im Paketordner): node pruefung/nachrechnen.js
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ctx = { window: {} };
ctx.window = ctx;
vm.createContext(ctx);
const jsDir = path.join(__dirname, '..', 'js');
fs.readdirSync(jsDir).filter(f => /^lessons-.*\.js$/.test(f)).forEach(f => {
  vm.runInContext(fs.readFileSync(path.join(jsDir, f), 'utf8'), ctx);
});

// Eigene Rechnungen: Schlüssel = eindeutiges Stück aus dem Fragetext
const RECHNUNGEN = {
  'Lara isst in einer Woche 4-mal Fleisch': () => 4 * 120 - 300,   // g über der DGE-Höchstmenge
  'Wie viel Prozent der weltweiten Treibhausgase': () => 100 - 74   // M2: andere Quellen 74 %
};

let fehler = 0, geprueft = 0;
ctx.LESSON_DATA.forEach(lesson => (lesson.exercises || []).forEach((ex, i) => {
  if (ex.type !== 'number') return;
  const key = Object.keys(RECHNUNGEN).find(k => ex.question.indexOf(k) !== -1);
  const wo = 'Lektion ' + lesson.id + ', Übung ' + (i + 1);
  if (!key) { fehler++; console.log('FEHLT  ' + wo + ': keine eigene Rechnung'); return; }
  const soll = RECHNUNGEN[key]();
  geprueft++;
  if (Math.abs(soll - ex.answer) > 1e-9) { fehler++; console.log('FALSCH ' + wo + ': answer ' + ex.answer + ', nachgerechnet ' + soll); }
}));
console.log(geprueft + ' Aufgaben nachgerechnet, ' + fehler + ' Probleme');
process.exit(fehler ? 1 : 0);
