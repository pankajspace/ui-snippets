function EventEmitter() {
  this.events = {};
}

EventEmitter.prototype.on = function (type, listener) {
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener);
  //   console.log(this.events);
};

EventEmitter.prototype.emit = function (type, data) {
  if (this.events[type]) {
    this.events[type].forEach((listener) => {
      listener(data);
    });
  }
};

var eventEmitter = new EventEmitter();

eventEmitter.on("click", function (data) {
  console.log("clicked 1", data);
});

eventEmitter.on("click", function (data) {
  console.log("clicked 2", data);
});

eventEmitter.emit("click", { name: "pankaj" });
eventEmitter.emit("click", { name: "kunal" });
