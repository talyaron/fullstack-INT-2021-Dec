var myWidth = 10; //width of astroids is constant
var myHeight = 10; // height of astroids is constant
var result = false;
var astroids = document.querySelectorAll(".box"); //array of astroids (box in html)
astroids.forEach(function (element) {
    element.style.top = getRandomPostion() + "vh";
    element.style.left = getRandomPostion() + "vw";
});
// randomize the position of the astroids
function getRandomPostion() {
    var postion = 0;
    postion = Math.round(Math.random() * 90);
    return postion;
}
//initializing the varables of x and y
var leftn1 = 0;
var topn1 = 0;
var leftn2 = 0;
var topn2 = 0;
//the function gets two androids and checks for colision, returns true or false
function colision(elem1, elem2) {
    //left of first element
    var left1 = elem1.style.left; // the string includes vh or vw
    left1 = left1.slice(0, left1.length - 2); //getting rid of the vw or vw
    leftn1 = parseInt(left1); // transform string to integer
    //===================================
    //top of first element
    var top1 = elem1.style.top;
    top1 = top1.slice(0, top1.length - 2);
    topn1 = parseInt(top1);
    //====================================
    //left of second element
    var left2 = elem2.style.left;
    left2 = left2.slice(0, left2.length - 2);
    leftn2 = parseInt(left2);
    //====================================
    //top of second element
    var top2 = elem2.style.top;
    top2 = top2.slice(0, top2.length - 2);
    topn2 = parseInt(top2);
    //====================================
    //right and bottom of the elements
    var leftWidth1 = leftn1 + myWidth;
    var topHeight1 = topn1 + myHeight;
    var leftWidth2 = leftn2 + myWidth;
    var topHeight2 = topn2 + myHeight;
    if (leftn1 < leftWidth2 && leftn1 > leftn2) { // x axis of first element is inside second element
        return true;
    }
    else if (topn1 < topHeight2 && topn1 > topn2) { // y axis of first element is inside second element
        return true;
    }
    else {
        return false;
    }
}
var element = astroids[0]; //initializing element variable
setInterval(function () {
    for (var i = 0; i < astroids.length; i++) { //running of every astroid against al the others
        element = astroids[i];
        element.style.top = getRandomPostion() + "vh";
        element.style.left = getRandomPostion() + "vw";
        for (var j = i + 1; j < astroids.length; j++) { //running every next astroid 
            console.log("to colision");
            result = colision(astroids[i], astroids[j]);
            console.log("result = " + result + " i=" + i + " j= " + j);
        }
    }
}, 1000);
