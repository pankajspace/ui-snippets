"use strict"

//module pattern
function coolModule(){
	var something = "cool";
	var another = [1,2,3];
	function doSomething(){
		console.log(something);
	}
	function doAnother(){
		console.log(another);
	}
	return {
		doSomething : doSomething,
		doAnother : doAnother
	}
}

var foo = coolModule();
foo.doSomething();
foo.doAnother();


//revealing module singleton pattern
var foo = (function(secret){
	function id(){
		console.log(secret);
	}
	function idUpper(){
		console.log(secret.toUpperCase());
	}
	function change(){
		publicAPI.identify = idUpper;
	}
	var publicAPI = {
		change : change,
		identify : id
	}
	return publicAPI;
})("secret key");

foo.identify();
foo.change();
foo.identify();
console.log(foo);
console.log(foo.publicAPI); //undefined


//modern modules
var MyModules = (function(){
	var modules = {};

	function define(name, deps, impl){
		for(var i=0; i<deps.length; i++){
			console.log(deps, modules);
			deps[i] = modules[deps[i]];
			console.log(deps, modules);
		}
		modules[name] = impl.apply(impl, deps);
	}

	function get(name){
		return modules[name];
	}

	return {
		define : define,
		get : get
	}
})();

MyModules.define("bar", [], function(){
	function hello(who){
		return "Let me introduce " + who;
	}
	return{
		hello : hello
	}
});

MyModules.define("foo", ["bar"], function(){
	var hungry = "hippo";
	function awesome(){
		console.log(bar.hello(hungry).toUpperCase());
	}
	return{
		awesome : awesome
	}
});

var bar = MyModules.get("bar");
var foo = MyModules.get("foo");

console.log(bar.hello("hippo"));

foo.awesome();