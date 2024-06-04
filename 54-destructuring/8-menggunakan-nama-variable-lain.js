/**
 * Menggunakan Nama Variable Lain di destructuring object.
 */
{
  const person = {};

  function showAddedPersonParameter(person) {
    const {
      firsName: namaDepan,
      middleName: namaTengah,
      lastName: namaBelakang,
    } = person;

    console.info(`    Nama variable lain`);
    console.info(
      `        firsName: namaDepan, middleName: namaTengah, lastName: namaBelakang.`
    );
    console.info(
      `        namaDepan: ${namaDepan}, namaTengah: ${namaTengah}, namaBelakang: ${namaBelakang}`
    );
  }

  function showAddedPersonParameterWithDefaultValue(person) {
    const {
      firsName: namaDepan = "Arief",
      middleName: namaTengah = "Karditya",
      lastName: namaBelakang = "Hermawan",
    } = person;

    console.info(`    Nama variable lain dan Default Value.`);
    console.info(
      `        firsName: namaDepan = "Arief", middleName: namaTengah = "Karditya", lastName: namaBelakang = "Hermawan".`
    );
    console.info(
      `        namaDepan: ${namaDepan}, namaTengah: ${namaTengah}, namaBelakang: ${namaBelakang}`
    );
  }

  console.info("Menggunakan Nama Variable Lain di destructuring object.");
  showAddedPersonParameter(person)
  showAddedPersonParameterWithDefaultValue(person);
}
