/**
 * Operator Logika
 */
const nilaiUjian = 75;
const nilaiAbsensi = 75;

const lulusUjian = nilaiUjian >= 75;
const lulusAbsensi = nilaiAbsensi >= 75;

/**
 * Operator Logika Dan.
 */
const lulus = lulusAbsensi && lulusUjian;
document.writeln("<p>" + "Lulus Ujian dan lulus absensi? " + lulus + "</p>");

let lupa = true;

/**
 * Operator Logika Kebalikan.
 */
lupa = !lupa;
document.writeln("<p>" + "Apakah Saya Lupa? " + lupa + "</p>");

const minimumNilai = nilaiUjian >= 75;
const minimumHadir = nilaiAbsensi >= 75;

/**
 * Operator Logika Atau.
 */
const minimumLulus = minimumHadir || minimumNilai;
document.writeln(
  "<p>" +
    "Minimum lulus adalah nilai absensi " +
    nilaiAbsensi +
    " atau nilai ujian " +
    nilaiUjian +
    " sehingga apakah bisa lulus? " +
    minimumLulus +
    "</p>"
);
