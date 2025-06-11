/*
  -> Math.floor: rounds down
  -> Math.ceil: rounds up
  -> Math.round: rounds to the nearest integer
  -> Math.trunc: removes anything after the decimal point without rounding
*/

// Rounding to the n-th digit after the decimal
// 1. Multiply & Divide
let num = 1.23456;

console.log(Math.round(num * 100) / 100); //* Output: 1.23: 1.23456 -> 123.456 -> 123 -> 1.23

// 2. Using toFixed(n)
num = 12.34;
console.log(num.toFixed(1)); //* Output: 12.3

// It rounds to the nearest value
num = 12.36;
console.log(num.toFixed(1)) //* Output: 12.4;

// Zeroes are appended to the end if the decimal part is shorted than required
num = 12.34;
console.log(num.toFixed(5)); //* Output: 12.34000;