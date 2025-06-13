let fruits = ["Apple", "Orange", "Plum"];

// Methods that work with the end of the array:

// pop(): extracts the last element
console.log(fruits.pop());  //* Remove "Plum" then print it
console.log(fruits);        //* Output: ["Apple", "Orange"]

// push(): append element to the end
fruits.push("Plum");
console.log(fruits); //* Output: ["Apple", "Orange", "Plum"]


// Methods that work with the beginning of the array

// shift(): extracts the first element
fruits = ["Apple", "Orange", "Plum"];

console.log(fruits.shift());
console.log(fruits);

// unshift(): add the element to the beginning of the array
fruits.unshift('Apple');

console.log(fruits);