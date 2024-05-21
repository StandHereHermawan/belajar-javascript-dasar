/**
 * Arithmetics Ops.
*/
document.writeln("<p>Arithmetic Ops</p>");
let result = 1 + 2; // 3 lol.
document.writeln("<p> 1 + 2 = " + result + "</p>");
let anotherResult = result; // 3

result = result - 1;
document.writeln("<p>" + anotherResult + " - 1 = " + result + "</p>");
anotherResult = result; // 2

result = result * 2;
document.writeln("<p>" + anotherResult + " * 2 = " + result + "</p>");
anotherResult = result; // 4

/**
 * Augmented Operator.
*/
document.writeln("<p>Augmented Operator</p>");
let augResult = 10;
augResult += 2; // augResult = 12
document.writeln("<p> 10 + 2 = " + augResult + "</p>");
let augAnotherResult = augResult; // augAnotherResult = 12

augResult -= 2; // augResult = 10
document.writeln("<p> 10 - 2 = " + augResult + "</p>");
augAnotherResult = augResult; // augResult = 10
let augAnother10 = augResult; // augAnother10 = 10
let augAndAnother10 = augResult; // augAndAnother10 = 10

augResult *= 2; // augResult = 20
document.writeln("<p> 10 * 2 = " + augResult + "</p>");

augAnotherResult **= 2; // augAnotherResult = 100
document.writeln("<p> 10 ** 2 = " + augAnotherResult + "</p>");

augAnother10 /= 5; // augAnother10 = 2
document.writeln("<p> 10 / 5 = " + augAnother10 + "</p>");

augAndAnother10 %= 2;
document.writeln("<p> 10 % 2 = " + augAndAnother10 + "</p>");

/**
 * Unary Operators.
*/
let unaResult = +1; // unaResult = 1;
document.writeln("<p>" + unaResult + "</p>");

unaResult++;
document.writeln("<p>" + unaResult + "</p>");

unaResult--;
document.writeln("<p>" + unaResult + "</p>");

unaResult = -unaResult;
document.writeln("<p>" + unaResult + "</p>");