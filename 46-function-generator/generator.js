/**
 * Function generator sederhana.
 */
function* createNames() {
  yield "Arief";
  yield "Karditya";
  yield "Hermawan";
}

function showNames(names) {
  document.writeln(`<p>`);
  for (const name of names) {
    console.log(name);
    document.writeln(`${name}`);
  }
  document.writeln(`</p>`);
}

function showAngkaGanjil(angkaGanjil) {
  for (const angka of angkaGanjil) {
    console.info(`Angka Ganjil: ${angka}`);
  }  
}

const names = createNames(); // Kayak Array, tapi bukan Array. masuk ke iterable, tapi gak bisa diakses per-nilai menggunakan index dan gak bisa dimodifikasi.
showNames(names);

/**
 * Function generator kompleks.
 */
function* buatGanjil(value) {
  for (let index = 1; index <= value; index++) {
    if (index % 2 === 1) {
      yield index;
    }
  }
}

const angkaGanjil = buatGanjil(100);
showAngkaGanjil(angkaGanjil);