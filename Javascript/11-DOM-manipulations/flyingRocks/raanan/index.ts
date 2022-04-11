let positions = {}
let astroidWidth = 50
let astroidHieght = 50

window.onload = () => {
    setInterval(() => {
        moveAstroid('astroid1')
        moveAstroid('astroid2')
        moveAstroid('astroid3')
        moveAstroid('astroid4')
        moveAstroid('astroid5')

        console.log(positions);
    }, 1000)
}

//positioning of astriod
function moveAstroid(id: string) {
    let astroid = document.getElementById(id);
    let x:number= getRandomPosition(1, 100);
    let y:number= getRandomPosition(1, 100);
    positions[id+"x"] = x;
    positions[id+"y"] = y;
    astroid.style.top = `${x}vh`;
    astroid.style.left = `${y}vw`;
}

function getRandomPosition(min: number, max: number) {
    let position:number =0;
    position = Math.floor(Math.random() * (max - min + 1) + min)
    return position;
}

//geting astroid's position points
let leftP1:number = 0;
let topP1:number = 0;
let leftP2:number = 0;
let topP2:number = 0;

//creating a function that checks for collisions between all 4 points
function checkCollisions(elem1:number, elem2:number){
    //left position calculations
    let left1:string = elem1.style.left
    left1 = left1.slice(0,left1.length-2)
    leftP1=parseInt(left1)

    let left2:string = elem2.style.left
    left2 = left2.slice(0,left2.length-2)
    leftP2=parseInt(left2)

    //top position calculations
    let top1:string = elem1.style.top
    top1 = top1.slice(0,top1.length-2)
    topP1=parseInt(top1)

    let top2:string = elem2.style.top
    top2 = top2.slice(0,top2.length-2)
    topP2=parseInt(top2)

    //right and bottom calculations
    //right calculations
    let leftRight1:any = leftP1 + astroidWidth
    let leftRight2:any = leftP2 + astroidWidth
    //bottom calculations
    let bottomLeft1:any = topP1 + astroidHieght
    let bottomLeft2:any = topP2 + astroidHieght

    //if colision is enabled make elem disappear
    if (leftP1<leftRight2 && leftP1>leftP2 && topP1<bottomLeft2 && topP1>topP2){
        console.log('colision')
    }
}