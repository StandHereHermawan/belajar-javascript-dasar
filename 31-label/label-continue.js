/**
 * Penggunaan label pada continue
*/
loopi:
for (let i = 0; i < 10; i++) {
    loopj:
    for (let j = 0; j < 100; j++) {
        if (j >= 10) {
            continue loopi;
        }
        console.info(`Perulangan i: ${i + 1}. - Perulangan j:${j + 1}`);
    }
}
