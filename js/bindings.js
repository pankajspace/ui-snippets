// "use strict"  //comment - uncomment this line to see different behaviour

//default binding 
function foo1(){
	// "use strict"	//use strict effective here
	console.log(this.a);
}
var a = 2;
(function(){
	"use strict"	//use strict not effective here
	foo1();	
})();
//default binding


//new binding 
function foo2(a) {
	this.a = a;
}
var b = new foo2(3);
console.log(b.a);
//new binding


//implicit binding
function foo3(){
	console.log(this.a);	//2
}
var obj = {
	a: 2,
	foo3: foo3
}
var a = 5;
obj.foo3();
//implicit binding


//explicit binding
function foo4(){
	console.log(this.a);
}
var obj = {
	a: 2,
	foo4: foo4
}
var a = 5;
// foo4();	//5 without strict mode   //TypeError with strict mode
foo4.call(obj);	//2 explicit binding
foo4.apply(obj);	//2 explicit binding
//explicit binding


//hard binding
function foo5(){
	console.log(this.a);
}
var obj = {
	a: 2
}
var bar5 = function(){
	foo5.call(obj);
}
var a = 5;
// foo5();	//5 without strict mode   //TypeError with strict mode
bar5();	//always 2
//hard binding


//implicit lost
function foo6() {
	console.log(this.a);
}
var obj = {
	a: 2,
	foo6: foo6
}
var a = 5;
var bar6 = obj.foo6;
// bar6();	//5 without strict mode   //TypeError with strict mode
function doFoo(fn) {
	var a = 10;
	fn();
}
// doFoo(obj.foo);		//5 without strict mode   //TypeError with strict mode
doFoo(obj.foo6.bind(obj));	//2 with or without strict mode
setTimeout(obj.foo6, 100);	//5 with or without strict mode
setTimeout(obj.foo6.bind(obj), 100);	//2 with or without strict mode
//implicit lost