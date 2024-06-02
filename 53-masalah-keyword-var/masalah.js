/**
 * Menggunakan let.
 */
let iterasi = 20;

for (let iterasi = 0; iterasi < 10; iterasi++) {
    console.log(`Local : ${iterasi}`);
}

console.info(`Global : ${iterasi}`)

/**
 * Menggunakan var.
 */
var iteration = 20;

for (var iteration = 0; iteration < 10; iteration++) {
    console.log(`Local : ${iteration}`);
}

console.info(`Global : ${iteration}`)
