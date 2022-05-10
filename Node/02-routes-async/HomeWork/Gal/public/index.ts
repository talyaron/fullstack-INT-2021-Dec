console.log(`Connected!`)

function handleGetjoke1() {
    try {
        axios.get("/api/image").then(({ data }) => {
          console.log(data);
          // const imagetry = data;
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
        // const imagetry = data;
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
        // const imagetry = data;
        const { picture, error } = data;
        if (error) throw new Error(error);
        renderPicture(picture);
      });
    } catch (error) {
      console.error(error);
    }
}

function renderPicture(picture) {
    const image: HTMLImageElement = document.querySelector("#imageToChange");

    image.src = `${picture.src}`;
  }
  
  
