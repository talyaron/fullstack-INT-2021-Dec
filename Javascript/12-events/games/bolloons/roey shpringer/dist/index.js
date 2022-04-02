var baloon = document.querySelector(".baloonImg");
var body = document.querySelector("body");
var wrapper = document.querySelector(".wrapper");
var counterDiv = document.querySelector(".counterDiv");
var storeText = document.querySelector(".storeText");
counterDiv.innerHTML = "baloons popped: 0";
function randomLeft() {
    var x = Math.round(Math.random() * 87) + "vw";
    return x;
}
function moveBaloons(element) {
    element.style.left = randomLeft();
    setInterval(function () {
        element.style.top = '-25vh';
    }, 10);
}
function createNewBaloon() {
    var newBaloon = document.createElement("img");
    newBaloon.className = 'baloonImg';
    newBaloon.src = "baloon.png";
    wrapper.append(newBaloon);
    newBaloon.addEventListener("click", handleClick);
    moveBaloons(newBaloon);
    setInterval(function () {
        newBaloon.remove();
    }, 8000);
    console.dir(newBaloon);
    return newBaloon;
}
var counter = 0;
function handleClick(ev) {
    var audio = new Audio('jettbye.mp3');
    audio.play();
    var baloonPosition = ev.target.getBoundingClientRect();
    var newBoom = document.createElement("img");
    ev.target.remove();
    newBoom.className = 'boomImg';
    newBoom.src = 'boom.png';
    //ev.target.style.width = '70px'
    //ev.target.style.height = '70px'
    //ev.target.style.transition = 'top 8s'
    //let evPosition = ev.target.getBoundingClientRect()
    newBoom.style.top = Math.round(baloonPosition.top) + "px";
    newBoom.style.left = Math.round(baloonPosition.left) + "px";
    wrapper.append(newBoom);
    if (ev.isTrusted) {
        counterDiv.innerHTML = "baloons popped " + ++counter;
    }
    console.log(counter);
    setInterval(function () {
        newBoom.remove();
    }, 500);
    console.dir(ev);
    //console.log(baloonPosition.top)
    //console.log(baloonPosition)
}
setInterval(createNewBaloon, 2000);
var store = document.createElement("div");
var storeH1 = document.createElement("h1");
storeH1.innerHTML = 'welcome to the store!';
store.className = 'store';
function handleStore(ev) {
    var click = ev;
    if (click.isTrusted == true) {
        console.log('hi');
        body.append(store);
        store.append(storeH1);
        storeText.style.pointerEvents = "none";
    }
}
