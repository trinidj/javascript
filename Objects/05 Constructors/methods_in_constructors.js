function User(name) {
  this.name = name;

  this.sayHi = function() {
    console.log("My name is: " + this.name);
  };
}

let john = new User("John");

john.sayHi();

// Same as:
/*

  john = {
    name: "John",
    sayHi: function() {...}
  }

*/