/**
 * break, kata kunci menghentikan seluruh perulangan.
 */
let counter = 1;
while (true) {
  document.writeln(`<p>Perulangan Ke-${counter}.</p>`);
  counter++;

  if (counter > 7) {
    break;
  }
}

/**
 * continue, kata kunci menghentikan suatu perulangan yang sedang berjalan, dilanjutkan ke perulangan selanjutnya.
 */
for (let i = 0; i < 100; i++) {
  if (i % 2 === 0) {
    continue;
  }
  document.writeln(`<p>Perulangan Ganjil: ${i}</p>`);
}
