// Test Case
const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(hoopCount(3),"Keep at it until you get it" ) 
Test.assertEquals(hoopCount(11),"Great, now move on to tricks" )
  });
});

// Solution
function hoopCount (n) {
   //your code goes here
  return n >= 10 ? 'Great, now move on to tricks': 'Keep at it until you get it'
}