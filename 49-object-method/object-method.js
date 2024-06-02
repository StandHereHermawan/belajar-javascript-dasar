/**
 * Membuat object dengan method atau anonymous function.
 */
const arief = {
    name: "Arief Karditya",
    sayHello: function (name) {
        alert(`Hello ${name}! from Arief.`);
    }
};
arief.sayHello("Hilmi Akbar");

/**
 * Membuat object dengan method atau function biasa.
 */
function fatanSayHello(name) {
    alert(`Hello ${name}! From Fatan.`);
}

const fatan = {
    name: "Fatan Basyari",
    sayHello: fatanSayHello
}
fatan.sayHello("Erlang");

/**
 * Menambah method atau anonymous function ke object.
 */
const hilmi = {
    name: "Hilmi Akbar"
}

hilmi.sayHello = function (name) {
    alert(`Hello ${name}! from Hilmi.`);
};
hilmi.sayHello("Arief Karditya");

/**
 * menambah method atau function biasa ke object.
 */
function erlangSayHello(name) {
    alert(`Hello ${name}! From Erlang.`);
}

const erlang = {
    nama: "Erlang"
}

erlang.sayHello = erlangSayHello;
erlang.sayHello("Fatan");

