// Test Case
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Fixed tests", () => {
  it('a simple example', function() {
    const first = firstNonConsecutive([1,2,3,4,6,7,8])
    assert.strictEqual(first, 6)
  })
  
   it('all sequential', function() {
    const first = firstNonConsecutive([1,2,3,4])
    assert.strictEqual(first, null)
  })
})
// Solution
function firstNonConsecutive (arr) {
//   Parameter: We are taking in an array
//   Return: Return the first consecutive number else return null^2
//   Example: [1,2,3,4,6,7,8] return 6
//       [1,2,3,4,5] return null^2
//   Psuedocode: 
  //console.log(arr)
for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i-1]+1) {
      return arr[i]
    } 
      
  }return (null)
  }


