let sum = (a, b) => a +b;

/* Short form of:

let sum = function(a, b) {
  return a +b;  
}

*/

// One Argument
let double = n => n * 2;
console.log(double(3));

// No Arguments
let sayHi = () => console.loe("Hello");
sayHi();

// Being used the same as Function Expressions.
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => console.log('Hello!') :
  () => console.log("Greetings!");

welcome();