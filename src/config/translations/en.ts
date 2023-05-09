export default {
  authenticate: {
    alternatively: '– or alternatively –',
    continue: 'Proceed',
    error: {
      code_0: 'An error happened while establishing a network connection. Please try again later.',
      code_401: 'The participation code was not recognized. Please verify that your input is correct.',
      qr_format: 'Invalid QR code format. Please scan a valid code.',
      qr_wrong_app:
        'This QR code belongs to another app. Please verify that you have entered the correct internet address and open the correct app.',
    },
    headline: 'Login',
    infotext:
      'Enter your participation code to proceed. In case your device is equipped with a camera and you have received a QR code, you can simply scan it instead of entering the code.',
    input_label: 'Your participation code',
    stay_logged_in: {
      checkbox: 'Stay logged in',
      infotext: 'Do not choose this option in case you are using a public device.',
    },
  },
  dashboard: {
    button: {
      logout: 'Logout',
      questionnaire: 'Open questionnaire',
      report: 'Report symptoms',
    },
    headline: {
      new_user: 'Welcome!',
      returning_user: 'Welcome back!',
    },
    infotext: {
      questionnaire_available: {
        first_text:
          "This text is rendered in case that there is an unsubmitted questionnaire available. The questionnaire's deadline is",
        second_text:
          'This additional text is displayed in case that there is an unsubmitted questionnaire available.',
      },
      questionnaire_not_available: {
        first_text:
          'This text is rendered when there is no questionnaire available at the moment. The next questionnaire can be filled out starting at',
        second_text:
          'This additional text is displayed in case there is no questionnaire available at the moment. Should you have symptoms, you can report this at any time.',
      },
    },
  },
  navigation: {
    contact: 'Contact',
    copyright_note: '© {{ year }} NUM compass',
    dashboard: 'Overview',
    faq: 'FAQ',
    imprint: 'Imprint',
    logo: 'NUM compass web app',
    logout: 'Logout',
    privacy_policy: 'Privacy policy',
    session_expired: 'Your session expired. Please log in again to proceed.',
    terms_of_use: 'Terms of use',
    title: 'Menu',
  },
  notification_bar: {
    dismiss_button: 'Close',
  },
  questionnaire: {
    overview: 'Go to overview',
    back: 'Back',
    confirm_submit: {
      error:
        'An error happened while sending your answers. Please try it again at a later time. You may close your browser and proceed later without losing your answers.',
      headline: 'Submit questionnaire',
      infotext: 'You have answered all questions. By proceeding, your data will be submitted.',
    },
    continue: 'Proceed',
    date_input: {
      error: 'Please verify your input.',
      day: 'Day',
      month: 'Month',
      open_date_picker: 'Open a date picker',
      year: 'Year',
    },
    dropdown_no_results: 'No results',
    fetch_failed: 'An error happened while retrieving the questionnaire. Please try again later.',
    fetch_retry: 'Retry',
    finish: 'Return to overview',
    group: 'Group {{ number }}',
    infotext: 'This text is shown when the questionnaire does not contain information on its purpose.',
    question: 'Question {{ number }}',
    question_type_unsupported: 'Questions of type "{{ type }}" are not supported at the moment!',
    success: {
      headline: 'Success',
      infotext: 'Thank you for your contribution!',
    },
  },
  report: {
    confirm_submit: {
      back: 'Back',
      continue: 'Submit',
      error: 'Unfortunately an error happened. Please try again later.',
      headline: 'Report symptoms',
      infotext: 'You can report that you have symptoms. Click the button below to submit that information.',
    },
    success: {
      finish: 'Return to overview',
      headline: 'Report symptoms',
      infotext:
        'You have successfully reported that you have symptoms. A new questionnaire will be provided to you shortly.',
    },
  },
  welcome: {
    continue: 'Proceed',
    headline: 'Welcome',
    infotext: 'Here is the place for a short and informative introductory text about the app.',
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
    headline: 'Terms of Use',
    content:
      'The FORTEe web app is to be used exclusively within the framework of the FORTEe study. Accordingly, only participants of the FORTEe study are authorised to use the web app',
  },
  privacy_policy: {
    headline: 'Privacy policy',
    content: `The web app is accessed via the following secure website: <a href="https://fortee.izks-mainz.de">https://fortee.izks-mainz.de/</a>
    <br><br>
    Using the FORTEe web app, study participants can complete and send questionnaires of the FORTEe study. The web app is used only in the internet browser of a web-enabled device; no additional software installation or any form of registration are required.
    <br><br>
    The participant identification code required for registration contains an individual identification number (pseudonym) using which the data in the questionnaires is transmitted for storage. This allows the data to be assigned to a participant without establishing a direct link to the personal identifying data (e.g. name). The entered data is always transmitted and stored under a pseudonym and in encrypted form.
    <br><br>
    Only the data entered in the user interface of the web app is transmitted, processed and stored. Processing is performed exclusively for the purposes described in the information document regarding the FORTEe study and on the basis of the given consent, which can be withdrawn informally at any time. The FORTEe web app cannot access personal data that is stored on the user's end device. Furthermore, no data regarding user behaviour is analysed. It is expressly pointed out that no data for generating a profile for advertising purposes is collected at any time.
    <br><br>
    Data transmission is initiated by the user and cannot be reversed once the data has been transmitted. Furthermore, it is not possible to retrieve data via the web app. 
    <br><br>
    <b>Type of data</b>
    <ul>
    <li>Identification number/pseudonym</li>
    <li>Data transmission is initiated by the user and cannot be reversed once the data has been transmitted. Furthermore, it is not possible to retrieve data via the web app.</li>
    <li>During use of the website: IP address and timestamp when the website was called, in order to maintain the functionality of the website. The legal basis for processing is Art. 6, Sect. 1(f) GDPR ("legitimate interest"). The data is erased by default and in an automated process after 90 days.</li>
    </ul>
    <br>
    <b>Data Recipient</b>
    <br>
    Universitätsmedizin Mainz, Klinik und Poliklinik für Kinder- und Jugendmedizin, Pädiatrische Hämatologie/Onkologie/Hämostaseologie – University Medical Centre Mainz, Clinic and Polyclinic for Children and Youth Medicine, Paediatric Haematology/Oncology/Haemostaseology (Langenbeckstr. 1, 55131 Mainz, Germany)
    <br><br>
    <b>Storage and deletion of data</b>
    <br>
    The study-related data is erased at the latest after 30 yearst.
    <br><br>
    <b>Rights of the persons concerned</b>
    <br>
    <i>Right of access to information in accordance with Art. 15 GDPR:</i>
    You have the right to request information as to whether and which personal data is processed by us. 
    <br><br>
    <i>Right to rectification in accordance with Art. 16, 19 GDPR: </i>
    You have the right to obtain rectification of incorrect personal data concerning you
    <br><br>
    <i>Right to erasure in accordance with Art. 17, 19 GDPR: </i>
    <br>
    You have the right to request the erasure of the personal data concerning you. 
    <br><br>
    <i>Right to restriction of processing in accordance with Art. 18, 19 GDPR: </i>
    <br>
    You have the right to restrict the processing of the personal data concerning you.
    <br><br>
    <i>Right to data portability in accordance with Art. 20 GDPR: :</i>
    <br>
    You have the right to receive the personal data concerning you, which you provided to the person responsible for the study. You can therefore request that this data be transmitted either to you or, if technically possible, to a different recipient that you have specified.
    <br><br>
    <i>Right to object in accordance with Art. 21 GDPR:</i>
    You have the right to object to processing of the personal data concerning you.
    <br><br>
    <b>Institutes responsible</b>
    <br>
    The following institutes share legal responsibility for processing of the personal data:
    <ul>
    <li>University Medical Center Mainz (Langenbeckstraße 1, 55131 Mainz)</li>
    <li>University Hospital Heidelberg (In Neuenheimer Feld 672, 69120 Heidelberg)</li>
    <li>Centre de Lutte Contre le Cancer Leon Berard (Rue Laennec 28, 69373 Lyon, France)</li>
    <li>Oxford Brookes University (Headington Campus Gipsy Lane, OX3 OPB Oxford, United Kingdom, UK)*</li>
    <li>Fondazione Monza e Brianza per ll Bambino e La Sua Mamma (Via Pergolesi 33, 20052 Monza, Italy)</li>
    <li>Hovedstaden Region (Kongens Vaenge 2, 3400 Hillerod, Denmark)</li>
    <li>Universidad Europea de Madrid SL (Calle Tajo S/N, 28670 Villaviciosa, Spain)</li>
    <li>Fondazione IRCCS Istituto Nazionale dei Tumori (Via Venezian 1, 20133 Milan, Italy)</li>
    <li>Univerzitetni Klinicni Center Ljublijana (Zaloška cesta 002, 1000 Ljubljana, Slovenia) in cooperation with Forma 3D Ltd. (Slomškova ulica 35, 1000 Ljubljana, Slovenia)</li>
    <li>German Sports University Cologne (Am Sportpark Muengersdorf 6, 50933 Cologne)</li>
    </ul>
    <br>
    If you have queries or you wish to implement the rights as listed under "Rights of the persons concerned", contact the FORTEe study team of your study centre: Please refer to the contact data given in the study information. Further information on the FORTEe study can also be found in the study documentation that you received.    <br><br>
    <b>Contact data of DSB (German Data Protection Authority)
    </b>
    <br>
    You are entitled to exercise your right of appeal at a supervisory authority of your choice. You will also find the responsible supervisory authority in the information document regarding the FORTEe study.`,
  },
};
