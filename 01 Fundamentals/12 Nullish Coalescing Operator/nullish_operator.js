let user;
console.log(user ?? "Anonymous");

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// Shows first defined value: nickName
console.log(firstName ?? lastName ?? nickName ?? "Anonymous");

