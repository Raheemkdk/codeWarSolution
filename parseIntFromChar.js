// Test Case
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests",() =>{
  it("Testing for fixed tests", () => {
    assert.strictEqual(getAge("4 years old"), 4);
    assert.strictEqual(getAge("9 years old"), 9);
    assert.strictEqual(getAge("1 year old"), 1);    
  })
})
// Solution
function getAge(inputString){
// return the girl's correct age as an integer. Happy coding :) 
  return parseInt(inputString[0])
}