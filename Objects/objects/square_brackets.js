let user = {};

// Square Bracket Notation
// Set
user["likes cats"] = true;

// Get
console.log(user["likes cats"]); //* Output: true

// Delete
delete user["likes cats"];


let key = "likes cats";

user[key] = true;

user = {
  name: "John",
  age: 21
};

key = prompt("What do you want to know about the user?", "name");

// Access by variable
console.log(user[key]); //* Output: John (if entered name)