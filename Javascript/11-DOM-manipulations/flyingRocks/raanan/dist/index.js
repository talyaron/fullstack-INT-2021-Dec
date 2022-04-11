var positions = {};
var astroidWidth = 50;
var astroidHieght = 50;
window.onload = function () {
    setInterval(function () {
        moveAstroid('astroid1');
        moveAstroid('astroid2');
        moveAstroid('astroid3');
        moveAstroid('astroid4');
        moveAstroid('astroid5');
        console.log(positions);
    }, 1000);
};
//positioning of astriod
function moveAstroid(id) {
    var astroid = document.getElementById(id);
    var x = getRandomPosition(1, 100);
    var y = getRandomPosition(1, 100);
    positions[id + "x"] = x;
    positions[id + "y"] = y;
    astroid.style.top = x + "vh";
    astroid.style.left = y + "vw";
}
function getRandomPosition(min, max) {
    var position = 0;
    position = Math.floor(Math.random() * (max - min + 1) + min);
    return position;
}
//geting astroid's position points
var leftP1 = 0;
var topP1 = 0;
var leftP2 = 0;
var topP2 = 0;
//creating a function that checks for collisions between all 4 points
function checkCollisions(elem1, elem2) {
    //left position calculations
    var left1 = elem1.style.left;
    left1 = left1.slice(0, left1.length - 2);
    leftP1 = parseInt(left1);
    var left2 = elem2.style.left;
    left2 = left2.slice(0, left2.length - 2);
    leftP2 = parseInt(left2);
    //top position calculations
    var top1 = elem1.style.top;
    top1 = top1.slice(0, top1.length - 2);
    topP1 = parseInt(top1);
    var top2 = elem2.style.top;
    top2 = top2.slice(0, top2.length - 2);
    topP2 = parseInt(top2);
    //right and bottom calculations
    //right calculations
    var leftRight1 = leftP1 + astroidWidth;
    var leftRight2 = leftP2 + astroidWidth;
    //bottom calculations
    var bottomLeft1 = topP1 + astroidHieght;
    var bottomLeft2 = topP2 + astroidHieght;
    //if colision is enabled make elem disappear
    if (leftP1 < leftRight2 && leftP1 > leftP2 && topP1 < bottomLeft2 && topP1 > topP2) {
        console.log('colision');
    }
}
