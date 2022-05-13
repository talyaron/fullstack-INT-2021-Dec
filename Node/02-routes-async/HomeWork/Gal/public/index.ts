console.log(`Connected!`)

async function handleGetjoke1() {
  try {
    const { data } = await axios.get("/api/image0");
    console.log(data)
    const {imageArray, error } = data;
  console.log("get user After fetch (2.5)");
    
    if (error) throw new Error(error);
   
    renderPicte(imageArray);
    console.log("get user After the end of fetch (3)");

  } catch (error) {
    console.error(error);
  }
}


async function handleGetjoke2() {
  try {
    const { data } = await axios.get("/api/image1");
    console.log(data)
    const { imageArray, error } = data;
  console.log("get user After fetch (2.5)");
    
    if (error) throw new Error(error);
   
    renderPicte(imageArray);
    console.log("get user After the end of fetch (3)");

  } catch (error) {
    console.error(error);
  }
}


async function handleGetjoke3() {
  try {
    const { data } = await axios.get("/api/image2");
    console.log(data)
    const { imageArray, error } = data;
  console.log("get user After fetch (2.5)");
    
    if (error) throw new Error(error);
   
    renderPicte(imageArray);
    console.log("get user After the end of fetch (3)");

  } catch (error) {
    console.error(error);
  }
}

function renderPicte(_imageArray) {
    const root:HTMLElement =document.querySelector("#root");
    
    root.innerHTML = `picture ${picture.imageArray}`
  }
  
  
