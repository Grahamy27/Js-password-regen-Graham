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
generateBtn.addEventListener("click", function () {
  var length = getPasswordLength();
  if (length === null)
  return;
});

