let user = {};

// console.log(user.address.street); //* Output: TypeError: Cannot read properties of undefined (reading 'street')

/*
  We want to avoid this error and have undefined or null
*/

console.log(user.address ? user.address.street : undefined); //* Output: undefined

console.log(user.address ? user.address.street ? user.address.street.name : null : null); //* Output: null

// Using && 
console.log(user.address && user.address.street && user.address.street.name ); //* Output: undefined

/*
  user.address appears 3 times in this line, that's why we use optional chaining (?)
*/

console.log( user?.address?.street); //* Output: undefined

/*
  In this case, the user object must exist, but the address is optional:
  
  user.address?.street

*/