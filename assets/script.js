// Assignment code here


  var passwordlength = function() {
  var passlength = prompt("How long would you like your password to be? Please enter a value between 8 and 128");
  var numpasslength = parseInt(passlength);
  if (numpasslength < 8 || numpasslength > 128){
    alert("Please enter a value between 8 and 128");
    passwordlength()
  } else {
    return numpasslength
} 
}
var createdpassword = {

  uppercase: function(){
    var upper = confirm("Do you want your password to include uppercase letters?")
    return upper
  },

  lowercase: function() { 
    var low = confirm("Do you want your password to contain lowercase letters?")
    return low
  },

  numeric: function() {
    var num = confirm("Do you want your password to contain numeric values?")
    return num
  },

  special: function() { 
    var spec = confirm("Do you want your password to contain special characters?")
    return spec
},
};

let arrayFromLowToHigh = (low, high) => {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
};

const uppercase = arrayFromLowToHigh(65, 90);
const lowercase = arrayFromLowToHigh(97, 122);
const numbers = arrayFromLowToHigh(48, 57);
const symbols = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));

var GeneratePassword = function() {
  var passlength = passwordlength()
  var upper= createdpassword.uppercase()
  var lower= createdpassword.lowercase()
  var numeric= createdpassword.numeric()
  var special= createdpassword.special()
 let charCodes = []


if(upper){
  charCodes = charCodes.concat(uppercase)
}
if(lower){
 charCodes = charCodes.concat(lowercase)
}
if(special){
 charCodes = charCodes.concat(symbols)
}
if(numeric){
charCodes = charCodes.concat(numbers)
}
const finalcharacters = [] 
for(var i=0; i < passlength; i++){
  const characters = charCodes[Math.floor(Math.random() * charCodes.length)]
  finalcharacters.push(String.fromCharCode(characters));
}
return finalcharacters.join('')
}


  

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = GeneratePassword();
  var passwordText = document.querySelector("#password");

    

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



