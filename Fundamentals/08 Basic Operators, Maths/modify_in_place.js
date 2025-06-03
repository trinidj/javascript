let n = 2;
n += 5; //* n = 7 (same as n = n + 5)
n *= 2; //* n = 14 (same as n = n * 2)
console.log(n);

// These operators have same precedence as a normal assignment
let m = 2;
m += 3 + 5 //* 3 + 5 is evaluated first -> n *= 8
console.log(m); //* 16