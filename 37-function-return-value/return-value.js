/**
 * Membuat function dengan return value.
 */
function sayHello(firstname, lastName) {
  const say = `Hello ${firstname} ${lastName}`;
  return say;
}

const result = sayHello("Arief", "Hermawan");
document.writeln(`<p>${result}</p>`);

/**
 * Function return value lebih dari satu.v
 */
function getFinalScore(value) {
  if (value >= 81) {
    return "A";
  } else if (value >= 61) {
    return "B";
  } else if (value >= 41) {
    return "C";
  } else if (value >= 21) {
    return "D";
  } else {
    return "E";
  }
}

const resultNumber = getFinalScore(61);
document.writeln(`<p>${resultNumber}</p>`);

/**
 * Menghentikan perulangan menggunakan return.
 */
function isContains(array, searchValue) {
  for (const element of array) {
    console.debug(`Iterasi elemen ${element}`);
    if (element === searchValue) {
      return true;
    }
  }
  return false;
}

console.info(isContains([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
