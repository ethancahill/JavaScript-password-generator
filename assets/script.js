// Assignment code here

// Assignment Code
var generateBtn = document.querySelector("#generate");


const myArrayUpper = Array.from(Array(26)).map((e,i) => i + 65);  
const alphabetUpper = myArrayUpper.map((x) => String.fromCharCode(x));

const myArrayLower = Array.from(Array(26)).map((e,i) => i + 97);
const alphabetLower = myArrayLower.map((x) => String.fromCharCode(x));

const myArrayNumeric = Array.from(Array(10)).map((e,i) => i + 48);
const numericArray = myArrayNumeric.map((x) => String.fromCharCode(x));

const myArraySpecial = Array.from(Array(15)).map((e,i) => i + 33);
const specialArray = myArraySpecial.map((x) => String.fromCharCode(x));


function generatePassword() {
var results = [];
var numberOfCharacters = window.prompt("Please select a password length between and 8 and 128");

var number = parseInt(numberOfCharacters);

  if(number > 7 && number < 129) { 
  
    var lower = window.confirm("Include lower case letters?");

    var upper = window.confirm("Include upper case letters?");
 
    var numeric = window.confirm("Include numbers?");

    var special = window.confirm("Include special characters?");

  } else {
    window.alert("That is an invalid entry. Select a length between 8 and 128");
    return generatePassword();
  }

const passwordArr = [];

const specialChar = ["~", ",", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "'", "="]
const lowerCase =['a', 's', 'd', 'f', 'g','h','j','k','l','p','o', 'i','u','y','t','r','e','w','q','z','x','c','v','b','n','m',]
const upperCase = ['Q','W','E','R','T','Y','U','I','O','P','L','K','J','H','G','F','D','S','A','Z','X','C','V','B','N','M']
const numbers = ['1','2','3','4','5','6','7','8','9','0']

if(special) {
  specialChar.map((char) => {
    passwordArr.push(char)
  })
} if (lower){
  lowerCase.map((char) => {
    passwordArr.push(char)
  })
} if (upper){
  upperCase.map((char) => {
    passwordArr.push(char)
  })
} if (number) {
  numbers.map((char) => {
    passwordArr.push(char)
  })
}
  
 
if ( lower || upper || numeric || special) {
 
  for (var i = 0; i < number; i++) {
    const randomValue = Math.floor(Math.random() * (passwordArr.length - 1 + 1) + 1)
    results.push(passwordArr[randomValue])
    } 
   } else {
    window.alert("You must select one variable.")
    return generatePassword();
   
  }

  const finalResults = results.join('')
  return finalResults;
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
