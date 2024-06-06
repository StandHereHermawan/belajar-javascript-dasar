/**
 * Debugger
 */
function showFullName(object) {
    console.info(`${object}`);
}

function createFullName(firstName, middleName, lastName) {
  debugger;  
  const fullName = `${firstName} ${middleName} ${lastName}`;
  return fullName;
}  

const fullName = createFullName("Hilmi", "Akbar", "Muharrom");
showFullName(fullName);

function showSum(total) {
    console.info(`Total penjumlahan: ${total}`);
}

function sum(...numbers) {
    let total = 0;
    for (const number of numbers) {
        total += number;
    }
    return total;
}

showSum(sum(1,1,1,1,1));