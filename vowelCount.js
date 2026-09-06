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
  let vowels = ['a','e','i','o','u']
  //Clean the input up, going to use split instead of replaceAll, because split
//returns an array and I can then loop through each character and if a vowel is
// found, 
  let input = str.replaceAll(' ','')
  console.log(input)
  
  return 0;
}