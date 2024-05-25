/**
 * Membuat object kosong.
 */
const orang = {};

/**
 * Manambah atau Mengubah property di object.
 */
orang["nama"] = "Arief Karditya Hermawan";
orang["negara"] = "Indonesia";
orang["umur"] = 30;

console.table(orang);

/**
 * Membuat object dengan properties.
 */
const hilmi = {
  nama: "Hilmi Akbar Muharrom",
  negara: "Indonesia",
  umur: 30,
};

console.table(hilmi);

/**
 * Mengakses property object.
 * Best Practice.
*/
console.info(`Nama: ${hilmi.nama}`);
console.info(`Negara: ${hilmi.negara}`);
console.info(`Umur: ${hilmi.umur}`);

/**
 * Cara lain mengakses field pada object.
*/
console.info(`Nama: ${orang["nama"]}`);
console.info(`Negara: ${orang["negara"]}`);
console.info(`Umur: ${orang["umur"]}`);

/**
 * Menghapus property di object.
 */
delete orang["umur"];

console.table(orang);