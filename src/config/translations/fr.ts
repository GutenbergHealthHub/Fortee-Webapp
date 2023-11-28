export default {
  authenticate: {
    alternatively: '– ou bien –',
    continue: 'Continuer',
    error: {
      code_0: "Aucune connexion réseau n'a pu être établie. Réessaie plus tard s.t.p.",
      code_401: 'Impossible de lire le code de participation saisi. Vérifie les données saisies s.t.p.',
      qr_format:
        "Le format du code QR scanné n'est malheureusement pas valide. Scanne un code valide, s.t.p.",
      qr_wrong_app:
        "Le code QR scanné est prévu pour une utilisation avec une autre application que celle-ci. Vérifie l'adresse Internet saisie et ouvre la bonne application.",
    },
    headline: 'Connexion',
    infotext:
      "Entre ton code de participation dans le champ de texte pour continuer. Si tu as reçu un code QR et que ton appareil est muni d'un appareil photo, il te suffit de le scanner au lieu de le saisir. Pour toute question, n'hésite pas à contacter ton centre d'études FORTEe",
    input_label: 'Ton code de participation',
    stay_logged_in: {
      checkbox: 'Rester connecté',
      infotext: 'Ne sélectionne pas cette option si tu utilises un appareil public.',
    },
  },
  dashboard: {
    button: {
      logout: 'Se déconnecter',
      questionnaire: 'Fragebogen ausfüllen',
      report: 'Signaler des symptômes',
    },
    headline: {
      new_user: 'Bienvenue !',
      returning_user: 'Ravis de te revoir!',
    },
    infotext: {
      questionnaire_available: {
        first_text:
          "Un nouveau questionnaire à remplir est disponible. Le questionnaire doit être rempli d'ici le …",
        second_text: 'Un nouveau questionnaire à remplir est disponible.',
      },
      questionnaire_not_available: {
        first_text:
          "Aucun questionnaire n'est disponible actuellement. Pour toute question, n'hésite pas à contacter ton centre d'études FORTEe. Le prochain questionnaire peut être rempli à partir du …",
        second_text:
          "Aucun questionnaire n'est disponible actuellement. Pour toute question, n'hésite pas à contacter ton centre d'études FORTEe.",
      },
    },
  },
  navigation: {
    contact: 'Contact',
    copyright_note: '© {{ year }} NUM compass',
    dashboard: 'Aperçu',
    faq: 'FAQ',
    instructions: 'Instructions',
    imprint: 'Mentions Légales',
    logo: 'FORTEe compass web app',
    logout: 'Se déconnecter',
    privacy_policy: 'Déclaration de confidentialité ',
    session_expired: 'Ta session a expiré. Reconnecte-toi pour continuer.',
    terms_of_use: "Conditions d'utilisation",
    title: 'Menu',
  },
  notification_bar: {
    dismiss_button: 'Fermer',
  },
  questionnaire: {
    back: 'Retour ',
    overview: 'Aperçu',
    confirm_submit: {
      error:
        "Une erreur s'est produite lors de l'envoi de tes réponses. Réessaie plus tard s.t.p. Tu peux fermer ton navigateur et continuer plus tard sans perdre tes réponses.",
      headline: 'Envoyer le questionnaire',
      infotext:
        'Tu as répondu à toutes les questions. Il suffit de continuer pour transmettre tes données. Merci beaucoup!',
    },
    continue: 'Continuer',
    date_input: {
      error: 'Vérifie le champ de saisie s.t.p.',
      day: 'Jour',
      month: 'Mois',
      open_date_picker: 'Ouvrir le calendrier',
      year: 'Année',
    },
    dropdown_no_results: 'Aucun résultat',
    fetch_failed: "Le questionnaire n'a malheureusement pas pu être téléchargé. Réessaie plus tard s.t.p.",
    fetch_retry: 'Réessayer',
    finish: "Revenir à l'aperçu",
    group: 'Groupe {{ number }}',
    infotext: "Ce texte s'affiche si le questionnaire ne contient pas d'informations sur sa finalité.",
    question: 'Question {{ number }}',
    question_type_unsupported:
      'Les questions du type « {{ type }} » ne sont pas prises en charge actuellement!',
    success: {
      headline: 'Merci beaucoup!',
      infotext: 'Nous te remercions de ta contribution!',
    },
  },
  report: {
    confirm_submit: {
      back: 'Retour',
      continue: 'Envoyer',
      error: "Une erreur s'est produite. Réessaie plus tard s.t.p.",
      headline: 'Signaler des symptômes',
      infotext:
        'Si tu présentes des symptômes, tu peux nous les signaler. Clique sur le bouton ci-dessous pour transmettre les informations.',
    },
    success: {
      finish: "Revenir à l'aperçu'",
      headline: 'Signaler des symptômes',
      infotext:
        'Le signalement de tes symptômes a bien été enregistré. Un autre questionnaire sera mis à ta disposition prochainement.',
    },
  },
  welcome: {
    continue: 'Continuer',
    headline: 'Bienvenue',
    infotext:
      "Bienvenue dans l'application web FORTEe ! <br>Tu peux remplir ici les questionnaires de l'étude FORTEe.<br>Merci de tenir compte des remarques suivantes : <br>Tes données ne seront enregistrées qu'après avoir cliqué sur « Transmettre ». Il est donc important de ne pas fermer le navigateur pendant que tu traites les questionnaires. Si tu souhaites répondre plus tard, il te suffit de laisser la fenêtre du navigateur ouverte et de reprendre le questionnaire plus tard. <br>Si tu ne peux pas ou ne souhaites pas répondre à une question, tu peux cliquer à tout moment sur « Continuer » sans cocher l'une des réponses possibles.<br>Si tu ne souhaites pas remplir une fiche complète, tu peux également la sauter.<br>Pour toute question, tu pouvez t'adresser à tout moment à ton centre d'études FORTEe.",
  },
  imprint: {
    headline: 'Mentions Légales',
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
    headline: "Conditions d'utilisation",
    content:
      "L'utilisation de l'application web FORTEe a lieu exclusivement dans le cadre de l'étude FORTEe. Par conséquent, seuls les participants et participantes à l'étude FORTEe sont habilités à l'utiliser.",
  },
  privacy_policy: {
    headline: 'Déclaration de confidentialité ',
    content: `L'application web est accessible via le site Internet sécurisé suivant : <a href="https://fortee.izks-mainz.de">https://fortee.ghh4.unimedizin-mainz.de/</a>
    <br><br>
    L'utilisation de l'application web FORTEe permet aux participants et participantes à l'étude de remplir et de transmettre des questionnaires de l'étude FORTEe. L'application est uniquement utilisée dans le navigateur Internet correspondant d'un terminal pouvant être connecté à Internet ; elle ne nécessite aucune installation de logiciel supplémentaire ou forme d'enregistrement quelconque.
    <br><br>
    Le code participant nécessaire à l'inscription contient un numéro d'identification individuel (pseudonyme) avec lequel les données des questionnaires sont transférées en vue de leur enregistrement. Les données peuvent ainsi être affectées à un participant ou une participante à l'étude sans qu'un lien direct puisse être établi avec les données permettant d'identifier la personne (p. ex. le nom). Les données saisies sont exclusivement transmises et enregistrées sous forme de pseudonyme et cryptées. 
    <br><br>
    Seules les données saisies dans l'interface utilisateur de l'application web font l'objet d'une transmission, d'un traitement et d'un enregistrement. Le traitement de ces données est uniquement réalisé aux fins décrites dans la note d'information de l'étude FORTEe et sur la base du consentement donné, qui peut être révoqué à tout moment. L'application web FORTEe n'a pas accès aux données personnelles enregistrées sur le terminal de l'utilisateur. De même, aucune donnée relative au comportement de l'utilisateur n'est analysée. Il est important de souligner qu'à aucun moment, des données sont utilisées pour la création d'un profil à des fins publicitaires.
    <br><br>
    Le transfert des données est effectué par l'utilisateur et n'est pas réversible, une fois la transmission effectuée. Une consultation de données via l'application web n'est pas non plus possible. 
    <br><br>
    <b>Type de données</b>
    <li>Numéro d'identification/pseudonyme</li>
    <li>Données sur la santé (données contenues dans le questionnaire, portant notamment sur la fatigue, la qualité de vie, la santé mentale, la résilience et l'activité physique)</li>
    <li>Dans le cadre de l'utilisation du site Internet : adresse IP et horodatage lors de la consultation du site Internet afin d'assurer le fonctionnement correct de ce dernier. L'article 6, paragraphe 1, point f) du RGPD (« intérêt légitime ») constitue la base juridique de ce traitement. Les données sont normalement supprimées automatiquement au bout de 90 jours.</li>
    </ul>
    <br>
    <b>Destinataire des données</b>
    <br>
    Universitätsmedizin Mainz, Klinik und Poliklinik für Kinder- und Jugendmedizin (Clinique et polyclinique de médecine pédiatrique), Pädiatrische Hämatologie/Onkologie/Hämostaseologie (Hématologie/oncologie/hémostasie pédiatrique) (Langenbeckstraße 1, 55131 Mayence, Allemagne)
    <br><br>
    <b>Enregistrement et suppression des données</b>
    <br>
    Les données relatives à l'étude sont supprimées au bout de 30 ans au plus tard.
    <br><br>
    <b>Droits des personnes concernées</b>
    <br>
    <i>Droit d'accès conformément à l'article 15 du RGPD :</i> 
    <br>
    Vous avez le droit de demander si des données à caractère personnel sont traitées par nos soins et, dans ce cas, quelles sont ces données. 
    <br><br>
    <i>Droit de rectification conformément aux articles 16 et 19 du RGPD : </i>
    <br>
    Vous avez le droit d'obtenir la rectification de données à caractère personnel vous concernant qui sont inexactes. 
    <br><br>
    <i>Droit à l'effacement conformément aux articles 17 et 19 du RGPD : </i>
    <br>
    Vous avez le droit de demander l'effacement des données à caractère personnel vous concernant. 
    <br><br>
    <i>Droit à la limitation du traitement conformément aux articles 18 et 19 du RGPD : </i>
    <br>
    Vous avez le droit d'obtenir la limitation du traitement des données à caractère personnel vous concernant. 
    <br><br>
    <i>Droit à la portabilité des données conformément à l'article 20 du RGPD : </i>
    <br>
    Vous avez le droit de recevoir les données à caractère personnel vous concernant que vous avez fournies aux responsables de l'étude dans le cadre de cette dernière. Vous pouvez ainsi demander que ces données vous soient transmises à vous ou, dans la mesure où la technique le permet, à un autre destinataire désigné par vos soins. 
    <br><br>
    <i>Droit d'opposition conformément à l'article 21 du RGPD : </i>
    <br>
    Vous avez le droit de vous opposer au traitement des données à caractère personnel vous concernant.
    <br><br>
    <b>Responsable du traitement des données </b>
    <br>
    Le traitement des données à caractère personnel relève de la responsabilité juridique conjointe de : 
    <ul>
    <li>Universitätsmedizin Mainz (Langenbeckstraße 1, 55131 Mayence, Allemagne)</li>
    <li>Universitätsklinikum Heidelberg (In Neuenheimer Feld 672, 69120 Heidelberg, Allemagne)</li>
    <li>Centre de Lutte Contre le Cancer Leon Berard (Rue Laennec 28, 69373 Lyon, France) </li>
    <li>Oxford Brookes University (Headington Campus Gipsy Lane, OX3 OPB Oxford, Royaume Uni, UK)* </li>
    <li>Fondazione Monza e Brianza per ll Bambino e La Sua Mamma (Via Pergolesi 33, 20052 Monza, Italie) </li>
    <li>Region Hovedstaden (Kongens Vaenge 2, 3400 Hillerod, Danemark) </li>
    <li>Universidad Europea de Madrid SL (Calle Tajo S/N, 28670 Villaviciosa, Espagne) </li>
    <li>Fondazione IRCCS Istituto Nazionale dei Tumori (Via Venezian 1, 20133 Milan, Italie) </li>
    <li>Univerzitetni Klinicni Center Ljublijana (Zaloška cesta 002, 1000 Ljubljana, Slovénie) en coopération avec Forma 3D Ltd. (Slomškova ulica 35, 1000 Ljubljana, Slovénie)</li>
    <li>Deutsche Sporthochschule Köln (Am Sportpark Muengersdorf 6, 50933 Cologne, Allemagne)</li>
    </ul>
    <br>
    L'équipe chargée de l'étude FORTEe de votre centre d'études se tient volontiers à votre disposition pour répondre à vos questions et vous aider à mettre en œuvre vos droits de personne concernée : nous vous invitons à vous adresser à cet effet aux interlocuteurs mentionnés dans les documents d'information relatifs à l'étude. Vous trouverez également d'autres informations sur l'étude FORTEe dans la documentation qui vous a été remise.
    <br><br>
    <b>Coordonnées de l'autorité de protection des données</b>
    <br>
    Vous disposez d'un droit de recours auprès d'une autorité de contrôle de votre choix. L'autorité de contrôle compétente figure également dans la note d'information de l'étude FORTEe.
    `,
  },
};
