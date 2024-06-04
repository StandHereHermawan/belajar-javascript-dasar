/**
 * Destructuring Array.
 */
{
  const names = ["Arief", "Karditya", "Hermawan", "Hilmi", "Akbar", "Muharrom"];
  const [firstName, middleName, lastName, ...other] = names;

  console.info(`Destructure Array: ${firstName} ${middleName} ${lastName}`);
}
