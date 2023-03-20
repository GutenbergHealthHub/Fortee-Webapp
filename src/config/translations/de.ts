export default {
  authenticate: {
    alternatively: '– oder alternativ –',
    continue: 'Fortfahren',
    error: {
      code_0:
        'Es konnte leider keine Netzwerkverbindung aufgebaut werden. Bitte versuchen Sie es später erneut.',
      code_401:
        'Der eingegebene Teilnahmecode konnte leider nicht erkannt werden. Bitte überprüfen Sie Ihre Eingabe.',
      qr_format:
        'Das Format des gescannten QR-Codes ist leider ungültig. Bitte scannen Sie einen gültigen Code ein.',
      qr_wrong_app:
        'Der gescannte QR-Code ist zur Nutzung mit einer anderen App als dieser gedacht. Bitte prüfen Sie die eingegebene Internetadresse und rufen Sie die richtige App auf.',
    },
    headline: 'Anmelden',
    infotext:
      'Geben Sie im Textfeld Ihren Teilnahmecode ein, um fortzufahren. Wenn Sie einen QR-Code erhalten haben und Ihr Endgerät über eine Kamera verfügt, können Sie diesen stattdessen einfach einscannen.',
    input_label: 'Ihr Teilnahmecode',
    stay_logged_in: {
      checkbox: 'Angemeldet bleiben',
      infotext: 'Wählen Sie diese Option nicht aus, wenn Sie ein öffentliches Gerät benutzen.',
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
          'Dieser Text wird angezeigt, falls es einen verfügbaren Fragebogen gibt, der noch nicht beantwortet wurde. Der Fragebogen muss ausgefüllt werden bis zum',
        second_text:
          'Dieser weitere Text wird angezeigt, falls es einen verfügbaren Fragebogen gibt, der noch nicht beantwortet wurde.',
      },
      questionnaire_not_available: {
        first_text:
          'Dieser Text wird angezeigt, wenn derzeit kein Fragebogen zum Ausfüllen zur Verfügung steht. Der nächste Fragebogen kann ausgefüllt werden ab dem',
        second_text:
          'Dieser weitere Text wird angezeigt, wenn derzeit kein Fragebogen zum Ausfüllen zur Verfügung steht. Wenn Sie Symptome haben, können Sie dies jederzeit melden.',
      },
    },
  },
  navigation: {
    contact: 'Kontakt',
    copyright_note: '© {{ year }} NUM compass',
    dashboard: 'Übersicht',
    faq: 'FAQ',
    imprint: 'Impressum',
    logo: 'NUM compass web app',
    logout: 'Abmelden',
    privacy_policy: 'Datenschutzerklärung',
    session_expired: 'Ihre Sitzung ist abgelaufen. Bitte melden Sie sich erneut an, um fortzufahren.',
    terms_of_use: 'Nutzungsbedingungen',
    title: 'Menü',
  },
  notification_bar: {
    dismiss_button: 'Schließen',
  },
  questionnaire: {
    back: 'Zurück',
    confirm_submit: {
      error:
        'Beim Senden Ihrer Antworten ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut. Sie können Ihren Browser schließen und später fortfahren, ohne Ihre Antworten zu verlieren.',
      headline: 'Fragebogen absenden',
      infotext: 'Sie haben alle Fragen beantwortet. Indem Sie fortfahren, werden Ihre Angaben übermittelt.',
    },
    continue: 'Fortfahren',
    date_input: {
      error: 'Bitte überprüfen Sie das Eingabefeld.',
      day: 'Tag',
      month: 'Monat',
      open_date_picker: 'Kalender öffnen',
      year: 'Jahr',
    },
    dropdown_no_results: 'Keine Ergebnisse',
    fetch_failed:
      'Der Fragebogen konnte leider nicht abgerufen werden. Bitte versuchen Sie es zu einem späteren Zeitpunkt erneut.',
    fetch_retry: 'Erneut versuchen',
    finish: 'Zur Übersicht zurückkehren',
    group: 'Gruppe {{ number }}',
    infotext: 'Dieser Text wird angezeigt, wenn der Fragebogen keine Angaben zum Zweck enthält.',
    question: 'Frage {{ number }}',
    question_type_unsupported: 'Fragen vom Typ "{{ type }}" werden derzeit leider nicht unterstützt!',
    success: {
      headline: 'Vielen Dank!',
      infotext: 'Vielen Dank für Ihren Beitrag!',
    },
  },
  report: {
    confirm_submit: {
      back: 'Zurück',
      continue: 'Absenden',
      error: 'Leider ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.',
      headline: 'Symptome melden',
      infotext:
        'Falls Sie Symptome haben, können Sie dies melden. Klicken Sie auf die nachfolgende Schaltfläche, um die Information zu übermitteln.',
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
    infotext: 'Hier steht ein kurzer und informativer Einführungstext zur App.',
  },
  imprint: {
    headline: 'Impressum',
    content: `<b>Anschrift und Kontakt</b>
    <br>
    Universitätsmedizin der Johannes Gutenberg-Universität Mainz
    Langenbeckstraße 1
    55131 Mainz
    Tel. +49 (0) 6131 17-0
    E-Mail: fortee@unimedizin-mainz.de
    <br><br>
    <b>Rechtsform</b>
    <br>
    Die Universitätsmedizin der Johannes Gutenberg-Universität Mainz ist eine Körperschaft des öffentlichen Rechts.
    <br>
    Mitglieder des Vorstandes der Universitätsmedizin Mainz
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
    Ministerium für Wissenschaft und Gesundheit des Landes Rheinland-Pfalz
    Mittlere Bleiche 61
    55116 Mainz
    <br><br>
    <b>Aufsichtsbehörde</b>
    <br>
    Die Universitätsmedizin steht unter der Rechtsaufsicht des für das Hochschulwesen zuständigen Ministeriums, die nach den hierfür geltenden hochschulrechtlichen Regelungen ausgeübt wird.
    Zuständige Aufsichtsbehörde für die Universitätsmedizin ist:
    Ministerium für Wissenschaft und Gesundheit des Landes Rheinland-Pfalz
    Mittlere Bleiche 61
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
      Der zur Anmeldung erforderliche Teilnehmercode beinhaltet eine individuelle Identifikationsnummer (Pseudonym) mit welcher die Daten derFragebögen zur Speicherung übermittelt werden. Auf diese Weise können die Daten einer*m Studienteilnehmer*in zugeordnet werden, ohne eine direkte Verknüpfung zu den personenidentifizierenden Daten (z.B. Name) herzustellen. Die eingegebenen Daten werden ausschließlich pseudonymisiert sowie verschlüsselt übermittelt und gespeichert. 
      Es werden ausschließlich die in der Benutzungsoberfläche der Webapp eingegebenen Daten übermittelt, verarbeitet und gespeichert. Die Verarbeitung erfolgt ausschließlich zu den in der Informationsschrift der FORTEe-Studie beschriebenen Zwecken und auf Grundlage der erteilten Einwilligung, welche jederzeit formlos widerrufen werden kann. Die FORTEe Webapp hat keinen Zugriff auf persönliche Daten, die sich auf dem Endgerät des Nutzers befinden. Ebenfalls werden keine Daten zum Nutzungsverhalten analysiert. Es wird ausdrücklich darauf hingewiesen, dass zu keinem Zeitpunkt Daten zur Erstellung eines Profils zu Werbezwecken erfolgt.
      Die Datenübermittelung findet durch den Benutzer statt und kann nach Übermittlung nicht rückgängig gemacht werden. Ebenfalls ist kein Datenabruf über die Webapp möglich. 
      <br><br>
      <b>Art der Daten</b>
      <ul>
      <li>Identifikationsnummer/Pseudonym</li>
      <li>Gesundheitsdaten (u.a. Bitte beispielhafte Aufzählung) = Ergebnisse der Fragebögen </li>
      <li>Im Rahmen der Nutzung der Website: IP-Adresse, Zeitstempel ? Zur Aufrechterhaltung der Funktionsfähigkeit der Website. Rechtsgrundlage für die Verarbeitung ist Art. 6 Absatz 1 lit. f) DS-GVO („berechtigtes Interesse“). Die Daten standardmäßig und automatisiert nach 180 Tagen (?) gelöscht.</li>
      </ul>
      Datenempfänger
      Universitätsmedizin Mainz (Langenbeckstraße 1, 55131 Mainz) Klinik noch benennen!
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
      Recht auf Einschränkung der Verarbeitung nach Artikel 18, 19 DS-GVO: 
      Sie haben das Recht, die Verarbeitung der Sie betreffenden personenbezogenen Daten einzuschränken. 
      <br><br>
      <i>Recht auf Datenübertragbarkeit nach Art. 20 DS-GVO: </i>
      <br>
      Sie haben das Recht, die Siebetreffenden personenbezogenen Daten, die Sie den Verantwortlichen für die Studie bereitgestellt haben, zu erhalten. Damit können Sie beantragen, dass diese Daten entweder Ihnen oder, soweit technisch möglich, einer anderen von Ihnen benannten Stelle übermittelt werden. 
      <br><br>
      <i>Widerspruchsrecht nach Art. 21 DS-GVO: </i>
      <br>
      Sie haben das Recht, gegen die Verarbeitung der Siebetreffenden personenbezogenen Daten Widerspruch einzulegen.
      <br><br>
      <b>Verantwortlicher</b>
      <br> 
      Für die Verarbeitung der personenbezogenen Daten ist rechtlich verantwortlich: Analog der Einwilligung = Parteien des JC! 
      <br><br>
      Universitätsmedizin der Johannes Gutenberg-Universität Mainz 
      vertreten durch den Vorstand<br>
      Langenbeckstraße 1, 55131 Mainz <br>
      <a href=tel:06131 17-0>Telefon: 06131 17-0</a><br>
      Webseite: <a href="https://www.unimedizin-mainz.de/">www.unimedizin-mainz.de/</a>
      <br><br>
      <b>Kontaktdaten DSB</b>
      <br>
      Ihnen steht ein Beschwerderecht bei einer Aufsichtsbehörde Ihrer Wahl zu. Die zuständige Aufsichtsbehörde für die Universitätsmedizin Mainz ist der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Rheinland-Pfalz: <br>
      Postfach 30 40, 55020 Mainz<br>
      Hintere Bleiche 34, 55116 Mainz<br>
      Tel.: <a href="tel:+49 (0) 6131 208-2449">+49 (0) 6131 208-2449</a><br>
      Fax: +49 (0) 6131 208-2497<br>
      Email: <a href="mailto:"poststelle@datenschutz.rlp.de">poststelle@datenschutz.rlp.de</><br>
      <a href="https://www.datenschutz.rlp.de">https://www.datenschutz.rlp.de</a><br>
      <br><br>
      Weitere Information können Sie der Informationsschrift der FORTEe-Studie entnehmen.
      `,
  },
};
