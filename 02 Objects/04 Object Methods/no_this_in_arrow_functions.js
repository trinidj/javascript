let user = {
  firstName: "John",
  sayHi() {
    let arrow = () => console.log(this.firstName);
    arrow();
  }
};

user.sayHi(); //* Output: John

/*
  The arrow function doesn't have its own this. It uses this of the outer function, so it can access the firstName property
*/