module.exports = {
  Title: "Envoyer le Ticket",
  Field: {
    SelectType: "Type de Probleme",
    SelectGame: "Sélectionner un Jeu",
    Account: "Compte",
    Email: "Email",
    Title: "Sujet",
    Description: "Description",
    ScreenShot: "Capture d'écran"
  },
  Select: {
    SelectType: {
      description: "Comment Jouer",
      game: "Jeu",
      account: "Compte",
      payment: "Paiement"
    },
    SelectGame: "S'il vous plaît choisissez un jeu",
    SelectArea: "S'il vous plaît choisissez un serveur."
  },
  ErrorMsg: {
    10001: "Veuillez saisir votre compte",
    10002: "Veuillez saisir un sujet",
    10003: "Veuillez entrer votre description",
    10004: "Ce compte n'existe pas."
  },
  Tips: {
    Succeed: "Votre rapport a été envoyé au développeur de l'application.",
    Upload: "Vous pouvez uploader un fichier JPG. Limite de taille de fichier 500K."
  },
  Button: {
    Ok: "Soumettre",
    Reset: "Réinitialiser",
    Cancel: "Annuler",
    ChooseImage: "Choisir un fichier"
  },
  Text: {
    Title: "Utilisateur rapportant un problème dans le jeu ‘%s’ ‘%s’",
    Context: "Cher développeur, un utilisateur de ‘%s’ (UID ‘%s’, Server ‘%s’) a signalé un problème dans ‘%s’."
  }
};
