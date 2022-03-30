var userName = '';
var userName2 = '';
var password = '';
var password2 = '';
var address = '';
var apartNo = 0;
var birthday = new Date();
var email = '';
var gender = '';
var myFile = '';
var myImage = '';
var fieldHandle = 0;
var body = document.querySelector('body');
function handleGetUserName(event) {
    userName = event.target.value;
    fieldHandle += 1;
    //document.querySelector(".username").innerHTML=`${userName}`
}
function handleGetUserName2(event) {
    userName2 = event.target.value;
    fieldHandle += 1;
    //document.querySelector(".username").innerHTML=`${userName}`
}
function handleGetPassword(event) {
    password = event.target.value;
    //document.querySelector(".password").innerHTML=`${password}`
}
function handleGetPassword2(event) {
    password2 = event.target.value;
    // event.target.style.backgroundcolor
    //console.log(`username ${userName} username2 ${userName2} password ${password} password2 ${password2}`)
    if (userName == userName2 && password == password2) {
        var bigForm = document.querySelector("body");
        bigForm.style.backgroundColor = "rgb(116, 224, 188)";
    }
    //document.querySelector(".password2").innerHTML=`${password}`
}
function handleGetAddress(event) {
    address = event.target.value;
    fieldHandle += 1;
    //document.querySelector(".address").innerHTML=`${address}`
}
function handleGetBirthDate(event) {
    birthday = event.target.value;
    fieldHandle += 1;
    //document.querySelector(".birthDate").innerHTML=`${birthday}`
}
function handleGetMail(event) {
    email = event.target.value;
    fieldHandle += 1;
    //document.querySelector(".mailAddress").innerHTML=`${email}`
}
function handleRadioB(event) {
    gender = event.target.value;
    fieldHandle += 1;
    //document.querySelector(".gender").innerHTML=`${gender}`
}
function handleGetImg(event) {
    var value = event.target.value;
    fieldHandle += 1;
    var outPut = document.querySelector(".img");
    outPut.innerHTML = "<img src=\"" + value + "\" width=\"120px\" height=\"120px\">";
    if (fieldHandle >= 11) {
        console.log(fieldHandle);
    }
}
function handleUploadResume(event) {
    myFile = event.target.files[0].name;
    fieldHandle += 1;
    //document.querySelector(".file").innerHTML=`${myFile}`
}
function handleGetNo(event) {
    console.log(event);
    fieldHandle += 1;
    apartNo = event.target.value;
    //document.querySelector(".apartNum").innerHTML=`${apartNo}`
}
function handleButtonClick(event) {
    document.querySelector(".addressR").innerHTML = "address: " + address;
    document.querySelector(".apartNoR").innerHTML = "apartment no:" + apartNo + " ";
    document.querySelector(".mailR").innerHTML = "email:" + email + " ";
    document.querySelector(".birthdateR").innerHTML = "birthdate:" + birthday + " ";
    document.querySelector(".genderR").innerHTML = "gender:" + gender + " ";
    document.querySelector(".resumeR").innerHTML = "file name is: " + myFile;
}
