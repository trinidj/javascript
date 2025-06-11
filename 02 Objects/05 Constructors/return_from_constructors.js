/*
  There are no return statements in constructors, but if there is:
  
  -> if return is called with an object, the object is returned instead of this
  -> if return is called with a primitive, its ignored
*/

// Return Object instead of "this"
function BigUser() {
  this.name = "John";

  return { name: "Godzilla" };
}

console.log(new BigUser().name); //* Output: Godzilla

function SmallUser() {
  this.name = "John";

  return; // <- returns this
}

console.log(new SmallUser().name); //* Output: John

// Omitting Parentheses
function User(name) {
  if (!new.target) {
    return new User(name);
  }

  this.name = name;
}

let user = User;
// same as
user = User();
