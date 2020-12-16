// Assignment Code





var generateBtn = document.querySelector("#generate");

function generatePassword(){

var newPassword = "";
var passwordArray = [];
var lettersUpper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lettersLower = ["abcdefghijklmnopqrstuvwxyz"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "+", "?"];

var passwordRequest = prompt("How long would you like your password to be? (longer that 8 characters, shorter than 128 characters.");
  if (passwordRequest < 8 || passwordRequest > 128 || passwordRequest === "") {
    alert("Please enter a value between 8 and 128.");
    return;
    
  }
var lowerCaseQuestion = confirm("Would you like lower case letters in your password?")  
  if(lowerCaseQuestion){
  passwordArray += lettersLower;
  }

var capitalsQuestion = confirm("Would you like capital letters in your password?");
  if(capitalsQuestion){
    passwordArray += lettersUpper;
  }

var numbersQuestion = confirm("Would you like numbers in your password?");
  if(numbersQuestion){
    passwordArray += numbers;
  }

var specialQuestion = confirm("Would you like special characters in your password?");
  if(specialQuestion){
    passwordArray += special;
  }

  if(passwordRequest >= 8 && passwordRequest <= 128){
    for( i=0; i < passwordRequest; i++){
      newPassword += passwordArray.charAt(Math.floor(Math.random()*passwordArray.length));
    }
    
  };
  console.log(newPassword);

 
};

generateBtn.addEventListener("click", writePassword);


//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password", newPassword);

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);