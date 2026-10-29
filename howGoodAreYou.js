// Test Case
const chai = require('chai');
const assert = chai.assert;

describe("Example Tests", function() {
  it("betterThanAverage([2, 3], 5) should return True", function() {
    assert.strictEqual(betterThanAverage([2, 3], 5), true);
  });
  
  it("betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75) should return True", function() {
    assert.strictEqual(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true);
  });
  
  it("betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9) should return False", function() {
    assert.strictEqual(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9), false);
  });
  
  it("betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50) should return False", function() {
    assert.strictEqual(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50), false);
  });
  
  it("betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21) should return False", function() {
    assert.strictEqual(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21), false);
  });
  
  it("betterThanAverage([50, 50, 50], 50) should return False", function() {
    assert.strictEqual(betterThanAverage([50, 50, 50], 50), false);
  });
});
// Solution
function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let avg = 0
  let cp = 0
  for(let i = 0; i < classPoints.length; i++){
    avg += classPoints[i]
    console.log(avg)
  }
  cp += (avg/(classPoints.length))
  console.log(cp)
  console.log((avg/classPoints.length - 1))
  
  if(cp < yourPoints){
    return true
  }
  else{
    return false
  }
}
