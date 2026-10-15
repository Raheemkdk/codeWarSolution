// Test Case
const { assert } = require('chai');

describe("Fixed tests", function() {
  it("Testing for 'a'", () => assert.strictEqual(isPalindrome("a"), true));
  it("Testing for 'aba'", () => assert.strictEqual(isPalindrome("aba"), true));
  it("Testing for 'Abba'", () => assert.strictEqual(isPalindrome("Abba"), true));
  it("Testing for 'hello'", () => assert.strictEqual(isPalindrome("hello"), false));
  it("Testing for 'Bob'", () => assert.strictEqual(isPalindrome("Bob"), true));
  it("Testing for 'Madam'", () => assert.strictEqual(isPalindrome("Madam"), true));
  it("Testing for 'AbBa'", () => assert.strictEqual(isPalindrome("AbBa"), true));
  it("Testing for ''", () => assert.strictEqual(isPalindrome(""), true));
});
// Solution
function isPalindrome(x) {
  // your code here
  console.log(x)
  let lower = x.toLowerCase()
  console.log(lower)
  console.log(x.split('').reverse().join(''))
  let spar = lower.split('').reverse().join('')
  if(spar == lower){
    return true;
  } else{
    return false;
  }
  
}