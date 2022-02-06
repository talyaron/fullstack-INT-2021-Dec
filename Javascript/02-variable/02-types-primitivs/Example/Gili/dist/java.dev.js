"use strict";

var a = 5;
console.log(a); //5

var b = 3;
console.log(b); //3

a = a * b;
console.log(a); //15

a = a - b;
console.log(a); //12

a = a * a + b;
console.log(a); //147

a = ++a + b;
console.log(a); //151

a = a / b;
console.log(a); //50.333

a = a * 2 * b;
console.log(a); //302

a = Math.pow(a, b);
console.log(a); //27543608

a = a / a; //1

console.log(a);
a = ++a; //2

console.log(a);
a = b + b; //6

console.log(a);