const assert = require('chai').assert;
const calculator = undefined; //@TODO include your calculator module

// Expecting the signature of the calculator to be like below
/* function calculate(operation, {lhs, rhs}) */

describe('calculator testing', function() {
  describe('Addition functionality testing', function() {
  	it('Add two positive numbers, returning get positive sum', function() {
    });

    it('Add two negative numbers, returning get negative sum', function() {
    });

    it('Add two number, with either of them is negative, producing subtracted output', function() {
    });

    it('Add zeros, produces zero', function() {
    });
  });

  describe('Subtraction functionality testing', function() {
    it('should subtract positive numbers', function() {
    });

    it('should subtract negative numbers', function() {
    });

    it('should subtract one positive and one negative number', function() {
    });

    it('should subtract 0 values', function() {
    });
  });
  describe('Multiplication functionality testing', function() {

    it('should multiply positive numbers', function() {
    });

    it('should multiply negative numbers', function() {
    });

    it('should multiply one positive and one negative number', function() {
    });

    it('should multiply 0 values', function() {
    });
  });

  describe('Division functionality testing', function() {
    it('should divide positive numbers', function() {
    });

    it('should divide negative numbers', function() {
    });

    it('should divide one positive and one negative number', function() {
    });

    it(`should not divide by 0 and should give 'Can't divide by zero' message`, function() {
    });
  });
});

