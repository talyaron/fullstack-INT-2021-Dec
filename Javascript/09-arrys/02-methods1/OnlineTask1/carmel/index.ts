interface Prize{
    prizeType:string,
    prizePrice:number
}
const prizeOne
const prizeTwo


const possiblePrizes:Array<Prize> = {
    const prizeOne:Prize={
        prizeType:"Hot Air Ballon Ride",
        prizePrice:50
    },
    const prizeTwo:Prize={
        prizeType:"Dinner For Two",
        prizePrice:120
    },
    const prizeThree:Prize={
        prizeType:"Family Vacation",
        prizePrice:330
    }
        
}

function loto(arr:Array<any>){
    const num=(Math.random()*arr.length)
    const winOrLose=(Math.random()*1)
    if(winOrLose==1){
        return arr[num].prizeType
    }
    else{
        return arr[num].prizePrice
    }
}

const playerWin=loto(possiblePrizes)
console.log(playerWin)