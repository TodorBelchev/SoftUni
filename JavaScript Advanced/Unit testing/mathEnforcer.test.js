const mathEnforcer = require('../mathEnforcer');
const { assert } = require('chai');

describe('MathEnforcer', () => {

    describe('addFive function', () => {
        it('Should return undefined if param is not number', () => {
            assert.equal(mathEnforcer.addFive('a'), undefined);
        });

        it('Should return undefined without param', () => {
            assert.equal(mathEnforcer.addFive(), undefined);
        });

        it('Should return positive num if param is 5', () => {
            assert.equal(mathEnforcer.addFive(5), 10);
        });

        it('Should return 8.14 if param is 3.14', () => {
            assert.closeTo(mathEnforcer.addFive(3.14), 8.14, 0.01);
        });

        it('Should return floating num if param is 0.9', () => {
            assert.closeTo(mathEnforcer.addFive(0.9), 5.9, 0.01);
        });

        it('Should return floating num if param is 0.99', () => {
            assert.closeTo(mathEnforcer.addFive(0.99), 5.99, 0.01);
        });

        it('Should return negative num if param is -10', () => {
            assert.closeTo(mathEnforcer.addFive(-10.99), -5.99, 0.01);
        });

        it('Should return zero if param is -5', () => {
            assert.equal(mathEnforcer.addFive(-5), 0);
        });
    });

    describe('subtractTen function', () => {
        it('Should return undefined if param is not number', () => {
            assert.equal(mathEnforcer.subtractTen('a'), undefined);
        });

        it('Should return undefined without param', () => {
            assert.equal(mathEnforcer.subtractTen(), undefined);
        });

        it('Should return positive num if param is 15', () => {
            assert.equal(mathEnforcer.subtractTen(15), 5);
        });

        it('Should return floating num if param is 1.1', () => {
            assert.closeTo(mathEnforcer.subtractTen(1.1), -8.9, 0.01);
        });

        it('Should return -6.86 if param is 3.14', () => {
            assert.closeTo(mathEnforcer.subtractTen(3.14), -6.86, 0.01);
        });

        it('Should return floating num if param is 0.99', () => {
            assert.closeTo(mathEnforcer.subtractTen(0.99), -9.01, 0.01);
        });

        it('Should return negative num if param is 0', () => {
            assert.equal(mathEnforcer.subtractTen(0), -10);
        });

        it('Should return zero if param is 10', () => {
            assert.equal(mathEnforcer.subtractTen(10), 0);
        });

        it('Should return floating num if param is -0.99', () => {
            assert.closeTo(mathEnforcer.subtractTen(-0.99), -10.99, 0.01);
        });
    });

    describe('sum function', () => {
        it('Should return undefined if first param is not number', () => {
            assert.equal(mathEnforcer.sum('a', 2), undefined);
        })

        it('Should return undefined if second param is not number', () => {
            assert.equal(mathEnforcer.sum(2, 'a'), undefined);
        })

        it('Should return undefined without params', () => {
            assert.equal(mathEnforcer.sum(), undefined);
        });

        it('Should return positive num with 5 + 5', () => {
            assert.equal(mathEnforcer.sum(5, 5), 10);
        });

        it('Should return negative num with 5 + 5', () => {
            assert.equal(mathEnforcer.sum(-5, -5), -10);
        });

        it('Should return floating num with -5 + 3.1', () => {
            assert.closeTo(mathEnforcer.sum(-5, 3.1), -1.9, 0.01);
        });

        it('Should return floating num with -5 + 3.22', () => {
            assert.closeTo(mathEnforcer.sum(-5, 3.22), -1.78, 0.01);
        });

        it('Should return 6.1 with 2.7 + 3.4', () => {
            assert.closeTo(mathEnforcer.sum(2.7, 3.4), 6.1, 0.01);
        });
    });
});