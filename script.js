var generateBtn = document.querySelector("#generate");

/* Setting the variables of all the possible password characters. */
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']

// Setting an empty array to combine all selected character types
var passwordChar = []

// Main function to gather user imput data
generateBtn.onclick = function getUserData () {
//resetting result if user wants to generate multiple passwords
  var result = ''

  var passwordLength = prompt ("How long would you like your password? \n Must be between 8-128 characters long.")
  //if user clicks cancel, tell them CYA!
    if (passwordLength == null) {
      alert ("Goodbye!")
      return;
    }
    //if they add a decimal, tell them its not possible to create a portion of a character
    if (passwordLength.includes(".")) {
      alert ("Please use whole numbers only.")
      return getUserData();
    }
    //converting the length selected into an interger 
    passwordLength = parseInt(passwordLength);

    //checking if its between 8 and 128 in length
    if (passwordLength < 8 || passwordLength > 128) {
      alert ("Please choose a number between 8 and 128!")
      return getUserData();
    }
    //if its not a number, tell them to learn how to read and to put a valid number
    if (isNaN(passwordLength)) {
      alert ("Not a number, Please enter a valid number")
      return getUserData();
    }
    
    else {
      //using my confirms to store true/false info on what type of password they want
  lowerCaseConfirm = confirm ("Use lower case letters? \n OK for yes, cancel for NO")

  upperCaseConfirm = confirm ("Use upper case letters? \n OK for yes, cancel for NO")

  numericConfirm = confirm ("Use numbers? \n OK for yes, cancel for NO") 

  specialCharConfirm = confirm ("Use special characters? \n OK for yes, cancel for NO")
    //if they didnt select anything, tell them to reconsider life, but to try again
    if (!lowerCaseConfirm && !upperCaseConfirm && !numericConfirm && !specialCharConfirm) {
      alert ("You must choose atleast one character type \n Please try again!")
      return getUserData();
    }
    //whatever the user selected for character types, putting the variables into a new array using concat
    if (lowerCaseConfirm === true) {
      passwordChar = passwordChar.concat(lowerCase)
    }

    if (upperCaseConfirm === true) {
      passwordChar = passwordChar.concat(upperCase)
    }

    if (numericConfirm === true) {
      passwordChar = passwordChar.concat(numeric)
    }

    if (specialCharConfirm === true) {
      passwordChar = passwordChar.concat(specialChar)
    }
    //using the password length selected, using a Math.random to generate a random password using the user entered parameters
    for (var i = 0; i < passwordLength; i++) {
      result = result + passwordChar[Math.floor(Math.random() * passwordChar.length)]
    }

    var passwordText = document.querySelector('#password')
    //display result on screen
    passwordText.value = result
  }
}