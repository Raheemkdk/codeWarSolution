// Test Case
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Example tests", () => {
  it("Test 1", () => {
    assert.strictEqual(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");
  });
  it("Test 2", () => {
    assert.strictEqual(highAndLow("1 2 3"), "3 1");
  });
});

// Solution
function highAndLow(numbers) {
  console.log(numbers);
//   Converting from string to num
  numbers = numbers.split(' ').map(Number);

  //Have a variable for the high
  let high = numbers[0];

  //Have a variable for the low
  let low = numbers[0];

  //Have a loop through the array
  for (let i = 0; i < numbers.length; i++) {

    console.log(low);
    console.log(high);

    if (numbers[i] > high) {
      high = numbers[i];
      console.log(high);
    }
    else if (numbers[i] < low) {
      low = numbers[i];
      console.log(low);
    }
  }

  return high + " " + low;

  //Have a conditional to assign the
}