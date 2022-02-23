interface surprise{
    prize:string,
    penalty:number,
}

const prize1:surprise = {
    prize: "checkers",
    penalty:-15

}

const prize2:surprise = {
    prize: "chess",
    penalty:-25

}

const prize3:surprise = {
    prize: "lego",
    penalty:-150

}

const prize4:surprise = {
    prize: "ferrari",
    penalty:-1500

}

let prizes:Array<surprise> = [prize1,prize2,prize3,prize4]

function getSurprise(prizes:Array<surprise> ){
    const sur = Math.round(Math.random()*prizes.length)
    //console.log(sur)
    const rand=Math.round(Math.random())
    if (rand ===0){
        return  prizes[sur]['prize']
    }
    else {
        return  prizes[sur]['penalty']
    }
    
}

console.log(getSurprise(prizes));