export default {
  authenticate: {
    alternatively: '– o in alternativa  –',
    continue: 'Continua',
    error: {
      code_0: 'Impossibile stabilire una connessione di rete. Riprova più tardi.',
      code_401: 'Impossibile riconoscere il codice partecipante inserito. Verifica che sia corretto',
      qr_format: 'Purtroppo il formato del codice QR scansionato non è valido. Scansiona un codice valido.',
      qr_wrong_app:
        "Il codice QR scansionato è concepito per essere utilizzato con un'applicazione diversa da questa. Verificare l'indirizzo internet inserito e aprire l'applicazione giusta.",
    },
    headline: 'Login',
    infotext:
      'Inserisci il tuo codice partecipante nella casella di testo per continuare. Se hai ricevuto un codice QR e il tuo dispositivo mobile è dotato di fotocamera, puoi semplicemente scansionare il codice. In caso di domande contatta il tuo centro studi FORTEe di riferimento',
    input_label: 'Il tuo codice partecipante',
    stay_logged_in: {
      checkbox: 'Resta collegato',
      infotext: 'Non selezionare questa opzione se utilizzi un dispositivo pubblico.',
    },
  },
  dashboard: {
    button: {
      logout: 'Logout',
      questionnaire: 'Compila questionario',
      report: 'Segnala sintomi',
    },
    headline: {
      new_user: 'Benvenuto!',
      returning_user: 'Bentornato!',
    },
    infotext: {
      questionnaire_available: {
        first_text:
          'È disponibile un questionario/un nuovo questionario da compilare. Il questionario deve essere compilato entro…',
        second_text: 'È disponibile un questionario/un nuovo questionario da compilare.',
      },
      questionnaire_not_available: {
        first_text:
          'Al momento non è disponibile alcun questionario. In caso di domande rivolgiti al tuo centro studi FORTEe di riferimento. Il prossimo questionario può essere compilato a partire da…',
        second_text:
          'Al momento non è disponibile alcun questionario. In caso di domande rivolgiti al tuo centro studi FORTEe di riferimento.',
      },
    },
  },
  navigation: {
    contact: 'Contatti',
    copyright_note: '© {{ year }} NUM compass',
    dashboard: 'Pagina iniziale',
    faq: 'FAQ',
    instructions: 'Istruzioni',
    imprint: 'Informazione Legale',
    logo: 'NUM compass web app',
    logout: 'Logout',
    privacy_policy: 'Informativa sulla privacy',
    session_expired: "La sessione è scaduta. Effettua nuovamente l'accesso per continuare.",
    terms_of_use: "Condizioni d'uso",
    title: 'Menu',
  },
  notification_bar: {
    dismiss_button: 'Chiudi',
  },
  questionnaire: {
    back: 'Indietro ',
    overview: 'Panoramica',
    confirm_submit: {
      error:
        "Durante l'invio delle risposte si è verificato un errore. Riprova più tardi. Puoi chiudere il tuo browser e riprendere in un secondo momento senza che le tue risposte vadano perse.",
      headline: 'Invia questionario',
      infotext: 'Hai risposto a tutte le domande. Continuando trasmetterai i tuoi dati. Grazie!',
    },
    continue: 'Continua',
    date_input: {
      error: 'Verifica il campo di immissione',
      day: 'Giorno',
      month: 'Mese',
      open_date_picker: 'Apri calendario',
      year: 'Anno',
    },
    dropdown_no_results: 'Nessun risultato',
    fetch_failed: 'Purtroppo non è stato possibile accedere al questionario. Riprova in un secondo momento.',
    fetch_retry: 'Riprova',
    finish: 'Torna alla pagina iniziale',
    group: 'Gruppo {{ number }}',
    infotext: 'Questo testo compare se il questionario non contiene informazioni relative al suo scopo.',
    question: 'Domanda {{ number }}',
    question_type_unsupported: 'Purtroppo, al momento le domande del tipo "{{ type }}" non sono supportate!',
    success: {
      headline: 'Grazie!',
      infotext: 'Grazie per aver partecipato!',
    },
  },
  report: {
    confirm_submit: {
      back: 'Indietro',
      continue: 'Invia',
      error: 'Purtroppo si è verificato un errore. Riprova più tardi.',
      headline: 'Segnala sintomi',
      infotext:
        'Se hai dei sintomi puoi segnalarlo. Fai clic sul pulsante seguente per inviare tale informazione.',
    },
    success: {
      finish: 'Torna alla pagina iniziale',
      headline: 'Segnala sintomi',
      infotext:
        'La segnalazione dei sintomi è avvenuta con successo. A breve sarà disponibile un nuovo questionario.',
    },
  },
  welcome: {
    continue: 'Avanti',
    headline: 'Benvenuto',
    infotext:
      'Ti diamo il benvenuto sulla web app FORTEe! <br>Qui potrai compilare i questionari dello studio FORTEe.<br>Osserva le seguenti indicazioni: <br>I tuoi dati verranno salvati solo dopo che avrai fatto clic su "Invia". Per questo è importante che non chiudi il browser mentre stai compilando i questionari. Se desideri continuare a rispondere alle domande in un secondo momento, puoi lasciare aperta la finestra del browser e riprendere in seguito. <br>In caso di domande a cui non puoi o non vuoi rispondere, puoi fare clic su "Continua" in qualsiasi momento senza selezionare nessuna delle opzioni di risposta.<br>Nel caso in cui tu non voglia compilare un intero questionario, anche in questo caso puoi saltarlo.<br>In caso di domande puoi rivolgerti in qualsiasi momento al tuo centro studi FORTEe di riferimento!',
  },
  imprint: {
    headline: 'Informazione Legale',
    content: `<b>Contact Details</b>
    <br>
    University Medicine of Johannes Gutenberg University Mainz
    <br>
    Langenbeckstraße 1
    <br>
    55131 Mainz
    <br>
    Tel. <a href="tel:+ 49 (0) 6131 17-0"> + 49 (0) 6131 17-0</a>
    <br>
    E-mail: <a href="mailto:webmaster@unimedizin-mainz.de">webmaster@unimedizin-mainz.de</a>
    <br><br>
    <b>Legal form</b>
    <br>
    The University Medicine of Johannes Gutenberg University Mainz is a body governed by public law.
    <br><br>
    <b>Executive Board Members of the University Medical Center Mainz</b>
    <br>
    Chairman of the Board and Medical Board (authorised to represent)
    Univ.-Prof. Dr. Norbert Pfeiffer
    Further information: <a href="https://www.unimedizin-mainz.de/ueber-uns/vorstand">www.unimedizin-mainz.de/ueber-uns/vorstand</a>
    <br><br>
    <b>VAT identification number</b>
    <br>
    DE149065652
    <br><br>
    <b>Chairman of the Supervisory Board</b>
    <br>
    State Secretary Dr. Denis Alt
    <br>
    Ministry of Science and Health of Rhineland-Palatinate
    <br>
    Mittlere Bleiche 61
    <br>
    55116 Mainz
    <br><br>
    <b>Supervisory authority</b>
    <br>
    The University Medical Centre shall be subject to the legal supervision of the Ministry responsible for tertiary education, carried out in accordance with the provisions of tertiary education law applicable to it.
    <br><br>
    Responsible supervisory authority for the UNiversity Medical Centre:
    <br>
    Ministry of Science and Health of Rhineland-Palatinate
    <br>
    Mittlere Bleiche 61
    <br>
    55116 Mainz
    <br>
    `,
  },
  terms: {
    headline: "Condizioni d'uso",
    content:
      "L'utilizzo dell'applicazione web FORTEe avviene esclusivamente nell'ambito dello studio FORTEe. Di conseguenza, solo i/le partecipanti allo studio FORTEe sono autorizzati ad utilizzarla.",
  },
  privacy_policy: {
    headline: 'Informativa sulla privacy',
    content: `È possibile accedere all'applicazione web tramite il seguente sito web protetto: <a href="https://fortee.izks-mainz.de">https://fortee.ghh4.unimedizin-mainz.de/</a>
    <br><br>
    I/le partecipanti possono compilare e inviare i questionari dello studio FORTEe usando l'applicazione web FORTEe. L'utilizzo avviene esclusivamente sul browser Internet di un dispositivo abilitato a Internet; non è richiesta nessuna installazione aggiuntiva di software né alcuna forma di registrazione.
    <br><br>
    Il codice di identificazione del partecipante necessario per la registrazione contiene un codice identificativo personale (pseudonimo) con cui i dati dei questionari vengono trasmessi per il salvataggio. Questo consente di attribuire i dati a un partecipante senza la creazione di un collegamento diretto con i dati identificativi (ad esempio, il nome). I dati immessi sono trasmessi e memorizzati esclusivamente con pseudonimi e in forma crittografata. 
    <br><br>
    Ad essere trasmessi, sottoposti a trattamento e salvati sono solo i dati inseriti nell'interfaccia utente dell'applicazione web. Il trattamento avviene esclusivamente per le finalità descritte nel documento informativo relativo allo studio FORTEe e sulla base del consenso espresso, che può essere revocato in qualsiasi momento in maniera informale. L'applicazione web FORTEe non ha accesso ai dati personali che si trovano sul dispositivo finale dell'utente. Allo stesso modo, non vengono analizzati i dati relativi al comportamento degli utenti. Si sottolinea esplicitamente che i dati non vengono utilizzati in nessun momento per la creazione di un profilo a fini pubblicitari.
    <br><br>
    Il trasferimento dei dati viene effettuato dall'utente e non è reversibile una volta avvenuta la trasmissione. Allo stesso modo, non è possibile recuperare i dati tramite l'applicazione web. 
    <br><br>
    <b>Tipo di dati</b>
    <ul>
    <li>Codice identificativo/pseudonimo</li>
    <li>Dati sulla salute (dati risultanti dal questionario tra cui ad es. stanchezza, qualità della vita, salute mentale, resilienza e attività fisica)</li>
    <li>Nell'ambito dell'utilizzo del sito web: indirizzo IP e data e ora della visita al sito web al fine di garantire il corretto funzionamento del sito stesso. La base giuridica del trattamento è l'articolo 6, paragrafo 1, lettera f), del GDPR ("legittimo interesse"). I dati vengono cancellati in modo standardizzato ed automatico dopo 90 giorni.</li>
    </ul>
    <br>
    <b>Destinatario dei dati</b>
    <br>
    Universitätsmedizin Mainz, Klinik und Poliklinik für Kinder- und Jugendmedizin, Pädiatrische Hämatologie/Onkologie/Hämostaseologie (Langenbeckstraße 1, 55131 Mainz, Germany) - (Clinica universitaria dell'Università di Magonza - Centro di medicina pediatrica - Ematologia / oncologia / emostasiologia)
    <br><br>
    <b>Conservazione e cancellazione dei dati </b>
    <br>
    I dati relativi allo studio vengono cancellati entro 30 anni. 
    <br><br>
    <b>I diritti dell'interessato</b>
    <br>
    <i>Diritto di accesso ai sensi dell'articolo 15 del GDPR: </i>
    <br>
    L'interessato ha il diritto di sapere se e quali dei suoi dati personali siano sottoposti a trattamento da parte nostra. 
    <br><br>
    <i>Diritto di rettifica ai sensi degli articoli 16 e 19 del GDPR: </i>
    <br>
    L'interessato ha il diritto di ottenere la rettifica dei dati personali inesatti che lo riguardano. 
    <br><br>
    <i>Diritto alla cancellazione ai sensi degli articoli 17 e 19 del GDPR: </i>
    <br>
    L'interessato ha il diritto di ottenere la cancellazione dei dati personali che lo riguardano. 
    <br><br>
    <i>Diritto di limitazione di trattamento ai sensi degli articoli 18 e 19 del GDPR: </i>
    <br>
    L'interessato ha il diritto di ottenere la limitazione del trattamento dei dati personali che lo riguardano. 
    <br><br>
    <i>Diritto alla portabilità dei dati ai sensi dell'articolo 20 del GDPR: </i>
    <br>
    L'interessato ha il diritto di ricevere i dati personali che lo riguardano forniti al titolare del trattamento dello studio. L'interessato può richiedere che tali dati siano inviati all'interessato stesso o, nella misura in cui questo sia tecnicamente possibile, ad un altro destinatario indicato dall'interessato. 
    <br><br>
    <i>Diritto di opposizione ai sensi dell'articolo 21 del GDPR: </i>
    <br>
    L'interessato ha il diritto di opporsi al trattamento dei dati personali che lo riguardano.
    <br><br>
    <b>Responsabile del trattamento </b>
    <br>
    Il trattamento dei dati personali è responsabilità legale congiunta di: 
    <ul>
    <li>Universitätsmedizin Mainz (Langenbeckstraße 1, 55131 Mainz, Germany)</li>
    <li>Universitätsklinikum Heidelberg (In Neuenheimer Feld 672, 69120 Heidelberg, Germany)</li>
    <li>Centre de Lutte Contre le Cancer Leon Berard (Rue Laennec 28, 69373 Lyon, France) </li>
    <li>Oxford Brookes University (Headington Campus Gipsy Lane, OX3 OPB Oxford, United Kingdom)* </li>
    <li>Fondazione Monza e Brianza per ll Bambino e La Sua Mamma (Via Pergolesi 33, 20052 Monza, Italy) </li>
    <li>Region Hovedstaden (Kongens Vaenge 2, 3400 Hillerod, Denmark) </li>
    <li>Universidad Europea de Madrid SL (Calle Tajo S/N, 28670 Villaviciosa, Spain) </li>
    <li>Fondazione IRCCS Istituto Nazionale dei Tumori (Via Venezian 1, 20133 Milan, Italy) </li>
    <li>Univerzitetni Klinicni Center Ljublijana (Zaloška cesta 002, 1000 Ljubljana, Slovenia) in cooperazione con Forma 3D Ltd. (Slomškova ulica 35, 1000 Ljubljana, Slovenia)</li>
    <li>Deutsche Sporthochschule Köln (Am Sportpark Muengersdorf 6, 50933 Cologne, Germany)</li>
    </ul>
    <br>
    In caso di domande, anche in merito all'esercizio dei propri diritti di interessato, rivolgersi al team FORTEe del proprio centro studi di riferimento: i dati di contatto sono riportati nella documentazione informativa relativa allo studio. Ulteriori informazioni sul progetto FORTEe sono riportate anche nei documenti relativi allo studio consegnati.
    <br><br>
    <b>Dati di contatto del responsabile della protezione dei dati</b>
    <br>
    L'interessato ha il diritto di presentare un reclamo a un'autorità di controllo di sua scelta. L'autorità di controllo competente è anch'essa riportata nel documento informativo relativo allo studio FORTEe
    `,
  },
};
