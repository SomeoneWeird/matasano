
var assert = require('assert');

var solution = require('../solution');

describe("1-2", function() {
  
  it("should xor with fixed key", function() {

    var str1 = "1c0111001f010100061a024b53535009181c";
    var str2 = "686974207468652062756c6c277320657965";

    var res = "746865206b696420646f6e277420706c6179";

    assert.equal(solution(str1, str2), res);

  });

});