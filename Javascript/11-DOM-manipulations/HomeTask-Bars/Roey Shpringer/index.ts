let barsNumbers = [40, 60, 45, 30, 69, 20]



function displayBarsHeight(numContainer: Array<any>) {
    const barWrapper = document.getElementById("barsWrapper")
    let bars = []
    for (let i = 0; i < numContainer.length; i++) {
        let currentNum = document.createElement("p")
        currentNum.innerText = numContainer[i]
        bars.push(document.createElement("div"))
        bars[i].className = 'bar'
        bars[i].style.height = numContainer[i] + "px"
        barWrapper.appendChild(bars[i])
        bars[i].appendChild(currentNum)
    }
}





displayBarsHeight(barsNumbers)


