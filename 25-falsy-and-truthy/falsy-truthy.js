/**
 * Data-data yang termasuk falsy.
*/

// 1. Undefined
let data;
data = undefined;
if (data) {
    document.writeln`<p>TRUTHY</p>`;
} else {
    document.writeln`<p>FALSEY / FALSY</p>`;
}

// 2. Angka 0 atau -0.
data = 0;
if (data) {
    document.writeln`<p>TRUTHY</p>`;
} else {
    document.writeln`<p>FALSEY / FALSY</p>`;
}

data = -0;
if (data) {
    document.writeln`<p>TRUTHY</p>`;
} else {
    document.writeln`<p>FALSEY / FALSY</p>`;
}

// 3. String tanpa huruf (karakter) atau number. ("",'',``)
data = "";
if (data) {
    document.writeln`<p>TRUTHY</p>`;
} else {
    document.writeln`<p>FALSEY / FALSY</p>`;
}

data = '';
if (data) {
    document.writeln`<p>TRUTHY</p>`;
} else {
    document.writeln`<p>FALSEY / FALSY</p>`;
}

data = ``;
if (data) {
    document.writeln`<p>TRUTHY</p>`;
} else {
    document.writeln`<p>FALSEY / FALSY</p>`;
}

// 4. null
data = null;
if (data) {
    document.writeln`<p>TRUTHY</p>`;
} else {
    document.writeln`<p>FALSEY / FALSY</p>`;
}

// 5. NaN
data = NaN;
if (data) {
    document.writeln`<p>TRUTHY</p>`;
} else {
    document.writeln`<p>FALSEY / FALSY</p>`;
}

/**
 * Selain dari diatas termasuk Truthy.
*/
data = "false";
if (data) {
    document.writeln`<p>TRUTHY</p>`;
} else {
    document.writeln`<p>FALSEY / FALSY</p>`;
}

data = -1;
if (data) {
    document.writeln`<p>TRUTHY</p>`;
} else {
    document.writeln`<p>FALSEY / FALSY</p>`;
}