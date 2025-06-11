// Create new Accumulator
function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt('How much to add?', 0);
  };
}

let accumulator = new Accumulator(0);

accumulator.read();
accumulator.read();

console.log(accumulator.value);
