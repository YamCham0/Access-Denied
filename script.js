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
var rndPass = "";
var allChar = [];
console.log(allChar)

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
  if (lwrChoice) {
    allChar = allChar.concat(lowerChar)
    
  }
  if (upprChoice) {
    allChar = allChar.concat(upperChar)
    
  }
  if (numChoice) {
    allChar = allChar.concat(numChar)
    
  }
  if (spcChoice) {
    allChar = allChar.concat(specialChar)
    
  }
  for (var i = 0; i < length; i++) {
    var index = Math.floor(Math.random() * allChar.length);
    var rndChar = allChar[index];
    rndPass = rndPass.concat(rndChar)
  
  }
   return rndPass;
}
// Button
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = pwCriteria();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
