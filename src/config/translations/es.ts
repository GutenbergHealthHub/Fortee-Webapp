export default {
  authenticate: {
    alternatively: '– o alternativa –',
    continue: 'Continuar',
    error: {
      code_0: 'No se ha podido establecer ninguna conexión de red. Vuelve a intentarlo más tarde.',
      code_401:
        'Desafortunadamente, no se ha podido reconocer el código de participante indicado. Compruebe que sea correcto',
      qr_format:
        'Desafortunadamente, el formato del código QR escaneado no es válido. Escanee un código válido.',
      qr_wrong_app:
        'El código QR escaneado está concebido para otra aplicación. Compruebe la dirección de internet introducida y acceda a la aplicación correcta.',
    },
    headline: 'Iniciar sesión',
    infotext:
      'Introduce tu código de participante en el campo de texto para continuar. Si has recibido un código QR y tu dispositivo móvil dispone de cámara, puedes simplemente escanear el código. En caso de dudas, ponte en contacto con tu centro de estudio FORTEe',
    input_label: 'Tu código de participante',
    stay_logged_in: {
      checkbox: 'Permanecer conectado',
      infotext: 'No elijas esta opción si utilizas un dispositivo público.',
    },
  },
  dashboard: {
    button: {
      logout: 'Cerrar sesión',
      questionnaire: 'Completar cuestionario',
      report: 'Notificar síntomas',
    },
    headline: {
      new_user: 'Bienvenido/a!',
      returning_user: 'Bienvenido/a de nuevo',
    },
    infotext: {
      questionnaire_available: {
        first_text:
          'Hay disponible un cuestionario/un nuevo cuestionario para completar. El cuestionario se debe completar hasta el…',
        second_text: 'Hay disponible un cuestionario/un nuevo cuestionario para completar.',
      },
      questionnaire_not_available: {
        first_text:
          'Actualmente no hay ningún cuestionario disponible. En caso de dudas, ponte en contacto con tu equipo de estudio FORTEe. El próximo cuestionario se podrá completar a partir del…',
        second_text:
          'Actualmente no hay ningún cuestionario disponible. En caso de dudas, ponte en contacto con tu equipo de estudio FORTEe.',
      },
    },
  },
  navigation: {
    contact: 'Datos de contacto',
    copyright_note: '© {{ year }} NUM compass',
    dashboard: 'Visión general',
    faq: 'FAQ',
    instructions: 'Instrucciones',
    imprint: 'Imprimir',
    logo: 'FORTEe web app',
    logout: 'Cerrar sesión',
    privacy_policy: 'Política de privacidad',
    session_expired: 'Tu sesión ha expirado. Vuelve a iniciar sesión para continuar.',
    terms_of_use: 'Condiciones de uso',
    title: 'Menu',
  },
  notification_bar: {
    dismiss_button: 'Cerrar',
  },
  questionnaire: {
    back: 'Atrás ',
    overview: 'Descripción general',
    confirm_submit: {
      error:
        'Al enviar tus respuestas se ha producido un error. Vuelve a intentarlo más tarde. Puedes cerrar tu navegador web y continuar más tarde sin perder las respuestas.',
      headline: 'Enviar cuestionario',
      infotext: 'Has respondido todas las preguntas. Al continuar se transmitirán tus datos. Muchas gracias.',
    },
    continue: 'Continuar',
    date_input: {
      error: 'Comprueba el campo de entrada',
      day: 'Día',
      month: 'Mes',
      open_date_picker: 'Abrir calendario',
      year: 'Año',
    },
    dropdown_no_results: 'Sin resultados',
    fetch_failed: 'No se ha podido abrir el cuestionario. Vuelve a intentarlo más tarde.',
    fetch_retry: 'Volver a intentarlo',
    finish: 'Volver a la visión general',
    group: 'Grupo  {{ number }}',
    infotext: 'Este texto se muestra cuando el cuestionario no contiene información sobre su finalidad.',
    question: 'Pregunta {{ number }}',
    question_type_unsupported: 'Actualmente, las preguntas del tipo «{{ type }}» no se admiten.',
    success: {
      headline: 'Muchas gracias.',
      infotext: 'Muchas gracias por tu participación.',
    },
  },
  report: {
    confirm_submit: {
      back: 'Atrás',
      continue: 'Enviar',
      error: 'Se ha producido un error. Vuelve a intentarlo más tarde.',
      headline: 'Notificar síntomas',
      infotext:
        'Si tienes síntomas, puedes notificarlos. Haz clic en el siguiente botón para transmitir la información.',
    },
    success: {
      finish: 'Volver a la visión general',
      headline: 'Notificar síntomas',
      infotext:
        'Has notificado correctamente que tienes síntomas. Próximamente habrá disponible otro cuestionario.',
    },
  },
  welcome: {
    continue: 'Siguiente',
    headline: 'Bienvenido/a',
    infotext:
      'Te damos la bienvenida a la aplicación web FORTEe. <br>Aquí puedes completar los cuestionarios para el estudio FORTEe. <br>Observa las siguientes indicaciones: <br>Tus datos se guardarán cuando hagas clic en «Enviar». Por tanto, es importante que no cierres el navegador web mientras estés completando los cuestionarios. Si quieres seguir respondiendo las preguntas más tarde, puedes dejar la ventana del navegador web abierta y volver más tarde. <br>Si hay alguna pregunta que no puedes o no quieres responder, en cualquier momento puedes hacer clic en «Continuar» sin marcar ninguna de las opciones de respuesta.<br>En el caso de que no quieras completar un cuestionario completo, también puedes saltártelo. <br>Si tienes dudas, puedes contactar en cualquier momento con tu centro de estudio FORTEe.',
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
    <b>Tipo de datos</b>
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
    <li>Universitätsmedizin Mainz (Langenbeckstraße 1, 55131 Mainz, Alemania)</li>
    <li>Universitätsklinikum Heidelberg (In Neuenheimer Feld 672, 69120 Heidelberg, Alemania)</li>
    <li>Centre de Lutte Contre le Cancer Leon Berard (Rue Laennec 28, 69373 Lyon, Francia) </li>
    <li>Oxford Brookes University (Headington Campus Gipsy Lane, OX3 OPB Oxford, Reino Unido)* </li>
    <li>Fondazione Monza e Brianza per ll Bambino e La Sua Mamma (Via Pergolesi 33, 20052 Monza, Italia) </li>
    <li>Region Hovedstaden (Kongens Vaenge 2, 3400 Hillerod, Dinamarca) </li>
    <li>Universidad Europea de Madrid SL (Calle Tajo S/N, 28670 Villaviciosa) </li>
    <li>Fondazione IRCCS Istituto Nazionale dei Tumori (Via Venezian 1, 20133 Milán, Italia) </li>
    <li>Univerzitetni Klinicni Center Ljublijana (Zaloška cesta 002, 1000 Liubliana, Eslovenia) en cooperación con Forma 3D Ltd. (Slomškova ulica 35, 1000 Liubliana, Eslovenia)</li>
    <li>Deutsche Sporthochschule Köln (Am Sportpark Muengersdorf 6, 50933 Colonia, Alemania)</li>
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
