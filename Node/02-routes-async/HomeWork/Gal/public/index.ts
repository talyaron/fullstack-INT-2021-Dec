console.log(`Connected!`)

function handleGetjoke1() {
    try {
        axios.get("/api/image").then(({ data }) => {
          console.log(data);
          const { picture, error } = data;
          if (error) throw new Error(error);
          renderPicture(picture);
        });
      } catch (error) {
        console.error(error);
      }
}

function handleGetjoke2() {
  try {
      axios.get("/api/image").then(({ data }) => {
        console.log(data);
        const { picture, error } = data;
        if (error) throw new Error(error);
        renderPicture(picture);
      });
    } catch (error) {
      console.error(error);
    }
}

function handleGetjoke3() {
  try {
      axios.get("/api/image").then(({ data }) => {
        console.log(data);
        const { picture, error } = data;
        if (error) throw new Error(error);
        renderPicture(picture);
      });
    } catch (error) {
      console.error(error);
    }
}

function renderPicture(picture:) {
    const image: HTMLImageElement = document.querySelector("#root");

    image.innerHTML = `<img src= ${picture.src} alt="meme"/>`;
  }
  
  
