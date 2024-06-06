/**
 * Use strict Mode.
 */
function useStrictMode() {
  "use strict";
  const person = {
    firstName: "Hilmi",
    middleName: "Akbar",
  }; /*
    
    // error
    with (person) {
        console.info(firstName);
    }   */

  useStrictMode();
}
