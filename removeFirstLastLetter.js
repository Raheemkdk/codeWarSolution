// Test Case
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Sample Tests", () => {
  it("should remove the first and last character", () => {
    assert.strictEqual(removeChar('eloquent'), 'loquen');
    assert.strictEqual(removeChar('country'), 'ountr');
    assert.strictEqual(removeChar('person'), 'erso');
    assert.strictEqual(removeChar('place'), 'lac');
    assert.strictEqual(removeChar('ooopsss'), 'oopss');
  });
  
  it("should handle minimum length strings", () => {
    assert.strictEqual(removeChar('ab'), '');
    assert.strictEqual(removeChar('xyz'), 'y');
  });
});

// Solution
function removeChar(str){
//Validate string first. Can only take in strings of length 2 and above
//and if there are only 2 length strings, return an empty string
let empty = ''
if(str.length > 2){
console.log(str)
//Turn the string into an array, remove the first and last character.
//Join the string together and return it
console.log(str.split(''))
let cleanStr = str.split('').slice(1,-1).join('')
console.log(cleanStr)
return cleanStr
}
  else if(str.length == 2){
    return empty
  }
  else{
    return 'Type a string that has more than one input'
  }

};



