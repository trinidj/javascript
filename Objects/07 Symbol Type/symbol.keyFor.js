// get symbol by name
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// get name by symbol
console.log(Symbol.keyFor(sym));  //* Output: name 
console.log(Symbol.keyFor(sym2)); //* Output: id

/*
  The symbol must be global in order to use Symbol.keyFor()
*/

let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

console.log(Symbol.keyFor(globalSymbol)); //* Output: name, global symbol
console.log(Symbol.keyFor(localSymbol));  //* Output: undefined, not global

console.log(localSymbol.description);