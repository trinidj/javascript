/*
  Characters in a string cannot be changed
*/

let str = 'Hi';

str[0] = 'h';
console.log(str[0]); //* Output: H

// Workaround:
str = 'Hi';

str = 'h' + str[1]; // replace the string

console.log(str); //* Output: hi