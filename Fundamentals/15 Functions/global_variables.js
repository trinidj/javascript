let userName = 'John';

function showMessage() {
  userName = 'Bob';

  let message = 'Hello, ' + userName;
  console.log(message);
}

console.log(userName);
showMessage();
console.log(userName);