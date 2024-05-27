/**
 * Error mengakses property nullish.
 *
 * let person = {};
 *
 * const country = person.address.country;
 * document.writeln(`${country}`);
 *
 */

/**
 * Pengecekan menggunakan if.
 */
let person = {};

let country;
if (person.address !== undefined && person.address !== null) {
  country = person.address.country;
}

document.writeln(`SUKSES`);
document.writeln(`<p>${country}</p>`);
document.writeln(`SUKSES`);

/**
 * Pengecekan Menggunakan optional chaining.
 */
person = {
  address: {
    country: "Indonesia"
  },
};

country = person?.address?.country;
document.writeln(`<p>${country}</p>`);
