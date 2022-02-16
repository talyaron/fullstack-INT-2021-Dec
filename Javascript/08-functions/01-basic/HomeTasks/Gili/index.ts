console.log('hi')

// First Exercise - The Fortune Teller

function tellFortune(children: number, partnerName: string, where: string, job: string) {
    console.log(`You will be a ${job} in ${where}, and married to ${partnerName} with ${children} kids.`)
}

const try1 = tellFortune(4, "Sami", "Ashdod", "Doctor")
const try2 = tellFortune(2, "Benji", "Ashdod", "Fullstack Developer")
const try3 = tellFortune(4, "Yoav", "Ashdod", "Firefighter")

// Second Exercise - The Puppy Age Calculator

function calculateDogAge(pupAge:number) {
    const dogYears = pupAge*7 
    console.log(`Your doggie is ${dogYears} years old in dog years!`)
}

const dog1 = calculateDogAge(4)
const dog2 = calculateDogAge(7)
const dog3 = calculateDogAge(18)

// Third Exercise - The Lifetime Supply Calculator

function calculateSupply(ageOfPerson:number, amountPerDay:number) 
{
    const maxAge = 100;
    const total = (amountPerDay*365) * (maxAge-ageOfPerson);
    const message = `You will need ${total} cinnamon Buns to last you until the ripe old age of ${maxAge}`
    console.log(message);
  }
  
  calculateSupply(5, 6);
  calculateSupply(4, 7);
  calculateSupply(40, 90);

  // Fourth Exercise - The Geometrizer

  function calcCircumfrence(radius:number)
  {
      const circum = Math.PI*radius*2
      console.log(`The circumference is ${circum} cm`)
  }

  function calcArea (radius:number)
  {
      const area = Math.PI*Math.pow(radius,2)
      console.log(area)
  }

  const circum1 = calcCircumfrence(3)
  const area1 = calcArea(3)

// Fifth Exercise - The Temperature Converter

function celsiusToFahrenheit(degressCel:number)
{
    const tempFer = (degressCel/5*9) + 32
    console.log(`${degressCel}°C is ${tempFer}°F`)
}

function fahrenheitToCelsius(degressFer:number)
{
    const tempCel = (degressFer-32)*5/9
    console.log(`${degressFer}°F is ${tempCel}°C`)
}

const tempcalc1 = celsiusToFahrenheit(15)
const tempcalc2 = fahrenheitToCelsius(32)

