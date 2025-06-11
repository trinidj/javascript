let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  }
};

console.log( user.sizes.height ); //* Output: 182

let clone = Object.assign({}, user);

console.log( user.sizes === clone.sizes ); //* true

// user and clone share sizes
user.sizes.width = 60; 
console.log(clone.sizes.width); //* Output: 60
console.log(user.sizes.width);  //* Output: 60

/*
  Since user.sizes is an object, it will be copied by reference (clone.sizes and user.sizes will have the same address), they will
  share the same sizes.
*/

//* structuredClone
clone = structuredClone(user);

console.log(user.sizes === clone.sizes);  //* false, different object

// user and clone will two seperate entities
user.sizes.width = 60;          
console.log(clone.sizes.width); //* Output: 50


// circular references
user = {};

user.me = user;

clone = structuredClone(user);
console.log(clone.me === clone); //* Output: true

