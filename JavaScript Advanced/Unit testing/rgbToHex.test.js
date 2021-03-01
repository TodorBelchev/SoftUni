const rgbToHexColor = require('../rgbToHex');
const { assert } = require('chai');

describe('rgbToHex', () => {
    it('Should return undefined when red color input is not correct', () => {
        assert.equal(rgbToHexColor(1.2, 1, 1), undefined);
        assert.equal(rgbToHexColor('1', 1, 1), undefined);
        assert.equal(rgbToHexColor(-1, 1, 1), undefined);
        assert.equal(rgbToHexColor(300, 1, 1), undefined);
    });

    it('Should return undefined when green color input is not correct', () => {
        assert.equal(rgbToHexColor(1, 1.2, 1), undefined);
        assert.equal(rgbToHexColor(1, '1', 1), undefined);
        assert.equal(rgbToHexColor(1, -1, 1), undefined);
        assert.equal(rgbToHexColor(1, 300, 1), undefined);
    });

    it('Should return undefined when blue color input is not correct', () => {
        assert.equal(rgbToHexColor(1, 1, 1.2), undefined);
        assert.equal(rgbToHexColor(1, 1, '1'), undefined);
        assert.equal(rgbToHexColor(1, 1, -1), undefined);
        assert.equal(rgbToHexColor(1, 1, 300), undefined);
    });

    it('Should return #010101 with 1,1,1 input', () => {
        assert.equal(rgbToHexColor(1, 1, 1), '#010101');
    });

    it('Should return #FF9EAA with 255,158,170 input', () => {
        assert.equal(rgbToHexColor(255, 158, 170), '#FF9EAA');
    });

    it('Should return #3DD932 with 61,217,50 input', () => {
        assert.equal(rgbToHexColor(61, 217, 50), '#3DD932');
    });

    it("should return #FFFFFF for (255, 255, 255)", function () {
        assert.equal(rgbToHexColor(255, 255, 255), "#FFFFFF");
    });

    it("should return #000000 for (0, 0, 0)", function () {
        assert.equal(rgbToHexColor(0, 0, 0), "#000000");
    });

    it('Should return undefined with zero input arguments', () => {
        assert.equal(rgbToHexColor(), undefined);
    });
});