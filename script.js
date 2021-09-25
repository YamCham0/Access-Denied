// Assignment Code
// variables for characters Arrays
var lowerChar = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperChar = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var specialChar = [
  "?",
  "@",
  "%",
  "+",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// function to grab user input
function pwCriteria() {
  var length = parseInt(
    prompt("Choose a password length from 8 to 128 characters")
  );
  // length validation
  if (length < 8 || length > 128 || Number.isNaN(length)) {
    alert("Password needs to be in beetwen 8 to 128");
    return;
  }

  //I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  var lwrChoice = confirm("Click ok if you want lower case letters");

  var upprChoice = confirm("Click ok if you want upper case letters");

  var numChoice = confirm("Click ok if you want numbers");

  var spcChoice = confirm("Click ok if you want special characters");
  // VALIDATE IF USER CHOSE CHARACTERS
  if (
    lwrChoice === false &&
    upprChoice === false &&
    numChoice === false &&
    spcChoice === false
  ) {
    alert("The password must contain one type of character!");
    return;
  }
  var userChoice = {
    length: length,
    lower: lwrChoice,
    upper: upprChoice,
    number: numChoice,
    special: spcChoice
   }
   return userChoice;
}
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var input = pwCriteria();
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
