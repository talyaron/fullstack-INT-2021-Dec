const boxs: any = document.querySelectorAll('.box');

boxs.forEach(element => {
    element.style.backgroundColor = getRandomColor()
    //element.style.width = getRandomNumber()
    //element.style.height = getRandomNumber()
    element.style.left = getRandomPosition()
    element.style.top = getRandomPosition()
    element.style.right = getRandomPosition()
    element.style.transform = "rotate(360deg)";
})

let counter = 360;

function getRandomMove() {

    boxs.forEach(element => {
        element.style.backgroundColor = getRandomColor()
        //element.style.width = getRandomNumber()
        //element.style.height = getRandomNumber()
        element.style.left = getRandomPosition()
        element.style.top = getRandomPosition()
        element.style.right = getRandomPosition()
        element.style.transform = `rotate(${counter}deg)`;
        counter += 360;

    })
}

let moveInterval;

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomNumber() {

    let boxsize = (((Math.random() * 100) + 60).toFixed()) + 'px';

    return boxsize;
}

function getRandomPosition() {

    let boxsize = (((Math.random() * 800) + 60).toFixed()) + 'px';

    return boxsize;
}


let rock1 = document.querySelector('.rock1');
let positionRock1: DOMRect = rock1.getBoundingClientRect();

let rock2 = document.querySelector('.rock2');
let positionRock2: DOMRect = rock2.getBoundingClientRect();

let rock3 = document.querySelector('.rock3');
let positionRock3: DOMRect = rock3.getBoundingClientRect();

let rock4 = document.querySelector('.rock4');
let positionRock4: DOMRect = rock4.getBoundingClientRect();

let rock5 = document.querySelector('.rock5');
let positionRock5: DOMRect = rock5.getBoundingClientRect();

let rock6 = document.querySelector('.rock6');
let positionRock6: DOMRect = rock6.getBoundingClientRect();


let ArrayOfRocksPositions: Array<any> = [positionRock1, positionRock2, positionRock3, positionRock4, positionRock5, positionRock6];

let answer = +prompt('pick a number :');


for (let i = 0; i < answer; i++) {
setInterval(getRandomMove, 2000);

    if (i == 0) {
    }

    else if (ArrayOfRocksPositions[i].right <= positionRock1.right
        && ArrayOfRocksPositions[i].x >= positionRock1.x
        && ArrayOfRocksPositions[i].y >= positionRock1.y
        && ArrayOfRocksPositions[i].bottom <= positionRock1.bottom) {

        console.log(`BOOM`);
    }



    else if (i == 1) {
        if (ArrayOfRocksPositions[i] == positionRock2) {

        }
        else if (ArrayOfRocksPositions[i].right <= positionRock2.right
            && ArrayOfRocksPositions[i].x >= positionRock2.x
            && ArrayOfRocksPositions[i].y >= positionRock2.y
            && ArrayOfRocksPositions[i].bottom <= positionRock2.bottom) {
        console.log(`BOOM`);

        }
    }

    else if (i == 2) {
        if (ArrayOfRocksPositions[i] == positionRock3) {
        }
        else if (ArrayOfRocksPositions[i].right <= positionRock3.right
            && ArrayOfRocksPositions[i].x >= positionRock3.x
            && ArrayOfRocksPositions[i].y >= positionRock3.y
            && ArrayOfRocksPositions[i].bottom <= positionRock3.bottom) {
        console.log(`BOOM`);

        }


    }

    else if (i == 3) {
        if (ArrayOfRocksPositions[i] == positionRock4) {
        }
        else if (ArrayOfRocksPositions[i].right <= positionRock4.right
            && ArrayOfRocksPositions[i].x >= positionRock4.x
            && ArrayOfRocksPositions[i].y >= positionRock4.y
            && ArrayOfRocksPositions[i].bottom <= positionRock4.bottom) {
        console.log(`BOOM`);

        }

    }
    else if (i == 4) {
        if (ArrayOfRocksPositions[i] == positionRock5) {
        }
        else if (ArrayOfRocksPositions[i].right <= positionRock5.right
            && ArrayOfRocksPositions[i].x >= positionRock5.x
            && ArrayOfRocksPositions[i].y >= positionRock5.y
            && ArrayOfRocksPositions[i].bottom <= positionRock5.bottom) {
        console.log(`BOOM`);

        }
    }

    else if (i === 5) {
        if (ArrayOfRocksPositions[i] == positionRock6) {
        }
        else if (ArrayOfRocksPositions[i].right <= positionRock6.right
            && ArrayOfRocksPositions[i].x >= positionRock6.x
            && ArrayOfRocksPositions[i].y >= positionRock6.y
            && ArrayOfRocksPositions[i].bottom <= positionRock6.bottom) {
        console.log(`BOOM`);
    
        }


}
}

function stop(){
    clearInterval(moveInterval);
 }