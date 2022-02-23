interface Surprise {
    prize: string,
    penalty: any,
}

const FirstSurprise: Surprise = {
    prize: "Pen",
    penalty: "-1$",
}

const SecondSurprise: Surprise = {
    prize: "Mug",
    penalty: "-5$"
}

const ThirdSurprise: Surprise = {
    prize: "RayBan Sunglasess",
    penalty: "-200$",
}

const FourthSurprise: Surprise = {
    prize: "Chanel Watch",
    penalty: "-500$",
}

const FivthSurprise: Surprise = {
    prize: "Vications in the Bahamas",
    penalty: "-100,000$",
}

const SixthSurprise: Surprise = {
    prize: "BMW 320i",
    penalty: "-500,000 $",
}

const SurpriseArray: Array<any> = [FirstSurprise, SecondSurprise, ThirdSurprise, FourthSurprise, FivthSurprise, SixthSurprise];

function RandomSurprise(arrayOfSurprise: Array<Surprise>) {

    const SurpriseNum = Math.floor(Math.random() * arrayOfSurprise.length);
    return (SurpriseNum);
}

function prizeOrPenalty(arrayOfSurprise:Array<Surprise>, key1:string, key2:string, SurpriseNum:number) {

    const penaltyOrPrize = (Math.floor(Math.random() * 2))+1;

    if (penaltyOrPrize == 1) {
        const result = arrayOfSurprise[SurpriseNum][key1]
        alert(`Your surprise is: ${result}`)

        return result
    }
    else if (penaltyOrPrize == 2) {
        const result = arrayOfSurprise[SurpriseNum][key2]
        alert(`You owe us: ${result}`)
        return result
    }

}

const randomNumber = RandomSurprise(SurpriseArray)
const whatIsYourSurprise = prizeOrPenalty(SurpriseArray, "prize", "penalty", randomNumber)
console.log(whatIsYourSurprise)





