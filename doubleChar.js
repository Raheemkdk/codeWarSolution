// Test Case
const Test = require('@codewars/test-compat');

describe("doubleChar", function() {
  it("works for some examples", function() {
    Test.assertEquals(doubleChar("abcd"), "aabbccdd");
    Test.assertEquals(doubleChar("Adidas"), "AAddiiddaass");
    Test.assertEquals(doubleChar("1337"), "11333377");
    Test.assertEquals(doubleChar("illuminati"), "iilllluummiinnaattii");
    Test.assertEquals(doubleChar("123456"), "112233445566");
    Test.assertEquals(doubleChar("%^&*("), "%%^^&&**((");
  });
});

// Solution
function doubleChar(str) {
  // Your code here
  let rep = ''
  for(let i = 0; i < str.length; i++){
    rep += str[i].repeat(2)
  }
  console.log(str)
  return rep
}
