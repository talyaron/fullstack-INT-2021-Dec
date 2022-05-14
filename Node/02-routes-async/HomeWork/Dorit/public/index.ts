interface Joke{
  text:string,
  type:number
}
interface Meme{
  text:string,
  type:number
}

function handleDisplay(){
    try {
        axios
          .get("/api/Joke")
          .then(({ data }) => {
            console.log(data);
            const { joke, error } = data;
            if (error) throw new Error(error);
            console.log(joke);
            renderJoke(joke);
          })
          .catch((err) => console.error(err));
        
    } catch (error) {
        console.error(error); 
    }
}

function renderJoke(joke: Joke) {
    const newJoke:HTMLElement = document.querySelector("#jokeToDisplay");
    if (joke.type=2){
      newJoke.innerHTML = `<img src= ${joke.text} alt="joke"/>`;
    }else if(joke.type=1){
      newJoke.innerHTML=`${joke.text}`
    }  
  }


