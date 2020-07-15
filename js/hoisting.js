"use strict";

function1();
function function1() {
  console.log("function1");
}

try {
  function2();
} catch (error) {
  console.log(error);
}
var function2 = function () {
  console.log("function2");
};
function2();
