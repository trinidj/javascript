let user = {
  name: "John",
  age: 21,
};

let clone = {};

for (let key in user) {
  clone[key] = user[key];
}

clone.name = "Pete";

console.log(user.name);

// Object.assign
user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

Object.assign(user, permissions1, permissions2);

// user = { name: "John", canView: true, canEdit: true }
console.log(user.name);     //* Output: John
console.log(user.canView);  //* Output: true
console.log(user.canEdit);  //* Output: true


user = { name: "John" };

Object.assign(user, { name: "Pete" });

console.log(user.name);