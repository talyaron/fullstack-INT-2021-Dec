var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var signUp = document.querySelector(".signUp");
var logIn = document.querySelector(".logIn");
var welc = document.querySelector(".welcome");
var consol = {};
var consolCheck = {};
function handleSend(ev) {
    ev.preventDefault();
    var userDet = ev.target.elements;
    for (var i = 0; i < userDet.length; i++) {
        if ((userDet[i].username) && (userDet[i].password)) {
            console.log(userDet);
        }
        else if (userDet[i].name && userDet[i].value) {
            consol[userDet[i].name] = userDet[i].value;
        }
    }
    logIn.style.display = "inline";
    signUp.style.display = "none";
    console.log(consol);
}
function handleCheck(ev) {
    ev.preventDefault();
    var userElm = ev.target.elements;
    for (var i = 0; i < userElm.length; i++) {
        if ((userElm[i].username) && (userElm[i].password)) {
            console.log(userElm);
        }
        else if (userElm[i].name && userElm[i].value) {
            consolCheck[userElm[i].name] = userElm[i].value;
            if (consol[i] === consolCheck[i]) {
                alert(__makeTemplateObject(["you are in!"], ["you are in!"
                    // welc.innerText = `welcome user ${consol[i]}`
                    // welc.style.display = "inline"
                ]));
                // welc.innerText = `welcome user ${consol[i]}`
                // welc.style.display = "inline"
            }
        }
    }
}
