let user = {
  name: "John",
  age: 21,
};

user.sayHi = function() {
  console.log("Hello!");
};

user.sayHi();

/*
  Same as:

  let user = {
    ...
  }

  functino sayHi() {
    console.log("Hello!");
  }

  user.sayHi = sayHi;

  user.sayHi();

*/