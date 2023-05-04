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
      'The use of the Fortee Webapp takes place exclusively within the framework of the Fortee study. Accordingly, only study participants of the Fortee study are entitled to use it.',
  },
  privacy_policy: {
    headline: 'Privacy policy',
    content: `The web app can be accessed via the following secure website: https://fortee.izks-mainz.de/
    <br><br>
    By using the Fortee Web App, questionnaires of the Fortee study can be completed and transmitted by study participants. The use takes place exclusively in the corresponding Internet browser of an internet-enabled terminal; no additional installation of software or any form of registration is required.
    <br><br>
    The participant code required for registration includes an individual identification number (pseudonym) with which the data of the questionnaires are transmitted for storage. In this way, the data can be assigned to a study participant without establishing a direct link to the person-identifying data (e.g. name). The entered data is transmitted exclusively pseudonymised and encrypted and stored.
    <br><br>
    Only the data entered in the user interface of the Webapp is transmitted, processed and stored. The processing takes place exclusively for the purposes described in the information document of the Forte study and on the basis of the consent given, which can be revoked informally at any time. The Fortee Webapp does not have access to personal data that is located on the user&rsquo;s terminal device. Also, no data on usage behavior is analysed. It is expressly pointed out that data for the creation of a profile for advertising purposes does not take place at any time.
    <br><br>
    The data transmission takes place by the user and cannot be undone after transmission. Also, no data retrieval is possible via the web app.
    <br><br>
    <b>Type of data</b>
    <ul>
    <li>Identification number/pseudonym</li>
    <li>Health data (questionnaire data on fatigue, quality of life, mental health, resilience and physical activity)</li>
    <li>In the context of the use of the website: IP address and timestamp when accessing the website to maintain the functionality of the website. The legal basis for the processing is Art. 6 paragraph 1 lit. f) GDPR (&ldquo;legitimate interest&rdquo;). The data is deleted by default and automatically after 90 days.</li>
    </ul>
    <br>
    <b>Data Recipients</b>
    <br>
    University Medical Center Mainz, Department of Pediatric and Adolescent Medicine, Pediatric Hematology/Oncology/Hemostaseology (Langenbeckstraße 1, 55131 Mainz)
    <br><br>
    <b>Storage and deletion of data</b>
    <br>
    The study-related data will be deleted after 30 years at the latest.
    <br><br>
    <b>Rights of Affected</b>
    <br>
    <i>Right to information pursuant to Article 15 GDPR:</i>
    You have the right to request information about whether and which personal data are processed by us.
    <br><br>
    <i>Right to rectification pursuant to Articles 16, 19 GDPR:</i>
    You have the right to have incorrect personal data rectified about you.
    <br><br>
    <i>Right to erasure pursuant to Article 17, 19 GDPR:</i>
    <br>
    You have the right to request the deletion of your personal data.
    <br><br>
    <i>Right to restriction of processing pursuant to Articles 18, 19 GDPR:</i>
    <br>
    You have the right to restrict the processing of personal data concerning you.
    <br><br>
    <i>Right to data portability according to Art. 20 GDPR:</i>
    <br>
    You have the right to receive the personal data concerning you that you have provided to the data controllers for the study. This allows you to request that this data be transmitted to you or, where technically possible, to another body designated by you.
    <br><br>
    <i>Right of objection pursuant to Art. 21 GDPR:</i>
    You have the right to object to the processing of your personal data.
    <br><br>
    <b>Responsible person</b>
    <br>
    For the processing of personal data, we are legally jointly responsible:
    <ul>
    <li>University Medical Center Mainz (Langenbeckstraße 1, 55131 Mainz)</li>
    <li>University Hospital Heidelberg (In Neuenheimer Feld 672, 69120 Heidelberg)</li>
    <li>Centre de Lutte Contre le Cancer Leon Berard (Rue Laennec 28, 69373 Lyon, France)</li>
    <li>Oxford Brookes University (Headington Campus Gipsy Lane, OX3 OPB Oxford, United Kingdom, UK)*</li>
    <li>Fondazione Monza e Brianza per ll Bambino e La Sua Mamma (Via Pergolesi 33, 20052 Monza, Italy)</li>
    <li>Hovedstaden Region (Kongens Vaenge 2, 3400 Hillerod, Denmark)</li>
    <li>Universidad Europea de Madrid SL (Calle Tajo S/N, 28670 Villaviciosa, Spain)</li>
    <li>Fondazione IRCCS Istituto Nazionale dei Tumori (Via Venezian 1, 20133 Milan, Italy)</li>
    <li>Univerzitetni Klinicni Center Ljublijana (Zalo&scaron;ka cesta 002, 1000 Ljubljana, Slovenia) in cooperation with Forma 3D Ltd. (Slom&scaron;kova ulica 35, 1000 Ljubljana, Slovenia)</li>
    <li>German Sports University Cologne (Am Sportpark Muengersdorf 6, 50933 Cologne)</li>
    </ul>
    <br>
    If you have any questions or questions about the implementation of your rights, the Fortee study team of your study centre is at your disposal: Please contact the contact details provided in the study information. Further information about the Fortee study can also be found in the study documents handed over to you.
    <br><br>
    <b>Contact details DSB</b>
    <br>
    You have the right to lodge a complaint with a supervisory authority of your choice. The competent supervisory authority can also be found in the information document of the Fortee study.`,
  },
};
