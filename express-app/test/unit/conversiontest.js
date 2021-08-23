'use strict';
const chai = require('chai');
const assert = chai.assert;
var path = require("path");
const conversion = require(path.join(__dirname,'../../functions/conversion.js') );

// テスト本体
describe('Unit Test for conversion.js', async function() {
    it('1 knot results 1.852', async function() {
        assert.equal(conversion.knotToSpeed(1), 1.852);
    });
});