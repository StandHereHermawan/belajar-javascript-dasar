const fullName = {
  firstName: "Arief",
  lastName: "Hermawan",
};

const result = "firstName" in fullName; // true
document.writeln(`<p>"firstName" in fullName: ${result}</p>`);

if ("firstName" in fullName) {
  alert(`Hello! ${fullName.firstName}`);
} else {
  alert(`Hello There!`);
}

/**
 * hanya untuk pengecekan suatu object apakah terdapat Suatu Property atau tidak.
 * tidak disarankan untuk pengecekan nilai dari property.
 */

const murid = {
  firstName: "Arief",
  middleName: undefined,
  lastName: "Hermawan",
};

if ("middleName" in murid) {
  alert(`Hello ${murid.middleName}`); // Hello undefined.
} else {
  alert("Hello! Student.");
}

const names = [null, "Karditya", null];
const resultNames = 0 in names;
document.writeln(`<p>const resultNames = 0 in names: ${resultNames}</p>`);
