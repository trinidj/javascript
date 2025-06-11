let single = 'single-quoted';
let double = "double-quoted";

let backticks = `backticks`;

// Backticks allows embedded expressions in the string
function sum(a, b) {
  return a + b;
}

console.log(`1 + 2 = ${sum(1, 2)}.`); //* Output: 3

// Backticks allow a string to span multiple lines
let guestList = `Guests:
  * John
  * Pete
  * Mary
`;

console.log(guestList); //* A list of guests, multiple lines