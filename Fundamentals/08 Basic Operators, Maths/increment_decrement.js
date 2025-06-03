let counter = 2;
counter++; //* same as counter = counter + 1
console.log(counter); //* 3

counter--; //* same as counter = counter - 1
console.log(counter); //* 2

// Postfix
let n = 1;
let a = ++n;
console.log(a) //* Output: 2, increments the value first, before returning

// Prefix
let m = 1;
let b = n++;
console.log(b) //* Output: 1, increments the value, but returns the old value first