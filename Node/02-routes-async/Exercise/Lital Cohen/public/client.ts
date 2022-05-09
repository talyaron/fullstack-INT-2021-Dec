
function handleGetJoke1() {
    try {
      
      axios.get("/api/joke1").then(({ data }) => {
        console.log(data);
        const { joke, error } = data;
        if (error) throw new Error(error);
        renderJoke(joke);
      });
    } catch (error) {
      console.error(error);
    }
  }
  
  function handleGetJoke2() {
    try {
      axios.get("/api/joke2").then(({ data }) => {
        console.log(data);
        const { joke, error } = data;
        if (error) throw new Error(error);
        renderJoke(joke);
      });
    } catch (error) {
      console.error(error);
    }
  }
  function handleGetJoke3() {
    try {
      axios.get("/api/joke3").then(({ data }) => {
        console.log(data);
        const { joke, error } = data;
        if (error) throw new Error(error);
        renderJoke(joke);
      });
    } catch (error) {
      console.error(error);
    }
  }
  function handleGetRandomJoke() {
    try {
      axios.get("/api/randomJoke").then(({ data }) => {
        console.log(data);
        const { joke, error } = data;
        if (error) throw new Error(error);
        renderJoke(joke);
      });
    } catch (error) {
      console.error(error);
    }
  }
  
  function renderJoke(joke:Joke) {
    const root: HTMLElement = document.querySelector("#root");
  
    root.innerText = `my joke for you is: ${joke.text}`;
  }
  
  function handleGetRandomMeme() {
    try {
      console.log("me")
      axios.get("/api/randomMeme").then(({ data }) => {
        console.log(data);
        const { arrayOfMemes, error } = data;
        if (error) throw new Error(error);
        renderJoke(arrayOfMemes);
      });
    } catch (error) {
      console.error(error);
    }
  }
  
  function renderMeme(arrayOfMemes:Meme) {
    const randomMeme: HTMLImageElement = document.querySelector("#randomMeme");
  
    randomMeme.innerText = `my joke for you is: ${arrayOfMemes.image}`;
  }