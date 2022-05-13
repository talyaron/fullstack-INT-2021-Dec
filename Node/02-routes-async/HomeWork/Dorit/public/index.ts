function handleJoke(){
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

function renderJoke(joke: string) {
    const newJoke:HTMLElement = document.querySelector("#jokeToDisplay");
  
    newJoke.innerHTML = `${joke}`;
  }

