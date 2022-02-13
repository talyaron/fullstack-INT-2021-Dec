console.log('hi')

// מחשבון שאתה מכניס גבר או אישה, ומחשב לך את אחוז החיים לפי תוחלת החיים

function ageCalc(sex: string, age: number, firstName: string) {
    if (sex == 'male') {
        let maxLife = 81
        let precent = age / maxLife * 100
        console.log(`Hello ${firstName}, you are a ${sex}. your age is ${age} and you have completed ${precent} of life.` )
    }
    else if (sex == 'female') {
        let maxLife = 84.5
        let precent = age / maxLife * 100
        console.log(`Hello ${firstName}, you are a ${sex}. your age is ${age} and you have completed ${precent} of life.` )
    }
    else  {
        alert(`Wrong information! ${sex} is not an approved gender`)
    }
}

const male1 = ageCalc('male', 26, 'hanan')

const female1 = ageCalc('female', 27, 'gili')

const wrong = ageCalc('dont know', 27, 'gili')


