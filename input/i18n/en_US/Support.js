module.exports = {
  Title: "Submit Ticket",
  Field: {
    SelectType: "Issue Type",
    SelectGame: "Select Game",
    Account: "Account",
    Email: "Email",
    Title: "Subject",
    Description: "Description",
    ScreenShot: "Screenshot"
  },
  Select: {
    SelectType: {
      description: "How to Play",
      game: "Game",
      account: "Account",
      payment: "Payment"
    },
    SelectGame: "Please select a game",
    SelectArea: "Please select a server"
  },
  ErrorMsg: {
    10001: "Please enter your account",
    10002: "Please enter a subject",
    10003: "Please enter your description",
    10004: "This account does not exist!"
  },
  Tips: {
    Succeed: "Your report has been sent to the app developer.",
    Upload: "You can upload a JPG file. File size limit 500K."
  },
  Button: {
    Ok: "Submit",
    Reset: "Reset",
    Cancel: "Cancel",
    ChooseImage: "Choose File"
  },
  Text: {
    Title: "User Reporting an issue in ‘%s’‘%s’",
    Context: "Dear Developer，a ‘%s’ user (UID ‘%s’, Server ‘%s’) has reported a issue within ‘%s’"
  }
};
