// Using ?.()
let userAdmin = {
  admin() {
    console.log("I am an Admin");
  }
};

let userGuest = {};

userAdmin.admin?.(); //* Output: A am an Admin
userGuest.admin?.(); 


// Using ?.[]
let key = "firstName";

let user1 = {
  firstName: "John",
};

let user2 = null;

console.log(user1?.[key]);  //* Output: John
console.log(user2?.[key]);  //* Output: undefined


// Using ?. with delete
delete user?.name;

//! You cannot use ?. for writing
let user = null;

user?.name = "John"; //* Output: SyntaxError: Invalid left-hand side in assignment

/*

  Summary:
  -> obj?.prop: returns obj.prop if obj exists, otherwise undefined
  -> obj?.[prop]: returns obj[prop] if obj exists, otherwise undefined
  -> obj.method?.(): calls obj.method() if obj.method exists, otherwise returns     undefined

*/