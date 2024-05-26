/**
 * Tipe data undefined.
 */
let name; // tipe data-nya adalah undefined.
if (name === undefined) {
  // alert("UNDEFINED");
  console.info("UNDEFINED");
} else {
  // alert("DEFINED");
  console.info("DEFINED");
}

/**
 * Undefined array value.
 */
const names = ["Arief", "Karditya", "Hermawan"];
if (names[3] === undefined) {
  // names[3] === undefined.
  // alert("Hello World!");
  console.info("ARRAY UNDEFINED");
} else {
  // alert(`Hello! ${names[3]}`);
  console.info("ARRAY DEFINED");
}

/**
 * Undefined object property.
 */
let person = {};
if (person.name === undefined) {
  // person.name === undefined.
  // alert("Hello World!");
  console.info("OBJECT UNDEFINED");
} else {
  // alert(`Hello! ${person.name}`);
  console.info("OBJECT DEFINED");
}

name = "Arief";

if (name === undefined) {
  console.info("UNDEFINED");
} else {
  console.info("DEFINED");
}

person = {
  name: `${name}`,
};

if (person.name === undefined) {
  // person.name === undefined.
  // alert("Hello World!");
  console.info("OBJECT UNDEFINED");
} else {
  // alert(`Hello! ${person.name}`);
  console.info(`OBJECT DEFINED, ${person.name}`);
}
