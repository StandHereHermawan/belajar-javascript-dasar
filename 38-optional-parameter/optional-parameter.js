/**
 * Optional parameter
 */
function sayHello(firstName, middleName, lastName) {
  console.log(firstName);
  console.log(middleName);
  console.log(lastName);
}

sayHello(); // tidak error. Semuanya undefined.
sayHello("Arief"); // 2 Data lagi jadi undefined.
sayHello("Arief", "Karditya"); // 1 Data lagi jadi undefined.
sayHello("Arief", "Karditya", "Hermawan"); // semua data diterima.
sayHello("Arief", "Karditya", "Hermawan", "Oke"); // "Oke" tidak keluar karena parameter fungsi hanya menerima 3 data.
