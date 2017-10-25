"use strict"

console.log(function1);
function1();

function function1(){
	console.log("function1");	
}

console.log(function1);
function1();

var function1 = function function1Name(){
	console.log("function1 more");
}

console.log(function1);
function1();

var function1 = "string";
console.log(function1);

function1();