let a = {};
let b = a; // copy the address

console.log( a==b );    //* Output: true, both variables point to the same object
console.log( a === b ); //* Output: true

a = {};
b = {};

console.log( a == b ); //* Output: false, they are two indepenet objects

// Const objects can be modified
const user = {
  name: "John",
};

user.name = "Pete";

console.log(user.name);

/*
  -> The value user is constant, but the properties of user are free to change.
*/
