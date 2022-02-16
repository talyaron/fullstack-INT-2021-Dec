
function LionInTheDesert(){

    var random:number = Math.round(Math.random()*50)
    
    console.log(`The Random IS: ${random}`); 
    
    for(let i=0; i<=5; i++){
        let answer  = +prompt('what is you guess?');
        var distans:number = Math.abs(answer-random)
        console.log(distans); 

        if(distans==0){
            console.log(`BINGO the numbe is: ${random}`); 
            alert(`BINGO the numbe is: ${random}`)
            i=6 // exit from the loop
        }

        if(distans>0 &&  distans <=5){
            console.log("almost there"); 
            alert("almost there")
        }

        if(distans>5 && distans<=10 ){
            console.log("HOT"); 
            alert("HOT")
        }

        if(distans > 10 && distans <20){
            console.log("colder"); 
            alert("colder")
        }

        if(distans >= 20){
            console.log("Frezz"); 
            alert("Frezz")
        }
    }


}

LionInTheDesert()

