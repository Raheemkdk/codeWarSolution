//Sample Test
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Make acronym", () => {
  it("Sample Tests", () => {

    let tests = [
      ["Code Wars", "CW"],
      ["Water Closet", "WC"],
      ["Portable Network Graphics", "PNG"],
      ["PHP: Hypertext Preprocessor", "PHP"],
      ["hyper text markup language", "HTML"]
    ];
    tests.forEach( ([inp,exp]) => assert.strictEqual( toAcronym(inp), exp ) );
  });
});

//Solution
function toAcronym(inp)
{
  let st =''
  let splitStr = inp.split(' ');
  console.log(splitStr);
  splitStr[0]
  for(let i = 0; i<splitStr.length; i++)
  {
//     splitStr[i][0]
    st += splitStr[i][0].toUpperCase()
  }
  return st
//   console.log(splitStr[0][0] , splitStr[1][0])
  
  // ...
}