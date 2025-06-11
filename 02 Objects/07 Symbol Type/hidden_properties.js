let user = {
  name: "John",
};

let id = Symbol("id");

user[id] = 1;

console.log(user[id]); //* Output: 1

id = Symbol("id");
user[id] = "Their id value";

console.log(user[id]);

// Without a Symbol()
user = { name: "John" };

// uses "id" property
user.id = "Our id value";

// another script using "id" property
user.id = "Their id value";

console.log(user.id); //* Output: Their id value


// Symbols in an object literal
id = Symbol("id");

user = {
  name: "John",
  [id]: 123 // not "id": 123 
};


// Symbols are skipped by for...in
id = Symbol("id");
user = {
  name: "John",
  age: 21,
  [id]: 123
};

for (let key in user) console.log(key);

console.log("Direct: " + user[id]);

/*
  Symbols are intended to be hidden
*/

//? Objects.assign
id = Symbol("id");
user = {
  [id]: 123
};

let clone = Object.assign({}, user);
console.log(clone[id]); //* Output: 123

/*
  The reason why for..in skips symbols and Object.assign() doesn't is because for...in it meant for iterating an object's "public" properties. 

  Using Object.assign means that you are creating a complete copy, including symbol properties.
*/