// Test Case
const { assert } = require("chai")

describe("Basic tests", () => {
  
  it("squareDigits(3212) should equal 9414", () => {
    assert.strictEqual(squareDigits(3212), 9414);
  });

  it("squareDigits(2112) should equal 4114", () => {
    assert.strictEqual(squareDigits(2112), 4114);
  });

  it("squareDigits(0) should equal 0", () => {
    assert.strictEqual(squareDigits(0), 0);
  });
})

// Solution
function squareDigits(num){
//Parameter: Taking in Numbers
// Return: Returning each digit of the number squared
// Example: 9119 = 811181 
// because 92 is 81 and 12 is 1. (81-1-1-81)
// Psuedocode:
  let arr = []
// Turn the number input into a string so I can split it
  let str = String(num).split('')
  console.log(str)
// Convert the individual elements of the string into a number
  for(let i = 0; i<str.length; i++){
// Multiply the number by **2
    let numb = str[i] **2
// Push them into an array
    arr.push(numb)
  console.log(numb)
  }
//   arr.join('')
// console.log(arr.join(''))
// console.log(Number(arr.join('')))
return Number(arr.join(''))
 
}