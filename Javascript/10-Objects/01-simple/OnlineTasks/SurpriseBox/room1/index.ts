

interface surprise{
    prize:string,
    penalty:string,
}

const surprise1: surprise={
    prize: "baloon",
    penalty: "-5 NIS",
}

const surprise2: surprise={
    prize: "toy",
    penalty: "-10 NIS",
}

const surprises:Array <surprise>= [surprise1,surprise2]

function getSurprise (arrayOfSurprises:Array<surprise>){
const index= Math.floor(arrayOfSurprises.length*Math.random())
console.log(index)

const randomSur:number= Math.ceil(Math.random()*2)
console.log (randomSur)

console.log(arrayOfSurprises[index])
    if (randomSur===1){
        return (`you won ${surprise1.prize}`)
    }
    else{
        return (`you got a ${surprise1.penalty}`)
    }
}

getSurprise(surprises);






