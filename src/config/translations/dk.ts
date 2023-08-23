export default {
  authenticate: {
    alternatively: '–  eller alternativt  –',
    continue: 'Fortsæt',
    error: {
      code_0: 'Der kunne desværre ikke oprettes netværksforbindelse. Forsøg igen senere.',
      code_401: 'Den angivne deltagerkode blev desværre ikke genkendt. Kontroller din angivelse.',
      qr_format: 'Formatet for den scannede QR-kode er desværre ugyldigt. Scan en gyldig kode.',
      qr_wrong_app:
        'Den scannede QR-kode er tiltænkt at skulle anvendes sammen med en anden app. Kontroller den angivne internetadresse, og vælg den rigtige app.',
    },
    headline: 'Log på',
    infotext:
      'Angiv din deltagerkode i tekstfeltet for at fortsætte. Hvis du har modtaget en QR-kode, og din enhed er udstyret med et kamera, er det også muligt at scanne den. Ved spørgsmål bedes du kontakte dit FORTEe-undersøgelsessted.',
    input_label: 'Din deltagerkode',
    stay_logged_in: {
      checkbox: 'Bliv ved med at være logget på',
      infotext: 'Vælg ikke denne valgmulighed, hvis du anvender en offentlig enhed.',
    },
  },
  dashboard: {
    button: {
      logout: 'Log af',
      questionnaire: 'Udfyld spørgeskema',
      report: 'Rapporter symptomer',
    },
    headline: {
      new_user: 'Velkommen!!',
      returning_user: 'Velkommen tilbage!',
    },
    infotext: {
      questionnaire_available: {
        first_text:
          'Et nyt spørgeskema er klart til at blive udfyldt! Spørgeskemaet skal udfyldes inden den …',
        second_text: 'Et nyt spørgeskema er klart til at blive udfyldt!',
      },
      questionnaire_not_available: {
        first_text:
          'Der er p.t. ingen spørgeskemaer. Ved spørgsmål bedes du kontakte dit FORTEe-undersøgelsesteam. Det er muligt at udfylde det næste spørgeskema fra den …',
        second_text:
          'Der er p.t. ingen spørgeskemaer. Ved spørgsmål bedes du kontakte dit FORTEe-undersøgelsesteam.',
      },
    },
  },
  navigation: {
    contact: 'Kontakt',
    copyright_note: '© {{ year }} NUM compass',
    dashboard: 'Oversigt',
    faq: 'FAQ',
    instructions: 'Instruktioner',
    imprint: 'Aftryk',
    logo: 'FORTEe web app',
    logout: 'Log af',
    privacy_policy: 'Databeskyttelseserklæring ',
    session_expired: 'Din session er udløbet. Log på igen for at fortsætte.',
    terms_of_use: 'Vilkår for brug',
    title: 'Menü',
  },
  notification_bar: {
    dismiss_button: 'Luk',
  },
  questionnaire: {
    back: 'Tilbage',
    overview: 'Oversigt',
    confirm_submit: {
      error:
        'Der opstod en fejl i forbindelse med afsendelsen af dine svar. Forsøg igen senere. Du kan lukke din browser og fortsætte senere, uden at dine svar går tabt.',
      headline: 'Afsend spørgeskema',
      infotext:
        'Du har besvaret alle spørgsmål. Dine angivelse bliver overført, når du går videre. Tusind tak!',
    },
    continue: 'Fortsæt',
    date_input: {
      error: 'Kontroller indtastningsfeltet',
      day: 'Dag',
      month: 'Måned',
      open_date_picker: 'Åbn kalender',
      year: 'År',
    },
    dropdown_no_results: 'Ingen resultater',
    fetch_failed:
      'Det var desværre ikke muligt at indlæse spørgeskemaet. Forsøg igen på et senere tidspunkt.',
    fetch_retry: 'Forsøg igen',
    finish: 'Tilbage til oversigten',
    group: 'Group {{ number }}',
    infotext: 'Denne tekst bliver vist, hvis spørgeskemaet ikke indeholder information om formålet.',
    question: 'Spørgsmål {{ number }}',
    question_type_unsupported: 'Spørgsmål af typen "{{ type }}" understøttes desværre ikke p.t.!',
    success: {
      headline: 'Tusind tak!',
      infotext: 'Tusind tak for dit input!',
    },
  },
  report: {
    confirm_submit: {
      back: 'Tilbage',
      continue: 'Send',
      error: 'Der opstod desværre en fejl. Forsøg igen senere.',
      headline: 'Rapporter symptomer',
      infotext:
        'Hvis du har symptomer, kan du rapportere det her. Klik på knappen nedenfor for at overføre oplysningerne.',
    },
    success: {
      finish: 'Vend tilbage til oversigt',
      headline: 'Rapporter symptomer',
      infotext: 'Du har rapporteret, at du har symptomer. Der vil snart komme et spørgeskema mere.',
    },
  },
  welcome: {
    continue: 'Fortsæt',
    headline: 'Velkommen',
    infotext: `Velkommen til FORTEe-webappen!
      <br>Her kan du udfylde spørgeskemaerne til FORTEe-undersøgelsen.
      <br>Vær opmærksom på følgende:ßn Dine data bliver først gemt. når du klikker på „Overfør“. Derfor er det vigtigt, at du ikke lukker browseren, mens du arbejder på spørgeskemaerne. Du kan lade browservinduet være åbent, hvis du gerne vil redigere spørgsmålene på et senere tidspunkt.
      <br>Hvis du ikke kan eller vil besvare et spørgsmål, kan du altid klikke på „Fortsæt“ uden at klikke på en af svarmulighederne.
      <br>Hvis du ikke vil udfylde et helt spørgeskema, kan du ligeledes springe det over.
      <br>Ved spørgsmål kan du altid kontakte FORTEes undersøgelsescenter!`,
  },
  imprint: {
    headline: 'Aftryk',
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
    headline: 'Vilkår for brug',
    content:
      'Anvendelsen af FORTEe-webappen sker udelukkende inden for rammerne af FORTEe-undersøgelsen. Derfor er det ligeledes kun deltagere i FORTEe-undersøgelsen, der er berettiget til at anvende denne.',
  },
  privacy_policy: {
    headline: 'Databeskyttelseserklæring ',
    content: `Webappen kan tilgås via følgende sikre webside: <a href="https://fortee.izks-mainz.de/">https://fortee.izks-mainz.de/</a>
    <br><br>
    Med FORTEe-webappen kan undersøgelsesdeltagerne udfylde og overføre spørgeskemaer, der indgår i FORTEe-undersøgelsen. Anvendelse sker via en internetbrowser på en enhed med adgang til internettet, og der skal i denne forbindelse ikke installeres yderligere software eller ske yderligere registrering.
    <br><br>
    Deltagerkoden, der skal bruges til at logge på med, indeholder et individuelt identifikationsnummer (pseudonym), der bliver overført til lagring sammen med dataene i spørgeskemaet. På denne måde kan dataene relateres til en undersøgelsesdeltager uden at skabe nogen direkte kobling til de personidentificerende data (fx navn). De angivne data pseudonymiseres udelukkende samt overføres krypteret og lagres. 
    <br><br>
    Det er udelukkende de data, der angives i webappens brugerflade, der overføres, behandles og lagres. Behandlingen sker udelukkende med de formål, der er beskrevet i informationsskriftet vedrørende FORTEe-undersøgelsen og på grundlag af det angivne samtykke, der til enhver tid kan tilbagekaldes uden anvendelse af en særlig formular. FORTEe-webappen har ikke adgang til personoplysninger, der er gemt på brugerens enhed. Der bliver endvidere ikke analyseret data om anvendelsesadfærd. Der gøres udtrykkeligt opmærksom på, at der på intet tidspunkt genereres data til oprettelse af en profil i markedsføringsøjemed.
    Dataoverførslen iværksættes af brugeren og kan efter overførslen ikke tilbagekaldes. Det er ligeledes heller ikke muligt at kalde data frem via webappen. 
    <br><br>
    <b>Former for data</b>
    <ul>
    <li>Identifikationsnummer/pseduonym</li>
    <li>Sundhedsdata (spørgeskemadata om blandt andet træthedsfølelse, livskvalitet, mental sundhed, resiliens/modstandskraft og fysisk aktivitet)</li>
    <li>I forbindelse med anvendelse af websiden: IP-adresse og tidsstempel ved indlæsning af websiden til opretholdelse af websidens funktionsdygtighed. Det juridiske grundlag for behandlingen er baseret på art. 6, stk. 1, lit. f) i GDPR („berettiget interesse“). Dataene slettes som standard automatisk efter 90 dage.</li>
    <br><br>
    <b>Datamodtager</b>
    <br>
    Universitätsmedizin Mainz,
    Klinik und Poliklinik für Kinder- und Jugendmedizin,
    Pädiatrische Hämatologie/Onkologie/Hämostaseologie
    (Langenbeckstraße 1, 55131 Mainz, Tyskland)
    <br><br>
    <b>Lagring og sletning af data</b>
    <br>
    De undersøgelsesrelaterede data slettes senest efter 30 år.
    <br><br>
    <b>Rettigheder som berørt</b>
    <br>
    <i>Ret til indsigt i henhold til artikel 15 i GDPR: </i>
    <br>
    Du har ret til at få information om, hvorvidt og hvilke personoplysninger vi behandler vedrørende dig. 
    <br><br>
    <i>Ret til berigtigelse i henhold til artikel 16, 19 i GDPR: </i>
    Du har ret til at få berigtiget ukorrekte personoplysninger, der vedrører dig. 
    <br><br>
    <i>Ret til sletning i henhold til artikel 17, 19 i GDPR: </i>
    <br>
    Du har ret til at få slettet de personoplysninger, der vedrører dig. 
    <br><br>
    <i>Ret til begrænsning af behandling i henhold til artikel 18, 19 i GDPR: </i>
    <br>
    Du har ret til at få begrænset behandlingen af de personoplysninger, der vedrører dig. 
    <br><br>
    <i>Ret til dataportabilitet i henhold til art. 20 i GDPR: </i>
    <br>
    Du har ret til at få udleveret de personoplysninger, der vedrører dig, som du har stillet til rådighed for de ansvarlige bag undersøgelsen. Dermed kan du rekvirere, at disse data enten udleveres til dig eller, så vidt det er teknisk muligt, overføres til et af dig angivet sted. 
    <br><br>
    <i>Ret til indsigelse i henhold til art. 21 i GDPR: </i>
    <br>
    Du har ret til at gøre indsigelse mod behandling af personoplysninger, der vedrører dig.
    <br><br>
    <b>Ansvarlig</b>
    <br>
    I fællesskab er følgende juridisk ansvarlige for behandlingen af personoplysninger: 
    <br><br>
    <ul>
    <li>Universitätsmedizin Mainz (Langenbeckstraße 1, 55131 Mainz, Tyskland)</li>
    <li>Universitätsklinikum Heidelberg (In Neuenheimer Feld 672, 69120 Heidelberg, Tyskland)</li>
    <li>Centre de Lutte Contre le Cancer Leon Berard (Rue Laennec 28, 69373 Lyon, Frankrig)</li> 
    <li>Oxford Brookes University (Headington Campus Gipsy Lane, OX3 OPB Oxford, Det forenede Kongerige, Storbritannien)* </li>
    <li>Fondazione Monza e Brianza per ll Bambino e La Sua Mamma (Via Pergolesi 33, 20052 Monza, Italien) </li>
    <li>Region Hovedstaden (Kongens Vænge 2, 3400 Hillerød, Danmark) </li>
    <li>Universidad Europea de Madrid SL (Calle Tajo S/N, 28670 Villaviciosa, Spanien) </li>
    <li>Fondazione IRCCS Istituto Nazionale dei Tumori (Via Venezian 1, 20133 Milano, Italien) </li>
    <li>Univerzitetni Klinicni Center Ljublijana (Zaloška cesta 002, 1000 Ljubljana, Slovenien) i samarbejde med Forma 3D Ltd. (Slomškova ulica 35, 1000 Ljubljana, Slovenien)</li>
    <li>Deutsche Sporthochschule Köln (Am Sportpark Muengersdorf 6, 50933 Köln, Tyskland)</li>
    <li>Deutsche Sporthochschule Köln (Am Sportpark Muengersdorf 6, 50933 Cologne)</li></li>
    </ul>
    <br>
    Kontakt FORTEe-undersøgelsesteamet ved spørgsmål samt ved anliggender vedrørende håndteringen af dine rettigheder som berørt: Se i den forbindelse kontaktoplysningerne, der fremgår af oplysningerne om undersøgelserne. Du kan ligeledes finde yderligere informationer om FORTEe-undersøgelsen i de undersøgelsesdokumenter, der er blevet udleveret til dig.
    <br><br>
    <b>Kontaktoplysninger på databeskyttelsesansvarlig</b>
    <br>
    Du har ret til at klage til en tilsynsmyndighed efter eget valg. Den ansvarlige tilsynsmyndighed fremgår ligeledes af informationsmaterialet om FORTEe-undersøgelsen.
    `,
  },
};
