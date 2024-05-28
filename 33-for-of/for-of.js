/**
 * For of di array.
 */
const nama = ["Arief", "Karditya", "Hermawan"];

for (const kata of nama) {
  document.writeln(`<p>${kata}</p>`);
}

/**
 * For of di string.
 */
const nameArief = "Arief Karditya Hermawan";
for (const character of nameArief) {
  document.writeln(`<p>${character}</p>`);
}

/**
 * Kode dari baris 22 sampe 28 akan error apabila dieksekusi.
 * karena object bukan yang termasuk iterable.
 * 
*/ /*
const person = {
    firstName: "Arief",
    lastName: "Hermawan"
};
for (const property of person) {
  document.writeln(`<p>${property}</p>`);
}
*/