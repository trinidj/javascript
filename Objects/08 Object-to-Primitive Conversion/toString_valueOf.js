let user = { name: "John" };

// alert(user); //* Output: [object Object]]
console.log(user.valueOf() === user); //* Output: true

user = {
  name: "John",
  money: 1000,

  // for hint="string"
  toString() {
    return `{name: "${this.name}"}`;
  },

  // for hint="number" or "default"
  valueOf() {
    return this.money;
  }
};

console.log(user);        //* Output: { name: 'John', money: 1000, toString: [Function: toString], valueOf: [Function: valueOf }
console.log(+user);       //* Output: 1000
console.log(user + 500);  //* Output: 1500

