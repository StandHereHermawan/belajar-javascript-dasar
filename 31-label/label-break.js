/**
 * Penggunaan label pada break dan continue
 */
loopi: 
for (let i = 0; i < 100; i++) {
  let j;

  loopj: 
  for (j = 0; j < 100; j++) {
    if (j >= 10) {
      continue loopi;
    }

    if (i >= 5) {
      break loopj;
    }
    console.info(`Inner Perulangan i: ${i + 1}. - Perulangan j:${j + 1}`);
  }

  if (i >= 15) {
    break loopi;
  }
  console.info(`Outer Perulangan i: ${i + 1}. - Perulangan j:${j + 1}`);
}
