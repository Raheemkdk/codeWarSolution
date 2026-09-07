// Description
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// Solution with comments
// function called validate pin that takes in a param of pin
function validatePIN (pin) {
//created a variable called pinlen that is assigned the value of the length of our param 
  var pinlen = pin.length;
//created a vairable to check if the length of the user Input is valid(either 4 or 6 pin)
  var isCorrectLength = (pinlen == 4 || pinlen == 6);
//created a variable to check if the pin starts and ends with a digit
  var hasOnlyNumbers = pin.match(/^\d+$/);
//if condition to check if both the length and numbers are valid and return true 
  if(isCorrectLength && hasOnlyNumbers){
    return true;
  }
//return false when it fails all the conditions.
  return false;

}