/*
  The ? immediately stops the evaluation if the left part doesn't exist
*/

let user = null;
let x = 0;

user?.sayHi(x++); // there is no "user"

console.log(x);  //* Output: 0