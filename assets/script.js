// Assignment code here
var createdpassword = {
  length: function() {
    var passlength = prompt("How long would you like your password to be? Please enter a value between 8 and 128")
    var numpasslength = parseInt(passlength)
    if (numpasslength < 8 || numpasslength > 128){
      alert("Please enter a value between 8 and 128");
      createdpassword.length()
    } else {
      return numpasslength
    }  
  },
  uppercase: "",
  lowercase: "",
  numeric: "",
  special: "",
}



createdpassword.length()
console.log ("The password length selected was " + createdpassword.length())
  

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


