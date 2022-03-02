interface Prize{
    prizeType:string
    prizePrice:number
}
const prizeOne:Prize={
    prizeType:"Hot Air Ballon Ride",
    prizePrice:50
}
const prizeTwo:Prize={
    prizeType:"Dinner For Two",
    prizePrice:120
}
const prizeThree:Prize={
        prizeType:"Family Vacation",
        prizePrice:330
}

const possiblePrizes:Array<Prize> =[prizeOne, prizeTwo, prizeThree]

function loto(arr:Array<any>){
    const num=(Math.random()*arr.length)
    const choosen=arr[num]
    const winOrLose=Math.floor((Math.random()*1))
    if(winOrLose==1){
        return choosen.prizeType
    }
    else{
        return choosen.prizePrice
    }
}

const playerWin=loto(possiblePrizes)
console.log(playerWin)