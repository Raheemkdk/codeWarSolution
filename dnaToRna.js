// Test Case
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(DNAtoRNA("TTTT"), "UUUU")
    assert.strictEqual(DNAtoRNA("GCAT"), "GCAU")
    assert.strictEqual(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC")
    });
  })
  
// Solution
function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  let rna = '';

  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === 'T') {
      rna += 'U';
    } else {
      rna += dna[i];
    }
  }
}
  return rna;