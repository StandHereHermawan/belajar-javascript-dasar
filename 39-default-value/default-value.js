/**
 * Default value pada parameter function.
 */
function register(name, gender = "UNKNOWN") {
  console.log(name);
  console.log(gender);
}

register();
register("Arief", "MALE");
register("Budi");
register("Putra", undefined);
register("Putra", null);
