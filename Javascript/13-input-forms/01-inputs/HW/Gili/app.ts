console.log(`Server online`)

const body: HTMLBodyElement = document.querySelector('body');
const userimg: HTMLImageElement = document.querySelector('.user_img');
const writeHere: HTMLDivElement = document.querySelector('.success_or_fail')
const numbersDiv = document.querySelector('.printed_numbers')

function isValidUrl(_string) {
    const matchPattern = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
    return matchPattern.test(_string);
}

function checkurl(event) {
    const url: string = event.target.value;
    isValidUrl(url) ? userimg.src = `${url}` : console.log("URL is Invalid")
}
function checkfile(event) {
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
     const userName:HTMLInputElement = document.getElementById('first');
     const pass:HTMLInputElement = document.getElementById('second');
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


//NOT DONE
// NOT WORKING