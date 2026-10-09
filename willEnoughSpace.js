// Test Case
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic Tests", function(){
  it("Testing for fixed tests", () => {
    assert.strictEqual(enough(10, 5, 5), 0);
    assert.strictEqual(enough(100, 60, 50), 10);
    assert.strictEqual(enough(20, 5, 5), 0);
  });
});

// Solution
function enough(cap, on, wait) {
  // your code here
//   Check the amount of space on the bus subtracting those who are already unboard
let space = cap - on
if(space >= wait){
  return 0;
}else{
    return wait - space;
  }
  
}