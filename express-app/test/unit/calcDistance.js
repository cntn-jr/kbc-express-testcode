'use strict';
const chai = require('chai');
const assert = chai.assert;
var path = require("path");
const conversion = require(path.join(__dirname,'../../functions/conversion.js') );
const calcCruising = require(path.join(__dirname,'../../functions/calcCruising.js') );

// テスト本体
describe('Unit Test for calcCruising.js', async function() {
    it('1 knot, fuel 2(L), fuel economy 1(L/h) results 3.704', async function() {
        let speed = conversion.knotToSpeed(1);
        assert.equal(calcCruising.calcDistance(speed, 2, 1), 3.704);
    });
});