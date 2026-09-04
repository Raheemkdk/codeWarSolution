// Sample Test
describe("Tests", () => {
  it("test", () => {
    Test.assertSimilar(whatNumberIsIt(1/0),"Input number is Number.POSITIVE_INFINITY");
    Test.assertSimilar(whatNumberIsIt(100),"Input number is 100");
    Test.assertSimilar(whatNumberIsIt(1.7976931348623157e+308),"Input number is Number.MAX_VALUE");
    Test.assertSimilar(whatNumberIsIt(5e-324),"Input number is Number.MIN_VALUE");
    Test.assertSimilar(whatNumberIsIt(-Number.MAX_VALUE*2),"Input number is Number.NEGATIVE_INFINITY");
    Test.assertSimilar(whatNumberIsIt(NaN),"Input number is Number.NaN");
    Test.assertSimilar(whatNumberIsIt(Infinity+1),"Input number is Number.POSITIVE_INFINITY");

  });
});

// Solution
function whatNumberIsIt(n){
  //coding here
  return n === Number.MAX_VALUE
    ? "Input number is Number.MAX_VALUE"
    : n === Number.MIN_VALUE
    ? "Input number is Number.MIN_VALUE"
    : Number.isNaN(n)
    ? "Input number is Number.NaN"
    : n === Number.NEGATIVE_INFINITY
    ? "Input number is Number.NEGATIVE_INFINITY"
    : n === Number.POSITIVE_INFINITY
    ? "Input number is Number.POSITIVE_INFINITY"
    : "Input number is " + n;
}