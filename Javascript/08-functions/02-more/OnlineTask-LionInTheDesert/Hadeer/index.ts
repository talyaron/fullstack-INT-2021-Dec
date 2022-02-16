

const x= Math.floor(Math.random() * 1001);
console.log(x);

//debugger
for(let i = 1; i<6;i++){
//console.log(i);
let answer = +prompt('pick a number :');
//console.log(typeof answer)
console.log(answer);
   
if (answer==x){
    console.log(`YOU WON`)
    i==7
    alert(`YOU WON`)
}
else if (answer<x){
    console.log(`GO up`)
}
else if (answer>x){
    console.log(`GO DOWN`)
}
else if(i==5){
    alert(`YOU LOST`)
    i++;
}

}



