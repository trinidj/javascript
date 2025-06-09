// You have no restrictions when naming an object property
let obj = {
  for: 1,
  let: 2,
  return: 3,
};

console.log(obj.for + obj.let + obj.return); //* Output 6

// Conversion
obj = {
  0: "test" // 0 becomes a string "0" when used as a property key
};

console.log(obj["0"]);
console.log(obj[0]);