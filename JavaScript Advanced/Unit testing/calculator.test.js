const createCalculator = require('../createCalculator');
const { assert } = require('chai');

describe('Calculator', () => {
    let calc;

    beforeEach(() => {
        calc = createCalculator();
    })

    it('Should return 0', () => {
        assert.equal(calc.get(), 0);
    });

    it('Should have add property', () => {
        assert.equal(calc.hasOwnProperty('add'), true);
    });

    it('Should have subtract property', () => {
        assert.equal(calc.hasOwnProperty('subtract'), true);
    });

    it('Should have get property', () => {
        assert.equal(calc.hasOwnProperty('get'), true);
    });

    it('Should return 10 number after add(5), add(5)', () => {
        calc.add(5);
        calc.add(5);
        assert.equal(calc.get(), 10);
    });

    it('Should return -10 number after subtract(5), subtract(5)', () => {
        calc.subtract(5);
        calc.subtract(5);
        assert.equal(calc.get(), -10);
    });

    it('Should return 1.5 after add(3.1) and subtract(1.6)', () => {
        calc.add(3);
        calc.subtract(1.5);
        assert.equal(calc.get(), 1.5);
    });

    it('Should return 5 after add(5), subtract(2), add(-1), subtract(-3)', () => {
        calc.add(5);
        calc.subtract(2);
        calc.add(-1);
        calc.subtract(-3);
        assert.equal(calc.get(), 5);
    });

    it('Should return 1 number with (1)', () => {
        calc.add(1);
        assert.equal(calc.get(), 1);
    });

    it('Should return NaN with input(\'a\')', () => {
        calc.add('a');
        assert(Number.isNaN(calc.get()));
    });

    it('Should return -1 number with (1)', () => {
        calc.subtract(1);
        assert.equal(calc.get(), -1);
    });

    it('Should return NaN with input(\'a\')', () => {
        calc.subtract('a');
        assert(Number.isNaN(calc.get()));
    });   
});