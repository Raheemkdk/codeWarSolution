// Test Case
const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(makeNegative(42), -42);
  });
});

// Solution
function makeNegative(num) {
  // Code?
  console.log(num)
  return num < 0 ? num : num *= -1
}