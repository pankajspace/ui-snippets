"use strict"    //comment - uncomment this line to see different behaviour

//scope chain
function b() {
    var myVar = 'outer b';  //comment - uncomment this line to see different behaviour
    console.log(myVar);
    console.log(this);
}
function a() {
    function b() {
        var myVar = 'inner b';  //comment - uncomment this line to see different behaviour
        console.log(myVar);
        console.log(this);
    }
    var myVar = 'inner a';  //comment - uncomment this line to see different behaviour
    console.log(myVar);
    console.log(this);
    b();  //"this" is set to undefined here in strict mode otherwise set to global (window) object 
}
var myVar = 'outer';  //comment - uncomment this line to see different behaviour
console.log(myVar);
console.log(this);
a();
b();
//scope chain