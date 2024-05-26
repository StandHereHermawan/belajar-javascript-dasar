let data;

if (typeof data === "undefined") {
  alert("UNDEFINED");
} else if (typeof data === "number") {
  alert("NUMBER");
} else if (typeof data === "string") {
  alert("STRING");
} else if (typeof data === "boolean") {
  alert("BOOLEAN");
} else if (typeof data === "object") {
  alert("OBJECT");
}

let dataAngka = 100;
const tipeDataAngka = typeof dataAngka; // return string dengan data tipe datanya. dalam kasus ini tipe datanya "number".
document.writeln(`${tipeDataAngka}`);