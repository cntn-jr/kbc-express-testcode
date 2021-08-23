'use strict';
const chai = require('chai');
const assert = chai.assert;
var path = require("path");
const calcs = require(path.join(__dirname,'../../functions/calcs.js') );

// テスト本体
describe('Unit Test for calcs.js', async function() {
    it('multiply 2 by 3 results 6', async function() {
        assert.equal(calcs.multiply(2, 3), 6);
    });
});
