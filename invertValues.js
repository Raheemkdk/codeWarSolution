//Test Case
const Test = require('@codewars/test-compat');

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Invert array values",() => {
  const norm = arr => arr.map(n => n === -0 ? 0 : n);
  it("Basic Tests", () => {
    assert.deepEqual(norm(invert([1,2,3,4,5])), [-1,-2,-3,-4,-5]);
    assert.deepEqual(norm(invert([1,-2,3,-4,5])), [-1,2,-3,4,-5]);
    assert.deepEqual(norm(invert([])), []);
    assert.deepEqual(norm(invert([0])), [0]);
  });
});
//Solution
function invert(array) {
//create an empty array to store the Invert values
let empty = []
//wanted to see the array to better visualize how to use it
console.log(array)
//for loop to go through each element in the array 
for( let i = 0; i<array.length; i++){
//have a variable that is assigned the negative values of what is in the array
  let calc = array[i] * -1;
//push it into my empty array since the output calls for the answer in an array 
  empty.push(calc)
}
//wanted to see what it looked like and make sure it worked
  console.log(empty)
//returned the values because you always need to return for a function
  return empty
  }