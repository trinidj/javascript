function sum(a, b) {
  return a + b;
}

let result = sum(1, 3);
console.log(result);


function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Do you have permission from your parents?');
  }
}

let age = prompt('How old are you?', 18);

if (checkAge(age)) {
  console.log('Access Granted');
} else {
  console.log('Access Denied');
}