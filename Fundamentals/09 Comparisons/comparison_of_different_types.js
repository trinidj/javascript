console.log('2' > 1); //* true, '2' is converted to 2
console.log('01' == 1) //* true, '01' is converted to 1

console.log(true == 1); //* true
console.log(false == 0); //* true

// Special Case
let a = 0;
console.log(Boolean(a)); //* false

let b =  "0";
console.log(Boolean(b)); //* true

console.log(a == b); //* true

/* 
  This is the case because the Boolean() conversion has its own set of rules for conversion. 
  JavaScript converts "0" to a number (0), hence why a == b is true.
*/