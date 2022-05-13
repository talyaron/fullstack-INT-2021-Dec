function getPic1() {
    // const {data} = 
    var data = axios.get('/api/img1').data;
    var image = data.image;
    console.log(image);
    // if (error) throw new Error(error);
    renderImg(image);
}
function renderImg(image) {
    var root = document.querySelector('#root');
    root.innerHTML = "<img src=\"" + image.pic + "\"> \"<p> " + image.dis + "</p>\"";
}
