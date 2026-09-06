//Test Case
const {assert} = require("chai");

describe("Vowels Count Tests",function(){
  it("should return 5 for 'abracadabra'",function(){
    assert.strictEqual(getCount("abracadabra"), 5) ;
  });
});
// Solution
function getCount(str) {
  //Have a list of what I am looking for; vowels.
  const vowels = ['a','e','i','o','u'];
  let vowelCounter = 0 
  //Clean the input up, going to use split instead of replaceAll, because split
//returns an array and I can then loop through each character and if a vowel is
// found, increment the vowel counter by one
//   input[i]===vowels[i]
  let input = str.split('')
//Use a for loop to go through each index and check if it is included in the vowels
//array
  for(i=0;i<=input.length;i++)
  {
// used includes instead of '===' to make sure every input is in vowels
    if(vowels.includes(input[i]))
    {
//vowel counter to increment and keep count of the vowels
      vowelCounter += 1
      console.log(vowelCounter)
    }
//     return vowelCounter
  }
//   return should be outisde the function because it stops the code from running after the first iteration
  return vowelCounter
  console.log(input)
  console.log(vowelCounter)
  return 0;
}