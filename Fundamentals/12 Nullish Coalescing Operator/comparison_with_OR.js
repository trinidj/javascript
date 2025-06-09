let firstName = null;
let lastName = null;
let nickName = "Supercoder";

console.log(firstName || lastName || nickName || "Anonymous");

/*
  The OR operator works the same way as ?? 

  || returns the first truthy value
  ?? returns the first defined value
*/

let height = 0;

console.log(height || 100); //* Output: 100
console.log(height ?? 100); //* Output: 0