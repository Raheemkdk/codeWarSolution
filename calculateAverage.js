// Test case
const { assert, config } = require("chai");
config.truncateThreshold = 0;

describe("findAverage", () => {
  it("Testing for sample tests", () => {
    tester([1,1,1], 1);
    tester([1,2,3], 2);
    tester([1,2,3,4], 2.5);
  });
  
  const tester = (input, expected) => {
    const tolerance = 1e-10;
    const err_msg = `Failed for input: ${JSON.stringify(input)}\n`;
    const actual = findAverage(input);
    assert.approximately(actual, expected, tolerance, err_msg);
  }
});  

// Solution
function findAverage(array) {
  // your code here
  let total = 0
  if(array != ''){
      for(i = 0; i<= array.length-1; i++){
        total += array[i]
      }
//   console.log(total)
  console.log(total/array.length)
  return (total/array.length)
    }
  else{
    return 0
  }
}

//New Solution
if(array.length === 0){  //If the array is empty
    return 0
  }
//Reduce method takes in a function has an argument (Higher function) and it needs an accumulator, current value as params
return array.reduce((a,c) => a + c, 0)/array.length
// 