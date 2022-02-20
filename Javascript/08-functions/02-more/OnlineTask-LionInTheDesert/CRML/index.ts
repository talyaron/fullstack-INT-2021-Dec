function getRandomNumber(){
    return ((Math.random()*1000)+1)
}
let answer:number=getRandomNumber();
console.log(answer)
let userGuess:number= +prompt("guess a number from 1 to 1000, you have 7 tries")
for(let i=0; i<6; i++){
    if(userGuess==answer){
        i=6;
        alert("thats right!")
    }
    else{
        if(userGuess<answer){
            alert("ohh, wrong guess, try a bigger number")
            userGuess= +prompt("guess a number from 1 to 1000, you have "+(6-i)+" more tries")
            console.log("user guess number "+(1+i)+" is "+userGuess)
        }
        else{
            alert("ohh, wrong guess, try a smaller number")
            userGuess= +prompt("guess a number from 1 to 1000, you have "+(6-i)+" more tries")
            console.log("user guess number "+(1+i)+" is "+userGuess)
        }
    }
}
if (userGuess!=answer){
    alert("better luck next time, the number was "+ answer)
}
