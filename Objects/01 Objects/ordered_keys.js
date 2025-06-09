let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  "1": "USA",
};

for (let code in codes) {
  // console.log(code);      //* Output: 1 41 44 49
  console.log(codes[code]);  //* Output: USA Switzerland Great Britain Germany
}

// Integer Properties
console.log(String(Math.trunc(Number("49"))));  //* Output: 49, integer property
console.log(String(Math.trunc(Number("+49")))); //* Output: 49, non-integer property
console.log(String(Math.trunc(Number("1.2")))); //* Output: 1,  non-integer property

/*
  49 is considered an integer property because when its converted to a number, its the same and back
*/

// If keys are non-integer, they are listed in creation order
let user = {
  name: "John",
  surname: "Smith",
};
user.age = 25;

for (let prop in user) {
  console.log(prop);
}

// Phone Codes
// Make the codes non-integer first, then adding + before each code
codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  "+1": "USA",
};

for (let code in codes) {
  console.log(+code);
}
