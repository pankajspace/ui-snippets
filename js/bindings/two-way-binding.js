"use strict";

// var input = document.querySelector("input");
// var objData = {
//   dataValue: input.getAttribute("data-value"),
//   prevInputValue: input.getAttribute("data-value")
// };
// //changing the value of input to that provided in attribute for first time.
// input.value = objData.dataValue;

// //watching the dataValue changes, if changed changing the input value.
// setInterval(function() {
//   if (objData.dataValue !== objData.prevInputValue) {
//     input.value = objData.dataValue;
//   }
// }, 0);

// input.addEventListener("keyup", function(event) {
//   objData.prevInputValue = event.target.value;
//   objData.dataValue = event.target.value;
// });









var inputs = document.querySelectorAll("input");

console.log(inputs);

inputs.forEach(function(input) {
  input.addEventListener("keyup", function(event) {
    objData.dataValue = event.target.value;
    console.log(objData);
  });
});

var input = document.querySelector("input");
var objData = {
  dataValue: input.getAttribute("data-value"),
  set dataValue(val) {
    this.currentDataValue = val;
    input.value = val;
  },
  get dataValue() {
    return this.dataValue;
  },
  currentDataValue: null
};
//changing the value of input to that provided in attribute for first time.
input.value = input.getAttribute("data-value");

input.addEventListener("keyup", function(event) {
  objData.dataValue = event.target.value;
  console.log(objData);
});

var button = document.querySelector("button");
button.addEventListener("click", function(event) {
  objData.dataValue = Math.floor(Math.random() * 10000);
  console.log(objData);
});
