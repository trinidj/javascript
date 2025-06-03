console.log(true && true);    //* true
console.log(false && true);   //* false
console.log(true && false);   //* false
console.log(false && false);  //* false

// Example
let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  console.log('The time is 12:30');
}

if (1 && 0) {
  console.log("result is falsey");
}

/*
  AND returns the first falsey value.
*/

// if the first operand is truthy, AND returns the second operand
console.log(1 && 0); //* Output: 0
console.log(1 && 5); //* Output: 5

// if the first operand is falsey, AND returns the first, and the second is ignored
console.log(null && 5); //* Output: null
console.log(0 && "string"); //* Output: 0