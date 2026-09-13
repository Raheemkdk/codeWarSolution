// Sample Test
describe("GetMiddle", function () {
    const { assert } = require('chai');

    function doTest(input, expected) {
        const message = `for input ${JSON.stringify(input)}\n`;
        const actual = getMiddle(input);
        assert.strictEqual(actual, expected, message);
    }

    it("Sample Tests", function () {
        doTest("test", "es");
        doTest("testing", "t");
        doTest("middle", "dd");
        doTest("A", "A");
    });
});

// Solution

function getMiddle(s) {
    //Code goes here!\
    //   If the string is s%3 === 0, return s.length
    if (s.length % 2 === 1) {
        console.log(`This is an odd word ${s}`)
        return (s[Math.floor(s.length / 2)])
        //     console.log(s[Math.floor(s.length/2)])
    }
    //   If the string is s%2 === 0, return s.length
    else if (s.length % 2 === 0) {
        console.log(`This is an even word ${s}`)
        return (s[Math.floor(s.length / 2 - 1)] + s[Math.floor(s.length / 2)])
    }
    return '';
}