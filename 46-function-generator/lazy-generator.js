/**
 * Lazy Generator
 * Bersifat Lazy. Jika data saat ini yang di-generate belum diambil dari function, maka data selanjutnya tidak akan diambil.
 */

// Lazy Function.
function* buatGanjilLazy(value) {
  for (let index = 1; index <= value; index++) {
    if (index % 2 === 1) {
      console.info(`Yield: ${index}`);
      yield index;
    }
  }
}

// Eager Function
function buatGanjilArrayEager(value) {
  const result = [];
  for (let index = 1; index <= value; index++) {
    if (index % 2 === 1) {
      console.info(`Yield: ${index}`);
      result.push(index);
    }
  }
  return result;
}

function showAngkaGanjil(angkaGanjil) {
  console.info(angkaGanjil.next().value);
  console.info(angkaGanjil.next().value);
  console.info(angkaGanjil.next().value);
}

function showSemuaAngka(numbers) {
  for (const number of numbers) {
    console.info(`Angka: ${number}`);
  }
}

const angkaGanjilLazy = buatGanjilLazy(100);
const angkaGanjilArrayEager = buatGanjilArrayEager(100);

// showSemuaAngka(angkaGanjilArrayEager);
// showAngkaGanjil(angkaGanjilLazy)
// showSemuaAngka(angkaGanjilLazy);
