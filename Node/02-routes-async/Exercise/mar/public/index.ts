function handleGetimg1() {
  try {
    console.log("get user 12");
    axios
      .get("/img1")
      .then(({ data }) => {
        console.log(data);
        const { img, error } = data;
        if (error) throw new Error(error);
        console.log(img);
        renderimg(img);
      })
      .catch((err) => console.error(err));
  } catch (error) {
    console.error(error);
  }
}

async function handleGetimg2() {
  try {
    const { data } = await axios.get("/img2");
    console.log(data)
    const { img, error } = data;
    if (error) throw new Error(error);
    renderimg(img)
  } catch (error) {
    console.error(error);
  }
}
function renderimg(images: img) {
  const root: HTMLElement = document.querySelector("#root");

  root.innerText = `The imag name is ${images.name} and his source is ${images.src}`;
}
