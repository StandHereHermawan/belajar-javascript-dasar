/**
 * Tanpa nullish coalescing operator.
 */
let parameter;

let data = parameter;
if (data === undefined || data === null) {
  data = "Nilai Default";
}

document.writeln(`<p>${data}</p>`);

/**
 * Dengan nullish coalescing operator.
 */
let parameter2;

let data2 = parameter2 ?? "Nilai default";
document.writeln(`<p>${data2}</p>`);

