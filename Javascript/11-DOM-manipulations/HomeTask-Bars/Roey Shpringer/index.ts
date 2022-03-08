let barsNumbers = [20, 51, 68]

const barsContainer = document.querySelectorAll(".bar")

function displayBarsHeight(numContainer: Array<any>, bars){
for(let i = 0; i < numContainer.length; i++){
    bars[i].style.height = numContainer[i]
}

}

displayBarsHeight(barsNumbers, barsContainer)

console.log(barsContainer)

console.dir(barsContainer)
