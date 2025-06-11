/*
  str.indexOf(substr, pos);
    -> looks for substr in str
    -> pos allows us to start searching from that position
*/
let str = 'Widget with id';

console.log(str.indexOf('Widget'));   //* Output: 0, found at beginning
console.log(str.indexOf('widget'));   //* Output: -1, doesn't exist

console.log(str.indexOf("id"));       //* Output 1, found "id" in Widget

// With pos
let str2 = "This is an identifier";

console.log(str.indexOf('id', 2));      //* Output: 12
console.log(str2.indexOf('nt', 2));     //* Output: 14

// Running indexOf in a loop: finding every occurrence 
str = 'As sly as a fox, as as strong as an ox';
let target = 'as';

let pos = 0;

while (true) {
  let foundPos = str.indexOf(target, pos); 
  if (foundPos == -1) break;

  console.log(`Found at ${foundPos}`);
  pos = foundPos + 1;
}

// Shorter Version:
pos = -1;
while((pos = str.indexOf(target, pos + 1)) != -1) {
  console.log(pos);
}

/*
  If the index of the target is 0, it will return 0, but it is considered false when using in an if statement.
*/

// So check for -1 instead
str = "Widget with id";

if (str.indexOf("Widget") != -1) {
  console.log("We found it!");
}

/*
  includes, startsWith, endsWith
    -> returns true / false depending on whether str contains substring
*/

// str.includes(substr, pos): perfect for matching, but don't need position
console.log("Widget with id".includes("Widget")); //* Output: true
console.log("Hello".includes("Bye")); //* Output: false

// With second argument
console.log("Widget".includes("id")) //* Output: true 
console.log("Widget".includes("id", 3)); //* Output: false


// str.startsWith, str.endsWith
console.log("Widget".startsWith("Wid")); //* Output: true
console.log("Widget".endsWith("get")); //* Output: true
