// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']
var result = ''

// Write password to the #password input

generateBtn.onclick = function getUserData () {

  passwordLength = prompt ("How long would you like your password? \n Must be between 8-128 characters long.")
  
    var length = parseInt(passwordLength);
  
    if (passwordLength == null) {
      alert ("Goodbye!")
      return;
    }

    if (passwordLength < 8 || passwordLength > 128) {
      alert ("Please choose a number between 8 and 128!")
      return getUserData();
      }

    if (isNaN(passwordLength)) {
      alert ("Not a number, Please enter a valid number")
      return getUserData();
      }
    
    else {
  lowerCaseConfirm = confirm ("Use lower case letters? \n OK for yes, cancel for NO")
  upperCaseConfirm = confirm ("Use upper case letters? \n OK for yes, cancel for NO")
  numericConfirm = confirm ("Use numbers? \n OK for yes, cancel for NO") 
  specialCharConfirm = confirm ("Use special characters? \n OK for yes, cancel for NO")
      
    if (!lowerCaseConfirm && !upperCaseConfirm && !numericConfirm && !specialCharConfirm) {
      alert ("You must choose atleast one character type \n Please try again!")
      return getUserData();
    }

    





  }
}



/*
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
*/

