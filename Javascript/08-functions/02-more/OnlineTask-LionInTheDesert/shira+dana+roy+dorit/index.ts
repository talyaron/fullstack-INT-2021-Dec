function game(numberOfGuesses:number){
    let guess:number = 0;
    
        let number:number = Math.round(Math.random()*1000);
        //alert(number)
        
        for (var i:number = 0; i<numberOfGuesses ; i++){
            guess= +prompt("let me have your guess")
            if (guess< number){
                alert("your guess is too low")
            
            }else if(guess> number){
                alert("your guess is too high") 
                
                
            } else
                if (guess==number){
                    alert(`you won`)
                    i=numberOfGuesses
                } 
                    
        }
        if (guess!=number){
            alert("game over")
        }
        return i   
}

const numberOfGuesses:number = game(5)
alert(`you guessed ${numberOfGuesses} times`)

    