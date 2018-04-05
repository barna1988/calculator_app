const assert = require('chai').assert;
const calculator = undefined; // @TODO include your calculator module

// Expected interface of calculator method is as below
/* function calculate(operation, {lhs, rhs}) */

describe('calculator testing', function() {
  describe('Addition functionality testing', function() {
  	it('should add with positive numbers', function(done) {
      sum = calculator('a', {lhs: 10, rhs: 2});
      assert.equal(sum, 12, '10+2 should be 12');
      done();
    });
    // test case to test add functionality
    it('should add negative numbers', function(done) {
      sum = calculator('a', {lhs: -10, rhs: -2});
      assert.equal(sum, -12, '(-10)+(-2) should be -12');
      done();
    });
    // test case to test add functionality
    it('should add one positive and one negative', function(done) {
      sum = calculator('a', {lhs: 10, rhs: -2});
      assert.equal(sum, 8, '(10)+(-2) should be 8');
      done();
    });
     // test case to test add functionality
    it('should add 0 values', function(done) {
      sum = calculator('a', {lhs: 0, rhs: 0});
      assert.equal(sum, 0, '0+0 should be 0');
      done();
    });
  });
  describe('Subtraction functionality testing', function() {
  	// test case to test subtract functionality
    it('should subtract positive numbers', function(done) {
      sub = calculator('s', {lhs: 10, rhs: 2});
      assert.equal(sub, 8, '10-2 should be 8');
      done();
    });
    // test case to test subtract functionality
    it('should subtract negative numbers', function(done) {
      sub = calculator('s', {lhs: -10, rhs: -2});
      assert.equal(sub, -8, '(-10)-(-2) should be -8');
      done();
    });
    // test case to test subtract functionality
    it('should subtract one positive and one negative number', function(done) {
      sub = calculator('s', {lhs: 10, rhs: -2});
      assert.equal(sub, 12, '(10)-(-2) should be 12');
      done();
    });
     // test case to test subtract functionality
    it('should subtract 0 values', function(done) {
      sub = calculator('s', {lhs: 0, rhs: 0});
      assert.equal(sub, 0, '0-0 should be 0');
      done();
    });
  });
  describe('Multiplication functionality testing', function() {
  	// test case to test multiply functionality
    it('should multiply positive numbers', function(done) {
      mul = calculator('m', {lhs: 10, rhs: 2});
      assert.equal(mul, 20, '10*2 should be 20');
      done();
    });
    // test case to test multiply functionality
    it('should multiply negative numbers', function(done) {
      mul = calculator('m', {lhs: -10, rhs: -2});
      assert.equal(mul, 20, '(-10)*(-2) should be 20');
      done();
    });
    // test case to test multiply functionality
    it('should multiply one positive and one negative number', function(done) {
      mul = calculator('m', {lhs: 10, rhs: -2});
      assert.equal(mul, -20, '(10)*(-2) should be -20');
      done();
    });
     // test case to test multiply functionality
    it('should multiply 0 values', function(done) {
      mul = calculator('m', {lhs: 0, rhs: 0});
      assert.equal(mul, 0, '0*0 should be 0');
      done();
    });
  });
  describe('Division functionality testing', function() {
  	// test case to test divide functionality
    it('should divide positive numbers', function(done) {
      div = calculator('d', {lhs: 10, rhs: 2});
      assert.equal(div, 5, '10/2 should be 5');
      done();
    });
    // test case to test divide functionality
    it('should divide negative numbers', function(done) {
      div = calculator('d', {lhs: -10, rhs: -2});
      assert.equal(div, 5, '(-10)/(-2) should be 5');
      done();
    });
    // test case to test divide functionality
    it('should divide one positive and one negative number', function(done) {
      div = calculator('d', {lhs: 10, rhs: -2});
      assert.equal(div, -5, '(10)/(-2) should be -5');
      done();
    });
     // test case to test divide functionality
    it(`should not divide by 0 and should give 'Can't divide by zero' message`, function(done) {
      div = calculator('d', {lhs: 0, rhs: 0});
      assert.equal(div, `Can't divide by zero`, `0/0 should be Can't divide by zero`);
      done();
    });
  });
});

