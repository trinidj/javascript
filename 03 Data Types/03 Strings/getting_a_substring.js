/*
  3 Methods to get a substring:
    1. substring
    2. substr
    3. slice
*/

// str.slice(start [, end]): returns part of the string from start to (not including) end
let str = "stringify";
console.log(str.slice(0, 5)); //* Output: 'strin' substring from 0 to 5 (not including 5)
console.log(str.slice(0, 1)); //* Output: 's'

// Without second argument
console.log(str.slice(2)); //* Output: 'ringify', from the 2nd position till the end

// Negative values
console.log(str.slice(-4, -1)); //* Output: 'gif', starts at the 4th position from the right, end at the 1st from the right


/*
  str.substring(start, [, end]): returns the part of the string between start and end (not including end)
    -> allows start to be greater than end, it only swaps start and end values
*/

str = "stringify";

console.log(str.substring(2, 6)); //* Output: 'ring'
console.log(str.substring(6, 2)); //* Output: 'ring'

// Compared to slice
console.log(str.slice(2, 6)); //* Output: 'ring'
console.log(str.slice(6, 2)); //* Output: '' 


/*
  str.substr(start [, length]): returns part of the string from start, with give length
    -> allows us to specify the length instead of the ending position
*/

str = "stringify";

console.log(str.substr(2, 4)); //* Output: 'ring', start at 2nd position, get 4 characters

// Negative value
console.log(str.substr(-4, 2)); //* Output 'gi', from the 4th position, get 2 characters
