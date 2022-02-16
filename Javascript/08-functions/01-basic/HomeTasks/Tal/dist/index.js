// circumfence
// C=2πr
function circeleCircumfence(radius) {
    return 2 * Math.PI * radius;
}
// circle area
// A=πr^2
function ciricleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}
var ca = ciricleArea(5);
var cc = circeleCircumfence(5);
console.log(roundDigits(cc, 5));
function round(number, numberOfDigits) {
    var roundNumber = Math.floor(number);
    var temp = (number % 1) * Math.pow(10, numberOfDigits);
    var round2 = Math.round(temp);
    var round3 = round2 / Math.pow(10, numberOfDigits);
    //   number * Math.pow(10, numberOfDigits);
    return roundNumber + round3;
}
function roundDigits(number, numberOfDigits) {
    return Math.round(number * Math.pow(10, numberOfDigits)) / Math.pow(10, numberOfDigits);
}
console.log(ca, cc);
console.log(round(cc, 5));
