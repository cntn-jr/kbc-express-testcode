'use strict';
const chai = require('chai');
const assert = chai.assert;
const request = require('request');
const cheerio = require('cheerio');

//  ノット変換テスト
describe('Web システムテスト ノット', async ()=>{
    it('Access with GET Method return 200', async ()=>{
        request.get({url:'http://localhost:3000/conversion'}, function(err,response,body){
            assert.equal(response.statusCode, 200);
        });
    })

    it('Access with POST Method return 200', async ()=>{
        request.post({url:'http://localhost:3000/conversion'}, function(err,response,body){
            assert.equal(response.statusCode, 200);
        });
    })

    it('Testing input knot:1', async function() {
        request.post({url:'http://localhost:3000/conversion', form: {knot:1} }, function(err,response,body){
            const $ = cheerio.load(body);
            const result = $('#result').text();
            assert.equal(result,1.852);
        });
    });
})