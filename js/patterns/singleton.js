var mySingleton = (function () {
  var instance;

  function init() {
    function privateMethod(params) {
      console.log("privateMethod");
    }
    var privateVariable = "privateVariable";
    var privateRandomNumber = Math.random();
    return {
      publicMethod: function (params) {
        console.log("publicMethod");
      },
      publicProperty: "publicProperty",
      getRandomNumber: function (params) {
        return privateRandomNumber;
      },
    };
  }

  return {
    getInstance: function (params) {
      if (!instance) {
        instance = init();
      }
      return instance;
    },
  };
})();

var single1 = mySingleton.getInstance();
var single2 = mySingleton.getInstance();
console.log(single1.getRandomNumber() === single2.getRandomNumber());
