interface Surprise{
    prize: string,
    penalty: any,
}

const FirstSurprise:Surprise ={
    prize: "Pen",
    penalty: "-1$",
}

const SecondSurprise:Surprise={
    prize: "Mug",
    penalty: "-5$"
}

const ThirdSurprise:Surprise={
    prize: "RayBan Sunglasess",
    penalty: "-200$",
}

const FourthSurprise:Surprise={
    prize: "Chanel Watch",
    penalty: "-500$",
}

const FivthSurprise:Surprise={
    prize: "Vications in the Bahamas",
    penalty: "-100,000$",
}

const SixthSurprise:Surprise={
    prize: "BMW 320i",
    penalty: "-500,000 $",
}

const SurpriseArray :Array<any>= [FirstSurprise,SecondSurprise,ThirdSurprise,FourthSurprise,FivthSurprise,SixthSurprise];

function RandomSurprise(arrayOfSurprise:Array<Surprise>,key:any){

    const SurpriseNum = Math.floor(Math.random() * arrayOfSurprise.length);
    console.log(SurpriseNum);
    }







