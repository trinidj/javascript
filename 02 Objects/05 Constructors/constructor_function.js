// Constructor
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("John");

console.log(user.name);    //* Output: John
console.log(user.isAdmin); //* Output: false;

/*
  This is what it looks like:

  function User(name) {
    this = {};

    adds properties
    this.name = name;
    this.isAdmin = false;

    return this (implicitly)
  
  }

  then

  let user = {
    name: "John",
    isAdmin: false,
  };
*/

// Create a function, then call it immediately call it 
user = new function() {
  this.name = "John";
  this.isAdmin = false;
}