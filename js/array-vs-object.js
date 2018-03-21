var arr = [];
var obj = {};

console.log(Array.isArray(arr));
console.log(arr instanceof Array);
console.log(obj instanceof Array);
console.log(arr instanceof Object);
console.log(obj instanceof Object);

//cloning a object
var person1 = {
  "fname": "pankaj",
  "address" : {
    "pin": 102012,
    "coords"  : {
      "x": 32434324,
      "y": 89340544
    }
  }
}

console.log(person1);

//comment uncomment following two lines to see the difference deep vs shallow copy
// var person2 = Object.assign({}, person1); //shallow copy
var person2 = JSON.parse(JSON.stringify(person1)); //deep copy

console.log(person1, person2);
person2.address.pin = 1;
console.log(person1, person2);
