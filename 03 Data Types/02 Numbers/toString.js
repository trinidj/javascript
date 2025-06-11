let num = 255;

// Decimal (10 is default)
console.log(num.toString(10)); //* Output: 255
console.log(num.toString());   //* Output: 255


// Binary (2)
console.log(num.toString(2));  //* Output: 11111111

let num2 = 10;
console.log(num2.toString(2)); //* Output: 1010


// Octal (8) 
console.log(num.toString(8));  //* Output: 377

num2 = 64;
console.log(num2.toString(8)); //* Output: 100


// Hexadecimal (16)
console.log(num.toString(16)); //* Output: ff

num2 = 3000;
console.log(num2.toString(16)); //* bb8


// Hexatrigesimal (36) or Full Alphanumeric
console.log((10).toString(36));     //* Output: a
console.log((35).toString(36));     //* Output: z
console.log((123456).toString(36))  //* Output: 2n9c