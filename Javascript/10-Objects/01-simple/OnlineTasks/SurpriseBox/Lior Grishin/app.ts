interface Present{
    name:string
    penalty:number
}

const skateboard:Present = {
    name: 'skateboard',
    penalty: 250,
}

const computer:Present = {
    name: 'computer',
    penalty: 5000,
}

const iphone:Present = {
    name: 'iphone',
    penalty: 3500,
}

const ipad:Present = {
    name: 'ipad',
    penalty: 2000,
}

const prizes:Array<Present> = [iphone, computer, ipad, skateboard]

// This function returns a random number of the array by input of
//  1. Array of Presents
const getRandomNumber = (arr:Array<Present>):number => {
    return Math.floor(Math.random() * arr.length)
} 

// This function returns won the prize or penalty
// true = won prize
// false = penalty
const prizeWonORPenalty = ():boolean => {
    const result = Math.random()
    if(result < 0.5){
        return true;
    }
    else{
        return false;
    }
}

// This function prints if you won or penalty by input of
//  1. Array of Presents
function returnRandomPresent(arrayOfPresent:Array<Present>){
    // debugger;
    const randNumber = getRandomNumber(prizes)
    // console.log(randNumber)
    // console.log(arrayOfPresent[randNumber])
    if(prizeWonORPenalty()){
        console.log(`You won ${arrayOfPresent[randNumber].name}!`)
    }
    else{
        console.log(`You could won ${arrayOfPresent[randNumber].name}, but the chances was against you`)
        console.log(`You're penalty is ${arrayOfPresent[randNumber].penalty} NIS.`)
    }

}

returnRandomPresent(prizes)


