// Test Case
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Total amount of points", function(){
  it("Sample Tests", function(){
    assert.strictEqual(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) , 30);
    assert.strictEqual(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) , 10);
    assert.strictEqual(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]) , 0);
    assert.strictEqual(points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]) , 15);
    assert.strictEqual(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]) , 12);
  });
});
// Solution
function points(games) {
//   Parameter: an Array with a ration x:y
// Returning: returning the amount of points they got based on the point system
//  Psuedocode:
  console.log(games[0])
 console.log(games[0][0])
  console.log(games[0][2])
  let sum = 0
for(let i = 0; i < games.length; i++){
    let x = games[i][0]
    let y = games[i][2]
  if(x >y){
    sum += 3
  } else if(x <y){
    sum += 0
  } else {
    sum += 1
  }
  }return sum
}