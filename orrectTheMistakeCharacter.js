// Test Case
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(correct("L0ND0N"),"LONDON");
    assert.strictEqual(correct("DUBL1N"),"DUBLIN");
    assert.strictEqual(correct("51NGAP0RE"),"SINGAPORE");
    assert.strictEqual(correct("BUDAPE5T"),"BUDAPEST");
    assert.strictEqual(correct("PAR15"),"PARIS");
  });
});

// Solution
function correct(string)
{
	// your code here
  //   Loop through the array
  for(let i = 0; i < string.length; i++){
    //   Have switch cases
    console.log(typeof string[i])
    switch(string[i]) {
        case '5':
          string = string.replaceAll('5', 'S')
          break;
        case '0':
          string = string.replaceAll('0', 'O')
        console.log(string)
          break;
        case '1':
          string = string.replaceAll('1', 'I')
          break;
    }
  }
  return string 
  
  
}