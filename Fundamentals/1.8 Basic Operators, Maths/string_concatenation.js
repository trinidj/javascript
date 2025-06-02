let s = "my" + "string";
console.log(s); //* Output: mystring

console.log('1' + 2); //* Output: "12"
console.log(2 + '1'); //* Output: "21"

console.log(2 + 2 + '1'); //* 2 + 2 = 4 -> 4 + '1' = "41"
console.log('1' + 2 + 2); //* '1' + 2 = "12" -> "12" + 2 = "122"concatenated to '1

//* Only + works with strings, other operators convert operands to numbers
console.log(6 - '2'); //* 4
console.log('6' / '2'); // 3

