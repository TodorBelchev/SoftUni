const PaymentPackage = require('../paymentPackage');
const { assert } = require('chai');

describe('PaymentPackage', () => {
    let current;

    beforeEach(() => {
        current = new PaymentPackage('pesho', 1000);
    });

    describe('Constructor', () => {
        it('Should have all properties', () => {
            assert.equal(current.hasOwnProperty('_name'), true);
            assert.equal(current.hasOwnProperty('_value'), true);
            assert.equal(current.hasOwnProperty('_VAT'), true);
            assert.equal(current.hasOwnProperty('_active'), true);
            assert.equal(Object.getPrototypeOf(current).hasOwnProperty('toString'), true);
        });

        it('Getters should return correct values of properties', () => {
            assert.equal(current.name, 'pesho');
            assert.equal(current.value, 1000);
            assert.equal(current.VAT, 20);
            assert.equal(current.active, true);

            current.name = 'gosho';
            current.value = 100;
            current.VAT = 10;
            current.active = false;

            assert.equal(current.name, 'gosho');
            assert.equal(current.value, 100);
            assert.equal(current.VAT, 10);
            assert.equal(current.active, false);
        });

        it('Should throw error with empty constructor', () => {
            assert.throw(() => current = new PaymentPackage(), 'Name must be a non-empty string');
        });

        it('Should set correct values of VAT', () => {
            current.VAT = 10;
            assert.equal(current.VAT, 10);
        });

        it('Should set correct values of name', () => {
            current.name = 'Gosho';
            assert.equal(current.name, 'Gosho');
        });

        it('Should set correct values of value', () => {
            current.value = 10;
            assert.equal(current.value, 10);
        });

        it('Should set correct values of active', () => {
            assert.equal(current.active, true);
            current.active = false;
            assert.equal(current.active, false);
        });

        it('Should throw error if name is not a string or empty string', () => {
            assert.throw(() => current = new PaymentPackage(1, 1), 'Name must be a non-empty string');
            assert.throw(() => current = new PaymentPackage('', 1), 'Name must be a non-empty string');
        });

        it('Should throw error if value is not a number or negative number', () => {
            assert.throw(() => current = new PaymentPackage('pesho', '1'), 'Value must be a non-negative number');
            assert.throw(() => current = new PaymentPackage('pesho', -1), 'Value must be a non-negative number');
        });

        it('Should throw error if VAT is not a number or negative number', () => {
            assert.throw(() => current.VAT = '20', 'VAT must be a non-negative number');
            assert.throw(() => current.VAT = -20, 'VAT must be a non-negative number');
        });

        it('Should throw error if active property is not a boolean', () => {
            assert.throw(() => current.active = 20, 'Active status must be a boolean');
        });

        it('Should set correct type for VAT', () => {
            assert.equal(typeof current.VAT, 'number');
        });

        it('Should set correct type for value', () => {
            assert.equal(typeof current.value, 'number');
        });

        it('Should set correct type for name', () => {
            assert.equal(typeof current.name, 'string');
        });

        it('Should set correct type for active', () => {
            assert.equal(typeof current.active, 'boolean');
        });
    });

    describe('toString', () => {
        it('Should return correct string', () => {
            const output = [
                `Package: ${current.name}` + (current.active === false ? ' (inactive)' : ''),
                `- Value (excl. VAT): ${current.value}`,
                `- Value (VAT ${current.VAT}%): ${current.value * (1 + current.VAT / 100)}`
            ];
            assert.equal(current.toString(), output.join('\n'));
        });

        it('Should return string', () => {
            assert.equal(typeof current.toString(), 'string');
        });

        it('Should return correct string', () => {
            current.name = 'Gosho';
            const output = [
                `Package: ${current.name}` + (current.active === false ? ' (inactive)' : ''),
                `- Value (excl. VAT): ${current.value}`,
                `- Value (VAT ${current.VAT}%): ${current.value * (1 + current.VAT / 100)}`
            ];
            assert.equal(current.toString(), output.join('\n'));
            assert.equal(typeof current.toString(), 'string');
        });

        it('Should return correct string', () => {
            current.active = false;
            const output = [
                `Package: ${current.name}` + (current.active === false ? ' (inactive)' : ''),
                `- Value (excl. VAT): ${current.value}`,
                `- Value (VAT ${current.VAT}%): ${current.value * (1 + current.VAT / 100)}`
            ];
            assert.equal(current.toString(), output.join('\n'));
            assert.equal(typeof current.toString(), 'string');
        });

        it('Should return correct string', () => {
            current.value = 20;
            const output = [
                `Package: ${current.name}` + (current.active === false ? ' (inactive)' : ''),
                `- Value (excl. VAT): ${current.value}`,
                `- Value (VAT ${current.VAT}%): ${current.value * (1 + current.VAT / 100)}`
            ];
            assert.equal(current.toString(), output.join('\n'));
            assert.equal(typeof current.toString(), 'string');
        });

        it('Should return correct string', () => {
            current.VAT = 22;
            const output = [
                `Package: ${current.name}` + (current.active === false ? ' (inactive)' : ''),
                `- Value (excl. VAT): ${current.value}`,
                `- Value (VAT ${current.VAT}%): ${current.value * (1 + current.VAT / 100)}`
            ];
            assert.equal(current.toString(), output.join('\n'));
            assert.equal(typeof current.toString(), 'string');
        });

        it('Should return correct string', () => {
            current.VAT = 0;
            current.value = 0;
            const output = [
                `Package: ${current.name}` + (current.active === false ? ' (inactive)' : ''),
                `- Value (excl. VAT): ${current.value}`,
                `- Value (VAT ${current.VAT}%): ${current.value * (1 + current.VAT / 100)}`
            ];
            assert.equal(current.toString(), output.join('\n'));
            assert.equal(typeof current.toString(), 'string');
        });
    });
});