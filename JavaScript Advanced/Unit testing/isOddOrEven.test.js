const isOddOrEven = require('../isOddOrEven');
const { assert } = require('chai');

describe('isOddOrEven', () => {
    it('Should return even when string length is even', () => {
        assert.equal(isOddOrEven('even'), 'even');
    });

    it('Should return odd when string length is odd', () => {
        assert.equal(isOddOrEven('odd'), 'odd');
    });

    it('Should return undefined when input is not string', () => {
        assert.equal(isOddOrEven(1), undefined);
    });
});