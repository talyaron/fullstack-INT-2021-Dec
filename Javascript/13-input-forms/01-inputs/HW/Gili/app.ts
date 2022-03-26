console.log(`Server online`)

const body: HTMLBodyElement = document.querySelector('body');
const userimg: HTMLImageElement = document.querySelector('.user_img');
const writeHere: HTMLDivElement = document.querySelector('.success_or_fail')
const numbersDiv = document.querySelector('.printed_numbers')

function checkurl(event) {
    const url:URL = event.target.value;
    userimg.src = `${url}`;
}
function checkfile() {
    const fileInput = document.getElementById('fileup');
    const selectedFile = fileInput.files[0];
    var path = (window.URL || window.webkitURL).createObjectURL(selectedFile);
    console.log('path', path);
    if (selectedFile.type === "image/jpeg") {
        console.log(`jpg`)
        userimg.src = `${path}`
    }
    else {
        alert(`Only upload jpg files please!`)
    }
}


function check() {
     const userName:HTMLInputElement = <HTMLInputElement>document.getElementById('first');
     const pass:HTMLInputElement = <HTMLInputElement> document.getElementById('second');
    if (userName.value === pass.value) {
        writeHere.innerHTML = "Match!"
        writeHere.style.color = "green"
    } else {
        writeHere.innerHTML = "try again!"
        writeHere.style.color = "red"
    }
}

function printNumbers(event) {
    console.log(event.target.value)
    numbersDiv.innerHTML = `${event.target.value}`
}

