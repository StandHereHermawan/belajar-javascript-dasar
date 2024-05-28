/**
 * Do while loop.
 */
let counter = 1;
do {
  document.writeln(`<p>Perulangan Ke-${counter}</p>`);
  counter++;
} while (counter <= 10);

/**
 * Meski parameter bernilai false, perulangan Do While akan dijalankan sekali saja.
*/
counter = 21;
do {
  document.writeln(`<p>Perulangan Ke-${counter}</p>`);
  counter++;
} while (counter <= 20);