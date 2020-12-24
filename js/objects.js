"use strict";

var c = "key";

//object properties
var obj = {
  a: 1,
  a: 2,
  key: 5,
  done: c
};

console.log(obj.a);
console.log(obj["a"]);
console.log(obj[c]);
console.log(obj.done);
