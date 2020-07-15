"use strict";

function foo() {
  console.log(this.a);
}
var obj = {
  a: 2,
};
var bar = function () {
  foo.call(obj);
};
var a = 5;
// foo();	//5 without strict mode   //TypeError with strict mode
bar(); //always 2
//////////////////////////////////////////////////////////////////////////////
var obj1 = {
  a: 3,
};
var bar1 = function () {
  return foo1.apply(obj1, arguments);
};
function foo1(something) {
  console.log(this.a, something);
  return this.a + something;
}
var b = bar1(3); // 2 3
console.log(b); // 5

///////////////////////////////////////////////////////////////////////////////
// creating reusable binder
var obj2 = {
  a: 1,
};
function foo2() {
  if (typeof arguments != "undefined") {
    var sum = 0;
    for (var i = arguments.length - 1; i >= 0; i--) {
      sum = sum + arguments[i];
    }
  }
  return sum + this.a;
}
function bind2(fn, obj) {
  return function () {
    console.log(obj.a, arguments); //5 [2,3]
    return fn.apply(obj, arguments);
  };
}
var bar2 = bind2(foo2, obj2);
var b2 = bar2(2, 3, 4);
console.log(b2); //6
