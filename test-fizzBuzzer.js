const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');


// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function() {

  // test the normal case
  it('should return fizz-buzz if number is a multiple of 15', function() {
    [15,30,45,60].forEach(function(input){
      fizzBuzzer(input).should.equal('fizz-buzz');
    });
  });

  it('Should return fizz if number is a multiple of 3', function(){
    [3,6,9,12].forEach(function(input) {
      fizzBuzzer(input).should.equal('fizz');
    });
   });

  it('should return buzz if number ia a multiple of 5', function(){
    [5,10,20,25].forEach(function(input){
      fizzBuzzer(input).should.equal('buzz');
    });
  });

  it('should raise error if input isnt a number', function() {
    const badInputs = [true, false, 'words', function() {}, [1, 2, 3]];
    badInputs.forEach(function(input) {
      (function() {
          fizzBuzzer(input)
      }).should.throw(Error);
    });
  });

  it('should return original number if not a factor of 3, 5 or 15', function(){
    [1,2,4,13].forEach(function(input){
      fizzBuzzer(input).should.equal(input);
    });
  });
});