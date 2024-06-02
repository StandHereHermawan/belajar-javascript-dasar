/**
 * Arrow Function di Object Method.
 */
const arief = {
    name: "Arief Karditya Hermawan",
    sayHello: (name) => {
        console.info(`Hello ${name}`);
    }
};
arief.sayHello("Hilmi");

/**
 * this di Arrow Function Object
 */
const hilmi = {
    name: "Hilmi Akbar Muharrom",
    sayHello: (nameSayHello) => {
        console.info(this); // Window
        console.info(`Hello ${nameSayHello}! My name is ${this.name}`) // this.name tidak mengirim value property nama pada object hilmi.
    }
};

hilmi.sayHello("Arief Karditya"); // Hello Arief Karditya, My name is