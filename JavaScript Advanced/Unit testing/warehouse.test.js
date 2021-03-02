const Warehouse = require('../Warehouse');
const { assert } = require('chai');

describe('Warehouse', () => {
    let current;

    beforeEach(() => {
        current = new Warehouse(100);
    });

    describe('Constructor', () => {
        it('Should have all properties', () => {
            assert.equal(current.hasOwnProperty('_capacity'), true);
            assert.equal(current.hasOwnProperty('availableProducts'), true);
            assert.equal(current.availableProducts.hasOwnProperty('Food'), true);
            assert.equal(current.availableProducts.hasOwnProperty('Drink'), true);
        });

        it('Should throw error if input param is not a number or negative number', () => {
            assert.throw(() => current = new Warehouse(-100), 'Invalid given warehouse space');
            assert.throw(() => current = new Warehouse('100'), 'Invalid given warehouse space');
        });
    });

    describe('addProduct method', () => {
        it('Should throw error if there is no space', () => {
            assert.throw(() => current.addProduct('Food', 'banana', 200), 'There is not enough space or the warehouse is already full');
        });

        it('Should add the product and the quantity', () => {
            current.addProduct('Food', 'banana', 10);
            assert.equal(current.availableProducts.Food.hasOwnProperty('banana'), true);
            assert.equal(current.availableProducts.Food.banana, 10);
        });

        it('Should return the type object', () => {
            const typeObj = current.addProduct('Food', 'banana', 10);
            assert.deepEqual(typeObj, current.availableProducts.Food);
        });
    });

    describe('orderProducts method', () => {
        it('Should sort the products', () => {
            current.addProduct('Food', 'orange', 10);
            current.addProduct('Food', 'banana', 10);
            current.addProduct('Food', 'apple', 10);
            let sortedKeys = Object.keys(current.availableProducts.Food)
                .sort((a, b) => current.availableProducts.Food[b] - current.availableProducts.Food[a]);
            let newObj = {};

            for (let product of sortedKeys) {

                if (newObj.hasOwnProperty(product) === false) {
                    newObj[product] = 0;
                }

                newObj[product] += current.availableProducts.Food[product];
            }

            const typeObj = current.orderProducts('Food');
            assert.deepEqual(typeObj, current.availableProducts.Food);
        });
    });

    describe('occupiedCapacity method', () => {
        it('Should return how much capacity is occupied', () => {
            current.addProduct('Food', 'banana', 10);
            assert.equal(current.occupiedCapacity(), 10)
        });

        it('Should return zero if warehouse is empty', () => {
            assert.equal(current.occupiedCapacity(), 0)
        });
    });

    describe('revision method', () => {
        it('Should return message if warehouse is empty', () => {
            assert.equal(current.revision(), 'The warehouse is empty');
        });

        it('Should return all products of each type as string', () => {
            current.addProduct('Food', 'banana', 10);
            current.addProduct('Drink', 'sprite', 20);
            let output = '';

            for (let type of Object.keys(current.availableProducts)) {
                output += `Product type - [${type}]\n`;

                for (let product of Object.keys(current.availableProducts[type])) {
                    output += `- ${product} ${current.availableProducts[type][product]}\n`;
                }

            }

            assert.equal(current.revision(), output.trim());
        });
    });

    describe('scrapeAProduct method', () => {
        it('Should throw error if product is not in warehouse', () => {
            assert.throw(() => current.scrapeAProduct('banana', 10), 'banana do not exists');
        });

        it('Should remove the quantity from warehouse', () => {
            current.addProduct('Food', 'banana', 10);
            current.scrapeAProduct('banana', 5);
            assert.equal(current.availableProducts.Food.banana, 5);
        });

        it('Should set the stored quantity to zero if input is bigger than stored', () => {
            current.addProduct('Food', 'banana', 10);
            current.scrapeAProduct('banana', 20);
            assert.equal(current.availableProducts.Food.banana, 0);
        });

        it('Should return the type object', () => {
            current.addProduct('Food', 'banana', 10);
            const typeObj = current.scrapeAProduct('banana', 5);
            assert.deepEqual(typeObj, current.availableProducts.Food);
        });
    });
});