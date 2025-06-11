/*
  Numbers are 64-bit:
  1. 52 bits for digits
  2. 11 bits for decimal point position
  3. 1 bit for the sign
*/

// Numeric Overflow
console.log(1e500); //* Output: Infinity

//! Loss of Precision
console.log(0.1 + 0.2 == 0.3); //* Output: false

console.log(0.1 + 0.2); //* Output: 0.30000000000000004

//! There is no way to store exactly 0.1 or 0.2 with the binary system
console.log(0.1.toFixed(20)); //* Output: 0.10000000000000000555


// Working around the problem using toFixed(n)
let sum = 0.1 + 0.2;
console.log(sum.toFixed(2)); //* Output: "0.3"
console.log(typeof sum.toFixed(2)); //* Output: "string"

//! toFixed always returns string

console.log(+sum.toFixed(2)); //* Output: 0.3
console.log(typeof +sum.toFixed(2)); //* Output: "number"