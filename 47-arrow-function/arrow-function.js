/**
 * Membuat arrow function.
 */
const sayHello = (names) => {
  const say = `Hello ${names}`;
  console.info(say);
};
sayHello("Arief");

/**
 * Membuat arrow function dengan parameter lebih dari satu.
 */
const sayHelloFullName = (firstName, lastName) => {
  const say = `Hello ${firstName} ${lastName}`;
  console.info(say);
};
sayHelloFullName("Hilmi Akbar", "Muharrom");

/**
 * Membuat arrow function Tanpa Block.
 */
const sayHelloNoBlock = (names) => console.info(`Hello ${names}`);
sayHelloNoBlock("Hilmi");

/**
 * Membuat arrow function Tanpa Block dengan parameter lebih dari satu.
 */
const sayHelloNoBlockFullName = (firstName, lastName) => console.info(`Hello ${firstName} ${lastName}`);
sayHelloNoBlockFullName("Arief Karditya", "Hermawan");

/**
 * Membuat arrow function return value;
 */
const sum = (first, second) => first + second;
console.info(`Penjumlahan 10 + 20 = ${sum(10, 20)}`);

/**
 * Membuat arrow function Tanpa Kurung Parameter.
 */
const sayHelloNoParenthesisParameter = names => console.info(`Hello ${names}`);
sayHelloNoParenthesisParameter("Hilmi");

/**
 * Arrow function sebagai parameter.
 */
function giveMeHilmi(callback) {
  callback("Hilmi Akbar Muharrom.");
}
// Arrow function sebagai parameter.
giveMeHilmi((names) => console.info(`Hello ${names}`));

// Anonymous function sebagai parameter.
giveMeHilmi(function (names) {
  console.info(`Hello ${names}`);
});