/**
 * Closure.
 */
function createAdder(value) {
  const owner = "Arief Krditya Hermawan";
  function add(param) {
    console.info(owner);
    return value + param;
  }
  return add;
}

const addTwo = createAdder(2);
const addTen = createAdder(10);

function showCreateAdder(functionAdder, valueFirst, valueSecond) {
  console.info(`firstValue: ${functionAdder(valueFirst)}`);
  console.info(`secondValue: ${functionAdder(valueSecond)}`);
}

showCreateAdder(addTwo, 10, 20);
showCreateAdder(addTen, 5, 7);
