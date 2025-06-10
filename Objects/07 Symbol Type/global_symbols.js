// Global Registry

// read from global registry
let id = Symbol.for("id");

// read again
let idAgain = Symbol.for("id");

console.log(id === idAgain); //* Output: true