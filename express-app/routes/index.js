var express = require('express');
var router = express.Router();

var path = require("path");
const calcs = require(path.join(__dirname,'../functions/calcs.js') );
const conversion = require(path.join(__dirname,'../functions/conversion.js') );
const calcCruising = require(path.join(__dirname,'../functions/calcCruising.js') );


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  let opr1 = req.body.opr1;
  let opr2 = req.body.opr2;

  let outstr = opr1 + " X " + opr2 + " = ";
  // let result = opr1*opr2;
  let result = calcs.multiply(opr1, opr2);

  res.render('index', { title: '結果', output1: outstr, output2: result });
});

router.get('/conversion', (req, res, next) => {
  res.render('conversion', {title: 'Express Conversion'});
})

router.post('/conversion', (req, res, next) => {
  let knot = req.body.knot;

  let outstr = knot + 'ノット ->';
  let result = conversion.knotToSpeed(knot);

  res.render('conversion', { title: 'Express Result', output1: outstr, output2: result });
})

router.get('/calcCruising', (req, res, next) => {
  res.render('calcCruising', {title: 'Express Calc Cruising'});
})

router.post('/calcCruising', (req, res, next) => {
  let knot = req.body.knot;
  let fuel = req.body.fuel;
  let fuelEconomy = req.body.fuelEconomy;

  let speed = conversion.knotToSpeed(knot);

  let outstr = knot + 'ノット\s' + '時速' + speed + 'km/h×燃料' + fuel + 'L÷燃費消費量 ' + fuelEconomy + 'L/h';
  let result = calcCruising.calcDistance(speed, fuel, fuelEconomy);

  res.render('calcCruising', { title: 'Express Result', output1: outstr, output2: result });
})

module.exports = router;
