/**
 * Factorial loop tanpa Recursive.
 */
function factorial(value) {
  let result = 1;
  for (let index = 1; index <= value; index++) {
    result *= index;
  }
  return result;
}

function showResult(value) {
  document.writeln(`<p>Factorial: ${value}</p>`);
  console.info(`Factorial: ${value}</p>`);
}

const result = factorial(6);
showResult(result);

/**
 * Factorial dengan Recursive.
 */
function factorialRecursive(value) {
  if (value === 1) {
    return 1;
  } else {
    return value * factorialRecursive(value - 1);
  }
}

const hasil = factorialRecursive(5);
showResult(hasil);
