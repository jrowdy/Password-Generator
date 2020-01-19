var password = '';

alert("Welcome. This application will generate a password for you. Please answer the following questions.");

var length = prompt("How many characters would you like? Choose a number between 8-128.")
if(length <= 128 && length >= 8) {
    console.log(length);
} else {
    alert("Remember, choose a number between 8-128."); 
    prompt("How many characters would you like? Choose a number between 8-128.")
}
// var length = Number(prompt("How many characters will your password be? Enter a number between 8 and 128"));

var charType = prompt("Choose a character type for your password: special, numeric, uppercase, lowercase.");


function generatePassword() {
  //evaluate character type
  var password = "";
  var charTypeLower = charType.toLowerCase();
  if( charTypeLower === "lowercase" ) {
    password = "abcdefghijklmnopqrstuvwxyz";
  } else if( charTypeLower === "uppercase" ) {
    password = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if( charTypeLower === "numeric" ) {
    password = "0123456789";
  } else if( charTypeLower === "special" ) {
    password = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } 
  //return value
  var retVal = "";
  for (var i = 0; i < length; i++) {
    //picks a character within charSet at index of random number
    retVal += password.charAt(Math.floor(Math.random() * password.length));
  }

  // add event listener for click event to print password
document.getElementById("generate").addEventListener("click", printPassword)

// get element by ID to print password and add to console to validate
function printPassword() {
    document.getElementById("password").innerHTML = retVal;
    console.log(retVal);
};
  return retVal;
}
alert(generatePassword());

// Copy password to clipboard
document.getElementById("copy").addEventListener("click", copyPassword)

function copyPassword() {
    var copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy");

  alert("Copied the text: " + copyText.value);
}