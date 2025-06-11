// Memory Leak 1: Accidental Variables
function createLeak() {
  accidentalGlobal = "This creates an accidental globa";
}

// Memory Leak 2: Forgotten Event Listeners
function setupPage() {
  const button = document.getElementById('myButton');
  button.addEventListener('click', handleClick);
}

function handleClick() {
  // ...
}

setupPage();

// Memory Leak 3: Closures
function createHandler() {
  const massiveData = {
    largeArray: new Array(1000000).fill('data'),
    moreData: new Array(500000).fill('more data'),
    evenMoreData: { }
  };

  const smallValue = 42;

  return function() {
    console.log(smallValue);
  };
}

// Fix
function createHandler() {
  const massiveData = new Array(1000000).fill('data');
  const smallValue = 42;

  const result = smallValue;

  // Explicitly break the reference
  massiveData = null;

  return function() {
    console.log(result);
  };
}

// Memory Leak 4: Out of DOM References
let detachedElement;

function createDetachedNode() {
  const element = document.createElement('div');

  document.body.appendChild(element);
  detachedElement = element;

  document.body.removeChild(element);
}