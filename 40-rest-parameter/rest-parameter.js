/**
 * Rest Parameter.
 */
function sum(name, ...data) {
  let total = 0;
  for (const item of data) {
    total += item;
  }
  console.info(`Total ${name} is ${total}.`);
  document.writeln(`<p>Total ${name} is ${total}.</p>`);
}

sum("Orange", 2, 3, 4, 6, 7, 8);
sum("Apple", 5, 5, 6, 7, 5, 6);
sum("Banana", 9, 5, 2, 3, 4);

/**
 * Rest Parameter tanpa spread syntax menggunakan variable akan mengalami masalah.
 */
const value = [10, 20, 30, 40, 50, 60];
sum("test", value);
