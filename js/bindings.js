"use strict"

//default binding 
function foo(){
	// "use strict"	//use strict effective here
	console.log(this.a);
}
var a = 2;
(function(){
	"use strict"	//use strict not effective here
	foo();	
})();
//default binding


//new binding 
function foo(a) {
	this.a = a;
}
var b = new foo(3);
console.log(b.a);
//new binding


//implicit binding
function foo(){
	console.log(this.a);	//2
}
var obj = {
	a: 2,
	foo: foo
}
var a = 5;
obj.foo();
//implicit binding


//explicit binding
function foo(){
	console.log(this.a);
}
var obj = {
	a: 2,
	foo: foo
}
var a = 5;
// foo();	//5 without strict mode   //TypeError with strict mode
foo.call(obj);	//2 explicit binding
foo.apply(obj);	//2 explicit binding
//explicit binding


//hard binding
function foo(){
	console.log(this.a);
}
var obj = {
	a: 2
}
var bar = function(){
	foo.call(obj);
}
var a = 5;
// foo();	//5 without strict mode   //TypeError with strict mode
bar();	//always 2
//hard binding


//implicit lost
function foo() {
	console.log(this.a);
}
var obj = {
	a: 2,
	foo: foo
}
var a = 5;
var bar = obj.foo;
// bar();	//5 without strict mode   //TypeError with strict mode
function doFoo(fn) {
	var a = 10;
	fn();
}
// doFoo(obj.foo);		//5 without strict mode   //TypeError with strict mode
doFoo(obj.foo.bind(obj));	//2 with or without strict mode
setTimeout(obj.foo, 100);	//5 with or without strict mode
setTimeout(obj.foo.bind(obj), 100);	//2 with or without strict mode
//implicit lost