// Test Case
const Test = require('@codewars/test-compat');

// Return an array
function fizzbuzzRandom(n)
{
  let arr = [];
  let maxNumber = parseInt(n);
  
  for(let i=1; i<=maxNumber; i++)
  {
    arr.push(fizzify(i));
  }
  
  return arr;
}

describe('Fizzbuzz', function() {
  it('Should fizzify 10 numbers correctly', function() {
    let expected = [1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz'];
    Test.assertEquals(JSON.stringify(fizzbuzz(10)), JSON.stringify(expected) , 'Fails with 10 numbers!');
  });
  
  it('Should fizzify 30 numbers correctly', function() {
    let expected = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz"];
    Test.assertEquals(JSON.stringify(fizzbuzz(30)), JSON.stringify(expected) , 'Fails with 30 numbers!');
  });
  
  it('Should fizzify 1 number correctly', function() {
    let expected = [1];
    Test.assertEquals(JSON.stringify(fizzbuzz(1)), JSON.stringify(expected) , 'Fails with 1 number!');
  });
  
  it('Should fizzify 100 number correctly', function() {
    let expected = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz", 31, 32, "Fizz", 34, "Buzz", "Fizz", 37, 38, "Fizz", "Buzz", 41, "Fizz", 43, 44, "FizzBuzz", 46, 47, "Fizz", 49, "Buzz", "Fizz", 52, 53, "Fizz", "Buzz", 56, "Fizz", 58, 59, "FizzBuzz", 61, 62, "Fizz", 64, "Buzz", "Fizz", 67, 68, "Fizz", "Buzz", 71, "Fizz", 73, 74, "FizzBuzz", 76, 77, "Fizz", 79, "Buzz", "Fizz", 82, 83, "Fizz", "Buzz", 86, "Fizz", 88, 89, "FizzBuzz", 91, 92, "Fizz", 94, "Buzz", "Fizz", 97, 98, "Fizz", "Buzz"];
    Test.assertEquals(JSON.stringify(fizzbuzz(100)), JSON.stringify(expected) , 'Fails with 100 number!');
  });
  
  it('Should fizzify a random positive integer (1~100) correctly', function() {
    let randomNum = Math.ceil(Math.random() * 99);
    let expected = fizzbuzzRandom(randomNum);
    Test.assertEquals(JSON.stringify(fizzbuzzRandom(randomNum)), JSON.stringify(expected) , 'Fails with random number!');
  });
  
});

// Solution
// Return an array
// P.R.E.P
// Parameter - Take in an a positive integar from 1 to N, n 
// will never be less than one
// Return - Return an array containing 1 to N. If there are number divisible by 3
// return 'Fizz' in that position. If divisible by 5 return 'Buzz'in that position.
// If divisible by both 3&5 return 'FizzBuzz' in that position
// Example - 
// fizzbuzz(3) -->  [1, 2, "Fizz"]
// fizzbuzz(5) -->  [1, 2, "Fizz",4,'Buzz']
// fizzbuzz(15) -->  [1, 2, "Fizz",..., 14, 'FizzBuzz']
function fizzbuzz(n)

  {
  let argh = []
  console.log(n)
//Second part in a for loop is not a ending condition. It is continuos, basically
// what JS check before it every runs the loop and if i check if something is strictly equal 
// to each other, the loop will never run unless its ONLY what i set i = to be
    
  for(let i=1; i <=n; i++)
  {
    if(i%3 === 0 && i%5 === 0)
    {
    argh.push('FizzBuzz')
    
    }
    else if(i%5 === 0)
    {
    argh.push('Buzz')
    }
  else if(i%3 === 0){
    
    argh.push('Fizz')
  }
    else{
      argh.push(i)
    }
    
  }
    return argh
  
  //
}