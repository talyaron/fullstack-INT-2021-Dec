console.log(`Server online`)

const body: HTMLBodyElement = document.querySelector('body');
const userimg: HTMLImageElement = document.querySelector('.user_img')

function isValidUrl(_string) {
    const matchPattern = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
    return matchPattern.test(_string);
}

function checkurl(event) {
    const url: string = event.target.value;
    isValidUrl(url) ? userimg.src = `${url}`: console.log("URL is Invalid")
}

function checkUsername(event) {
    const userName:string = event.target.value;
    console.dir(event)
}

function checkPassword(event) {
}

//NOT DONE
// NOT WORKING