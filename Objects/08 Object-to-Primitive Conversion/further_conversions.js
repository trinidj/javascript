let obj = {
  toString() {
    return "2";
  }
};

console.log(obj * 2); //* Output: 4

/*
  The object is converted to primitive "2", then * made it a number
*/

obj = {
  toString() {
    return "2";
  }
};

console.log(obj + 2) //* Output: "22"