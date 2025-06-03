// let x = 1 && 2 ?? 3; //* Syntax Error

/*
  When using ?? with && or ||, precendece must be specified
*/

let x = (1 && 2) ?? 3;
console.log(x);