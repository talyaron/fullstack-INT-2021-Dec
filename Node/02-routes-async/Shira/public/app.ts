async function handleGetJoke1() {
    try {
      console.log("get joke1");
      const { data } = await axios.get("/api/joke1");
      console.log(data)
      const { jMyJokeoke, error } = data;
      
      if (error) throw new Error(error);
     
      renderJoke(MyJoke);
     

    } catch (error) {
      console.error(error);
    }
  }

  async function handleGetJoke2() {
    try {
      console.log("get joke2");
      
      
      const { data } = await axios.get("/api/joke2");
      console.log(data)
      const { MyJoke, error } = data;
      
      if (error) throw new Error(error);
     
      renderJoke(MyJoke);

    } catch (error) {
      console.error(error);
    }
  }
  async function handleGetJoke3() {
    try {
      console.log("get joke3");
      
      
      const { data } = await axios.get("/api/joke3");
      console.log(data)
      const { MyJoke, error } = data;
      
      if (error) throw new Error(error);
     
      renderJoke(MyJoke);

    } catch (error) {
      console.error(error);
    }
  }



  // function renderJoke(joke) {
  //   const root1: HTMLElement = document.querySelector("#root1");
  //   const root2: HTMLElement = document.querySelector("#root2");
  //   const root3: HTMLElement = document.querySelector("#root3");

  //   // root1.innerHTML = joke[0].title;
  //   // root1.innerHTML = joke[1].title;
  //   // root1.innerHTML = joke[2].title;

  //   root1.innerHTML = joke[0];
  //   root2.innerHTML = joke[1];
  //   root3.innerHTML = joke[2];


  // }
  function renderJoke(MyJoke: MyJoke) {
    const root: HTMLElement = document.querySelector("#root");
  
    root.innerHTML = `<img src= ${MyJoke.src} alt="meme"/>`;
  }