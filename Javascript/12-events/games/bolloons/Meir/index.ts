const ballons:NodeListOf<HTMLImageElement> = document.querySelectorAll('#ballon')
console.dir(ballons);

function createBallon(){
    const ballonId = uid();
    document.body.innerHTML +=`<img id='${ballonId}' class=ballon src="./dist/ballon.svg.png"/>`

    
}

