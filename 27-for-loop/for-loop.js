/**
 * Jika Kondisi true alias terpenuhi, perulangan akan terus dilakukan.
 *
 * for (kondisi sebelum blok kode dieksekusi semua; kondisi; kondisi setelah blok kode dieksekusi semua) {
 *   // blok kode yang akan diulang.
 * }
 *  
 * Perulangan Tanpa Henti.
 *
 * <code>
 *
 * for (;;) {
 *   alert(`FOR LOOP`);
 * }
 *
 * </code>
 */

/**
 * Perulangan dengan kondisi.
 */
let counter = 1;
for (; counter <= 10; ) {
  document.writeln(`<p>Perulangan Ke-${counter}</p>`);
  counter++;
}

/**
 * Perulangan dengan init statement.
 */
for (counter = 1; counter <= 10; ) {
  document.writeln(`<p>Perulangan Ke-${counter}</p>`);
  counter++;
}

/**
 * Perulangan dengan post statement.
 */
for (counter = 1; counter <= 5; counter++) {
  document.writeln(`<p>Perulangan Ke-${counter}</p>`);
}
