// Test Case
const Test = require('@codewars/test-compat');

describe("Example Tests", function() {

  it("one", function() {
    Test.assertSimilar(humanYearsCatYearsDogYears(1), [1,15,15]);
  });

  it("two", function() {
    Test.assertSimilar(humanYearsCatYearsDogYears(2), [2,24,24]);
  });

  it("ten", function() {
    Test.assertSimilar(humanYearsCatYearsDogYears(10), [10,56,64]);
  });

});


// Solution
var humanYearsCatYearsDogYears = function(humanYears) {
  // Your code here!
  let catYears = 15
    let dogYears = 15
  if(humanYears === 1){
    return [humanYears,catYears,dogYears]
  }else if(humanYears === 2 ){
    catYears = 15 + 9
    dogYears = 15 + 9 
  return [humanYears,catYears,dogYears]
  } else{
    catYears = 15 + 9 + (4 * (humanYears - 2))
    dogYears = 15 + 9 + (5 * (humanYears - 2))
  return [humanYears,catYears,dogYears];
  }
}
