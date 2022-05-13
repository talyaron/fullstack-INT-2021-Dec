
async function getPic1(){
   // const {data} = 
  const {data} = await axios.get('/api/img1');
    const {image} = data;
    console.log(image)
    // if (error) throw new Error(error);
     renderImg(image)
}

function getPic2(){
  // const {data} = 
 const {data} =  axios.get('/api/img2').then((response) => {
  const {image} = response.data;
  console.log(image);
  // if (error) throw new Error(error);
   renderImg(image);
 });

}

function renderImg(image){
    const root:HTMLElement = document.querySelector('#root')
    root.innerHTML =`<img src="${image.pic}"> "<p> ${image.dis}</p>"`
}

