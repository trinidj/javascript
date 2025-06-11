/*
  -> Infinity (and -Infinity) represent a numeric value greater or less than anything.
  -> NaN represents an error.
  -> Both belong to the "number" type
*/

// isNan(value): converts argument to a numbers then tests it
console.log(isNaN(NaN));   //* Output: true
console.log(isNaN("str")); //* Output: true

// NaN is unique
console.log(NaN === NaN) //* Output: false, NaN doesn't equal anything, including itself


// isFinite(value): converts argument to a number and returns tru of ot's a regular number
console.log(isFinite("15"));      //* Output: true
console.log(isFinite("str"));     //* Output: false, because of special value: NaN
console.log(isFinite(Infinity));  //* Output: false, because of special value: Infinity

// Using isFinite to validate if a string is a regular number
// let num = +prompt("Enter a number", '');
// console.log(isFinite(num));

//! An empty or space-only string is treated as 0 

/*
  Number.isNaN & Number.IsFinite checks if the argument belongs to the "number" type only
*/

// Number.isNaN(value): returns true of argument belongs to "number" type and is NaN, otherwise return false
console.log(Number.isNaN(NaN));        //* Output: true  
console.log(Number.isNaN("str" / 2));  ///* Output: true: "str" / 2 -> NaN / 2 -> NaN 

console.log(Number.isNaN("str")); //* Output: false, "str" belongs to the "string" type
console.log(isNaN("str")); //* Output: true, tries to convert "str" to a number but gets NaN 

// Number.isFinite(value): returns true of argument belongs to the number type and is not NaN/Inf/-InF, otherwise return false
console.log(Number.isFinite(123)); //* Output: true
console.log(Number.isFinite(Infinity)); //* Output: false
console.log(Number.isFinite(2 / 0)); //* Output: false

/*
  positive number / 0 -> Infinity
  negative number / 0 -> -Infinity
  0 / 0 -> NaN (Not a Number)
*/

// Comparison with Object.is
console.log(Object.is(NaN, NaN) === true); //* Output: true
console.log(Object.is(0, -0) === false)    //* Output: false
