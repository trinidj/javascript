let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the preoperty is taken by the variable fruit
};

console.log(bag.apple);

/*

The default value is apple.

let bag = {
  apple: 5
};

It is the same as:

let fruit = prompt("Which fruit to buy?", "apple");
let bag = {};/*

The default value is apple.

let bag = {
  apple: 5
};

*/

bag[fruit] = 5;
/*

The default value is apple.

let bag = {
  apple: 5
};

*/

// More complex expressions
fruit = 'apple';
bag = {
  [fruit + 'Computers']: 5
};

console.log(bag.appleComputers);