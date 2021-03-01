const sum = require('../sumOfNumbers');
const { assert } = require('chai');

describe('Sum of numbers', () => {
    it('Should return correct sum with correct input', () => {
        assert.equal(sum([1, 2, 3]), 6);
    });

    it('Should return zero with empty array', () => {
        assert.equal(sum([]), 0);
    });

    it('Should return NaN with incorrect array data', () => {
        assert(Number.isNaN(sum(['a'])));
    });

    it('Should throw error when input is not array', () => {
        assert.throw(() => { sum(1) }, 'arr is not iterable');
    });
});
