# Javascript Password Generator

The purpose of this application is to generate a random password by prompting the user for a password length and what time of characters they want included in the password: lowercase, uppercase, numbers, and special characters.

# Deployment

- [Site Deployed on Github Pages](https://langjeff.github.io/HW_03_JS_PasswordGen/)
- [Github Repository for Project](https://github.com/langjeff/HW_03_JS_PasswordGen)

# Psuedocode and Logic

_Action: user clicks button_

- prompt for length between 8 & 128 characters
- store answer as numeric variable (to be used later in for loop for generating password)
- create arrays for lowercase, numeric, & special character types (use toUpper() on lowercase for upper case array.)
  _confirm: you will need to chose at least one character type for your password_
- confirm for lowercase
- store answer as boolean variable
- confirm for uppercase
- store answer as boolean variable
- confirm numeric
- store answer as boolean
- confirm special
- store answer as boolean
  _at end of confirms, validate at least 1 true_
  _if all false, return message you must select at least one special character type_

## After above confirmations and prompts, the function to construct the password performs the following steps.

- if-else statements to evaluate what arrays to concatenate to iterate through for selection.
- for loop to select random elements from above concatenated array. Using Math.floor(Math.random) arraylength iterate through for loop with entered length of password.
- Use push() to store result of each loop to new array to be used in for loop.
- Convert password array to string using .join();
- Place password into html element.

### Some references I used for this project you might find helpful:

- [Array methods reference](https://javascript.info/array-methods)
- [Method for concatenating arrays](https://hackinbits.com/articles/understanding-array-concat-method-in-javascript)
- [Converting lowercase array elements to uppercase](https://stackoverflow.com/questions/45756935/how-to-convert-array-content-to-uppercase)
- [Creating a string from the password array](https://stackoverflow.com/questions/28007949/how-to-convert-array-into-string-without-comma-and-separated-by-space-in-javascr/28007976)
