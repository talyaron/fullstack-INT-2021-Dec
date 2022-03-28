console.log("hello");
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
// function handleCopyTextDom(){
//   var e = document.getElementById('addtextarea');
// e.innerHTML = '<textarea></textarea>';
// }
// function changeDocColor(event){
// let valueOfUser:HTMLElement=document.getElementById('userName')
// let valueOfPass:HTMLElement=document.getElementById('password')
// let valueOfUserLog:HTMLElement=document.getElementById('userNameLogin')
// let valueOfPassLog:HTMLElement=document.getElementById('passwordLogin')
// // const valueOfP = event.target.value;
// // valueOfPass.innerHTML = valueOfP;
// console.log(valueOfUser)
// console.log(valueOfPass)
// console.log(valueOfUserLog)
// console.log(valueOfPassLog) 
// if(valueOfUser == valueOfUserLog && valueOfPass == valueOfPassLog)
//   return alert ("ggoood");
// }
