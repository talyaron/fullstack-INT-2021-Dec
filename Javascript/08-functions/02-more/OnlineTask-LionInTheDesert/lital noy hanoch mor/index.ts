function randomNumber(min:number, max:number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  let guess:number;
  const random=randomNumber(1, 10);
  console.log(random)
  for (let i=1; i<6; i++){
    guess  = +prompt('what is you guess?');
    if (guess == random){
        alert("you guess the number!!" + i )
        i=6
    }
    else if((guess< random) && (i<5)){
        alert('go higher!!')
    }
    else if((guess< random) && (i<5)){
        alert('go lower!!')
    }
  }
  if(guess != random){
    alert('you lost')
  }
  
  