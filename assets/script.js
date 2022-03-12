// Assignment code here
var createdpassword = {
  length: function() {
    var passlength = prompt("How long would you like your password to be? Please enter a value between 8 and 128");
    var numpasslength = parseInt(passlength);
    if (numpasslength < 8 || numpasslength > 128){
      alert("Please enter a value between 8 and 128");
      createdpassword.length()
    } else {
      return numpasslength
  } 
  },

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


console.log(createdpassword.length())