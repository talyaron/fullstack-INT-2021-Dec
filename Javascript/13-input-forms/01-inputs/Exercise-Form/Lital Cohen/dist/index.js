console.log("hello");
//get input from user and display dom//
function handleGetText(event) {
    console.dir(event);
    var outputOfTExt = document.querySelector("#" + event.target.name);
    try {
        var value = event.target.value;
        outputOfTExt.innerHTML = value;
        console.log(value);
    }
    catch (error) {
        console.log(error);
    }
}
//get a number from user and display dom as the user is typing change the event from 'onchange' to 'input//
//user paste an url of img and it is displayed on the DOM (used prompt couldnt find alternative solution)//
var image = document.getElementById("image");
function loadImg(event) {
    console.dir(event);
    var urlImg = new Image();
    urlImg.src = prompt("Please paste the URL of your pic");
    urlImg.onerror = function () {
        alert("OOPS! looks like your URL is wrong");
    };
    urlImg.onload = function () {
        image.src = urlImg.src;
    };
    console.log(urlImg);
}
//checking (press login btn) if username and password matched as in siging up if yes the dom turn green and if not turns red//
function checkThePassword(event) {
    var valueOfUser = document.getElementById("userName");
    var valueOfPass = document.getElementById("password");
    var valueOfUserLog = document.getElementById("userNameLogin");
    var valueOfPassLog = document.getElementById("passwordLogin");
    // console.log(valueOfUser.innerHTML);
    // console.log(valueOfPass.innerHTML);
    // console.log(valueOfUserLog.innerHTML);
    // console.log(valueOfPassLog.innerHTML);
    if (document.getElementById("userName").innerHTML ===
        document.getElementById("userNameLogin").innerHTML &&
        document.getElementById("password").innerHTML ===
            document.getElementById("passwordLogin").innerHTML) {
        console.log("user name + ps yes");
        document.body.style.backgroundColor = "green";
    }
    else {
        console.log("no no");
        document.body.style.backgroundColor = "red";
    }
}
//uploading file from the local pc and display on dom//
function uploadFile(event) {
    var fileUP = document.getElementById("file");
    fileUP.setAttribute("type", "file");
    document.body.appendChild(fileUP);
}
