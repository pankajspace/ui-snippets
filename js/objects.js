"use strict"

//object properties
var obj = {
	"a" : 1,
	a : 2,
	b : 3,
	"b" : 4
}

console.log(obj.a);
console.log(obj["a"]);

console.log(obj.b);
console.log(obj["b"]);