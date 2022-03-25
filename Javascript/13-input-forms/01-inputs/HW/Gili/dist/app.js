console.log("Server online");
var body = document.querySelector('body');
var userimg = document.querySelector('.user_img');
function isValidUrl(_string) {
    var matchPattern = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
    return matchPattern.test(_string);
}
function checkurl(event) {
    var url = event.target.value;
    isValidUrl(url) ? userimg.src = "" + url : console.log("URL is Invalid");
}
function checkUsername(event) {
    var userName = event.target.value;
    console.dir(event);
}
function checkPassword(event) {
}
//NOT DONE
// NOT WORKING
