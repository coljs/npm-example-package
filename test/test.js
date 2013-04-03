var assert = require('assert'),
    nacho  = require('../');

describe('nacho', function () {
  describe('#suma', function () {
    it('should return the addition of two numbers', function () {
      assert.equal(3, nacho.suma(1, 2));
      assert.equal(4, nacho.suma(2, 2));
    });
  });

  describe('#resta', function () {
    it('should return the substraction between two numbers', function () {
      assert.equal(1, nacho.resta(2, 1));
      assert.equal(0, nacho.resta(2, 2));
    });
  });
});
