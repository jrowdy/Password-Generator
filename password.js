var length = prompt("How many characters would you like? Choose a number between 8-128.");
  if(length <= 128 && length >= 8) {
      console.log(length);
  } else {
    alert("You've selected a number outside of the range. Please choose a number between 8-128.");
    prompt("How many characters would you like? Choose a number between 8-128.");
    if(length <= 128 && length >= 8) {
        console.log(length);
}
  }
    

var password = '';
 var userLowercase = confirm("Would you like lowercase letters in your password?");
 var userUppercase = confirm("Would you like uppercase letters in your password?");
 var userNumeric = confirm("Would you like numbers in your password?");
 var userSpecial = confirm("Would you like symbols in your password?");

 if(userLowercase) {
  var lowercase = 'abcdefghijklmnopqrstuvwxyz';
  console.log("Lower, yes");
    } else {
  var lowercase = '';
  console.log("Lower, no");
}

if(userUppercase) {
  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  console.log("Upper, yes");
    } else {
  var uppercase = '';
  console.log("Upper, no");
}

if(userNumeric) {
  var numbers = '0123456789';
  console.log("Numbers, yes");
    } else {
  var numbers = '';
  console.log("Numbers, no");
}

if(userSpecial) {
  var special = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  console.log("Special, yes");
    } else {
  var special = '';
  console.log("Special, no");
}


var userPref = (lowercase+uppercase+numbers+special);
console.log(userPref);

if(userPref==="") alert("Please select OK, refresh the screen and select at least 1 choice.")

var retVal= "";
for(var i=0; i< length; i++) {
    retVal += userPref.charAt(Math.floor(Math.random() * userPref.length));
}

// add event listener for click event to print password
document.getElementById("generate").addEventListener("click", printPassword)

// get element by ID to print password and add to console to validate
function printPassword() {
    document.getElementById("password").innerHTML = retVal; {
    console.log(retVal);
};
  return retVal;
}
// Copy password to clipboard
document.getElementById("copy").addEventListener("click", copyPassword)

function copyPassword() {
    var copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy");

  alert("Copied the text: " + copyText.value);
}
