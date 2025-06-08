function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman,
  }
}

let family = marry({
  name: "John"
}, {
  name: "Ann"
});

console.log(family.father);
console.log(family.mother.husband);

console.log(family.father.name);          //* Output: John
console.log(family.father.wife.name);     //* Output: Ann 
console.log(family.mother.husband.name);  //* Output: John

/*
  The function marry creates a circular reference structure:
  
  -> woman.husband = man, creating a reference from Ann to John
  -> man.wife = woman, creating a reference from John to Ann
  -> They both point to each other in a circle
  -> The returned object gives us access to both 
*/

delete family.father;
delete family.mother.husband;

/*
  If we delete these references, then John would have no incoming reference anymore
*/