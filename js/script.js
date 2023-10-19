// // Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }
function getPasswordLength() {
  var length = prompt("Enter the desired password length 8 - 128 characters");
  if (length === null) return null;

  if (isNaN(length) || length <8 || length > 128) {
    prompt("Please enter a valid password length 8 - 128 characters.");
    return getPasswordLength();
  }
  return Number(length);
}

// Add event listener to generate button


function getCharacterTypes() {
  var useNumbers = prompt("Include numbers?");
  var useLowercase = prompt("Include lowercase characters?");
  var useUppercase = prompt("Include uppercase characters?");
  var useSpecialChars = prompt("Include special characters?");

  if (!(useLowercase || useUppercase || useNumbers || useSpecialChars)) {
    prompt("You must select at least one character type.");
    return getCharacterTypes();
  }
  return {
    useNumbers,
    useLowercase,
    useUppercase,
    useSpecialChars,
  };
}

function generatePassword(length, characterTypes) {
  var numberChars = "0123456789";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialChars = "!@#$%^&*()";
  var availableChars = "";

  if (characterTypes.useNumbers) availableChars += numberChars;
  if (characterTypes.useLowercase) availableChars += lowercaseChars;
  if (characterTypes.useUppercase) availableChars += uppercaseChars;
  if (characterTypes.useSpecialChars) availableChars += specialChars;
  var password = "";
  for (var i = 0; i < length; i++) {
   var randomIndex = Math.floor(Math.random() * availableChars.length);
   password += availableChars.charAt(randomIndex);
  }
  return password;
 }

generateBtn.addEventListener("click", function () {
  var length = getPasswordLength();
  if (length === null)
  return;
var characterTypes = getCharacterTypes();
if (!characterTypes)
return;

var password = generatePassword(length, characterTypes);
passwordText.value = password;
});



















