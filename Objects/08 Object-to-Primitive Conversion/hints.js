// Three types of type conversion:

// "string"
console.log(obj);

anotherObj[obj] = 123;


// "number"
// explicit conversion
let num = Number(obj);

// maths (except binary plus)
let n = +obj;
let delta = date1 - date2;

// less/greater comparison
let greater = user1 > user2;


// "default"
// binary plus uses the "default" hint
let total = obj1 + obj2;

// obj == number uses the "default" hint
if (user == 1) {};