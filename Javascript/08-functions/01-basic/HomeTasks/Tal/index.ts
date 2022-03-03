// circumfence
// C=2πr

function circeleCircumfence(radius: number): number {
  return 2 * Math.PI * radius;
}

// circle area
// A=πr^2

function ciricleArea(radius: number): number {
  return Math.PI * Math.pow(radius, 2);
}

const ca = ciricleArea(5);
const cc = circeleCircumfence(5);
console.log(roundDigits(cc, 5));





function round(number: number, numberOfDigits: number): number {
  const roundNumber = Math.floor(number);
  const temp = (number % 1) * Math.pow(10, numberOfDigits);
  const round2 = Math.round(temp);
  const round3 = round2 / Math.pow(10, numberOfDigits);

  //   number * Math.pow(10, numberOfDigits);
  return roundNumber + round3;
}

function roundDigits(number: number, numberOfDigits: number) {  
  
    return Math.round(number * Math.pow(10, numberOfDigits))/ Math.pow(10, numberOfDigits);
  
}

console.log(ca, cc);

console.log(round(cc, 5));

