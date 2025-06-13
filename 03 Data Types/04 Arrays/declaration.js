let fruits = ["Apple", "Orange", "Plum"];

console.log(fruits[0]);   //* Output: Apple
console.log(fruits[1]);   //* Output: Orange 
console.log(fruits[2]);   //* Output: Plum

// Replacing an Element:
fruits[2] = "Pear"
console.log(fruits);   //* Output: ["Apple", "Orange", "Pear"]

// Length
console.log(fruits.length); //* Output: 3


// Storing elements of any type
let arr = [ "Apple", {name: "John"}, true, function() { console.log('Hello!'); } ];

console.log(arr[1].name);   //* Output: John
arr[3]();   //* Output: Hello!