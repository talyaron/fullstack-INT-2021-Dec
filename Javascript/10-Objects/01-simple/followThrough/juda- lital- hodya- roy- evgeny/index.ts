
interface Suprise{
    good:string
    bad:string
   
}
 const suprise1:Suprise={
     good: "baloon",
     bad:  "shabath",
 }
 
 const suprise2:Suprise={
    good: "candy",
    bad:  "fine",
}
const suprise3:Suprise={
    good: "ball",
    bad:  "flat tire",
}

const suprise4:Suprise={
    good: "banana",
    bad:  "broken heart",
}
let prizes:Array<Suprise>= [suprise1, suprise2, suprise3, suprise4 ];

function SupriseBox(prizes:Array<Suprise>):any{
   let randomprize= prizes[Math.floor(Math.random()*prizes.length)] 
    let random= Math.round(Math.random()*2)
    if(random===1){
       return randomprize.good
       
    }
    else if(random===2){
        return randomprize.bad
    }
  
}

SupriseBox(prizes)
console.log(SupriseBox(prizes));