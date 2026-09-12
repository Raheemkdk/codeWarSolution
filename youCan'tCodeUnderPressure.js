// Sample Test
const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(doubleInteger(2), 4);
  });
});

// Sample Solution
function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  i += i
  console.log(i)
  return i;
}