/**
 * Anonymous Function di Variable.
 */
let say = function (name) {
    console.info(`Hello ${name}`);
    document.writeln(`<p>Hello ${name}!</p>`);
}

say("Arief");
say("Hilmi");

/**
 * Anonymous Function di parameter function.
 */
function giveMeNameArief(callback) {
    callback("Arief");
}

function giveMeNameHilmi(callback) {
    callback("Hilmi");
}

giveMeNameArief(say);

giveMeNameArief(function (name){
    console.info(`Hi ${name}!`);
    document.writeln(`<p>Hi ${name}!</p>`);
});

giveMeNameHilmi(function (name){
    console.info(`Hi ${name}!`);
    document.writeln(`<p>Hi ${name}!</p>`);
});