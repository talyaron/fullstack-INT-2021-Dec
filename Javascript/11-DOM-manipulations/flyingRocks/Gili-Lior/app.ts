const meteors: NodeList = document.querySelectorAll('.meteor')
const spaceship: HTMLDivElement = document.querySelector('#spaceShip')
const body: HTMLBodyElement = document.querySelector('body')
const wrapper: HTMLDivElement = document.querySelector('.wrapper')

// function gets meteors and returns each meteor position
function getMeteorPosition(meteors: NodeList): object {
    const ourMeteors: Array<object> = [];
    meteors.forEach(element => {
        const meteor = {
            leftPosition: element.getBoundingClientRect().left,
            rightPosition: element.getBoundingClientRect().right,
            topPosition: element.getBoundingClientRect().top,
            bottomPosition: element.getBoundingClientRect().bottom,
        }
        ourMeteors.push(meteor)
    })
    return ourMeteors;
}

// function moves meteors individually
function moveMeteors() {
    setInterval(checkCollision, 100)
    const bodyWidth = document.body.offsetWidth;
    const bodyHeight = document.body.offsetHeight;
    meteors.forEach(element => {
        element.style.top = getRandomNumber(bodyHeight) + `px`
        element.style.left = getRandomNumber(bodyWidth) + `px`
    })
}

