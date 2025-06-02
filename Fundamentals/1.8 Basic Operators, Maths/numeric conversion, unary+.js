// No effect
let x = 1;
console.log(+x); //* Output: 1

let y = -2;
console.log(+y); //* Output: -2

// Converts non-numbers
console.log(+true); //* 1
console.log(+""); //* 0

let apples = "2";
let oranges = "3";
console.log( +apples + +oranges ); //* Converts to numbers before binary plus
//* same as: Number(apples) + Number(oranges);