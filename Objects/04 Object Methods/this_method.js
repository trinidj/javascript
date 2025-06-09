let user = {
  name: "John",
  age: 21,
  
  sayHi() {
    console.log(this.name);
  }
};

user.sayHi(); //* Output: John

/*
  It's also valid to do user.name, but if we copy user to another variable, then overwrite user, it will access the wrong object
*/

user = {
  name: "John",
  age: 21,

  sayHi() {
    console.log(user.name);
  }
};

let admin = user;
user = null;

admin.sayHi(); //* Output: TypeError: Cannot read properties of null (reading 'name')

/*
  Using this.name instead of user.name fixes the problem
*/