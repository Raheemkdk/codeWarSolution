// Test Case
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(updateLight("green"), "yellow");
    assert.strictEqual(updateLight("yellow"), "red");
    assert.strictEqual(updateLight("red"), "green");
  });
});
// Solution
function updateLight(current) {
  
  //your code here!
  return current === 'green' ? current = 'yellow': 
  current === 'yellow' ? current = 'red' : 
  current === 'red' ? current = 'green' : ''
}