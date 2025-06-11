function User() {
  console.log(new.target);
}

User(); //* Output: undefined

new User(); //* Output: [Function: User]

// Using this inside the function
function User(name) {
  // if there is no new, add a new
  if (!new.target) {      
    return new User(name);
  }

  this.name = name;
}

let john = User("John");
console.log(john.name); //* Output: John