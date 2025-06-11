// A lowercase letter is always greater than an uppercase letter
console.log('a' > 'Z'); //* Output: true

// Letters with diacritical marks are "out of order"
console.log('Österreich' > 'Zealand'); //* Output: true

/*
  This means the diacritical characters have unicode that don't align with their alphabetical position
    -> 'a' = 97, 'á' = 225 
*/


/*
  Strings in JavaScript are encoded using UTF-16
*/

// str.codePointAt(pos): returns a decimal number representing the code for the character position pos
console.log("Z".codePointAt(0)); //* Output: 90
console.log("z".codePointAt(0)); //* Output: 122

// String.fromCodePoint(code): creates a character by its numeric code
console.log(String.fromCodePoint(90));    //* Output: Z
console.log(String.fromCodePoint(0x5a));  //* Output: Z

// Characters with codes 65 -> 220
let str = '';

for (let i = 65; i <= 220; i++) {
  str += String.fromCodePoint(i);
}

console.log(str); //* Output: ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ

/*
  Capital letters go first, then a few special ones, then lowercase letters, then some diacritical letters near the end
*/


// The Correct Comparison: ECMA-402
console.log('Österreich'.localeCompare('Zealand')); //* Output: -1
