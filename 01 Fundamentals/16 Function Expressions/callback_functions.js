
// You can pass functions as parameters
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  console.log("You Agreed.");
}

function showCancel() {
  console.log("You canceled the execution");
}

ask("Do you agree?", showOk, showCancel);

// You can use function expressions to create a shorter function:
ask(
  "Do you agree?",
  function() {console.log("You agreed.")},
  function() {console.log("You canceled the execution.")}
);

/*
  These functions are declared inside ask(...). They are called Anonymous functions, as they can't be called outside of ask(...).
*/