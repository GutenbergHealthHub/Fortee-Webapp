export default {
  authenticate: {
    alternatively: '– ali alternativno  –',
    continue: 'Nadaljuj',
    error: {
      code_0: 'Žal ni bilo mogoče vzpostaviti omrežne povezave. Prosimo, poizkusite znova pozneje.',
      code_401: 'Žal vnesene kode za sodelovanje ni bilo mogoče prepoznati. Prosimo, preverite svoj vnos',
      qr_format: 'Oblika zapisa optično prebrane kode QR žal ni veljavna. Optično preberite veljavno kodo.',
      qr_wrong_app:
        'Optično prebrana koda QR je namenjena uporabi z neko drugo aplikacijo in ne to. Preverite spletni naslov, ki ste ga vnesli, in prikličite pravilno aplikacijo.',
    },
    headline: 'Prijava',
    infotext:
      'Za nadaljevanje v besedilno polje vnesite kodo za sodelovanje. Če ste prejeli kodo QR in je vaša naprava opremljena s kamero, jo preprosto optično preberete. Če imate kakršna koli vprašanja, se obrnite na svoj študijski center FORTEe.',
    input_label: 'Vaša koda za sodelovanje',
    stay_logged_in: {
      checkbox: 'Ostani prijavljen',
      infotext: 'Te možnosti ne izberite, ko uporabljate javno napravo.',
    },
  },
  dashboard: {
    button: {
      logout: 'Odjava',
      questionnaire: 'Izpolnjevanje vprašalnika',
      report: 'Prijava simptomov',
    },
    headline: {
      new_user: 'Dobrodošli!',
      returning_user: 'Dobrodošli nazaj!',
    },
    infotext: {
      questionnaire_available: {
        first_text:
          'Na voljo je vprašalnik, nov vprašalnik, ki ga morate izpolniti! Vprašalnik morate izpolniti do …',
        second_text: 'Na voljo je vprašalnik, nov vprašalnik, ki ga morate izpolniti!',
      },
      questionnaire_not_available: {
        first_text:
          'Trenutno ni na voljo nobenega vprašalnika. Če imate kakršna koli vprašanja, se obrnite na svojo študijsko skupino FORTEe. Naslednji vprašalnik lahko izpolnite od …',
        second_text:
          'Trenutno ni na voljo nobenega vprašalnika. Če imate kakršna koli vprašanja, se obrnite na svojo študijsko skupino FORTEe.',
      },
    },
  },
  navigation: {
    contact: 'Stik',
    copyright_note: '© {{ year }} NUM compass',
    dashboard: 'Pregled',
    faq: 'FAQ',
    instructions: 'Navodila',
    imprint: 'Imprint',
    logo: 'FORTEe compass web app',
    logout: 'Odjava',
    privacy_policy: 'Varstvo osebnih podatkov',
    session_expired: 'Vaša seja je potekla. Za nadaljevanje se znova prijavite.',
    terms_of_use: 'Pogoji uporabe',
    title: 'Menu',
  },
  notification_bar: {
    dismiss_button: 'Zapri',
  },
  questionnaire: {
    back: 'Nazaj',
    overview: 'Pregled',
    confirm_submit: {
      error:
        'Pri pošiljanju vaših odgovorov je prišlo do napake. Poizkusite znova pozneje. Ne da bi izgubili svoje odgovore, lahko brskalnik zaprete in nadaljujete pozneje.',
      headline: 'Pošlji vprašalnik',
      infotext: 'Odgovorili ste na vsa vprašanja. Če nadaljujete, bodo vaši podatki poslani. Najlepša hvala!',
    },
    continue: 'Nadaljuj',
    date_input: {
      error: 'Prosimo, preverite vnosno polje',
      day: 'Dan',
      month: 'Mesec',
      open_date_picker: 'Odpri koledar',
      year: 'Leto',
    },
    dropdown_no_results: 'Ni rezultatov',
    fetch_failed: 'Vprašalnika žal ni bilo mogoče pridobiti. Prosimo, poskusite pozneje.',
    fetch_retry: 'Poskusite znova',
    finish: 'Vrni se na pregled',
    group: 'Skupina {{ number }}',
    infotext: 'To besedilo se prikaže, ko vprašalnik ne vsebuje podatkov o namenu.',
    question: 'Vprašajte {{ number }}',
    question_type_unsupported: 'Vprašanja vrste "{{ type }}" trenutno žal niso podprta!',
    success: {
      headline: 'Najlepša hvala!',
      infotext: 'Najlepša hvala za vaš prispevek!',
    },
  },
  report: {
    confirm_submit: {
      back: 'Nazaj',
      continue: 'Pošlji',
      error: 'Na žalost se je pojavila napaka. Prosimo, poizkusite znova pozneje.',
      headline: 'Prijava simptomov',
      infotext: 'Če opažate simptome, lahko o tem poročate. Za oddajo podatkov kliknite na spodnji gumb.',
    },
    success: {
      finish: 'Nazaj na pregled',
      headline: 'Prijava simptomov',
      infotext: 'O tem, da imate simptome, ste uspešno poročali. Kmalu bo na voljo še en vprašalnik.',
    },
  },
  welcome: {
    continue: 'Naprej',
    headline: 'Dobrodošli',
    infotext: `Dobrodošli v spletni aplikaciji FORTEe!
    <br>Tu lahko izpolnite svoje vprašalnike za študijo FORTEe.
    <br>Upoštevajte naslednje napotke:
    <br>Vaši podatki ne bodo shranjeni, vse dokler ne kliknete »Pošlji«. Zato je nadvse pomembno, da med delom z vprašalniki ne zaprete brskalnika. Če želite vprašanja urediti pozneje, lahko pustite okno brskalnika odprto in se vanj vrnete pozneje.
    <br>Če na vprašanje ne morete ali ne želite odgovoriti, lahko vselej kliknete »Nadaljuj«, ne da bi kliknili eno od možnosti odgovora.
    <br>Če ne želite izpolniti celotnega vprašalnika, ga lahko tudi preskočite.
    <br>Z morebitnimi vprašanji se lahko kadarkoli obrnete na svoj študijski center FORTEe!`,
  },
  imprint: {
    headline: 'Imprint',
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
    headline:
      'Spletna aplikacija FORTEe je namenjena izključno uporabi v okviru študije FORTEe. Skladno s tem so do uporabe upravičeni izključno udeleženci študije FORTEe.',
    content:
      'Spletna aplikacija FORTEe je namenjena izključno uporabi v okviru študije FORTEe. Skladno s tem so do uporabe upravičeni izključno udeleženci študije FORTEe.',
  },
  privacy_policy: {
    headline: 'Varstvo osebnih podatkov',
    content: `Dostop do spletne aplikacije je na voljo prek naslednje zaščitene spletne strani: <a href"https://fortee.izks-mainz.de">https://fortee.ghh4.unimedizin-mainz.de/</a>
    <br><br>
    Z uporabo spletne aplikacije FORTEe lahko udeleženci študije izpolnite in oddate vprašalnike iz študije FORTEe. Aplikacija deluje izključno prek ustreznega internetnega brskalnika končne naprave, ki podpira internet; dodatna namestitev programske opreme ali kakršnakoli oblika registracije ni potrebna.
    <br><br>
    Za registracijo potrebna koda udeleženca vsebuje individualno identifikacijsko številko (psevdonim), s katero se podatki iz vprašalnikov posredujejo v hrambo. Tako je mogoče podatke dodeliti udeležencu študije, ne da bi se v ta namen vzpostavila neposredna povezava s podatki za osebno identifikacijo (npr. imenom). Vneseni podatki bodo posredovani in shranjeni samo v psevdonimni in šifrirani obliki. 
    <br><br>
    Prenašajo, obdelujejo in shranjujejo se izključno tisti podatki, ki so vneseni v uporabniški vmesnik spletne aplikacije. Obdelava poteka izključno za namene, opisane v informativnem listu študije FORTEe, in na podlagi podane privolitve, ki jo lahko kadarkoli neformalno prekličete. Spletna aplikacija FORTEe nima dostopa do osebnih podatkov na uporabnikovi napravi. Podatki o vedenju uporabnikov prav tako niso predmet analiz. Izrecno poudarjamo, da se podatki v nobenem trenutku ne uporabljajo z namenom ustvarjanja profila v oglaševalske namene.
    <br><br>
    Prenos podatkov opravi uporabnik, po prenosu pa jih ni več mogoče razveljaviti. Prav tako prek spletne aplikacije ni mogoč priklic podatkov. 
    <br><br>
    <b>Vrsta podatkov</b>
    <ul>
    <li>Identifikacijska številka/psevdonim</li>
    <li>Zdravstveni podatki (med drugim podatki iz vprašalnika o utrujenosti, kakovosti življenja, duševnem zdravju, vzdržljivosti in telesni dejavnosti)</li>
    <li>V okviru uporabe spletnega mesta: naslov IP in časovni žig ob dostopu do spletnega mesta za vzdrževanje funkcionalnosti spletnega mesta. Pravno podlago za obdelavo predstavlja člen 6 (1) (f) GDPR (»zakoniti interes«). Podatki se po 90 dneh standardno in samodejno izbrišejo.</li>
    </ul>
    <br>
    <b>Prejemnik podatkov</b>
    <br>
    Univerzitetni klinični center Mainz,
    klinika in poliklinika za pediatrično in mladostniško medicino,
    pediatrično hematologijo/onkologijo/hemostazeologijo
    (Universitätsmedizin Mainz,
      Klinik und Poliklinik für Kinder- und Jugendmedizin,
      Pädiatrische Hämatologie/Onkologie/Hämostaseologie, 
      Langenbeckstraße 1, D-55131 Mainz)
    <br><br>
    <b>Shranjevanje in brisanje podatkov </b>
    <br>
    Podatki, povezani s študijo, bodo izbrisani najpozneje po 30 letih.
    <br><br>
    <b>Pravice oseb, na katere se nanašajo osebni podatki</b>
    <br>
    <i>Pravica do dostopa do informacij v skladu s 15. členom GDPR: </i>
    <br>
    Imate pravico od upravljavca dobiti potrditev, ali se v zvezi z vami obdelujejo osebni podatki. 
    <br><br>
    <i>Pravica do popravka v skladu s 16. in 19. členom GDPR: </i>
    <br>
    Imate pravico doseči, da upravljavec brez nepotrebnega odlašanja popravi netočne osebne podatke v zvezi z vami. 
    <br><br>
    <i>Pravica do izbrisa v skladu s 17. in 19. členom GDPR: </i>
    <br>
    Imate pravico doseči, da upravljavec brez nepotrebnega odlašanja izbriše osebne podatke v zvezi z vami. 
    <br><br>
    <i>Pravica do omejitve obdelave v skladu z 18. in 19. členom GDPR:</i>
    <br>
    Imate pravico doseči, da upravljavec omeji obdelavo osebnih podatkov v zvezi z vami. 
    <br><br>
    <i>Pravica do prenosljivosti podatkov v skladu z 20. členom GDPR: </i>
    <br>
    Imate pravico, da prejmete osebne podatke v zvezi z vami, ki ste jih posredovali upravljavcu študije. S tem lahko zahtevate, da upravljavec v okviru tehničnih možnosti te podatke posreduje na drugo mesto, ki ga sami določite. 
    <br><br>
    <i>Pravica do ugovora v skladu z 21. členom GDPR: </i>
    <br>
    Imate pravico ugovarjati obdelavi osebnih podatkov v zvezi z vami.
    <br><br>
    <b>Upravljavec</b>
    <br>
    Za obdelavo osebnih podatkov so pravno soodgovorni: 
    <ul>
    <li>Univerzitetni klinični center Mainz (Universitätsmedizin Mainz, Langenbeckstraße 1, D-55131 Mainz)</li>
    <li>Univerzitetna klinika Heidelberg (Universitätsklinikum Heidelberg, In Neuenheimer Feld 672, D-69120 Heidelberg)</li>
    <li>Center za boj proti raku Leon Berard (Centre de Lutte Contre le Cancer Leon Berard, Rue Laennec 28, F-69373 Lyon, Francija) </li>
    <li>Univerza Brookes v Oxfordu (Oxford Brookes University Headington Campus Gipsy Lane, OX3 OPB Oxford, Združeno kraljestvo)* </li>
    <li>Sklad Monza in Brianza za otroka in njegovo mamo (Fondazione Monza e Brianza per ll Bambino e La Sua Mamma, Via Pergolesi 33, I-20052 Monza, Italija) </li>
    <li>Regija Hovedstaden (Kongens Vaenge 2, DK-3400 Hillerod, Danska) </li>
    <li>Evropska univerza v Madridu (Universidad Europea de Madrid SL Calle Tajo S/N, E-28670 Villaviciosa, Španija) </li>
    <li>Sklad IRCCS Nacionalni institut za tumorje (Fondazione IRCCS Istituto Nazionale dei Tumori, Via Venezian 1, I-20133 Milan, Italija) </li>
    <li>Univerzitetni klinični center Ljubljana (Zaloška cesta 002, SI-1000 Ljubljana, Slovenija) v sodelovanju s Forma 3D Ltd. (Slomškova ulica 35, SI-1000 Ljubljana, Slovenija)</li>
    <li>Nemška Visoka šola športa Köln (Deutsche Sporthochschule Köln, Am Sportpark, Muengersdorf 6, D-50933 Köln)</li>
    </ul>
    <br>
    Študijska ekipa FORTEe vašega študijskega centra vam bo z veseljem odgovorila na vsa vprašanja in uveljavila vaše pravice osebe, na katero se nanašajo osebni podatki: v ta namen uporabite kontaktne podatke, navedene v informacijah o študiji. Nadaljnje informacije o študiji FORTEe so vam na voljo tudi v dokumentih študije, ki ste jih prejeli.
    <br><br>
    <b>Kontaktni podatki DSB</b>
    <br>
    Pravico imate do vložitve pritožbe pri informacijskem pooblaščencu po vaši izbiri. Pristojnega informacijskega pooblaščenca najdete tudi v informativnem listu študije FORTEe.`,
  },
};
