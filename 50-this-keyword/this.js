/**
 * This di global scope.
 */
console.info(this); // Window.

/**
 * This di function.
 */
function testThis() {
  console.info(this); // Window.
}

testThis();

/**
 * This di inner function.
 */
function testThisDua() {
  console.info(this); // Window.

  function sample() {
    console.info(this); // Window.

    function sampleAgain() {
      console.info(this); // Window.
    }

    sampleAgain();
  }

  sample();
}

testThisDua();

/**
 * this di Object Method
 */
const hilmi = {
  name: "Hilmi Akbar Muharrom",
  sayHello: function (name) {
    console.info(this); // object dengan nama: hilmi
  }
}

hilmi.sayHello("Arief");

/**
 * this di Object Method
 */
const arief = {
  name: "Arief Karditya Hermawan",
  sayHello: function (name) {
    // this = arief
    console.info(`Hi ${name}! My this.name is ${this.name}`);
  },
};

arief.sayHello("Hilmi");
