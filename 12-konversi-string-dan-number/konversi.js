/**
 * Masalah tanpa Konversi Tipe Data.
 */
const value1 = "1";
const value2 = 1;
const sum = value1 + value2;
document.writeln(`"1" + 1 = ${sum}`); // sum = 11, salah secara semantik. tipe datanya bukan number, tipe datanya string.

/**
 * Konversi tipe data dari string ke number.
 */
const valueA = parseInt("1");
const valueB = 1;
const sumA = valueA + valueB;
document.writeln(`<p>parseInt("1") + 1 = ${sumA}</p>`);

/**
 * Konversi tipe data dari string ke number.
 * meski isi string adalah float,
 * jika menggunakan parseInt akan menjadi number, bukan float.
 */
const value3 = parseInt("1.1"); // nilainya menjadi 1.
const value4 = 1;
const sumB = value3 + value4;
document.writeln(`<p>parseInt("1") + 1 = ${sumA}</p>`); // tipe datanya number,

/**
 * Konversi tipe data dari string ke float.
 */
const nilai1 = parseFloat("3.14159");
const nilai2 = 1;
const jumlah1 = nilai1 + nilai2;
document.writeln(`<p>parseFloat("3.14159") + 1 = ${jumlah1}</p>`); // tipe datanya float.

/**
 * Konversi tipe data dari string ke tipe data bisa float bisa number,
 * tergantung dari data stringnya bisa menggunakan function Number.
 */
const angka = Number("1.48");
document.writeln(`<p>Number("${angka}") = ${angka}</p>`);
const angkaA = Number("170");
document.writeln(`<p>Number("${angkaA}") = ${angkaA}</p>`);

/**
 * Konversi Tipe Data dari number ke string menggunakan .toString
 */
const nomor1 = 1;
const nomor2 = 1;
const total = nomor1.toString() + nomor2.toString();
document.writeln(`<p>nomor1 = 1; <br> nomor2 = 1;</p>`);
document.writeln(`<p>nomor1.toString() + nomor2.toString() = ${total} ("${total}").</p>`)

