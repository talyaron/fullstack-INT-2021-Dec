const compRandNumber = range(1, 100);
// console.log(compRandNumber);

let userInput = +prompt(`select a number between 1 and 100`);
Game(userInput, 10, compRandNumber);

function range(min:number , max:number):number{
    return Math.floor(Math.random() * (max - min) + min);
}

function Game(userInput:number, userGuess:number, compRandNumber:number){
    for(let i = 0; i < userGuess; i++){
        if(userInput === compRandNumber){
            console.log('You gussed it!');
            break;
        }
        else if( userInput > compRandNumber)
        {
            console.log('Try again, too high!')
            userInput = +prompt(`select a number between 1 and 100`);
        }
        else if( userInput < compRandNumber)
        {
            console.log('Try again, too low!')
            userInput = +prompt(`select a number between 1 and 100`);
        }
        console.log('You out of guess :(');
    }
}






