console.log(true || true);    //* true
console.log(false || true);   //* true
console.log(true || false);   //* true
console.log(false || false);  //* false

// Example
let hour = 9;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  console.log('The office is closed');
}

/*
  The OR operand evaluates each condition from left to right until it finds a truthy value, which is then returned. 
*/

console.log(1 || 0); //* 1

console.log(null || 1);              //* 1 (1 is the first truthy value)
console.log(null || 0 || 1);         //* 1

console.log(undefined || null || 0); //* 0 (all values are falsey, return the last value)

// Short-Circuit Evaluation
true || console.log("not printed"); //* the OR operator stops immediately after seeing true
false || console.log("printed");

