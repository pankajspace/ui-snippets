// var a = "Hi ";
// (function() {
//   // 'use strict';   //comments uncomment this line to see the different outputs
//   b = "How are you?";
//   // var b = 'How are you?';
// })();
// console.log(a + b);

//--------------------------------------------------------------------------

// var Person1 = {
//   firstName: "John1",
//   lastName: "Doe1",
//   getName: function () {
//     console.log(this.firstName + " " + this.lastName);
//   },
// };
// Person1.getName();

// var Person2 = {
//   firstName: "Jane2",
//   lastName: "Doe2",
// };

// Person2.getName = Person1.getName;

// Person2.getName();
// Person1.getName.call(Person2);

// var Person3 = Object.create(Person1);
// Person3.getName();

//--------------------------------------------------------------------------

var Person4 = function () {
  this.firstName = "John4";
  this.lastName = "Doe4";
};
Person4.prototype.getName = function () {
  console.log(this.firstName + " " + this.lastName);
};

Person4.prototype.firstName = "test0";
Person4.prototype.getName();

var p4 = new Person4();
p4.getName();

p4.firstName = "John4Obj";
p4.getName();

Person4.firstName = "test";
Person4.prototype.getName = function () {
  console.log(this.firstName);
  console.log(Person4.firstName);
};
p4.getName();

var Person5 = {
  firstName: "Jane5",
  lastName: "Doe5",
};

Person5.getName = Person4.prototype.getName;
Person5.getName();

//--------------------------------------------------------------------------
