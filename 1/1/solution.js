
function toBase64(hex) {
  
  var hexBuffer = new Buffer(hex, 'hex');

  return hexBuffer.toString('base64');

}

module.exports = toBase64;
