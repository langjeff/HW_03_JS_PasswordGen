// ***************DECLARING GLOBAL VARIABLES FOR PASSWORD GENERATOR*********************

// variable in card footer for 'Generate Password' button
var generateBtn = document.querySelector("#generate");

// create variables for boolean storage of character type confirmations
var confirmLow;
var confirmUp;
var confirmNum;
var confirmSpec;
// stores array for alpha characters to be included in password
var lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//stores numberic values for password
var numChar = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//stores special character values for password
var specChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

toUpper = function (x) {
  return x.toUpperCase();
};

var upCase = lowCase.map(toUpper);
// map function on variable to write toUpper case into Array.
// lowCase.map(a => a.toUpperCase());
// },
//converts lowercase to uppercase letters

// lowCase.map(function(x) { return x.toUpperCase(); });

// variable for concatenated array after confirmation of character types to pass to for loop
var passPool;
// ************************FUNCTIONS AND ACTIONS*********************************

// Add event listener to generateBtn to execute 'writePassword' function on click
generateBtn.addEventListener("click", writePassword);
     
// declares function to 'writePassword'
function writePassword() {
  // calls generate password function and stores result as variable
  var password = generatePassword();
  // creates variable for html text element with id password
  var passwordText = document.querySelector("#password");
  // passes value of password from 'generatePassword' function to the password element in html
  passwordText.value = password;
}

// creates function for password generation
function generatePassword() {
  // records password length from user input  
  var pLength = parseInt(prompt(
    "Enter password length:",
    "between 8-128 characters."
  ));
  // evaluates pLength for length criteria and returns error if not satisfied
  if (pLength < 8) {
    alert("Password too short.");
  } 
  else if (pLength > 128) {
    alert("Password too long");
  }
  // if password length is acceptable, confirm characters to use and store booleans
  else {
  var confirmLow = confirm("Do you want lowercase letters?");
  // console.log(confirmLow); console.log for test of variable
  var confirmUp = confirm("Do you want uppercase letters?");
  // console.log(confirmLow); console.log for test of variable
  var confirmNum = confirm("Do you want numbers?");
 // console.log(confirmLow); console.log for test of variable
  var confirmSpec = confirm("Do you want special characters?");
 // console.log(confirmLow); console.log for test of variable
  };
  // Evaluates confirm returns to determine types of characters to include in password
  // if all 4 confirms are false
  if(!confirmLow && !confirmUp && !confirmNum && !confirmSpec) {
    // create alert to indicate choice of one type of character
    passPool= alert("Please choose at least one character type.");
  }
  // if all 4 confirms are true
  else if(confirmLow && confirmUp && confirmNum && confirmSpec) {
    passPool = lowCase.concat(upCase,numChar,specChar);
  }

  //if 3 of the confirms are true
    else if(confirmLow && confirmUp && confirmNum) {
    passPool= lowCase.concat(upCase,numChar);
  }
    else if(confirmLow && confirmUp && confirmSpec) {
    passPool= lowCase.concat(upCase,specChar);
  }
    else if(confirmLow && confirmNum && confirmSpec) {
    passPool= lowCase.concat(numChar,specChar);
  } 
   else if(confirmUp && confirmNum && confirmSpec) {
    passPool= upCase.concat(numChar, specChar);
  }
  //if 2 confirms true
  console.log(passPool);
}