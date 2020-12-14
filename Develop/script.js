// Assignment Code

var password = []
var passwordLength = prompt("How long would you like your password to be? (longer that 8 characters, shorter than 128 characters.");
var lowerCaseQuestion = confirm("Would you like lower case letters in your password?")
var capitalsQuestion = confirm("Would you like capital letters in your password?");
var numbersQuestion = confirm("Would you like numbers in your password?");
var specialQuestion = confirm("Would you like special characters in your password?");

var lettersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lettersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["~","!","@","#","$","%","^","&","*","+","?"]

/*while(passwordLength > 7 || passwordLength < 129){
  var passwordLength = prompt("How long would you like your password to be? (longer that 8 characters, shorter than 128 characters.");
  if(passwordLength <= 8 || passwordLength >= 128){
  passwordLength;
}else{*/

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)){
    alert("Please enter a value between 8 and 128.");
    return;
  } 


  for( i=0; i < passwordLength; i++){
      password.push(lettersLower[Math.floor(Math.random()* lettersLower.length)]);
  }
  alert(password)
  for ( i=0; i < passwordLength; i++){
      password.push(lettersUpper[Math.floor(Math.random()* lettersUpper.length)]);
  }
  alert(password)

  for( i = 0; i < passwordLength; i++){
      password.push(numbers[Math.floor(Math.random()* numbers.length)])
  }
  alert(password)

  for ( i = 0; i<passwordLength; i++){
      password.push(special[Math.floor(Math.random()*special.length)])
  }
  alert(password)






//functions
//These will generate a random character from there selected group.
console.log(lettersUpper[Math.floor(Math.random()* lettersUpper.length)]);
console.log(lettersLower[Math.floor(Math.random()* lettersLower.length)]);
console.log(numbers[Math.floor(Math.random()* numbers.length)]);
console.log(special[Math.floor(Math.random()* special.length)])



function getUpper (){
  return lettersUpper[Math.floor(Math.random()* lettersUpper.length)];
}

function getLower (){
  return lettersLower[Math.floor(Math.random()* lettersLower.length)];
}

function getNumbers (){
  return numbers[Math.floor(Math.random()* numbers.length)];
}

function getSpecial (){
  return special[Math.floor(Math.random()* special.length)];
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//My pseudo code:
//1.)Establish a list of all of the characters that can be used. letters separte from numbers
  //separate from special characters.
//2.)Set series of comfirmations that ask what kinds of characters the user wants in there password.
//3.)Set a prompt that asks what length they would like there password to be
//4.)Make conditional statements that generate password.
    //a.)If only lower case...
    //b.)Else 