function checkCollision() {
    // Check if meteor[i] collid meteor[i+1]
    const meteorPosition: Array<object> = getMeteorPosition(meteors)
    let isExpolded: boolean = false
    for (let i = 0; i < meteorPosition.length; i++) {
        for (let j = 1; j < meteorPosition.length; j++) {
            if (!meteors[i].classList.contains("hidden")) {
                if (i === j) {
                    break;
                } else if (typeof i === 'undefined') {
                    break
                } else if (meteorPosition[i].leftPosition >= meteorPosition[j].leftPosition &&
                    meteorPosition[i].leftPosition <= meteorPosition[j].rightPosition) {
                    if (meteorPosition[i].topPosition >= meteorPosition[j].topPosition &&
                        meteorPosition[i].topPosition <= meteorPosition[j].bottomPosition) {
                        // Add Explostion and Remove divs
                        console.log(`${i} and ${j} Are overlapping at X and Y`)


                        if (!isExpolded) {
                            isExpolded = true;
                            const explosionPositionTop = (meteorPosition[i].topPosition + meteorPosition[j].topPosition) / 2;
                            const explosionPositionLeft = (meteorPosition[i].leftPosition + meteorPosition[j].leftPosition) / 2;

                            const newExplostion = document.createElement('img')
                            newExplostion.classList.add('explostion')
                            newExplostion.src = "images/explosion-transparent-png-picture-1.png";
                            newExplostion.style.top = `${explosionPositionTop}px`
                            newExplostion.style.left = `${explosionPositionLeft}px`
                            wrapper.appendChild(newExplostion);
                            setTimeout(() => {
                                newExplostion.remove()
                                isExpolded = false;
                            }, 100)
                            meteors[i].classList.add("hidden")
                            meteors[j].classList.add("hidden")

                        }

                    } else if (meteorPosition[i].bottomPosition >= meteorPosition[j].topPosition &&
                        meteorPosition[i].bottomPosition <= meteorPosition[j].bottomPosition) {
                        // Add Explostion and Remove divs
                        console.log(`${i} and ${j} Are overlapping at X and Y`)

                        if (!isExpolded) {
                            isExpolded = true;
                            const explosionPositionTop = (meteorPosition[i].topPosition + meteorPosition[j].topPosition) / 2;
                            const explosionPositionLeft = (meteorPosition[i].leftPosition + meteorPosition[j].leftPosition) / 2;

                            const newExplostion = document.createElement('img')
                            newExplostion.classList.add('explostion')
                            newExplostion.src = "images/explosion-transparent-png-picture-1.png";
                            newExplostion.style.top = `${explosionPositionTop}px`
                            newExplostion.style.left = `${explosionPositionLeft}px`
                            wrapper.appendChild(newExplostion);
                            setTimeout(() => {
                                newExplostion.remove()
                                isExpolded = false;
                            }, 100)
                            meteors[i].classList.add("hidden")
                            meteors[j].classList.add("hidden")
                        }
                    }
                } else if (meteorPosition[i].rightPosition >= meteorPosition[j].leftPosition &&
                    meteorPosition[i].rightPosition <= meteorPosition[j].rightPosition) {
                    if (meteorPosition[i].bottomPosition >= meteorPosition[j].topPosition &&
                        meteorPosition[i].bottomPosition <= meteorPosition[j].bottomPosition) {
                        // Add Explostion and Remove divs
                        console.log(`${i} and ${j} Are overlapping at X and Y`)
                        if (!isExpolded) {
                            isExpolded = true;
                            const explosionPositionTop = (meteorPosition[i].topPosition + meteorPosition[j].topPosition) / 2;
                            const explosionPositionLeft = (meteorPosition[i].leftPosition + meteorPosition[j].leftPosition) / 2;

                            const newExplostion = document.createElement('img')
                            newExplostion.classList.add('explostion')
                            newExplostion.src = "images/explosion-transparent-png-picture-1.png";
                            newExplostion.style.top = `${explosionPositionTop}px`
                            newExplostion.style.left = `${explosionPositionLeft}px`
                            wrapper.appendChild(newExplostion);
                            setTimeout(() => {
                                newExplostion.remove()
                                isExpolded = false;
                            }, 100)
                            meteors[i].classList.add("hidden")
                            meteors[j].classList.add("hidden")
                        }

                    } else if (meteorPosition[i].topPosition >= meteorPosition[j].topPosition &&
                        meteorPosition[i].topPosition <= meteorPosition[j].bottomPosition) {
                        // Add Explostion and Remove divs
                        console.log(`${i} and ${j} Are overlapping at X and Y`)

                        if (!isExpolded) {
                            isExpolded = true;
                            const explosionPositionTop = (meteorPosition[i].topPosition + meteorPosition[j].topPosition) / 2;
                            const explosionPositionLeft = (meteorPosition[i].leftPosition + meteorPosition[j].leftPosition) / 2;

                            const newExplostion = document.createElement('img')
                            newExplostion.classList.add('explostion')
                            newExplostion.src = "images/explosion-transparent-png-picture-1.png";
                            newExplostion.style.top = `${explosionPositionTop}px`
                            newExplostion.style.left = `${explosionPositionLeft}px`
                            wrapper.appendChild(newExplostion);
                            setTimeout(() => {
                                newExplostion.remove()
                                isExpolded = false;
                            }, 100)
                            meteors[i].classList.add("hidden")
                            meteors[j].classList.add("hidden")
                        }
                    }
                } else {
                    console.log('no overlap')
                }
            }

        }
    }
}

// Function getting random number to set width and height of meteor postion top,left
function getRandomNumber(max: number): number {
    let randNumber = Math.floor(Math.random() * max);
    if (randNumber > 100) {
        randNumber -= 100;
    }
    return randNumber;
}

// Function sets random rotate for each meteor
function setRandomRotate() {
    meteors.forEach(element => {
        const randomRotate = Math.floor(Math.random() * 360)
        element.style.transform = `rotate(${randomRotate}deg)`
    })
}

body.addEventListener('mousemove', (ev) => {
    const middleElementX = ev.clientX - (spaceship.offsetWidth)/2
    const middleElementY = ev.clientY - (spaceship.offsetHeight)/2 + 50
    spaceship.style.top = `${middleElementY}px`
    spaceship.style.left = `${middleElementX}px`
})

moveMeteors();
setTimeout(moveMeteors, 500)
setRandomRotate();
setInterval(moveMeteors, 5000)

