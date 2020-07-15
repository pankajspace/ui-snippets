"use strict"; //comment - uncomment this line to see different behaviour

//explicit binding takes precedance over implicit binding
// function foo(a) {
//   console.log(a, this.a);
//   this.a = a;
// }
// var obj1 = {
//   a: 1,
//   foo: foo,
// };
// var obj2 = {
//   a: 2,
//   foo: foo,
// };
// obj1.foo.call(obj2); //2
// obj2.foo.call(obj1, 15); //15 1

//new binding takes preferance over implicit binding
// function foo(a) {
//   console.log(a, this.a);
//   this.a = a;
// }
// var obj1 = {
//   a: 1,
//   foo: foo,
// };
// var baz = new obj1.foo(6); //6 undefined : this is undefined here since new operator is used
// console.log(baz.a); //6
// console.log(obj1.a); //1

//explicit binding takes precedance over new binding
// function bar(something) {
//   this.a = something;
// }
// var obj3 = {
//   bar: bar,
// };
// var obj4 = {};
// obj3.bar(4);
// console.log(obj3.a); //4
// obj3.bar.call(obj4, 5);
// console.log(obj4.a); //5
// var baz = new obj3.bar(3);
// console.log(baz.a); //3
// console.log(obj3.a); //4

//hard binding takes precedance over new binding
// function foo5(something) {
//   this.a = something;
// }
// var obj5 = {};
// var bar5 = foo5.bind(obj5); //hard binding to obj5
// bar5(2);
// console.log(obj5.a); //2
// var baz5 = new bar5(3);
// console.log(obj5.a); //2
// console.log(baz5.a); //3

//hard binding takes preferance over explicit binding
function foo5(something) {
  this.a = something;
}
var obj5 = {};
var bar5 = foo5.bind(obj5); //hard binding to obj5
var obj6 = {
  a: 16,
};
bar5.call(obj6);
console.log(obj5.a); //undefined
console.log(obj6.a); //16

//implicit < new < explicit < hard
