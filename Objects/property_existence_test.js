let user = {}

console.log(user.noSuchProperty === undefined);

// IN operator
user = { name: "John", age: 21 };

console.log("age" in user);     //* Output: true
console.log("height" in user);  //* Output: false

// If property exists, but stores undefined
let obj = {
  test: undefined,
};

console.log(obj.test);      //* undefined
console.log("test" in obj); //* Output: true, property exists