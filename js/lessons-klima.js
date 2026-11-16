/**
 * Modul 3: Essen und Klima. Inhalt nach BZfE/BLE-Heft "Was hat unser Essen mit dem Klima zu tun?"
 * (CC-BY-NC-SA 4.0, BLE 2024, Artikel-Nr. 3659). Eigene Grafiken, Texte umformuliert.
 * M2-Daten: Poore & Nemecek 2018, Our World in Data.
 */
(function () {
  function bars() {
    const parts = [
      { p: 31, c: '#1f4e79', t: 'Nutztierhaltung (auch Fischerei)' },
      { p: 27, c: '#2e7d32', t: 'Pflanzenanbau (für Menschen und Tierfutter)' },
      { p: 24, c: '#7a8b2a', t: 'Flächennutzung (für Nutztiere und Pflanzenanbau)' },
      { p: 18, c: '#3f7cc4', t: 'Handel, Verpackung, Transport, Verarbeitung' }
    ];
    let s = '<svg viewBox="0 0 500 250" width="100%" style="max-width:560px" role="img" aria-label="Anteil der Ernährung an den Treibhausgasen">';
    s += '<text x="0" y="16" font-size="14" font-weight="bold" fill="#222">Alle Treibhausgase weltweit</text>';
    s += '<rect x="0" y="24" width="' + (500 * 0.26) + '" height="34" fill="#9bc27a" stroke="#444"/>';
    s += '<rect x="' + (500 * 0.26) + '" y="24" width="' + (500 * 0.74) + '" height="34" fill="#efe3c8" stroke="#444"/>';
    s += '<text x="8" y="46" font-size="13" font-weight="bold">Essen 26 %</text>';
    s += '<text x="150" y="46" font-size="13">andere Quellen 74 % (z. B. Verkehr, Wohnen)</text>';
    s += '<text x="0" y="88" font-size="14" font-weight="bold" fill="#222">Woher kommen die 26 % beim Essen?</text>';
    parts.forEach(function (q, i) {
      const y = 98 + i * 36;
      s += '<rect x="0" y="' + y + '" width="' + (q.p * 5) + '" height="28" rx="3" fill="' + q.c + '"/>';
      s += '<text x="6" y="' + (y + 19) + '" font-size="13" font-weight="bold" fill="#fff">' + q.p + ' %</text>';
      s += '<text x="' + (q.p * 5 + 8) + '" y="' + (y + 19) + '" font-size="12.5" fill="#222">' + q.t + '</text>';
    });
    return s + '</svg>';
  }

  function greenhouse() {
    return '<svg viewBox="0 0 420 200" width="100%" style="max-width:460px" role="img" aria-label="Treibhauseffekt">' +
      '<rect x="0" y="0" width="420" height="200" fill="#eaf4fb"/>' +
      '<circle cx="50" cy="40" r="24" fill="#f6c343"/>' +
      '<path d="M10 70 Q210 20 410 70" fill="none" stroke="#7a9cc6" stroke-width="10" stroke-dasharray="6 4"/>' +
      '<text x="90" y="20" font-size="12" fill="#2b4a73">Treibhausgase (CO₂, Methan, Lachgas)</text>' +
      '<rect x="0" y="160" width="420" height="40" fill="#9bc27a"/>' +
      '<text x="160" y="186" font-size="13" fill="#1d3b12">Erde</text>' +
      '<line x1="70" y1="60" x2="150" y2="160" stroke="#e6a100" stroke-width="3" marker-end="url(#ah)"/>' +
      '<text x="20" y="120" font-size="12" fill="#8a5a00">Sonnenlicht</text>' +
      '<line x1="200" y1="160" x2="250" y2="62" stroke="#d9534f" stroke-width="3" marker-end="url(#ah2)"/>' +
      '<line x1="252" y1="62" x2="300" y2="155" stroke="#d9534f" stroke-width="3" marker-end="url(#ah2)"/>' +
      '<text x="305" y="125" font-size="12" fill="#a33">Wärme wird</text><text x="305" y="140" font-size="12" fill="#a33">zurückgehalten</text>' +
      '<defs><marker id="ah" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#e6a100"/></marker>' +
      '<marker id="ah2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#d9534f"/></marker></defs>' +
      '</svg>';
  }

  window.LESSON_DATA = (window.LESSON_DATA || []).concat([
    {
      id: 6,
      title: 'Essen und Treibhausgase',
      explanation: {
        html: `
          <h3>Der Treibhauseffekt</h3>
          ${greenhouse()}
          <p>Um die Erde liegt eine Hülle aus Gasen, die <strong>Atmosphäre</strong>. Darin sind <strong>Treibhausgase</strong>, vor allem <strong>CO₂</strong> (Kohlendioxid), <strong>Methan</strong> und <strong>Lachgas</strong>. Das Sonnenlicht erwärmt die Erde. Die Treibhausgase halten einen Teil der Wärme fest, wie das Glasdach eines Gewächshauses.</p>
          <div class="analogy-box"><strong>Wie eine Bettdecke:</strong> Ohne Decke frierst du nachts, deshalb ist der natürliche Treibhauseffekt gut. Ohne ihn wäre es auf der Erde viel zu kalt. Aber mit fünf Decken wird es viel zu warm. Genau das machen wir Menschen: Durch <strong>mehr CO₂ und mehr Methan</strong> verstärken wir den Treibhauseffekt, und die Erde wird immer wärmer.</div>
          <h3>Was hat unser Essen damit zu tun? (M2)</h3>
          ${bars()}
          <p>Etwa ein <strong>Viertel (26 %)</strong> aller Treibhausgase weltweit kommt von unserer <strong>Ernährung</strong>. Den größten Anteil davon hat die <strong>Nutztierhaltung</strong> mit 31 %. Kühe stoßen beim Verdauen <strong>Methan</strong> aus. Methan schadet dem Klima noch viel mehr als CO₂.</p>
          <div class="warning-box"><strong>Überraschung:</strong> Viele denken, der Transport sei das Hauptproblem. Handel, Verpackung, Transport und Verarbeitung zusammen machen aber nur <strong>18 % von den 26 %</strong> aus. <strong>Was</strong> wir essen, zählt also am meisten. Regional und saisonal einkaufen (Klimatipp 3) ist trotzdem richtig, denn auch kleine Anteile summieren sich.</div>
          <div class="why-context"><strong>Warum ist das wichtig?</strong> M2 war eine Schätzaufgabe. In der KA kann gefragt werden, wie groß der Anteil des Essens ist und welcher Bereich am meisten ausstößt.</div>`
      },
      example: {
        title: 'Das Diagramm M2 lesen',
        steps: [
          { label: 'Oberer Balken', html: '<p>Der ganze Balken sind <strong>alle</strong> Treibhausgase weltweit (100 %). Davon entfallen 26 % auf die Ernährung, 74 % auf andere Quellen wie Verkehr und Wohnen.</p>' },
          { label: 'Untere Balken', html: '<p>Die 26 % vom Essen werden noch einmal aufgeteilt. Diese vier Teile ergeben zusammen wieder 100 %: 31 + 27 + 24 + 18 = 100.</p>' },
          { label: 'Aussage', html: '<p>Der größte Teil kommt aus der <strong>Nutztierhaltung</strong> (31 %), der kleinste aus <strong>Handel, Verpackung, Transport</strong> (18 %).</p>' }
        ]
      },
      exercises: [
        {
          type: 'number',
          question: 'Wie viel Prozent der weltweiten Treibhausgase entstehen durch unsere Ernährung?',
          answer: 26,
          unit: '%',
          solution: 'Laut M2 sind es <strong>26 %</strong>, also ungefähr ein Viertel. Die übrigen 74 % kommen aus anderen Quellen.'
        },
        {
          type: 'ordering',
          question: 'Ordne die Bereiche aus M2 nach ihrem Anteil: vom größten zum kleinsten.',
          items: ['Nutztierhaltung', 'Pflanzenanbau', 'Flächennutzung', 'Handel, Verpackung, Transport'],
          correctOrder: [0, 1, 2, 3],
          explanation: 'Nutztierhaltung 31 %, Pflanzenanbau 27 %, Flächennutzung 24 %, Handel/Verpackung/Transport 18 %.'
        },
        {
          type: 'fill-in-blank',
          question: 'Nenne die drei wichtigsten Treibhausgase.',
          text: '{{blank}}, {{blank}} und {{blank}}',
          blanks: [
            { correct: 'CO2', alternatives: ['CO₂', 'Kohlendioxid', 'Kohlenstoffdioxid', 'Methan', 'Lachgas'] },
            { correct: 'Methan', alternatives: ['CO2', 'CO₂', 'Kohlendioxid', 'Kohlenstoffdioxid', 'Lachgas'] },
            { correct: 'Lachgas', alternatives: ['CO2', 'CO₂', 'Kohlendioxid', 'Kohlenstoffdioxid', 'Methan'] }
          ],
          explanation: 'CO₂ (Kohlendioxid), Methan und Lachgas. Methan entsteht vor allem bei der Tierhaltung.'
        },
        {
          type: 'multiple-choice',
          question: 'Was stimmt über den <strong>natürlichen</strong> Treibhauseffekt?',
          options: ['Ohne ihn wäre es auf der Erde viel zu kalt.', 'Er entsteht erst, seit es Autos, Fabriken und Kraftwerke gibt.', 'Er kühlt die Erde ab.', 'Er hat mit Gasen nichts zu tun.'],
          correct: 0,
          wrongExplanations: {
            1: 'Den natürlichen Treibhauseffekt gab es schon immer. Wir Menschen <em>verstärken</em> ihn nur.',
            2: 'Die Gase halten Wärme fest, sie wärmen also.',
            3: 'Gerade die Treibhausgase in der Atmosphäre halten die Wärme fest.'
          }
        },
        {
          type: 'free-text',
          question: 'Erkläre, warum <strong>Fleisch</strong> dem Klima besonders schadet. Nutze M2.',
          minWords: 15,
          modelAnswer: 'Laut M2 verursacht die Nutztierhaltung mit 31 % den größten Teil der Treibhausgase beim Essen. Rinder stoßen Methan aus, das noch klimaschädlicher ist als CO₂. Außerdem braucht man viele Flächen für Weiden und Tierfutter.'
        }
      ]
    },
    {
      id: 7,
      title: 'Die drei Klimatipps',
      explanation: {
        html: `
          <p>Im Unterricht gab es drei Stationen mit je einem <strong>Klimatipp</strong>. Für die KA musst du die <strong>Überschriften</strong> kennen:</p>
          <table class="info-table">
            <tr><th>Klimatipp</th><th>Überschrift</th></tr>
            <tr><td><strong>1</strong></td><td><strong>Mehr Obst, Gemüse, Hülsenfrüchte und Nüsse – weniger Fleisch, Milch und Eier essen</strong></td></tr>
            <tr><td><strong>2</strong></td><td><strong>Lebensmittel verwenden, nicht verschwenden!</strong></td></tr>
            <tr><td><strong>3</strong></td><td><strong>Bio, regional und saisonal einkaufen</strong></td></tr>
          </table>
          <div class="analogy-box"><strong>Merkhilfe:</strong> <strong>Was</strong> esse ich? (Tipp 1) · <strong>Werfe</strong> ich etwas weg? (Tipp 2) · <strong>Wo und wann</strong> kaufe ich ein? (Tipp 3)</div>
          <h3>Zum Verstehen (kurz)</h3>
          <ul>
            <li><strong>Tipp 1:</strong> Tiere brauchen viel Futter und Weidefläche, Rinder stoßen Methan aus. Pflanzen sind klimafreundlicher.</li>
            <li><strong>Tipp 2:</strong> Jeder Mensch in Deutschland wirft im Schnitt <strong>78 kg</strong> Lebensmittel pro Jahr weg. Wasser, Energie und Ackerboden für diese Lebensmittel wurden umsonst verbraucht.</li>
            <li><strong>Tipp 3:</strong> <strong>Bio</strong> = ohne chemisch-synthetische Pflanzenschutzmittel, gut für Böden und Artenvielfalt. <strong>Regional</strong> = aus der Nähe, kurze Wege. <strong>Saisonal</strong> = wächst gerade bei uns, braucht kein geheiztes Gewächshaus. Flugware (z. B. Mangos) ist schlecht fürs Klima.</li>
          </ul>
          <div class="why-context"><strong>Warum ist das wichtig?</strong> Die drei Überschriften waren auf deinen Blättern rot eingekreist. Am besten kannst du sie aufschreiben, ohne nachzuschauen.</div>`
      },
      example: {
        title: 'Welcher Tipp passt?',
        steps: [
          { label: 'Situation', html: '<p>Familie Weber kauft im November Erdbeeren aus Südafrika.</p>' },
          { label: 'Überlegen', html: '<p>Erdbeeren wachsen bei uns im Sommer, nicht im November. Sie sind weder regional noch saisonal.</p>' },
          { label: 'Ergebnis', html: '<p><strong>Klimatipp 3</strong> (Bio, regional und saisonal einkaufen) wird nicht eingehalten. Besser: im November Äpfel aus der Region.</p>' }
        ]
      },
      exercises: [
        {
          type: 'fill-in-blank',
          question: 'Ergänze die Überschriften der Klimatipps.',
          text: 'Klimatipp 1: Mehr Obst, Gemüse, {{blank}} und Nüsse – weniger Fleisch, Milch und Eier essen.<br>Klimatipp 2: Lebensmittel {{blank}}, nicht {{blank}}!<br>Klimatipp 3: Bio, {{blank}} und {{blank}} einkaufen.',
          blanks: [
            { correct: 'Hülsenfrüchte', alternatives: ['Huelsenfruechte'] },
            { correct: 'verwenden', alternatives: [] },
            { correct: 'verschwenden', alternatives: [] },
            { correct: 'regional', alternatives: ['saisonal'] },
            { correct: 'saisonal', alternatives: ['regional'] }
          ],
          explanation: 'Tipp 1: Mehr Obst, Gemüse, Hülsenfrüchte und Nüsse – weniger Fleisch, Milch und Eier essen. Tipp 2: Lebensmittel verwenden, nicht verschwenden! Tipp 3: Bio, regional und saisonal einkaufen.'
        },
        {
          type: 'matching',
          question: 'Welcher Klimatipp passt zu der Handlung?',
          pairs: [
            { left: 'Linsen-Bolognese statt Hackfleisch kochen', right: 'Klimatipp 1' },
            { left: 'Reste vom Abendessen am nächsten Tag essen', right: 'Klimatipp 2' },
            { left: 'Im Winter Kohl vom Bauernmarkt kaufen', right: 'Klimatipp 3' },
            { left: 'Das Mensa-Essen abbestellen, wenn man krank ist', right: 'Klimatipp 2' }
          ],
          explanation: 'Weniger Fleisch = Tipp 1. Nichts wegwerfen = Tipp 2. Aus der Region und passend zur Jahreszeit = Tipp 3.'
        },
        {
          type: 'multiple-choice',
          question: 'Was bedeutet <strong>saisonal</strong> einkaufen?',
          options: ['Nur im Sommer einkaufen', 'Nur Bio-Produkte kaufen', 'Kaufen, was gerade bei uns wächst und reif ist', 'Lebensmittel kaufen, die gerade im Angebot und deshalb besonders günstig sind'],
          correct: 2,
          wrongExplanations: {
            0: 'Man kann das ganze Jahr saisonal einkaufen, z. B. im Winter Kohl und Äpfel.',
            1: 'Bio ist ein eigener Teil des Tipps. Saisonal hat mit der Jahreszeit zu tun.',
            3: 'Ein Angebot hat nichts mit der Jahreszeit zu tun.'
          }
        }
      ]
    },
    {
      id: 8,
      title: 'Fußabdruck und Handabdruck',
      explanation: {
        html: `
          <p>Für Klimaschutz gibt es zwei Ansatzpunkte: den <strong>ökologischen Fußabdruck</strong> und den <strong>ökologischen Handabdruck</strong>.</p>
          <table class="info-table">
            <tr><th>👣 Fußabdruck</th><th>🖐 Handabdruck</th></tr>
            <tr><td>misst, wie viele <strong>Ressourcen</strong> (Wasser, Energie, Fläche …) ein Mensch durch seinen <strong>Lebensstil verbraucht</strong></td><td>steht für die <strong>positiven Maßnahmen</strong>, die ein Mensch <strong>unternimmt</strong>, um den Ausstoß von Emissionen (Treibhausgasen) zu verringern</td></tr>
            <tr><td><strong>Je kleiner, desto besser.</strong></td><td><strong>Je größer, desto besser.</strong></td></tr>
            <tr><td>z. B. weniger Fleisch essen, mit dem Fahrrad einkaufen</td><td>z. B. Freunde zu klimafreundlichem Essen inspirieren, sich in einer AG für Umweltschutz engagieren</td></tr>
          </table>
          <div class="analogy-box"><strong>Wie im Schnee:</strong> Der Fußabdruck ist die Spur, die du hinterlässt. Je weniger Spuren, desto weniger Schaden. Mit der Hand dagegen packst du an und gestaltest. Mit dem Handabdruck veränderst du etwas, oft auch bei anderen Menschen.</div>
          <div class="tip-box"><strong>Verbindung zu Thema 1:</strong> Wer sich engagiert (z. B. ökologisches Engagement in einer Umwelt-AG), vergrößert seinen <strong>Handabdruck</strong>.</div>
          <h3>Der Selbsttest (M1a/M1b)</h3>
          <p>Im Selbsttest hast du bei Aussage 1 bis 6 (Essen, Einkaufen) die Fläche deines <strong>Fußabdrucks</strong> ausgemalt und bei Aussage 7 bis 9 (Lebensmittel retten, andere inspirieren, sich engagieren) die Fläche deines <strong>Handabdrucks</strong>.</p>
          <div class="why-context"><strong>Warum ist das wichtig?</strong> In der KA sollst du vermutlich beide Begriffe erklären und Beispiele zuordnen. Die Merkregel &bdquo;Fuß klein, Hand groß&ldquo; hilft dir dabei.</div>`
      },
      example: {
        title: 'Fuß oder Hand?',
        steps: [
          { label: 'Handlung 1', html: '<p>Jana isst in der Mensa das vegetarische Gericht. Sie verbraucht weniger Ressourcen, also <strong>verkleinert</strong> sie ihren <strong>Fußabdruck</strong>.</p>' },
          { label: 'Handlung 2', html: '<p>Jana sammelt Unterschriften, damit die Mensa jeden Tag ein vegetarisches Gericht anbietet. Damit verändert sie etwas für viele, also <strong>vergrößert</strong> sie ihren <strong>Handabdruck</strong>.</p>' },
          { label: 'Merke', html: '<p>Fußabdruck = was <strong>ich verbrauche</strong>. Handabdruck = was ich <strong>anstoße und bewege</strong>, oft über mich selbst hinaus.</p>' }
        ]
      },
      exercises: [
        {
          type: 'matching',
          question: 'Verkleinert die Handlung den Fußabdruck oder vergrößert sie den Handabdruck?',
          pairs: [
            { left: 'Ich esse nur noch einmal pro Woche Fleisch.', right: 'Fußabdruck wird kleiner' },
            { left: 'Ich gründe mit anderen eine Klima-AG an der Schule.', right: 'Handabdruck wird größer' },
            { left: 'Ich fahre mit dem Fahrrad statt mit dem Auto zum Einkaufen.', right: 'Fußabdruck wird kleiner' },
            { left: 'Ich bringe meine Familie dazu, öfter klimafreundlich zu kochen.', right: 'Handabdruck wird größer' }
          ],
          explanation: 'Was ich selbst weniger verbrauche, verkleinert den Fußabdruck. Wenn ich mich einsetze und andere mitziehe, wird der Handabdruck größer.'
        },
        {
          type: 'fill-in-blank',
          question: 'Ergänze die Merkregel.',
          text: 'Beim Fußabdruck gilt: je {{blank}}, desto besser. Beim Handabdruck gilt: je {{blank}}, desto besser.',
          blanks: [
            { correct: 'kleiner', alternatives: [] },
            { correct: 'größer', alternatives: ['groesser'] }
          ],
          explanation: 'Fuß klein, Hand groß.'
        },
        {
          type: 'multiple-choice',
          question: '<strong>Gemischt:</strong> Nina ist in einer Umweltgruppe, die einmal im Monat Müll im Park sammelt. Was trifft zu?',
          options: ['Erwerbsarbeit, sie verkleinert ihren Handabdruck', 'Kulturelles Engagement, sie vergrößert ihren Fußabdruck', 'Ökologisches Engagement, sie vergrößert ihren Handabdruck', 'Soziales Engagement, sie verkleinert ihren Fußabdruck'],
          correct: 2,
          wrongExplanations: {
            0: 'Sie bekommt kein Geld, also ist es Ehrenamt. Und der Handabdruck soll größer werden.',
            1: 'Es geht um die Umwelt, nicht um Kunst oder Musik. Und ein größerer Fußabdruck wäre schlecht.',
            3: 'Es geht vor allem um die Umwelt, also ökologisch. Weil sie aktiv etwas anstößt, wächst eher ihr Handabdruck.'
          }
        },
        {
          type: 'free-text',
          question: 'KA-Aufgabe: Beschreibe den ökologischen <strong>Fußabdruck</strong> und den ökologischen <strong>Handabdruck</strong>.',
          minWords: 20,
          modelAnswer: 'Der ökologische Fußabdruck misst die Menge der Ressourcen, die ein Mensch durch seinen Lebensstil verbraucht. Je kleiner er ist, desto besser. Der Handabdruck steht für die positiven Maßnahmen, die ein Mensch unternimmt, um den Ausstoß von Emissionen zu verringern. Je größer er ist, desto besser.'
        }
      ]
    }
  ]);
})();
