// Test Case
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Smallest Integer Tests", () => {
  it("Fixed Tests", () => {
    assert.strictEqual(findSmallestInt([78,56,232,12,8]),8, `findSmallestInt([78,56,232,12,8])`);
    assert.strictEqual(findSmallestInt([78,56,232,12,18]),12, `findSmallestInt([78,56,232,12,18])`);
    assert.strictEqual(findSmallestInt([78,56,232,412,228]),56, `findSmallestInt([78,56,232,412,228])`);
    assert.strictEqual(findSmallestInt([78,56,232,12,0]),0, `findSmallestInt([78,56,232,12,0])`);
    assert.strictEqual(findSmallestInt([1,56,232,12,8]),1, `findSmallestInt([1,56,232,12,8])`);
  });
});

// Solution 
function findSmallestInt(arr) {
  console.log(arr)
  //your code here
  let min = arr[0]
  for(let i = 1; i< arr.length; i++){
    min > arr[i] ? min = arr[i] : ''
    console.log(min)
  }
  return min
//   return Math.min(...arr);
}
