// String Method
let str = "Hello";

console.log(str.toUpperCase());


// Number Method
let n = 1.23456;

console.log(n.toFixed(2));

//! Constructors are for internal use only
console.log(typeof 0);              //* Output: "number"
console.log(typeof new Number(0));  //* Output: "object"

//! Objects are always truthy because they represent a reference to a location in memory, not content
let zero = new Number(0);

if (zero) {
  console.log("zero is truthy");
}

let num = Number("123");
console.log(typeof num); //* Output: "number"

//! null / undefined have no methods
console.log(null.test); //* Output: TypeError: Cannot read properties of null (reading 'test')
