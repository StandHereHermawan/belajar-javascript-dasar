/**
 * Operator OR
 */
console.info("Hello" || "");
console.info("" || []);
console.info("0, String" || "NOL"); // keduanya meski bernilai true alias truthy, tetapi nilai paling kiri diambil.
console.info(0 || "NOL, String");
console.info(null || "NULL, String.");
console.info(undefined || "UNDEFINED, String");
console.info("" || false); // keduanya meski bernilai false alias falsey, nilai paling kanan yang diambil.

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
console.info("HELLO" && "");
console.info("" && []);
console.info("0" && "NOL"); // Jika kedua nilai adalah truthy, Nilai paling kanan yang diambil.
console.info(0 && "NOL");
console.info(null && "NULL");
console.info(undefined && "UNDEFINED");
console.info("undefined" && "null");
