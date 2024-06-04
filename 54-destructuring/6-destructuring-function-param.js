/**
 * Destructuring di function parameter object.
 */
{
  // Parameter Object non destructured
  function displayPersonObject(object) {
    console.info(`Object parameter function.`);
    console.info(
      `    firstName: ${object.firstName}, middleName: ${object.middleName}, lastName: ${object.lastName}`
    );
  }

  // Destructured Object parameter
  function displayPersonDestructured({ firstName, middleName, lastName }) {
    console.info(`Destructured parameter function.`);
    console.info(
      `    firstName: ${firstName}, middleName: ${middleName}, lastName: ${lastName}`
    );
  }

  const person = {
    firstName: "Hilmi",
    middleName: "Akbar",
    lastName: "Muharrom",
  };

  displayPersonDestructured(person);
  displayPersonObject(person);
}

/**
 * Destructuring di function parameter array.
 */
{
  // Parameter array non destructured.
  function sumArray(array) {
    return array[0] + array[1];
  }

  // Destructured Parameter Array.
  function sumDestructured([first, second]) {
    return first + second;
  }

  console.info(`Destructured array parameter function..`)
  console.info(`    (sumArray) Penjumlahan 10 + 10 = ${sumArray([10, 10])}`);
  console.info(`    (Destructured) Penjumlahan 10 + 20 = ${sumDestructured([10, 20])}`);
}
