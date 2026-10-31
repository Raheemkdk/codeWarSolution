// Test Case
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
    assert.strictEqual(findShort("turns out random test cases are easier than writing out basic ones"), 3); 
    assert.strictEqual(findShort("Let's travel abroad shall we"), 2);
  })
})

// Solution
function findShort(s) {
  let clean = s.split(' ');
  let blue = clean[0].length;

  for (let i = 0; i < clean.length; i++) {
    if (clean[i].length < blue) {
      blue = clean[i].length;
    }
  }

  return blue;
}