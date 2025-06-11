console.log(parseInt('100px'));     //* Output: 100
console.log(parseFloat('12.5em'));  //* Output: 12.5

console.log(parseInt('12.3'));      //* Output: 12, only integer is returned
console.log(parseFloat('12.3.4'));  //* Output: 12.3

// Returning NaN
console.log(parseInt('a123')); //* Output: NaN, the first symbol stops the process

// parseInt(str, radix): radix specifies the base of the numeral 
console.log(parseInt('0xff', 16)); //* Output: 255
console.log(parseInt('ff', 16));   //* Output: 255
console.log(parseInt('2n9c', 36)); //* Output: 123456