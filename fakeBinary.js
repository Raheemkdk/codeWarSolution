// Test Case
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests",() =>{
  it("Testing for fixed tests", () => {
    assert.strictEqual(fakeBin('45385593107843568'), '01011110001100111');
    assert.strictEqual(fakeBin('509321967506747'), '101000111101101'); 
    assert.strictEqual(fakeBin('366058562030849490134388085'), '011011110000101010000011011');
  })
});
// Solution
function fakeBin(x){
  console.log(x.length)
  console.log(x[1])
  let real = []
  for(let i = 0; i < x.length; i++){
    console.log(x[i])
    if(x[i] >= 5){
      real.push('1')
    }
    else if(x[i] < 5){
      real.push('0')
    }
  }
  console.log(real.join(''))
return real.join('')
}