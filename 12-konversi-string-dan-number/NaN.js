/**
 * NaN (Not a Number)adalah tipe data di JavaScript
 * yang menunjukkan data yang bukan angka.
 *
 * fungsi parseInt memberi tolerir meski huruf tetapi ada angka,
 * tipe datanya otomatis dikonversi jadi Number.
 *
 * meski begitu, perlu diingat bahwa meski data berisi huruf dan angka,
 * agar tipe data dikonversi menjadi number, angka harus terletak paling kiri.
 * begitu pula parseFloat.
 */
document.writeln(`<p>${parseInt("salah")}</p>`); // Tipe Datanya NaN.
document.writeln(`<p>${parseInt("1salah")}</p>`); // Tipe Datanya Number. isinya = 1.
document.writeln(`<p>${parseInt("salah2")}</p>`); // Tipe Datanya NaN.
document.writeln(`<p>${parseInt("salah3salah")}</p>`); // Tipe Datanya NaN.
document.writeln(`<p>${parseInt("4salah3salah")}</p>`); // Tipe Datanya Number. isinya 4.

/**
 * parseFloat
 */
document.writeln(`<p>${parseFloat("1.1benar")}</p>`); // Tipe Datanya Float. hasilnya 1.1
document.writeln(`<p>${parseFloat("benar2.2")}</p>`); // Tipe Datanya NaN.
document.writeln(`<p>${parseFloat("benar2.2benar")}</p>`); // Tipe Datanya NaN.

/**
 * function Number() jika string didalamnya terdapat angka,
 * maka fungsi akan secara  otomatis konversi tipe datanya
 * menjadi NaN.
 *
 * jika tidak, maka akan dikonversi tipe datanya menjadi
 * number.
 */
document.writeln(`<p>${Number("1Benar")}</p>`);
document.writeln(`<p>${Number("1Benar1")}</p>`);
document.writeln(`<p>${Number("Benar1")}</p>`);
document.writeln(`<p>${Number("1")}</p>`);

/**
 * Operasi Pada NaN.
 */
const first = Number("Salah");
const number = 100;
const totalNumber = first + number;
document.writeln(`<p>${totalNumber}</p>`); // Hasil-nya NaN.

/**
 * fungsi cek tipe data pakah nan atau bukan.
 */
document.writeln(`isNan(first) = ${isNaN(first)}<br>`);
document.writeln(`isNan(number) = ${isNaN(number)}<br>`);
document.writeln(`isNan(NaN) = ${isNaN(NaN)}`);
