// a "symbol" represents a unique identifier
let id = Symbol();

// a symbol with description "id"
id = Symbol("id");

// Symbols are guaranteed to be unique
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2); //* Output: false

//! Symbols don't auto-convert to a string
id  = Symbol("id");
alert(id); //* Output: TypeError: Cannot convert a Symbol value to a string

// To show a symbol:
alert(id.toString()); //* Output: Symbol(id)

// or

alert(id.description);
