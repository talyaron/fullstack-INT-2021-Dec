function createImg(event) {
    console.dir(event);
    var urlImg = document.querySelector('#urlImg');
    console.dir(urlImg);
    urlImg.attributes[1].nodeValue = event.target.value;
}
function showNumbers(event) {
    console.dir(event);
    var showNum = document.querySelector("#showNumbers");
    console.dir(showNum);
    showNum.innerText = event.target.value;
}
