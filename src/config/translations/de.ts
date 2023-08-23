export default {
  authenticate: {
    alternatively: '– oder alternativ –',
    continue: 'Fortfahren',
    error: {
      code_0: 'Es konnte leider keine Netzwerkverbindung aufgebaut werden. Bitte versuche es später erneut.',
      code_401:
        'Der eingegebene Teilnahmecode konnte leider nicht erkannt werden. Bitte überprüfe deine Eingabe',
      qr_format: 'Das Format des gescannten QR-Codes ist leider ungültig. Bitte scanne einen gültigen Code ',
      qr_wrong_app:
        'Der gescannte QR-Code ist zur Nutzung mit einer anderen App als dieser gedacht. Bitte prüfe die eingegebene Internetadresse und rufen die richtige App auf.',
    },
    headline: 'Anmelden',
    infotext:
      'Bitte gib im Textfeld deinen Teilnahmecode ein, um fortzufahren. Wenn du einen QR-Code erhalten hast und dein Endgerät über eine Kamera verfügt, kannst du diesen stattdessen einfach einscannen. Bei Rückfragen wende dich bitte an dein FORTEe Studienzentrum.',
    input_label: 'Dein Teilnahmecode',
    stay_logged_in: {
      checkbox: 'Angemeldet bleiben',
      infotext: 'Wähle diese Option nicht aus, wenn du ein öffentliches Gerät benutzt.',
    },
  },
  dashboard: {
    button: {
      logout: 'Abmelden',
      questionnaire: 'Fragebogen ausfüllen',
      report: 'Symptome melden',
    },
    headline: {
      new_user: 'Willkommen!',
      returning_user: 'Willkommen zurück!',
    },
    infotext: {
      questionnaire_available: {
        first_text:
          'Es steht ein Fragebogen ein neuer Fragebogen zum Ausfüllen zur Verfügung!. Der Fragebogen muss ausgefüllt werden bis zum …',
        second_text: 'Es steht ein Fragebogen ein neuer Fragebogen zum Ausfüllen zur Verfügung!',
      },
      questionnaire_not_available: {
        first_text:
          'Derzeit steht kein Fragebogen zur Verfügung. Bei Rückfragen melde dich bitte bei deinem FORTEe Studienteam. Der nächste Fragebogen kann ausgefüllt werden ab dem …',
        second_text:
          'Derzeit steht kein Fragebogen zur Verfügung. Bei Rückfragen melde dich bitte bei deinem FORTEe Studienteam.',
      },
    },
  },
  navigation: {
    contact: 'Kontakt',
    copyright_note: '© {{ year }} NUM compass',
    dashboard: 'Übersicht',
    faq: 'FAQ',
    instructions: 'Instruktionen',
    imprint: 'Impressum',
    logo: 'FORTEe web app',
    logout: 'Abmelden',
    privacy_policy: 'Datenschutzerklärung',
    session_expired: 'Deine Sitzung ist abgelaufen. Bitte melden dich sich erneut an, um fortzufahren.',
    terms_of_use: 'Nutzungsbedingungen',
    title: 'Menü',
  },
  notification_bar: {
    dismiss_button: 'Schließen',
  },
  questionnaire: {
    back: 'Zurück',
    overview: 'Übersicht',
    confirm_submit: {
      error:
        'Beim Senden deiner Antworten ist ein Fehler aufgetreten. Bitte versuchen es später erneut. Du kannst deinen Browser schließen und später fortfahren, ohne deine Antworten zu verlieren.',
      headline: 'Fragebogen absenden',
      infotext: 'Du hast alle Fragen beantwortet. Indem du fortfährst, werden deine Angaben übermittelt. ',
    },
    continue: 'Fortfahren',
    date_input: {
      error: 'Bitte überprüfe das Eingabefeld.',
      day: 'Tag',
      month: 'Monat',
      open_date_picker: 'Kalender öffnen',
      year: 'Jahr',
    },
    dropdown_no_results: 'Keine Ergebnisse',
    fetch_failed:
      'Der Fragebogen konnte leider nicht abgerufen werden. Bitte versuche es zu einem späteren Zeitpunkt erneut.',
    fetch_retry: 'Erneut versuchen',
    finish: 'Zur Übersicht zurückkehren',
    group: 'Gruppe {{ number }}',
    infotext: 'Dieser Text wird angezeigt, wenn der Fragebogen keine Angaben zum Zweck enthält.',
    question: 'Frage {{ number }}',
    question_type_unsupported: 'Fragen vom Typ "{{ type }}" werden derzeit leider nicht unterstützt!',
    success: {
      headline: 'Vielen Dank!',
      infotext: 'Vielen Dank für deinen Beitrag!',
    },
  },
  report: {
    confirm_submit: {
      back: 'Zurück',
      continue: 'Absenden',
      error: 'Leider ist ein Fehler aufgetreten. Bitte versuche es später erneut.',
      headline: 'Symptome melden',
      infotext:
        'Falls du Symptome hast, kannst du dies melden. Klicke auf die nachfolgende Schaltfläche, um die Information zu übermitteln.',
    },
    success: {
      finish: 'Zur Übersicht zurückkehren',
      headline: 'Symptome melden',
      infotext:
        'Sie haben erfolgreich gemeldet, dass Sie Symptome haben. Es wird Ihnen zeitnah ein weiterer Fragebogen zur Verfügung gestellt.',
    },
  },
  welcome: {
    continue: 'Weiter',
    headline: 'Willkommen',
    infotext: `Herzlich Willkommen bei der FORTEe-Webapp!
    <br>Hier kannst du die Fragebögen für die FORTEe-Studie ausfüllen.
    <br>Bitte beachte folgende Hinweise:
    <br>Deine Daten werden erst gespeichert, wenn du auf „Übermitteln“ klickst. Deshalb ist es wichtig, dass du den Browser nicht schließt, während du die Fragebögen bearbeitest.
    Möchtest du die Fragen zu einem späteren Zeitpunkt bearbeiten, kannst du das Browser Fenster geöffnet lassen und später wiederkommen.
    <br>Wenn du eine Frage nicht beantworten kannst oder möchtest, kannst du jederzeit auf „Fortfahren“ klicken, ohne eine der Antwortmöglichkeiten anzuklicken.
    <br>Wenn du einen kompletten Bogen nicht ausfüllen möchtest, kannst du diesen ebenfalls überspringen.
    <br>Bei Rückfragen kannst du dich jederzeit an dein FORTEe Studienzentrum wenden!`,
  },
  imprint: {
    headline: 'Impressum',
    content: `<b>Anschrift und Kontakt</b>
    <br>
    Universitätsmedizin der Johannes Gutenberg-Universität Mainz
    <br>
    Langenbeckstraße 1
    <br>
    55131 Mainz
    <br>
    Tel. <a href="tel:+49 (0) 6131 17-0">+49 (0) 6131 17-0</a>
    <br>
    E-mail: <a href="mailto:webmaster@unimedizin-mainz.de">webmaster@unimedizin-mainz.de</a>
    <br><br>
    <b>Rechtsform</b>
    <br>
    Die Universitätsmedizin der Johannes Gutenberg-Universität Mainz ist eine Körperschaft des öffentlichen Rechts.
    <br><br>
    <b>Mitglieder des Vorstandes der Universitätsmedizin Mainz</b>
    <br>
    Vorstandsvorsitzender und Medizinischer Vorstand (vertretungsberechtigt)
    Univ.-Prof. Dr. Norbert Pfeiffer
    Weiterführende Informationen: www.unimedizin-mainz.de/ueber-uns/vorstand
    <br><br>
    <b>Umsatzsteuer-Identifikationsnummer</b>
    <br>
    DE149065652
    <br><br>
    <b>Vorsitzender des Aufsichtsrates</b>
    <br>
    Staatssekretär Dr. Denis Alt
    <br>
    Ministerium für Wissenschaft und Gesundheit des Landes Rheinland-Pfalz
    <br>
    Mittlere Bleiche 61
    <br>
    55116 Mainz
    <br><br>
    <b>Aufsichtsbehörde</b>
    <br>
    Die Universitätsmedizin steht unter der Rechtsaufsicht des für das Hochschulwesen zuständigen Ministeriums, die nach den hierfür geltenden hochschulrechtlichen Regelungen ausgeübt wird.
    Zuständige Aufsichtsbehörde für die Universitätsmedizin ist:
    <br>
    Ministerium für Wissenschaft und Gesundheit des Landes Rheinland-Pfalz
    <br>
    Mittlere Bleiche 61
    <br>
    55116 Mainz
    `,
  },
  terms: {
    headline: 'Nutzungsbedingungen',
    content: `Die Nutzung der FORTEe Webapp findet ausschließlich im Rahmen der FORTEe Studie statt.\
       Dementsprechend sind ausschließlich Studienteilnehmer*innen der FORTEe Studie zur Nutzung berechtigt.\
       `,
  },
  privacy_policy: {
    headline: 'Datenschutzerklärung',
    content: `Die Webapp ist über die folgende gesicherte Website erreichbar: <a href="https://fortee.izks-mainz.de/">https://fortee.izks-mainz.de/</a>
      <br><br>
      Mit der Nutzung der FORTEe Web App können Fragebögen der FORTEe Studie durch Studienteilnehmer*innen ausgefüllt und übermittelt werden. Die Nutzung erfolgt ausschließlich im entsprechenden Internetbrowser eines internetfähigen Endgeräts; dabei ist keine zusätzliche Installation von Software oder eine Form der Registrierung erforderlich.
      <br><br>
      Der zur Anmeldung erforderliche Teilnehmercode beinhaltet eine individuelle Identifikationsnummer (Pseudonym), mit welcher die Daten der Fragebögen zur Speicherung übermittelt werden. Auf diese Weise können die Daten einer*m Studienteilnehmer*in zugeordnet werden, ohne eine direkte Verknüpfung zu den personenidentifizierenden Daten (z.B. Name) herzustellen. Die eingegebenen Daten werden ausschließlich pseudonymisiert sowie verschlüsselt übermittelt und gespeichert. 
      <br><br>
      Es werden ausschließlich die in der Benutzungsoberfläche der Webapp eingegebenen Daten übermittelt, verarbeitet und gespeichert. Die Verarbeitung erfolgt ausschließlich zu den in der Informationsschrift der FORTEe-Studie beschriebenen Zwecken und auf Grundlage der erteilten Einwilligung, welche jederzeit formlos widerrufen werden kann. Die FORTEe Webapp hat keinen Zugriff auf persönliche Daten, die sich auf dem Endgerät des Nutzers befinden. Ebenfalls werden keine Daten zum Nutzungsverhalten analysiert. Es wird ausdrücklich darauf hingewiesen, dass zu keinem Zeitpunkt Daten zur Erstellung eines Profils zu Werbezwecken erfolgt.
      <br><br>
      Die Datenübermittelung findet durch den Benutzer statt und kann nach Übermittlung nicht rückgängig gemacht werden. Ebenfalls ist kein Datenabruf über die Webapp möglich. 
      <br><br>
      <b>Art der Daten</b>
      <ul>
      <li>Identifikationsnummer/Pseudonym</li>
      <li>Gesundheitsdaten (u.a. Bitte beispielhafte Aufzählung) = Ergebnisse der Fragebögen </li>
      <li>Im Rahmen der Nutzung der Website: IP-Adresse und Zeitstempel bei Aufruf der Webseite zur Aufrechterhaltung der Funktionsfähigkeit der Website. Rechtsgrundlage für die Verarbeitung ist Art. 6 Absatz 1 lit. f) DS-GVO („berechtigtes Interesse“). Die Daten werden standardmäßig und automatisiert nach 90 Tagen gelöscht.</li>
      </ul>
      <br>
      <b>Datenempfänger</b>
      <br>
      Universitätsmedizin Mainz,
      Klinik und Poliklinik für Kinder- und Jugendmedizin,
      Pädiatrische Hämatologie/Onkologie/Hämostaseologie
      (Langenbeckstraße 1, 55131 Mainz)
      <br><br>
      <b>Speicherung und Löschung der Daten</b>
      <br>
      Die studienbezogenen Daten werden spätestens nach 30 Jahren gelöscht.
      <br><br> 
      <b>Betroffenenrechte</b>
      <br>
      <i>Recht auf Auskunft nach Artikel 15 DS-GVO:</i>
      <br> 
      Sie haben das Recht, Auskunft darüber zu verlangen, ob und welche personenbezogenen Daten durch uns verarbeitet werden. 
      <br><br>
      <i>Recht auf Berichtigung nach Artikel 16, 19 DS-GVO:</i> 
      Sie haben das Recht, Sie betreffende unrichtige personenbezogene Daten berichtigen zu lassen. 
      <br><br>
      <i>Recht auf Löschung nach Artikel 17, 19 DS-GVO: </i>
      <br>
      Sie haben das Recht, die Löschung der Sie betreffenden personenbezogenen Daten zu verlangen.
      <br><br>
      <i>Recht auf Einschränkung der Verarbeitung nach Artikel 18, 19 DS-GVO:</i>
      Sie haben das Recht, die Verarbeitung der Sie betreffenden personenbezogenen Daten einzuschränken. 
      <br><br>
      <i>Recht auf Datenübertragbarkeit nach Art. 20 DS-GVO: </i>
      <br>
      Sie haben das Recht, die Sie betreffenden personenbezogenen Daten, die Sie den Verantwortlichen für die Studie bereitgestellt haben, zu erhalten. Damit können Sie beantragen, dass diese Daten entweder Ihnen oder, soweit technisch möglich, einer anderen von Ihnen benannten Stelle übermittelt werden. 
      <br><br>
      <i>Widerspruchsrecht nach Art. 21 DS-GVO: </i>
      <br>
      Sie haben das Recht, gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten Widerspruch einzulegen.
      <br><br>
      <b>Verantwortlicher</b>
      <br> 
      Für die Verarbeitung der personenbezogenen Daten sind rechtlich gemeinsam verantwortlich:
      <ul>
      <li>Universitätsmedizin Mainz (Langenbeckstraße 1, 55131 Mainz)</li>
      <li>Universitätsklinikum Heidelberg (In Neuenheimer Feld 672, 69120 Heidelberg)</li>
      <li>Centre de Lutte Contre le Cancer Leon Berard (Rue Laennec 28, 69373 Lyon, France)</li>
      <li>Oxford Brookes University (Headington Campus Gipsy Lane, OX3 OPB Oxford, Vereinigtes Königreich, UK)*</li>
      <li>Fondazione Monza e Brianza per ll Bambino e La Sua Mamma (Via Pergolesi 33, 20052 Monza, Italien)</li>
      <li>Region Hovedstaden  (Kngens Vaenge 2, 3400 Hillerod, Dänemark)</li>
      <li>Universidad Europea de Madrid SL (Calle Tajo S/N, 28670 Villaviciosa, Spanien)</li>
      <li>Fondazione IRCCS Istituto Nazionale dei Tumori (Via Venezian 1, 20133 Mailand, Italien)</li>
      <li>Univerzitetni Klinicni Center Ljublijana (Zaloška cesta 002, 1000 Ljubljana, Slowenien) in Kooperation mit Forma 3D Ltd. (Slomškova ulica 35, 1000 Ljubljana, Slowenien)
      </li>
      <li>Deutsche Sporthochschule Köln (Am Sportpark Muengersdorf 6, 50933 Cologne)</li>
      </ul>
      <br>
      Für Rückfragen sowie zur Umsetzung Ihrer Betroffenenrechte steht Ihnen das FORTEe-Studienteam ihres Studienzentrums gerne zur Verfügung: Wenden Sie sich dazu bitten an die in den Studieninformationen angegebenen Kontaktdaten. Weitere Informationen zur FORTEe Studie finden Sie ebenfalls in den an Sie ausgehändigten Studienunterlagen.
      <br><br>
      <b>Kontaktdaten DSB</b>
      <br>
      Ihnen steht ein Beschwerderecht bei einer Aufsichtsbehörde Ihrer Wahl zu. Die zuständige Aufsichtsbehörde können Sie ebenfalls der Informationsschrift der FORTEe-Studie entnehmen.`,
  },
};
