const isSymmetric = require('../isSymmetric');
const { assert } = require('chai');

describe('isSymmetric', () => {
    it('Should return false if input is not array', () => {
        assert.equal(isSymmetric(1), false);
    });

    it('Should return true if array is symmetric', () => {
        assert.equal(isSymmetric([1, 2, 2, 1]), true);
    });

    it('Should return false if array is not symmetric', () => {
        assert.equal(isSymmetric([1, 2]), false);
    });

    it('Should return true with empty array', () => {
        assert.equal(isSymmetric([]), true);
    });

    it('Should return false without input argument', () => {
        assert.equal(isSymmetric(), false);
    });

    it('Should return false with different types in array', () => {
        assert.equal(isSymmetric([1, '1']), false);
    });
});