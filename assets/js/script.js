// Assignment code here
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowers = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specials = "!#%&'()*+,-./:;<=>?@]^_`{|}~]";
var user = "";
var random = "";


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {

  var pLength = window.prompt("How long would you like your password? 8-128 characters.")
  if (pLength <= 7 || pLength >= 129) {
    alert("password must be within the parameters");
    return;
  };

  var letter1 = window.confirm("Would you like upper case letters?");
  if (letter1) {
    user+=upper
  };

  var letter2 = window.confirm("Would you like lower case letters?");
  if (letter2) {
    user+=lowers
  };

  var number1 = window.confirm("Would you like numbers?");
  if (number1) {
    user+=numbers
  };

  var special = window.confirm("Would you like speical characters?");
  if (special) {
    user+=specials
  };
  
  for (var i=0; i<pLength; i++) {
    random += user.charAt(Math.floor(Math.random() * user.length))
  }
  
return random

};

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);