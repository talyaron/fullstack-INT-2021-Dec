function handleClick1(){
    try {
        axios
          .get("/api/img1")
          .then(({ data }) => {
            console.log(data);
            const { img, error } = data;
            if (error) throw new Error(error);
            console.log(img);
            renderImg(img);
          })
          .catch((err) => console.error(err));
        
    } catch (error) {
        console.error(error); 
    }
}
function handleClick2(){
    try {
        axios
          .get("/api/img2")
          .then(({ data }) => {
            console.log(data);
            const { img, error } = data;
            if (error) throw new Error(error);
            console.log(img);
            renderImg(img);
          })
          .catch((err) => console.error(err));
        
    } catch (error) {
        console.error(error);
    }
}
function renderImg(img: string) {
    const newImg: HTMLImageElement = document.querySelector("#imageToDisplay");
  
    newImg.src = `${img}`;
  }

