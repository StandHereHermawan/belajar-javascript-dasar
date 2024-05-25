/**
 * Membuat Array Kosong.
 */
let arrayKosong = [];

/**
 * Membuat array berisi tipe data string.
 */
let arrayString = ["Arief", "Karditya", "Hermawan"];

/**
 * Operasi didalam array.
 */

/**
 * Operasi Menambah data kedalam array.
 */
const names = [];
/**
 * Menggunakan function push();
 * Menambah data sebanyak 1.
 */
names.push("Arief");
/**
 * menambah data lebih dari 1.
 */
names.push("Karditya", "Hermawan");
names.push("Hilmi", "Akbar", "Muharrom");

/**
 * Menampilkan data dalam bentuk tabel
 * di console browser saat inspect element.
 */
console.table(names);
/**
 * .length berisi data berapa panjang array.
 */
console.info(`Panjang Array names adalah: ${names.length}`); // panjang array adalah 6.

/**
 * Operasi Mengubah 1 data dalam array.
 */
console.info(`data pada array[0] names sebelum dirubah: ${names[0]}`);
names[0] = "ARIEF";
console.info(`data pada array[0] names setelah dirubah: ${names[0]}`);
console.table(names);

/**
 * Menghapus suatu data pada index tertentu di array JavaScript.
 */
delete names[3]; // data dengan index ketiga pada array terhapus. namun panjang array tetap sama.
console.table(names);
console.info(`Panjang array names adalah: ${names.length}`); // panjang array adalah 6.

/**
 * Menambah data setelah menghapus data pada index 3.
 */
names.push("Programmer"); // data masuk di posisi terakhir.
console.table(names);
console.info(`Panjang array names adalah: ${names.length}`); // Panjang array menjadi 7.

/**
 * Menambah data pada index 3.
 */
names[3] = "Hilmi";
console.table(names);
console.info(`Panjang array names adalah: ${names.length}`); // Panjang array menjadi 7.

/**
 * Menambah data angka.
 */
names.push(1, 2, 3, 4, 5);
console.table(names);
console.info(`Panjang array names adalah: ${names.length}`); // Panjang array menjadi 12.

/**
 * Menambah array didalam array.
 */
names.push(["Arief", "Karditya", "Hermawan"], ["Hilmi", "Akbar", "Muharrom"]);
console.table(names);
console.info(`Panjang array names adalah: ${names.length}`); // Panjang array menjadi 14.

console.info(`panjang array names[12] adalah: ${names[12].length}`);
console.info(`panjang array names[13] adalah: ${names[13].length}`);
