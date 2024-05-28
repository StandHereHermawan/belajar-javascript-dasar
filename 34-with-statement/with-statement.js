/**
 * Tanpa with statement.
 */
const person = {
  firstName: "Arief",
  middleName: "Karditya",
  lastName: "Hermawan",
};

console.log(person.firstName);
console.log(person.middleName);
console.log(person.lastName);

/**
 * Dengan with statement.
 */
const hilmi = {
  firstName: "Hilmi",
  middleName: "Akbar",
  lastName: "Muharrom",
};

with (hilmi) {
  console.log(firstName);
  console.log(middleName);
  console.log(lastName);
}

/**
 * Masalah dengan with statement.
 */

const firstName = "Fatan";
const lastName = "Basyari";

with (person) {
  console.log(firstName); 
  // harapannya mengakses variable bernilai "Fatan", tetapi masih mengakses variable firstName dari isi object person. 
  // jadi variable firstName = "Fatan"; tidak terakses
  console.log(middleName);
  console.log(lastName); 
  // harapannya mengakses variable bernilai "Basyari", tetapi masih mengakses variable lastName dari isi object person. 
  // jadi variable lastName = "Basyari"; tidak terakses.
}
/**
 * Dapat menimbulkan ambiguitas.
*/
