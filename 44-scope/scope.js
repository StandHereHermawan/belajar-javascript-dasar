/**
 * Kode: Global Scope Part Start.
 */
let counter = 0;

// Global Scope.
function hitMe() {
  /**
   * Local Scope hitMe Function.
   */
  counter++; // variable pada global scope bisa kita akses.
}

// Global Scope
function other() {
  // Local other() function scope.
}

hitMe();
hitMe();

console.info(`Counter: ${counter}`);
/**
 * Kode: Global Scope Part End.
 */



/**
 * Kode: Local scope Part Start.
 */
// Global Scope.
function first() {
  // Local scope of first() function.
  let firstVariable = "First";
  // console.info(secondVariable); can't access variable local function scope at second() function.
}

function second() {
  // Local scope of second() function.
  let secondVariable = "Second";
  // console.info(firstVariable); can't access variable local function scope at first() function.
}

first();
second();
// console.info(firstVariable); can't access variable local function scope at first() function.
// console.info(secondVariable); can't access variable local function scope at second() function.
/**
 * Kode: Local scope Part ends.
 */



/**
 * Kode: Nested Function Scope start.
 */
// Global Scope
function satu() {
  // Local scope from satu() Function.
  let varibelSatu = "First";

  function dua() {
    // Local scope from dua() Function.
    console.info(varibelSatu);
    // cause the function are inside local scope satu() function, all variables declared in local scope from satu() function can be accessed.
  }
  // Local scope from satu() Function.
  dua();
}

satu();
/**
 * Kode: Nested Function Scope ends.
 */
