"use strict"

//closure example
var makeAdder = function (first) {
	return function (second) {
		return first + second;
	}
}
var addTwo = makeAdder(2);
console.log(addTwo(1));
var addThree = makeAdder(3);
console.log(addThree(1));

//Advanced closure
function bind2(fn, obj) {
	return function () {
		return fn.apply(obj, arguments);
	}
}
var obj = {
	a: 3
}
function addOne(b) {
	// console.log(this.a, b, arguments);
	return this.a + b + 1;
}
var result = bind2(addOne, obj);
var final = result(2);
console.log(final);
//Advanced closure


//Animate closure
function animateIt(elementId) {
	var elem = document.getElementById(elementId);
	var tick = 0;
	var timer = setInterval(function () {
		if (tick < 100) {
			elem.style.left = elem.style.top = tick + "px";
			tick++;
		} else {
			clearInterval(timer);
			console.log(tick, "Tick accessed via a closure.");
			console.log(elem, "Element also accessed via a closure.");
			console.log(timer, "Timer reference also obtained via a closure.");
		}
	}, 10);
}
animateIt('box');
//Animate closure
