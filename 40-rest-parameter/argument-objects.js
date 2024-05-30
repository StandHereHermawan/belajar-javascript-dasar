/**
 * Argument objects
 */
function oldSum() {
  let total = 0;
  for (const item of arguments) {
    total += item;
  }
  console.info(`Total is ${total}.`);
  document.writeln(`<p>Total is ${total}.</p>`);
}

oldSum(1, 2, 3, 4, 5, 6, 7, 8);

function oldSumArg() {
  console.info(arguments);
}

oldSumArg(1, 2, 3, 4, 5, 6, 7, 8);
