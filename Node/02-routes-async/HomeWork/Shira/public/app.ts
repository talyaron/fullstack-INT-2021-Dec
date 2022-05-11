const root: HTMLElement = document.querySelector("#root");

async function handleGetJoke1() {
    try {
      console.log("get joke1");
      const { data } = await axios.get("/api/joke1");
      console.log(data)
      const { joke, error } = data;
      
      if (error) throw new Error(error);
      root.style.position="relative";
      root.style.left="32vw"
      renderJoke(joke);
     

    } catch (error) {
      console.error(error);
    }
  }

  async function handleGetJoke2() {
    try {
      console.log("get joke2");
      
      
      const { data } = await axios.get("/api/joke2");
      console.log(data)
      const { joke, error } = data;
      
      if (error) throw new Error(error);
      root.style.position="relative";
      root.style.left="42vw"
      renderJoke(joke);

    } catch (error) {
      console.error(error);
    }
  }
  async function handleGetJoke3() {
    try {
      console.log("get joke3");
  
      const { data } = await axios.get("/api/joke3");
      console.log(data)
      const { joke, error } = data;
      
      if (error) throw new Error(error);
      root.style.position="relative";
      root.style.left="54vw"
      renderJoke(joke);

    } catch (error) {
      console.error(error);
    }
  }


  function renderJoke(jokes: joke) {
    root.innerHTML = `<img src= ${jokes.src} alt="meme"/>`;
  
  }