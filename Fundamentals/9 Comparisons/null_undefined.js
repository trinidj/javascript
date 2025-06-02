// Strict Equality Check
console.log(null === undefined); //* false

// Non-Strict
console.log(null == undefined); //* true

/*
  When null / undefined are converted to numbers; null = 0, and undefined = NaN
*/


// Null vs 0
console.log(null > 0); //* false, null is converted to 0
console.log(null == 0); //* false 
console.log(null >= 0); //* true, null is converted to 0

/*
  When using the loose equality operator (==), it tries to coerce operands to the same data type.
  However, null is lossely equal to undefined. JavaScript does not convert null to 0 when using the == operator.
*/