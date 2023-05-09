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
    imprint: 'Imprimir',
    logo: 'NUM compass web app',
    logout: 'Logout',
    privacy_policy: 'Política de privacidad ',
    session_expired: 'Your session expired. Please log in again to proceed.',
    terms_of_use: 'Condiciones de uso',
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
    headline: 'Imprimir',
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
    headline: 'Condiciones de uso',
    content:
      'The use of the Fortee Webapp takes place exclusively within the framework of the Fortee study. Accordingly, only study participants of the Fortee study are entitled to use it.',
  },
  privacy_policy: {
    headline: 'Política de privacidad',
    content: `<p>
    La aplicación web se puede acceder a través de la siguiente página web protegida: <a
        href="https://fortee.izks-mainz.de">https://fortee.izks-mainz.de/</a>
    <br><br>
    Los participantes del estudio pueden rellenar y enviar cuestionarios del estudio FORTEe usando la aplicación web
    FORTEe. Esta se puede usar exclusivamente en el navegador web de un dispositivo móvil con acceso a Internet. Es
    decir, no es necesario instalar ningún software adicional ni registrarse.
    <br><br>
    El código de participante requerido para iniciar sesión consta de un número de identificación individual
    (pseudónimo) con el cual se envían los datos de los cuestionarios para guardarlos. De este modo, se pueden asignar
    los datos a un participante de estudio sin tener que establecer un vínculo directo a los datos personales (p. ej.
    nombre). Los datos solo son transmitidos y guardados con el pseudónimo correspondiente y encriptados.
    <br><br>
    Únicamente se transmiten, procesan y guardan los datos introducidos en la interfaz de usuario de la aplicación web.
    El procesamiento solo se lleva a cabo para los fines descritos en el folleto informativo del estudio FORTEe y en
    base con el consentimiento informado que podrá ser revocado en cualquier momento y de manera informal. La aplicación
    web FORTEe no tiene acceso a datos personales que se encuentren en el dispositivo móvil del usuario. Asimismo, no se
    analiza ningún dato respecto al comportamiento de uso. Se informa de forma explícita que no se utilizan los datos en
    ningún momento para la creación de un perfil con fines publicitarios.
    <br><br>
    El usuario transmite los datos y, tras hacerlo, esta acción no puede revertirse. A través de la aplicación web
    tampoco se puede acceder a los datos.
    <br><br>
    <i>Tipo de datos</i>
<ul>
    <li>Número de identificación/pseudónimo</li>
    <li>Datos de salud (datos de cuestionario: entre otros, fatiga, calidad de vida, salud mental, resiliencia y
        actividad
        física)</li>
    <li>En el marco del uso de la página web: dirección IP y sello de fecha y hora al acceder a la página web para el
        mantenimiento y la funcionalidad de la página web. La base jurídica para el procesamiento es el art. 6 pár. 1
        letra f) del RGPD («interés legítimo»). Los datos se borran por defecto y automáticamente transcurridos 90 días.
    </li>
</ul>
<br>
<b>Receptor de los datos</b>
<br>
Universitätsmedizin Mainz, Klinik und Poliklinik für Kinder- und Jugendmedizin, Pädiatrische
Hämatologie/Onkologie/Hämostaseologie (Langenbeckstraße 1, 55131 Mainz)
<br><br>
<b>Almacenamiento y borrado de los datos</b>
<br>
Los datos asociados al estudio se borran transcurridos 30 años a más tardar.
<br><br>
<b>Derechos de las personas afectadas</b>
<br><br>
<i>Derecho de acceso según el artículo 15 del RGPD:</i>
Usted tiene el derecho de recibir nuestra confirmación de si hemos tratado o no datos personales que le conciernen y, en
tal caso, información sobre cuáles son estos datos.
<br><br>
<i>Derecho de rectificación según los artículos 16 y 19 del RGPD:</i>
<br>
Usted tiene el derecho de solicitar la rectificación de los datos personales que no sean correctos.
<br><br>
<i>Derecho de supresión según los artículos 17 y 19 del RGPD:</i>
<br>
Usted tiene el derecho de solicitar el borrado de los datos personales que le conciernen.
<br><br>
<i>Derecho a la limitación del tratamiento según los artículos 18 y 19 del RGPD:</i>
<br>
Usted tiene el derecho de limitar el tratamiento de los datos personales que le conciernen.
<br><br>
<i>Derecho a la portabilidad de los datos según el artículo 20 del RGPD:</i>
<br>
Usted tiene el derecho de recibir sus datos personales que ha proporcionado al responsable del estudio. De este
modo, puede solicitar que estos datos sean transferidos o bien a usted o, en caso de que sea técnicamente posible, a
otro responsable especificado por usted.
<br><br>
<i>Derecho de oposición según el artículo 21 del RGPD:</i>
<br>
Usted tiene el derecho a oponerse al tratamiento de los datos personales que le conciernen.
<br><br>
<b>Responsable</b>
<br>
Los responsables legales del procesamiento de los datos personales son:
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
En caso de dudas y para ejercer sus derechos del interesado, el equipo del estudio FORTEe de su centro de estudio
está disponible: para ello, póngase en contacto utilizando los datos de contacto indicados en la información del
estudio. También encontrará más información sobre el estudio FORTEe en los documentos del estudio que se le han
entregado.
<br><br>
<b>Datos de contacto DSB (autoridad alemana para la protección de datos)</b>
<br>
Usted tiene el derecho a presentar una reclamación ante una autoridad de control de su elección. En el folleto
informativo del estudio FORTEe también encontrará las autoridades de control competentes.`,
  },
};
