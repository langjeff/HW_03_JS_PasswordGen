// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// DECLARED ARRAYS AND VARIABLES for generatePassword function
      // ==========================================================================

      var lowerAlpha = [];
      // stores array for alpha characters to be included in password
      var numeric = [];
      //stores numberic values for password
      var specialChar = [];
      //stores special character values for password
      var upperAlpha;
      // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      //
      function passLength() {
        var pLength = prompt(
          "Enter password length:",
          "between 8-128 characters."
        );
        if (pLength < 8) {
          alert("Password too short.");
        } else if (pLength > 128) {
          alert("Password too long");
        }
        console.log(pLength);
      }

      function generatePassword() {
        var lowCase = confirm("Do you want lowercase letters?");
        console.log(lowCase);
        var upCase = confirm("Do you want uppercase letters?");
        console.log(upCase);
        var numChar = confirm("Do you want numbers?");
        console.log(numChar);
        var specChar = confirm("Do you want special characters?");
        console.log(specChar);
      }