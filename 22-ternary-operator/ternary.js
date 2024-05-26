/**
 * Tanpa Ternary operator
*/
const nilai = 75;
let ucapan;

if (nilai >= 75) {
    ucapan = "Selamat! anda lulus.";
} else {
    ucapan = "Silahkan coba lagi.";
}

document.writeln(`<p>${ucapan}</p>`);

/**
 * dengan ternary operator.
*/

const NilaiB = 60;
let ucapanSedih = NilaiB >= 75 ? "Selamat! anda lulus." : "Silahkan coba lagi.";
document.writeln(`<p>${ucapanSedih}</p>`);
