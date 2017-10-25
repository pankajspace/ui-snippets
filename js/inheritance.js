"use strict"

// New way
// Shape - superclass
function Shape() {
    this.name = "Shape";
}
// superclass method
Shape.prototype.getName = function () {
    console.info(this.name);
};
// Rectangle - subclass
function Rectangle() {
    Shape.call(this); // call super constructor.
    // this.name = "Rectangle";  //comment - uncomment this line to see different behaviour
}
// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype);
// console.log(Rectangle.prototype.constructor);
Rectangle.prototype.constructor = Rectangle;
// console.log(Rectangle.prototype.constructor);
var rect = new Rectangle();
console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?', rect instanceof Shape); // true
rect.getName();
// New way


// Old way
function Parent() {
    this.name = "Parent";
}
Parent.prototype.breathes = function () {
    console.log("Parent breathes");
};
var p = new Parent();
p.breathes();

function Child() {
    Parent.call(this); // call super constructor.
    this.name = "Child";
}
Child.prototype = new Parent();
Child.prototype.constructor = Child;
Child.prototype.getsBored = function () {
    console.log("Child getsBored");
};
var c = new Child();
c.getsBored();
c.breathes();
// Old way

//If you wish to inherit from multiple objects, then mixins are a possibility.
function MyClass() {
    SuperClass.call(this);
    OtherSuperClass.call(this);
}

// inherit one class
MyClass.prototype = Object.create(SuperClass.prototype);
// mixin another
Object.assign(MyClass.prototype, OtherSuperClass.prototype);
// re-assign constructor
MyClass.prototype.constructor = MyClass;

MyClass.prototype.myMethod = function () {
    // do a thing
};
