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

const lwcalphabet = "abcdefghijklmnopqrstuvwxyz";
const randomlwcCharacter = lwcalphabet[Math.floor(Math.random() * lwcalphabet.length)];
const upcalphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const randomupcCharacter = upcalphabet[Math.floor(Math.random() * upcalphabet.length)];
const randomNumericCharacter = Math.floor(Math.random() * 10);
const specCharacter = '!#$%&",()*+-./:;<=>?@[\]^_`{|}~';
const randomspecCharacter = specCharacter[Math.floor(Math.random() * specCharacter)]

var passwordoptions = [randomNumericCharacter, randomlwcCharacter, randomupcCharacter, randomspecCharacter];
var arraylength = passwordoptions.length;
var randomArrayValue = Math.floor(Math.random() * arraylength)


var passwordConditions = function(){
  if (!createdpassword.uppercase()){
    passwordoptions.splice(2,1)
  }
  if (!createdpassword.lowercase()){
    passwordoptions.splice(1,1)
  }
  if (!createdpassword.special()){
    passwordoptions.splice(3,1)
  }
  if (!createdpassword.numeric()){
    passwordoptions.splice(0,1)
  }
}
passwordlength()
passwordConditions()

console.log(passwordlength)
console.log(passwordoptions)

  

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



