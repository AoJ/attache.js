var aspect = require('../attache.js');
var assert = require("assert");

var obj = {
  foo: function(){},
  bar: function(){}
}

var counter = 0;

aspect.before(obj, ["foo", "bar"], function() { counter = counter + 2; });
aspect.after(obj, ["foo", "bar"], function() { counter--; });

obj.foo();
obj.bar();

assert.equal(counter, 2);




