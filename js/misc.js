

var a = 'Hi ';
(function () {
    // 'use strict';   //comments uncomment this line to see the different outputs
    b = 'How are you?';
    // var b = 'How are you?';
})();
console.log(a + b);


//--------------------------------------------------------------------------


var Person1 = {
    "firstName": "John",
    "lastName": "Doe",
    "getName": function () {
        console.log(this.firstName + " " + this.lastName);
    }
};
Person1.getName();

var Person2 = {
    "firstName": "Jane",
    "lastName": "Doe",
};
Person2.getName = Person1.getName;
Person2.getName();
Person1.getName.call(Person2);

var Person3 = Object.create(Person1);
Person3.getName();


//--------------------------------------------------------------------------