let user = {
  name: "John",
  age: 21,
  isAdmin: true,
};

for (let key in user) {
  console.log(key);       //* Output: name, age, isAdmin
  console.log(user[key]); //* John, 21, true
}