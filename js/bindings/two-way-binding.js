"use strict";

var inputs = document.querySelectorAll("input");
var objArray = [];

//adding event listeners to all inputs and associating objData for storing data related to that input.
inputs.forEach(function(input) {
  input.value = input.getAttribute("data-value");
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
  input.addEventListener("keyup", function(event) {
    objData.dataValue = event.target.value;
    input.nextElementSibling.innerHTML = objData.currentDataValue;
    console.log(objData, input.next);
  });
  objArray.push({ input: input, data: objData });
});

//setting data for each input randomly.
var button = document.querySelector("button");
button.addEventListener("click", function(event) {
  objArray.forEach(function(obj) {
    console.log(obj);
    var data = Math.floor(Math.random() * 10000);
    obj.data.dataValue = data;
    obj.input.nextElementSibling.innerHTML = data;
  });
});
