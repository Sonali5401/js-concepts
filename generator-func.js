function getNextValue() {
  return 10;
  return 20;
  return 30;
}

console.log(getNextValue()); // We will always get 10;

// In order to get each value from a function we can use generator function

/*
The function* declaration (function keyword followed by an asterisk) defines a generator function, which returns a Generator object.

Generators are functions that can be exited and later re-entered. Their context (variable bindings) will be saved across re-entrances.
*/

function* getNextValueGF() {
  yield 10;
  yield 20;
  yield 30;
}

console.log(getNextValueGF()); // Returns a Generator object
console.log(getNextValueGF().next()); //{ value: 10, done: false }

console.log(getNextValueGF().next().value); //10
console.log(getNextValueGF().next().value); //10
console.log(getNextValueGF().next().value); //10

const result = getNextValueGF();

console.log(result.next().value); //10
console.log(result.next().value); //20
console.log(result.next().value); //30
console.log(result.next().value); //undefined
