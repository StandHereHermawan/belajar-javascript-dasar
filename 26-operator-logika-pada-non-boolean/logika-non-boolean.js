/**
 * Operator OR
 */
console.info("Hello" || ""); // "Hello" dipilih.
console.info("" || []); // [] dipilih.
console.info("0, String" || "NOL"); // "0, string" dipilih. kedua parameternya meski bernilai true alias truthy, tetapi nilai paling kiri diambil.
console.info(0 || "NOL, String"); // "NOL, String" dipilih.
console.info(null || "NULL, String."); // "NULL, String." dipilih.
console.info(undefined || "UNDEFINED, String"); // "UNDEFINED, String" dipilih.
console.info("" || false); // false dipilih. keduanya meski bernilai false alias falsey, nilai paling kanan yang diambil.

// use case operator logika non boolean dengan falsey atau truthy.
let person = {
  firstName: "Arief",
  lastName: "Hermawan",
};

let name = person.firstName || person.lastName;
console.info(name);

person = {
  firstName: "",
  lastName: "Hermawan",
};

name = person.firstName || person.lastName;
console.info(name);

/**
 * Operator AND
 */
console.info("HELLO" && ''); // '' dipilih.
console.info("" && []); // "" dipilih.
console.info("0" && "NOL"); // "NOL" dipilih. Jika kedua nilai adalah truthy, Nilai paling kanan yang diambil.
console.info(0 && "NOL"); // 0 dipilih.
console.info(null && "NULL"); // null dipilih.
console.info(undefined && "UNDEFINED"); // undefined dipilih.
console.info("undefined" && "null"); // "null" dipilih.
