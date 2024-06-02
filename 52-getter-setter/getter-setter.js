/**
 * Getter keyword.
 */
const hilmi = {
  firstName: "Hilmi Akbar",
  lastName: "Muharrom",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.info(hilmi.fullName);

function showFirstLastName(object) {
  console.table(object);
  console.info(object.firstName);
  console.info(object.lastName);
}

/**
 * Setter keyword.
 */
const arief = {
  firstName: "Arief Karditya",
  lastName: "Hermawan",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    console.info(`Ubah nilai fullName: ${value}`);
    const array = value.split(" ");
    this.firstName = array[0];
    this.lastName = array[1];
  }
};
arief.fullName = "Hilmi Akbar";
showFirstLastName(arief);

arief.fullName = "Fatan Basyari";
showFirstLastName(arief);

arief.fullName = "Bagus Arya";
showFirstLastName(arief);

arief.fullName = "Arief Karditya Hermawan";
showFirstLastName(arief);