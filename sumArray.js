// Sample Test
const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(sum([]), 0);
Test.assertEquals(sum([1, 5.2, 4, 0, -1]), 9.2);
  });
});

// Solution
function sum (numbers) {
  let total = 0;
 for(const number of numbers){
   total += number
   }
  return total
 }