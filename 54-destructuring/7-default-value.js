/**
 * Default value destructuring array.
 */
{
  const names = ["Arief", "Karditya"];

  function consoleShowArray(array) {
    console.info(`    Default Array.`);
    console.info(
      `        array[0]: ${array[0]}, array[1]: ${array[1]}, array[2]: ${array[2]}`
    );
  }

  function consoleShowArrayDefaultValue(array) {
    // Default Value on Destructured Array.
    const [firstName, middleName, lastName = "Hermawan"] = array;

    console.info(`    Added default value array.`);
    console.info(
      `        const [firstName, middleName, lastName = "Hermawan"] = array;.`
    );
    console.info(
      `        firstName: ${firstName}, middleName: ${middleName}, lastName: ${lastName}`
    );
  }

  console.info(`Default value destructuring array.`);
  consoleShowArray(names);
  consoleShowArrayDefaultValue(names);
}

/**
 * Default value destructuring object.
 */
{
  const person = {
    firstName: "Hilmi",
    lastName: "Muharrom",
  };

  function showAddedPersonParameterWithDefaultValue(object) {
    const { firstName, middleName, lastName } = object;

    console.info(`    Default field value Person object.`);
    console.info(
      `        firstName: ${firstName}, middleName: ${middleName}, lastName: ${lastName}`
    );
  }

  // adding default value to undefined parameter.
  function showPersonAddedDefaultValue(object) {
    const { firstName, middleName = "Akbar", lastName } = object;

    console.info(`    Added default field value Person object.`);
    console.info(
      `        const { firstName, middleName = "Akbar", lastName } = object;.`
    );
    console.info(
      `        firstName: ${firstName}, middleName: ${middleName}, lastName: ${lastName}`
    );
  }

  console.info(`Default value destructuring object.`);
  showAddedPersonParameterWithDefaultValue(person);
  showPersonAddedDefaultValue(person);
}
