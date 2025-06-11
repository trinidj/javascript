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
console.log(1e-6);      //* 0.000001