
var bx = require('bitwise-xor');

function fixedXOR(str1, str2) {

  var b1 = new Buffer(str1, 'hex');
  var b2 = new Buffer(str2, 'hex');

  var b3 = bx(b1, b2);

  return b3.toString('hex');

}

module.exports = fixedXOR;