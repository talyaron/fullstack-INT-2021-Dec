
//*******************************************EX-1********************************************//
//*************************************INSTRUCTIONS******************************************//
// 1. Run the function printFriends(friendsArr)                                              //
//*******************************************************************************************//
//*******************************************EX-1********************************************//

const friendsArr:Array<string> = ['Daniel', 'Roie', 'Michael', 'David', 'Maor', 'Eyal', 'Ran']
const printFriends = (arr:Array<string>) => {
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

//*******************************************EX-2********************************************//
//*************************************INSTRUCTIONS******************************************//
// 1. Run the function greetFriends(friendsArr)                                              //
//*******************************************************************************************//
//*******************************************EX-2********************************************//

const greetFriends = (arr:Array<string>) => {
    for(let i = 0; i < arr.length; i++)
    {
        console.log(`Welcome ${arr[i]}`);
    }
}

//*******************************************EX-3********************************************//
//*************************************INSTRUCTIONS******************************************//
// 1. Run runEx3(arrMaxNumber, arrLength). Ex: runEx3(10,10)                                 //
//*******************************************************************************************//
//*******************************************EX-3********************************************//

const createRandomNumberArray = (maxNumber:number, numberArrayLengh:number):Array<number> => {
    let numberArray = []
    for(let i = 0; i < numberArrayLengh; i ++){
        const newRandNumber = Math.floor(Math.random() * maxNumber + 1)
        numberArray[i] = newRandNumber;
    }
    console.log(`Original Array: ${numberArray}`)
    return numberArray
}

const isBiggerThanFive = (arr:Array<number>):Array<number> => {
    let biggerThanFiveArr:Array<number> = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 5){
            biggerThanFiveArr.push(arr[i]) 
        }
    }
    return (biggerThanFiveArr)
} 

const printArr = (arr:Array<number>) => {
    for(let i = 0; i < arr.length; i++){
        console.log(`Number ${arr[i]} is bigger than 5.`)
    }
}

const runEx3 = (arrMaxNumber:number ,arrLength:number) => {
    const randomNumberArray = createRandomNumberArray(arrMaxNumber,arrLength)
    const newArrayBiggerThanFive = isBiggerThanFive(randomNumberArray)
    printArr(newArrayBiggerThanFive)
}

//*******************************************EX-4********************************************//
//*************************************INSTRUCTIONS******************************************//
// 1. Run runEx4(maxNumber). Ex: runEx4(150)                                                 //
//*******************************************************************************************//
//*******************************************EX-4********************************************//

const createRandomNumber = (max:number):number => {
    return Math.floor(Math.random() * max + 1);
}

const sumAverage = (num1:number, num2:number):number => {
    return (num1 + num2) / 2
}

const arrTypes:Array<any> = ['string', 5, true, 'Hello', sumAverage, 15*2, friendsArr]

const typeOfArr = (arr:Array<any>, maxNumber:number) => {
    for (let i of arr){
        if(typeof(i) === 'function')
        {
            console.log(`Found a function inside an array`)
            let x = sumAverage(createRandomNumber(maxNumber) , createRandomNumber(maxNumber)) 
            console.log(`A function that sum 2 random numbers by your input max number`)
            return x
        }
    }
}

const runEx4 = (maxNumber:number) => {
    const startFunctionFromArray = typeOfArr(arrTypes,maxNumber)
    console.log(`The avrage is: ${startFunctionFromArray}`)
}

//*******************************************EX-5********************************************//
//*************************************INSTRUCTIONS******************************************//
// 1. Run runEx5(maxNumberInArray, arrayLengh). Ex: runEx5(100 , 10)                         //
//*******************************************************************************************//
//*******************************************EX-4********************************************//

const arrAverage = (arr:Array<number>):number => {
    let sum:number = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return (sum / arr.length) 
}

const runEx5 = (maxNumberInArray:number, arrayLengh:number) => {
    const arr = arrAverage(createRandomNumberArray(maxNumberInArray, arrayLengh))
    console.log(`The average of the array is: ${arr}`)
}