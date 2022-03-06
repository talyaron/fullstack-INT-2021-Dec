const boxes:any = document.querySelectorAll('.box')

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color)
    return color;
}

function getRandomSizeWidth(){
    const randomNumber = Math.floor(Math.random() * 10)
    return `${randomNumber}vw`
}

function getRandomSizeHeight(){
    const randomNumber = Math.floor(Math.random() * 10)
    return `${randomNumber}vh`
}

function getRandomTranslate():string{
    const randomTransform = Math.floor(Math.random() * 90)
    return `${randomTransform}vw`
}

function getRandomPXSize(){
    const randomPX = Math.floor(Math.random() * 100)
    return `${randomPX}vh`
}

function everySecondChanges(){
    boxes.forEach(ele => {
        ele.style.backgroundColor = getRandomColor()
        ele.style.width = getRandomSizeWidth()
        ele.style.height = getRandomSizeHeight()
        ele.style.transform = `translate(${getRandomPXSize()}, ${getRandomPXSize()})`
    })
    setTimeout(everySecondChanges, 2000)
}
everySecondChanges()


