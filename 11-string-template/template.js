const fullName = "Arief Karditya Hermawan";
const firstName = "Hilmi";
const middleName = "Akbar";
const lastName = "Muharrom";

/**
 * String template Using backtick. (backtick = ``)
 */
const template1 = `Name : ${fullName}`;
const template2 = `Nama : ${firstName} ${middleName} ${lastName}`;

console.info(template1);
console.info(template2);

const value = 80;

/**
 * Expression di string template.
 */
const template3 = `Name : ${fullName}, lulus: ${value > 75}`;

console.info(template3);

/**
 * String template pada function info.
 */
console.info(`Keterangan: ${template3}`);

/**
 * Multiline String menggunakan string template.
 */
const multiline = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Suscipit facilis, animi fugit atque consectetur praesentium 
    sunt veritatis alias dicta tempora dolor distinctio ratione. 
    Architecto necessitatibus iste incidunt magnam dolorum aliquam.`;

document.writeln("<pre>" + multiline + "</pre>");

/**
 * String template pada function writeln.
*/
document.writeln(`<pre> ${multiline} </pre>`);