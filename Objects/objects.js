// Intialize a new object
let user = new Object();

console.log(user); //* Output: {};

// Added properties as "key: value" pairs
user = {
  name: "John",
  age: 21
};

console.log(user); //* Output: { name: 'John', age: 21 }

// Accessing values using dot notation
console.log(user.name);
console.log(user.age);

// Adding a property
user.isAdmin = true; 
console.log(user); //* Output: { name: 'John', age: 21, isAdmin: true }

// Deleting a property
delete user.age;
console.log(user); //* Output: { name: 'John', isAdmin: true }

// Multiword property names
user = {
  name: "John", 
  age: 21,
  "likes cats": true
};

console.log(user); //* Output: { name: 'John', age: 21, 'likes cats': true }