"use strict"; //comment - uncomment this line to see different behaviour for each example

// default binding
// console.log(this);
// var a = 1;
// (function () {
//   console.log(this);
//   var a = 2;
//   (function () {
//     console.log(this);
//     var a = 3;
//     console.log(window.a);
//     console.log(a);
//     console.log(this.a);
//   })();
// })();
//default binding

//new binding
// function foo2(a) {
//   this.a = a;
// }
// var b = new foo2(3);
// console.log(b.a);
//new binding

//implicit binding
// function foo3() {
//   console.log(a, this.a);
// }
// var obj = {
//   a: 1,
//   foo2: foo3,
// };
// var a = 2;
// obj.foo2();
// foo3();
//implicit binding

//explicit binding
// function foo4(){
// 	console.log(a);
// 	console.log(this.a);
// 	// console.log(this.a);
// }
// var obj = {
// 	a: "obj",
// 	foo4: foo4
// }
// var a = "window";

// obj.foo4() // "window" "obj"
// foo4.call(obj);	// "window" "obj"
// foo4.apply(obj); // "window" "obj"

// var fun = foo4.bind(obj);
// fun(); // "window" "obj"
// foo4();	//"window" without strict mode   //TypeError with strict mode
//explicit binding

//hard binding
// function foo5(){
// 	console.log(this.a);
// }
// var obj = {
// 	a: 1
// }
// var bar5 = function(){
// 	foo5.call(obj);
// }
// var a = 2;
// bar5();	//always 1
// foo5();	//2 without strict mode   //TypeError with strict mode
//hard binding

//implicit lost
// function foo6() {
// 	console.log(this.a);
// }
// var obj = {
// 	a: 2,
// 	foo6: foo6
// }
// var a = 5;
// var bar6 = obj.foo6;
// // bar6();	//5 without strict mode   //TypeError with strict mode
// function doFoo(fn) {
// 	var a = 10;
// 	fn();
// }
// doFoo(foo6);	//5 without strict mode   //TypeError with strict mode
// doFoo(obj.foo6); //5 without strict mode   //TypeError with strict mode
// doFoo(obj.foo6.bind(obj)); //2 with or without strict mode
// setTimeout(foo6, 1000);	//5 with or without strict mode
// setTimeout(obj.foo6, 1000);	//5 with or without strict mode
// setTimeout(obj.foo6.bind(obj), 100); //2 with or without strict mode
//implicit lost

