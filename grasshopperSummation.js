// Test Case
const assert = require('chai').assert;

describe('summation', function () {
  it('should return the correct total', function () {
    assert.strictEqual(summation(1),  1);
    assert.strictEqual(summation(2),  3);
    assert.strictEqual(summation(8), 36);
  })
})

// Solution
var summation = function (num) {
  // Code here
  console.log(num)
//   console.log(num.length)
  let sum = 0
  for(let i = 0; i <= num; i++ ) 
  {
    sum += i
  }
  console.log(sum)
 return sum

}