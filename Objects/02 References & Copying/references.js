let user = {
  name: "John",
};

let admin = user;
console.log(user, admin);

/* 
  -> A variable assigned to an object doesn't store the object, but stores the address.
  -> When an object variable is coped, the address is copied but not the object iteself

  user -> obj <- admin
*/

admin.name = 'Pete';
console.log(user.name);

