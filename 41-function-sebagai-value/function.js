/**
 * Function di variable.
 */
function sayHello(name) {
  console.info(`Hallo ${name}`);
  document.writeln(`<p>Hello ${name}</p>`);
}

sayHello("Arief");

const say = sayHello;
say("Hilmi");

/**
 * Function di parameter.
*/
function giveMeName(callback) {
  callback("Fatan"); // sayHello("Fatan");
}

giveMeName(sayHello);
giveMeName(say);
