// Regular Equality Check
console.log(0 == false); //* true
console.log('' == false) //* true

const PI = 3.14;
console.log(PI == "3.14"); //* true

/* 
  Does a type conversion first before checking equality; '' is converted to 0.
  It doesn't care about data type, it only checks if the values are equal. 
*/


// Strict Equality Operator (===)
console.log(0 === false); //* false

/*
  The strict equality operator checks the equality without type conversion.
  It also checks if the value AND data type are equal.
*/


// Inequlity Operator (!=)
console.log(PI != "3.14"); //* false, checks if the values are different

// Strict Inequality Operator (!==) 
console.log(PI !== "3.14"); //* true, checks if the values AND data type are different

