// Test Case
const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(goals(0,0,0), 0)
Test.assertEquals(goals(43, 10, 5), 58)
  });
});

// Solution
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  // code goes here
  return laLigaGoals += copaDelReyGoals +championsLeagueGoals;
}