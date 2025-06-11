// Billion
let billion = 1000000000;

// _ separator
billion = 1_000_000_000;

// Shortening Numbers
billion = 1e9;      

console.log(billion); //* Output: 1 billion
console.log(7.3e9)    //* 7300000000

// e multiplies the number 1 with the given zero count
console.log(1e3 === 1 * 1000);          //* Output: true
console.log(1.23e6 === 1.23 * 1000000)  //* Output: true


// writing in microseconds
console.log(0.000001);  //* Output: 0.000001
console.log(1e-6);      //* Output: 0.000001

console.log(1e-3 === 1 / 1000);            //* Output: true
console.log(1.23e-6 === 1.23 / 1000000);   //* Output: true
console.log(1234e-2 === 1234 / 100);       //* Output: true


// Hex 
console.log(0xff);  //* Output: 255 
console.log(0xFF);  //* Output: 255 (case doesn't matter)

// Binary 
console.log(0b11111111); //* Output: 255

// Octal  
console.log(0o377);      //* Output: 255

let a = 0b11111111;
let b = 0o377;

console.log(a == b); //* Output: true