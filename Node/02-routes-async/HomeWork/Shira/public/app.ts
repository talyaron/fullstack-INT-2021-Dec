async function handleGetJoke1() {
    try {
      console.log("get joke1");
      const { data } = await axios.get("/api/joke1");
      console.log(data)
      const { joke, error } = data;
      
      if (error) throw new Error(error);
     
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
     
      renderJoke(joke);

    } catch (error) {
      console.error(error);
    }
  }


  function renderJoke(jokes: joke) {
    const root: HTMLElement = document.querySelector("#root");
  
    root.innerHTML = `<img src= ${jokes.src} alt="meme"/>`;

    // if(jokes.src="Meme3.jpg"){
    //   root.style.position="relative";
    //   root.style.left="50vw"
    // }

  
  }