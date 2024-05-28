/**
 * For In merupakan perulangan for yang digunakan untuk mengiterasi seluruh data property atau field di object atau index di array.
 *
 * For In di Object.
 */
const person = {
  firstName: "Arief Karditya",
  lastName: "Hermawan",
};

for (const property in person) {
  document.writeln(`<p>Property=${property} : ${person[property]}</p>`);
}

/**
 * For In di array.
 */
const nilai = [3, 3, 2, 4, 4, 3, 3, 3];

for (const index in nilai) {
  document.writeln(`<p>Index Ke-${index} : ${nilai[index]}</p>`);
}
