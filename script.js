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
var specChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// function to return array of strings to upper case array
toUpper = function (x) {
  return x.toUpperCase();
};

// map function on variable to write toUpper case into Array.
var upCase = lowCase.map(toUpper);

// variable for concatenated array after confirmation of character types to pass to for loop
var passPool;

// variable for placeholder array for passing upper case when it is the only array selected // learned this from other students in class //
var holderArray = [];


// ************************FUNCTIONS AND ACTIONS*********************************

// Add event listener to generateBtn to execute 'writePassword' function on click
generateBtn.addEventListener("click", writePassword);
     
// declares function to 'writePassword'
function writePassword() {
  // calls generate password function 
  generatePassword();
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
    else if(confirmLow && confirmUp) {
    passPool= lowCase.concat(upCase);
  }
    else if(confirmLow && confirmNum) {
    passPool= lowCase.concat(numChar);
  }
    else if(confirmLow && confirmSpec) {
    passPool= lowCase.concat(specChar);
  }
    else if(confirmUp && confirmNum) {
    passPool= upCase.concat(numChar);
  } 
    else if(confirmUp && confirmSpec) {
    passPool= upCase.concat(specChar);
  }
    else if(confirmNum && confirmSpec) {
    passPool= numChar.concat(specChar);
  }
  // if only one chosen
    else if(confirmLow) {
    passPool= lowCase;
  }
    else if(confirmNum) {
    passPool= numChar;
    }
    else if(confirmSpec) {
    passPool= specChar;
  }
    else if(confirmUp) {
    passPool= holderArray.concat(upCase);
  }
    // console logs for testing
    // console.log(passPool);
    // console.log(passPool.length);
    // console.log(pLength);
  //array to pass randomChar to in for loop.
  var passArray = [];
  // for loop to choose random selections from passpool array 
  for (i=0; i < pLength; i++) {
  // method to pull random character from passPool array
  var randomChar = passPool[Math.floor(Math.random() * passPool.length)];
  // push method to add elements from randomChar to array 
  passArray.push(randomChar);
  }
  //console log test for array elements in password
  //for (j=0; j<passArray.length; j++) {
  //console.log(passArray[j]);  
  
  // join method to pass array to string with no delimiter  
  password = passArray.join('');
  //console.log(password); console log for testing password
}
