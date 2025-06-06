function makeUser(name, age) {
  return {
    name,
    age,
  };
}

let user = makeUser("John", 21);
console.log(user.name); //* Output: John
console.log(user.age);  //* Output: 21

/*

Same as:

function makeUser(name, age) {
  return {
    name: name,
    age: age,
  };
}

*/