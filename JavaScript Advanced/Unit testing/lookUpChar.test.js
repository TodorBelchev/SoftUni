const lookupChar = require('../lookUpChar');
const { assert } = require('chai');

describe('LookUpChar', () => {
    it('Should return undefined if first arg is not string', () => {
        assert.equal(lookupChar(1, 1), undefined);
    });

    it('Should return undefined if second arg is not integer', () => {
        assert.equal(lookupChar('string', 1.5), undefined);
    });

    it('Should return undefined if second arg is not integer', () => {
        assert.equal(lookupChar('string', '3'), undefined);
    });

    it('Should return "Incorrect index" if index is lower than zero', () => {
        assert.equal(lookupChar('string', -1), "Incorrect index");
    });

    it('Should return "Incorrect index" if index is bigger than string length', () => {
        assert.equal(lookupChar('string', 10), "Incorrect index");
    });

    it('Should return correct character', () => {
        assert.equal(lookupChar('string', 0), 's');
    });

    it('Should return correct character', () => {
        assert.equal(lookupChar('Pesho', 4), 'o');
    });
});