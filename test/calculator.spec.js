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
		it('Subtract two positive numbers, returning get positive subtraction', function() {
		});

		it('Subtract two negative numbers, returning get negative subtraction', function() {
		});

		it('Subtract two number, with either of them is negative, producing sum output', function() {
		});

		it('Subtract zeros, produces zero', function() {
		});
	});
	describe('Multiplication functionality testing', function() {

		it('Multiply two positive numbers, returning get positive Multiplication', function() {
		});

		it('Multiply two negative numbers, returning get positive Multiplication', function() {
		});

		it('Multiply two number, with either of them is negative, producing negative multiplication output', function() {
		});

		it('Multiply zeros, produces zero', function() {
		});
	});

	describe('Division functionality testing', function() {
		it('Divide two positive numbers, returning get positive Multiplication', function() {
		});

		it('Divide two negative numbers, returning get positive Multiplication', function() {
		});

		it('Divide two number, with either of them is negative, producing negative Division output', function() {
		});

		it(`Should not divide by 0, producing 'Can't divide by zero' message`, function() {
		});
	});
});

