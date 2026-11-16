/**
 * Modul 2: Gesund essen. DGE-Empfehlungen 2024 (Zahlen wie im Heft), BZfE-Ernährungspyramide.
 */
(function () {
  // Eigene Pyramide als SVG. Zeilen von unten nach oben.
  function pyramid() {
    const rows = [
      { n: 6, c: '#7cc36b', t: '6 × Getränke' },
      { n: 5, c: '#7cc36b', t: '5 × Gemüse und Obst' },
      { n: 4, c: '#7cc36b', t: '4 × Getreide, Brot, Kartoffeln' },
      { n: 3, c: '#f2c94c', t: '2 × Milch + 1 × Fleisch/Fisch/Ei', last: '#f2994a' },
      { n: 2, c: '#f2c94c', t: 'Fette, Öle und Nüsse' },
      { n: 1, c: '#eb5757', t: '1 × Süßes, Snacks' }
    ];
    const w = 34, h = 30, gap = 3, cx = 120;
    let s = '<svg viewBox="0 0 470 210" width="100%" style="max-width:520px" role="img" aria-label="Ernährungspyramide">';
    rows.forEach(function (r, i) {
      const y = 200 - (i + 1) * (h + gap);
      const total = r.n * w + (r.n - 1) * gap;
      for (let k = 0; k < r.n; k++) {
        const x = cx - total / 2 + k * (w + gap);
        const col = (r.last && k === r.n - 1) ? r.last : r.c;
        s += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="4" fill="' + col + '" stroke="#444" stroke-width="0.8"/>';
      }
      s += '<text x="245" y="' + (y + 20) + '" font-size="13" fill="#222">' + r.t + '</text>';
    });
    s += '</svg>';
    return s;
  }

  window.LESSON_DATA = (window.LESSON_DATA || []).concat([
    {
      id: 3,
      title: 'DGE-Regeln 1 bis 5',
      explanation: {
        html: `
          <p>Die <strong>DGE</strong> ist die <strong>Deutsche Gesellschaft für Ernährung</strong>. Sie sagt, wie man sich gesund ernährt, und hat dafür <strong>11 Regeln</strong> aufgestellt. Die Zahlen (orange in deinem Heft) solltest du auswendig können.</p>
          <table class="info-table">
            <tr><th>Regel</th><th>Was heißt das genau?</th></tr>
            <tr><td><strong>1. Am besten Wasser trinken</strong></td><td>rund <strong>1,5 Liter</strong> täglich, am besten Wasser oder ungesüßten Tee. Zuckerhaltige und alkoholische Getränke sind nicht empfehlenswert.</td></tr>
            <tr><td><strong>2. Obst und Gemüse: viel und bunt</strong></td><td>mindestens <strong>5 Portionen</strong> täglich (Handmaß). Saisonale Auswahl wird empfohlen.</td></tr>
            <tr><td><strong>3. Hülsenfrüchte und Nüsse regelmäßig essen</strong></td><td>Hülsenfrüchte: mindestens <strong>1 Portion pro Woche</strong> (ca. 125 g gegart). Nüsse: ca. <strong>25 g täglich</strong>.</td></tr>
            <tr><td><strong>4. Vollkorn ist die beste Wahl</strong></td><td>Mindestens <strong>ein Drittel</strong> der Getreideprodukte als Vollkorn.</td></tr>
            <tr><td><strong>5. Pflanzliche Öle bevorzugen</strong></td><td><strong>10 g Pflanzenöl</strong> täglich (z. B. Rapsöl) plus <strong>10 g Margarine/Butter</strong>.</td></tr>
          </table>
          <div class="analogy-box"><strong>Handmaß:</strong> Eine Portion ist ungefähr so viel, wie in deine Hand passt. Ein Apfel = 1 Portion, eine Handvoll Beeren = 1 Portion, eine Paprika = 1 Portion. Weil Kinder kleinere Hände haben, sind ihre Portionen automatisch kleiner. Praktisch, oder?</div>
          <div class="tip-box"><strong>Hülsenfrüchte</strong> sind Linsen, Bohnen, Erbsen und Kichererbsen. Sie enthalten viel Eiweiß und sind gut fürs Klima.</div>
          <div class="why-context"><strong>Warum ist das wichtig?</strong> In der KA kann gefragt werden: &bdquo;Wie viel soll man laut DGE trinken?&ldquo; oder &bdquo;Nenne drei Regeln der DGE.&ldquo;</div>`
      },
      example: {
        title: 'Ein Tag von Mia, geprüft mit Regel 1 und 2',
        steps: [
          { label: 'Was isst und trinkt Mia?', html: '<p>Mia trinkt 3 Gläser Cola und 1 Glas Wasser. Sie isst einen Apfel und mittags etwas Salat.</p>' },
          { label: 'Regel 1 prüfen', html: '<p>Cola enthält viel Zucker. Die DGE empfiehlt Wasser oder ungesüßten Tee, rund 1,5 Liter. <strong>Nicht erfüllt.</strong></p>' },
          { label: 'Regel 2 prüfen', html: '<p>Apfel + Salat = 2 Portionen. Empfohlen sind mindestens 5. <strong>Nicht erfüllt.</strong> Tipp: Gurke zum Pausenbrot, Banane am Nachmittag, Gemüse zum Abendessen.</p>' }
        ]
      },
      exercises: [
        {
          type: 'fill-in-blank',
          question: 'Ergänze die Zahlen der DGE-Regeln.',
          text: 'Man soll rund {{blank}} Liter am Tag trinken und mindestens {{blank}} Portionen Obst und Gemüse essen. Nüsse: ca. {{blank}} g täglich.',
          blanks: [
            { correct: '1,5', alternatives: ['1.5', 'eineinhalb', 'anderthalb'] },
            { correct: '5', alternatives: ['fünf'] },
            { correct: '25', alternatives: ['fünfundzwanzig'] }
          ],
          explanation: '1,5 Liter trinken, 5 Portionen Obst und Gemüse, 25 g Nüsse am Tag.'
        },
        {
          type: 'matching',
          question: 'Welche Menge gehört zu welcher Regel?',
          pairs: [
            { left: 'Hülsenfrüchte', right: 'mind. 1 Portion pro Woche' },
            { left: 'Vollkorn', right: 'mind. ein Drittel der Getreideprodukte' },
            { left: 'Pflanzenöl', right: '10 g täglich' },
            { left: 'Getränke', right: 'rund 1,5 Liter täglich' }
          ],
          explanation: 'Hülsenfrüchte 1 Portion pro Woche (ca. 125 g gegart), Vollkorn mindestens ein Drittel, 10 g Pflanzenöl plus 10 g Margarine/Butter am Tag, 1,5 Liter trinken.'
        },
        {
          type: 'multiple-choice',
          question: 'Welches Getränk empfiehlt die DGE am meisten?',
          options: ['Apfelsaft', 'Wasser oder ungesüßter Tee', 'Eistee', 'Milch statt Wasser'],
          correct: 1,
          wrongExplanations: {
            0: 'Saft enthält viel Fruchtzucker. Zuckerhaltige Getränke sind laut DGE nicht empfehlenswert.',
            2: 'Eistee ist meistens stark gezuckert.',
            3: 'Milch zählt als Lebensmittel (Regel 6), nicht als Durstlöscher.'
          }
        },
        {
          type: 'multiple-choice',
          question: 'Welche dieser Lebensmittel sind <strong>Hülsenfrüchte</strong>?',
          options: ['Kartoffeln und Mais', 'Haselnüsse und Walnüsse', 'Linsen und Kichererbsen', 'Reis und Nudeln'],
          correct: 2,
          wrongExplanations: {
            0: 'Kartoffeln sind Knollen, Mais ist Getreide.',
            1: 'Nüsse haben eine eigene Regel, sind aber keine Hülsenfrüchte.',
            3: 'Reis und Nudeln sind Getreideprodukte (Regel 4).'
          }
        }
      ]
    },
    {
      id: 4,
      title: 'DGE-Regeln 6 bis 11',
      explanation: {
        html: `
          <table class="info-table">
            <tr><th>Regel</th><th>Was heißt das genau?</th></tr>
            <tr><td><strong>6. Milch und Milchprodukte jeden Tag</strong></td><td><strong>2 Portionen</strong> täglich (z. B. Joghurt, Käse). Bei pflanzlichen Alternativen (Hafer-, Sojadrink) auf Calcium, Jod und B-Vitamine achten.</td></tr>
            <tr><td><strong>7. Fisch jede Woche</strong></td><td><strong>1–2 Portionen pro Woche</strong>, am besten aus nachhaltigen Beständen.</td></tr>
            <tr><td><strong>8. Fleisch und Wurst: weniger ist mehr</strong></td><td><strong>maximal 300 g pro Woche</strong>. Weniger rotes Fleisch (Rind, Schwein) wird empfohlen.</td></tr>
            <tr><td><strong>9. Süßes, Salziges und Fettiges: besser stehen lassen</strong></td><td>nur <strong>selten</strong> und in <strong>kleinen Mengen</strong>.</td></tr>
            <tr><td><strong>10. Mahlzeiten genießen</strong></td><td>in <strong>Ruhe</strong> essen, <strong>bewusst</strong> genießen.</td></tr>
            <tr><td><strong>11. In Bewegung bleiben und auf das Gewicht achten</strong></td><td>regelmäßig körperlich aktiv sein und ein gesundes Körpergewicht halten.</td></tr>
          </table>
          <div class="analogy-box"><strong>Wie viel sind 300 g Fleisch?</strong> Ein Schnitzel wiegt etwa 150 g. Zwei Schnitzel pro Woche, und das Fleisch-Budget ist schon aufgebraucht. Wurst auf dem Brot zählt auch mit!</div>
          <div class="warning-box"><strong>Nicht verwechseln:</strong> Milch = <strong>jeden Tag</strong> (2 Portionen). Fisch = <strong>jede Woche</strong> (1–2 Portionen). Fleisch = <strong>höchstens</strong> 300 g pro <strong>Woche</strong>.</div>
          <div class="why-context"><strong>Warum ist das wichtig?</strong> Die Regeln 1 bis 11 laufen ungefähr von &bdquo;viel davon&ldquo; zu &bdquo;wenig davon&ldquo;. Am Ende stehen Genießen und Bewegung. So kannst du dir die Reihenfolge merken.</div>`
      },
      example: {
        title: 'Hält Ben die Fleisch-Regel ein?',
        steps: [
          { label: 'Bens Woche', html: '<p>Ben isst am Montag eine Bratwurst (100 g), am Mittwoch Hähnchen (150 g) und am Samstag einen Burger (150 g).</p>' },
          { label: 'Zusammenrechnen', html: '<p>100 g + 150 g + 150 g = <strong>400 g</strong></p>' },
          { label: 'Vergleichen', html: '<p>Die DGE empfiehlt höchstens 300 g. Ben liegt <strong>100 g darüber</strong>. Er könnte z. B. den Burger durch einen Gemüse- oder Linsenburger ersetzen.</p>' }
        ]
      },
      exercises: [
        {
          type: 'number',
          question: 'Lara isst in einer Woche 4-mal Fleisch, jedes Mal 120 g. Wie viel Gramm liegt sie über der DGE-Empfehlung?',
          answer: 180,
          unit: 'g',
          hint: 'Erst die Wochenmenge ausrechnen, dann die Höchstmenge der DGE abziehen.',
          solution: '4 · 120 g = 480 g<br>480 g − 300 g = <strong>180 g</strong> zu viel'
        },
        {
          type: 'matching',
          question: 'Wie oft? Ordne zu.',
          pairs: [
            { left: 'Milch und Milchprodukte', right: '2 Portionen täglich' },
            { left: 'Fisch', right: '1–2 Portionen pro Woche' },
            { left: 'Fleisch und Wurst', right: 'maximal 300 g pro Woche' },
            { left: 'Süßes, Salziges, Fettiges', right: 'selten und in kleinen Mengen' }
          ],
          explanation: 'Milch täglich, Fisch wöchentlich, Fleisch höchstens 300 g pro Woche, Süßes nur selten.'
        },
        {
          type: 'multiple-choice',
          question: 'Worauf soll man bei <strong>pflanzlichen Milch-Alternativen</strong> laut DGE achten?',
          options: ['Auf möglichst wenig Eiweiß', 'Dass sie aus der Region kommen', 'Dass sie keine Vitamine enthalten', 'Auf Calcium, Jod und B-Vitamine'],
          correct: 3,
          wrongExplanations: {
            0: 'Eiweiß ist nicht das Problem. In Kuhmilch steckt viel Calcium und Jod, das fehlt manchen Pflanzendrinks.',
            1: 'Regional ist gut fürs Klima, aber die DGE-Regel 6 meint die Nährstoffe.',
            2: 'Im Gegenteil: Sie sollen genug Calcium, Jod und B-Vitamine enthalten.'
          }
        },
        {
          type: 'ordering',
          question: 'Bringe diese DGE-Regeln in die richtige Reihenfolge (von Regel 1 an).',
          items: ['Am besten Wasser trinken', 'Vollkorn ist die beste Wahl', 'Fisch jede Woche', 'Fleisch und Wurst: weniger ist mehr', 'Mahlzeiten genießen'],
          correctOrder: [0, 1, 2, 3, 4],
          explanation: 'Regel 1 Wasser, Regel 4 Vollkorn, Regel 7 Fisch, Regel 8 Fleisch, Regel 10 Mahlzeiten genießen.'
        }
      ]
    },
    {
      id: 5,
      title: 'Die Ernährungspyramide',
      explanation: {
        html: `
          <p>Die <strong>Ernährungspyramide</strong> vom Bundeszentrum für Ernährung (BZfE) zeigt die DGE-Regeln als Bild. Jeder Baustein ist <strong>eine Portion</strong> (Handmaß) <strong>pro Tag</strong>.</p>
          ${pyramid()}
          <p>Die Farben funktionieren wie eine <strong>Ampel</strong>:</p>
          <ul>
            <li><strong style="color:#3a8a2c">Grün (unten):</strong> reichlich. Getränke, Gemüse und Obst, Getreide und Kartoffeln.</li>
            <li><strong style="color:#b8860b">Gelb (Mitte):</strong> maßvoll. Milchprodukte, Fleisch/Fisch/Ei, Fette und Öle, Nüsse.</li>
            <li><strong style="color:#c0392b">Rot (Spitze):</strong> sparsam. Süßes und salzige Snacks.</li>
          </ul>
          <div class="analogy-box"><strong>Wie ein Haus:</strong> Unten ist das breite Fundament. Davon braucht man am meisten. Je weiter nach oben, desto schmaler wird es und desto weniger davon braucht man. Die Spitze ist wie das Dach: klein.</div>
          <div class="warning-box"><strong>Das ist neu:</strong> In der <strong>neuen</strong> Pyramide (seit 2024) gibt es nur noch <strong>2 Bausteine Milch</strong> und <strong>1 Baustein Fleisch/Fisch/Ei</strong>. Die neue Pyramide achtet nämlich nicht nur auf die Gesundheit, sondern auch auf die <strong>Umwelt und das Klima</strong>.</div>
          <h3>Das Pyramidenfrühstück</h3>
          <p>Ein gutes Frühstück besteht aus vier Teilen: <strong>Getränk</strong> (Wasser) + <strong>Gemüse oder Obst</strong> (Möhre oder Apfel) + <strong>Getreide</strong> (Vollkornbrot, Haferflocken) + <strong>Milchprodukt</strong> (Joghurt, Käse, Milch). Damit ist man fit für den Unterricht und für den Sport.</p>
          <div class="why-context"><strong>Warum ist das wichtig?</strong> Auf dem Blatt A3 sollst du die Symbole erklären. In der KA kann eine Pyramide abgebildet sein, an der du zeigen sollst, wovon man viel und wovon man wenig essen soll.</div>`
      },
      example: {
        title: 'Symbole erklären (Blatt A3)',
        steps: [
          { label: 'Glas', html: '<p>Das Glas steht für ein <strong>Getränk</strong>, am besten Wasser.</p>' },
          { label: 'Möhre oder Apfel', html: '<p>Steht für eine Portion <strong>Gemüse oder Obst</strong>.</p>' },
          { label: 'Ähren', html: '<p>Stehen für <strong>Getreide</strong>: Brot, Brötchen, Müsli, am besten Vollkorn.</p>' },
          { label: 'Milchpackung', html: '<p>Steht für ein <strong>Milchprodukt</strong>: Milch, Joghurt oder Käse.</p>' }
        ]
      },
      exercises: [
        {
          type: 'fill-in-blank',
          question: 'Wie viele Bausteine (Portionen pro Tag) hat die Pyramide?',
          text: 'Getränke: {{blank}} · Gemüse und Obst: {{blank}} · Getreide und Kartoffeln: {{blank}} · Milch und Milchprodukte: {{blank}} · Süßes und Snacks: {{blank}}',
          blanks: [
            { correct: '6', alternatives: ['sechs'] },
            { correct: '5', alternatives: ['fünf'] },
            { correct: '4', alternatives: ['vier'] },
            { correct: '2', alternatives: ['zwei'] },
            { correct: '1', alternatives: ['eins', 'ein', 'einer'] }
          ],
          explanation: 'Von unten nach oben: 6 Getränke, 5 Gemüse und Obst, 4 Getreide, 2 Milch (+1 Fleisch/Fisch/Ei), ganz oben 1 Süßes.'
        },
        {
          type: 'matching',
          question: 'Welche Ampelfarbe hat die Lebensmittelgruppe in der Pyramide?',
          pairs: [
            { left: 'Gemüse und Obst', right: 'grün: reichlich' },
            { left: 'Käse und Joghurt', right: 'gelb: maßvoll' },
            { left: 'Chips und Gummibärchen', right: 'rot: sparsam' },
            { left: 'Vollkornbrot', right: 'grün: reichlich' }
          ],
          explanation: 'Unten grün (Getränke, Obst/Gemüse, Getreide), Mitte gelb (Milch, Fleisch, Fette, Nüsse), Spitze rot (Süßes, Snacks).'
        },
        {
          type: 'multiple-choice',
          question: 'Warum hat die <strong>neue</strong> Pyramide weniger Bausteine für Milch und Fleisch?',
          options: ['Weil Milch und Fleisch giftig sind', 'Weil sie auch Umwelt und Klima berücksichtigt', 'Weil diese Lebensmittel zu teuer geworden sind', 'Weil Kinder keine Milch mehr brauchen'],
          correct: 1,
          wrongExplanations: {
            0: 'Milch und Fleisch sind nicht giftig, sie sind nur in kleineren Mengen empfohlen.',
            2: 'Der Preis spielt für die Empfehlung keine Rolle.',
            3: 'Milch bleibt wichtig (2 Portionen täglich), aber es sind weniger als früher.'
          }
        },
        {
          type: 'free-text',
          question: 'Stelle ein <strong>Pyramidenfrühstück</strong> zusammen. Nenne für jeden der vier Teile ein Lebensmittel.',
          minWords: 8,
          modelAnswer: 'Ein Glas Wasser (Getränk), ein Apfel (Obst), ein Vollkornbrötchen (Getreide) und ein Naturjoghurt (Milchprodukt).'
        }
      ]
    }
  ]);
})();
