let str = `Hello`;

// First Character
console.log(str[0]);    //* Output: H
console.log(str.at(0)); //* Output: H

// Last Character
console.log(str[str.length - 1]); //* Output: o
console.log(str.at(-1));          //* Output: o

// Square brackets always return undefined for negative indexes
console.log(str[-2]);     //* Output: undefined
console.log(str.at(-2));  //* Output: l


// Iterating over characters using for...of
for (let char of "Hello") {
  console.log(char); 
}


