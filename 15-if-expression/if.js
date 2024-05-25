const examValue = 90;

/**
 * If expression.
 */
if (examValue >= 80) {
  // akan dieksekusi jika kondisi bernilai true.
  document.writeln(`<p>Good Job</p>`);
}

const examTukangNunda = 60;

/**
 * If-Else expression.
 */
if (examTukangNunda > 80) {
  document.writeln(`<p>Good Job, anda lulus ujian.</p>`);
} else {
  // akan dieksekusi jika kondisi bernilai false.
  document.writeln(`<p>Ulang lagi tahun depan.</p>`);
}

const examHoki = 55;

/**
 * If-Else expression with Else-If.
 */
if (examHoki > 81) {
  document.writeln(`<p>Bagus, Nilai anda mendapat A.</p>`);
} else if (examHoki >= 61) {
  /**
   * akan dieksekusi jika kondisi ini true tetapi,
   * kondisi percabangan sebelum ini bernilai false.
   * blok percabangan else-if dibawah tidak akan dieksekusi
   * jika blok percabangan ini bernilai benar, meski kondisi
   * blok percabangan dibawah bernilai benar.
   * */
  document.writeln(`<p>Good Job, Nilai anda mendapat B.</p>`);
} else if (examHoki >= 41) {
  /**
   * akan dieksekusi jika kondisi ini true tetapi,
   * kondisi percabangan sebelum ini bernilai false.
   * */
  document.writeln(`<p>OK, Seenggaknya lulus.</p>`);
} else {
  document.writeln(`<p>Ngulang lagi tahun depan.</p>`);
}
