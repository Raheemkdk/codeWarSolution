//Test Case
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("smash", () =>  {

  it ("Should return empty string for empty array.", () => {
    assert.strictEqual(smash([]), "");
  });

  it ("One word example should return the word.", () => {
    assert.strictEqual(smash(["hello"]), "hello");
  });
    
  it ("Multiple words should be separated by spaces.", () =>  {
    assert.strictEqual(smash(["hello", "world"]), "hello world");
    assert.strictEqual(smash(["hello", "amazing", "world"]), "hello amazing world");
    assert.strictEqual(smash(["this", "is", "a", "really", "long", "sentence"]), "this is a really long sentence");
  });
});

//Solution
function smash (words) {
  console.log(words.toString().split(',').join(' '))
//convert the array to a string, split them by the commas(ok to assume it's only commas) and join it back with the space character in between
  return words.toString().split(',').join(' ')
};