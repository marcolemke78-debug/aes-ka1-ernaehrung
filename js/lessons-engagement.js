/**
 * Modul 1: Lernen durch Engagement (eigene Zusammenfassung, Inhalt nach Buch S. 86)
 */
window.LESSON_DATA = (window.LESSON_DATA || []).concat([
  {
    id: 1,
    title: 'Engagement und Ehrenamt',
    explanation: {
      html: `
        <p>Lernen passiert nicht nur im Klassenzimmer. Man lernt auch <strong>draußen</strong>, wenn man sich für etwas einsetzt. Das nennt man <strong>Lernen durch Engagement</strong>.</p>
        <p><strong>Engagement</strong> heißt: Ich setze mich für eine Sache ein, die mir wichtig ist.</p>
        <div class="analogy-box"><strong>Wie im Alltag:</strong> Du hilfst jeden Samstag beim Kinderturnen im Sportverein. Du bekommst dafür kein Geld, aber du machst es, weil es dir Spaß macht und den Kindern hilft. Genau das ist Engagement.</div>
        <h3>Bürgerschaftliches Engagement</h3>
        <p>Man setzt sich als Bürgerin oder Bürger in der Gesellschaft, in der man lebt, <strong>freiwillig</strong> für das <strong>Gemeinwohl</strong> ein (also für das Wohl aller) und bekommt dafür <strong>kein Geld</strong>. Ein anderes Wort dafür ist <strong>Ehrenamt</strong>.</p>
        <table class="info-table">
          <tr><th>Ehrenamt</th><th>Erwerbsarbeit</th></tr>
          <tr><td><strong>unbezahlt</strong>, freiwillig</td><td><strong>bezahlte</strong> Arbeit</td></tr>
          <tr><td>z. B. Trainerin im Sportverein, Freiwillige Feuerwehr</td><td>z. B. Verkäuferin, Mechatroniker, Lehrerin</td></tr>
        </table>
        <div class="warning-box"><strong>Typischer Fehler:</strong> Die Berufsfeuerwehr ist <strong>Erwerbsarbeit</strong>, denn die Leute werden bezahlt. Die <strong>Freiwillige</strong> Feuerwehr ist Ehrenamt. Entscheidend ist nur: Gibt es Geld für die Arbeit oder nicht?</div>
        <div class="why-context"><strong>Warum ist das wichtig?</strong> Deine Lehrerin hat ausdrücklich gesagt: Den Unterschied zwischen Ehrenamt und Erwerbsarbeit musst du für die KA können.</div>`
    },
    example: {
      title: 'Ehrenamt oder Erwerbsarbeit?',
      steps: [
        { label: 'Fall', html: '<p>Herr Kaya arbeitet als Busfahrer. Abends trainiert er die D-Jugend im Fußballverein, ohne Geld dafür zu bekommen.</p>' },
        { label: 'Frage stellen', html: '<p>Für welche Tätigkeit bekommt er Geld? Für das Busfahren, also ist das <strong>Erwerbsarbeit</strong>.</p>' },
        { label: 'Ergebnis', html: '<p>Das Training ist freiwillig und unbezahlt, also ist es ein <strong>Ehrenamt</strong> (bürgerschaftliches Engagement).</p>' }
      ]
    },
    exercises: [
      {
        type: 'matching',
        question: 'Ehrenamt oder Erwerbsarbeit? Ordne zu.',
        pairs: [
          { left: 'Eine Ärztin arbeitet im Krankenhaus.', right: 'Erwerbsarbeit' },
          { left: 'Ein Rentner liest Kindern in der Bücherei vor, ohne Geld dafür.', right: 'Ehrenamt' },
          { left: 'Eine Schülerin hilft freiwillig bei der Tafel.', right: 'Ehrenamt' },
          { left: 'Ein Koch arbeitet in einem Restaurant.', right: 'Erwerbsarbeit' }
        ],
        explanation: 'Die einzige Frage ist: Wird die Arbeit bezahlt? Bezahlt = Erwerbsarbeit, unbezahlt und freiwillig = Ehrenamt.'
      },
      {
        type: 'fill-in-blank',
        question: 'Ergänze die Merksätze.',
        text: 'Ehrenamt ist {{blank}} Arbeit. Erwerbsarbeit ist {{blank}} Arbeit.',
        blanks: [
          { correct: 'unbezahlte', alternatives: ['unbezahlt', 'freiwillige', 'freiwillig'] },
          { correct: 'bezahlte', alternatives: ['bezahlt'] }
        ],
        explanation: 'Ehrenamt = unbezahlt, Erwerbsarbeit = bezahlt.'
      },
      {
        type: 'multiple-choice',
        question: 'Was gehört zur Erklärung von <strong>bürgerschaftlichem Engagement</strong>?',
        options: ['freiwillig, für das Gemeinwohl, ohne Bezahlung', 'freiwillig, für den eigenen Vorteil, mit kleinem Lohn', 'verpflichtend, für das Gemeinwohl, ohne Bezahlung', 'freiwillig, nur für die eigene Familie'],
        correct: 0,
        wrongExplanations: {
          1: 'Beim bürgerschaftlichen Engagement geht es um das Wohl aller (Gemeinwohl), und es gibt kein Geld dafür.',
          2: 'Engagement ist freiwillig. Niemand muss es machen.',
          3: 'Der Familie zu helfen ist schön, aber bürgerschaftliches Engagement richtet sich an die Gesellschaft, also an das Gemeinwohl.'
        }
      },
      {
        type: 'free-text',
        question: 'KA-Aufgabe: Erkläre den Begriff <strong>bürgerschaftliches Engagement</strong> in eigenen Worten.',
        minWords: 15,
        modelAnswer: 'Bürgerschaftliches Engagement bedeutet, dass man sich als Bürgerin oder Bürger freiwillig für das Gemeinwohl einsetzt, also für die Gesellschaft, in der man lebt. Man bekommt dafür kein Geld. Ein anderes Wort dafür ist Ehrenamt.'
      }
    ]
  },
  {
    id: 2,
    title: 'Die vier Bereiche und Active Citizenship',
    explanation: {
      html: `
        <p>Man kann sich in <strong>vier Bereichen</strong> engagieren:</p>
        <table class="info-table">
          <tr><th>Bereich</th><th>Wofür setzt man sich ein?</th><th>Beispiele</th></tr>
          <tr><td><strong>sozial</strong></td><td>für andere Menschen</td><td>für Kinder, bei der Feuerwehr</td></tr>
          <tr><td><strong>ökologisch</strong></td><td>für die Umwelt</td><td>Einsatz gegen den Klimawandel, Cleanup-Tage</td></tr>
          <tr><td><strong>kulturell</strong></td><td>für Musik, Literatur oder Kunst</td><td>Musikverein, Theatergruppe</td></tr>
          <tr><td><strong>gesellschaftspolitisch</strong></td><td>in politischen Verbänden</td><td>Einsatz für die Demokratie</td></tr>
        </table>
        <div class="analogy-box"><strong>Eselsbrücke:</strong> <strong>Ö</strong>kologisch kommt von <strong>Ö</strong>kosystem, also Natur und Umwelt. <strong>Sozial</strong> ist alles, wo du direkt Menschen hilfst. <strong>Kultur</strong> ist das, was man im Musik- oder Kunstunterricht macht. <strong>Politisch</strong> ist es, wenn es um Mitbestimmung und Demokratie geht.</div>
        <h3>Active (Global) Citizenship</h3>
        <p><strong>Active Citizenship</strong> heißt aktive Teilhabe, also die <strong>Mitbestimmung und Mitgestaltung am demokratischen Zusammenleben</strong>. Das ist wichtig für jeden Einzelnen und für die (Welt-)Gesellschaft.</p>
        <p>Das Wort <strong>Global</strong> kommt dazu, weil Probleme auf der Welt auch unseren Alltag betreffen. Man kann sich also auch für <strong>weltweite Probleme</strong> einsetzen, zum Beispiel gegen den <strong>Klimawandel</strong>, gegen <strong>Hunger</strong> und gegen <strong>Kinderarbeit</strong>.</p>
        <div class="tip-box"><strong>Was bringt mir Engagement?</strong> Man tut etwas für andere <em>und</em> für sich: Man merkt, dass man etwas bewirken kann (das heißt <strong>Selbstwirksamkeit</strong>). Man lernt, sich in andere hineinzuversetzen, und kann besser reden und Streit lösen. Das hilft auch später im Beruf.</div>
        <div class="why-context"><strong>Warum ist das wichtig?</strong> Typische KA-Aufgaben sind: &bdquo;Nenne die Bereiche des Engagements&ldquo; und &bdquo;Ordne Beispiele aus deinem Umfeld einem Bereich zu.&ldquo;</div>`
    },
    example: {
      title: 'Beispiele aus dem Umfeld zuordnen',
      steps: [
        { label: 'Beispiel 1', html: '<p>Die Klasse sammelt bei einem Aktionstag Müll am Bach. Es geht um die Umwelt, also ist das <strong>ökologisches</strong> Engagement.</p>' },
        { label: 'Beispiel 2', html: '<p>Ein Nachbar spielt im Musikverein Trompete. Musik gehört zur Kultur, also ist das <strong>kulturelles</strong> Engagement.</p>' },
        { label: 'Beispiel 3', html: '<p>Ein Jugendlicher ist in der Jugendorganisation einer Partei aktiv und setzt sich für die Demokratie ein. Das ist Arbeit in einem politischen Verband, also <strong>gesellschaftspolitisches</strong> Engagement.</p>' }
      ]
    },
    exercises: [
      {
        type: 'matching',
        question: 'Ordne jedes Beispiel dem passenden Bereich zu.',
        pairs: [
          { left: 'Bei einem Cleanup-Tag Müll sammeln', right: 'ökologisch' },
          { left: 'Bei der Jugendfeuerwehr mitmachen', right: 'sozial' },
          { left: 'Im Schulchor singen und Konzerte geben', right: 'kulturell' },
          { left: 'In einer Jugendorganisation für Demokratie werben', right: 'gesellschaftspolitisch' }
        ],
        explanation: 'Umwelt = ökologisch, anderen Menschen helfen = sozial, Musik/Kunst/Literatur = kulturell, Politik und Demokratie = gesellschaftspolitisch.'
      },
      {
        type: 'fill-in-blank',
        question: 'Nenne die vier Bereiche des Engagements.',
        text: 'Man kann sich {{blank}}, {{blank}}, {{blank}} und {{blank}} engagieren.',
        blanks: [
          { correct: 'sozial', alternatives: ['ökologisch', 'kulturell', 'gesellschaftspolitisch', 'politisch'] },
          { correct: 'ökologisch', alternatives: ['sozial', 'kulturell', 'gesellschaftspolitisch', 'politisch'] },
          { correct: 'kulturell', alternatives: ['sozial', 'ökologisch', 'gesellschaftspolitisch', 'politisch'] },
          { correct: 'gesellschaftspolitisch', alternatives: ['sozial', 'ökologisch', 'kulturell', 'politisch'] }
        ],
        explanation: 'Die vier Bereiche: sozial, ökologisch, kulturell, gesellschaftspolitisch. Die Reihenfolge ist egal.'
      },
      {
        type: 'multiple-choice',
        question: 'Was bedeutet <strong>Active (Global) Citizenship</strong>?',
        options: ['Aktive Teilhabe: Mitbestimmung und Mitgestaltung am demokratischen Zusammenleben', 'Möglichst oft ins Ausland reisen und andere Länder kennenlernen', 'Bei einer weltweit tätigen Firma arbeiten und dafür ein festes Gehalt bekommen', 'Nur bei Wahlen ab 18 Jahren mitmachen'],
        correct: 0,
        wrongExplanations: {
          1: 'Reisen hat damit nichts zu tun. &bdquo;Global&ldquo; heißt, dass man sich auch für weltweite Probleme wie Klimawandel oder Hunger einsetzt.',
          2: 'Bezahlte Arbeit ist Erwerbsarbeit. Active Citizenship geht um Mitbestimmen und Mitgestalten.',
          3: 'Wählen ist ein Teil davon, aber man kann schon vorher mitmachen, zum Beispiel in der SMV oder bei einer Umweltgruppe.'
        }
      },
      {
        type: 'multiple-choice',
        question: '<strong>Finde den Fehler:</strong> Tim schreibt in der KA: &bdquo;Wenn Oma im Seniorenheim regelmäßig ehrenamtlich mit Bewohnern Karten spielt, ist das kulturelles Engagement.&ldquo; Was ist falsch?',
        options: ['Es ist soziales Engagement, weil sie sich für andere Menschen einsetzt.', 'Es ist Erwerbsarbeit, weil es regelmäßig stattfindet.', 'Es ist ökologisches Engagement, weil es im Heim stattfindet.', 'Nichts, Tim hat recht.'],
        correct: 0,
        wrongExplanations: {
          1: 'Regelmäßig heißt nicht bezahlt. Sie bekommt kein Geld, also bleibt es ein Ehrenamt.',
          2: 'Ökologisch hat mit Umwelt und Natur zu tun, nicht mit dem Ort.',
          3: 'Kartenspielen ist keine Kunst, Musik oder Literatur. Sie kümmert sich um andere Menschen.'
        }
      },
      {
        type: 'free-text',
        question: 'KA-Aufgabe: Nenne zwei Möglichkeiten, wie sich Menschen in deinem Umfeld engagieren, und ordne sie jeweils einem Bereich zu.',
        minWords: 15,
        modelAnswer: 'Mein Nachbar ist bei der Freiwilligen Feuerwehr. Das ist soziales Engagement, weil er anderen Menschen hilft. Meine Freundin spielt im Musikverein. Das ist kulturelles Engagement, weil es um Musik geht.'
      }
    ]
  }
]);
