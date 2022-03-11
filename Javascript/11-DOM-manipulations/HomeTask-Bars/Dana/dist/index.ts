const bars:Array<number> = [15, 30, 45, 60, 75, 90]; 
const wrapper:HTMLDivElement = document.querySelector('.wrapper')


function createBars(arr:Array<number>) {
    arr.forEach(elm => {
        console.log(elm)
        const newBar:HTMLDivElement = document.createElement('div')
        const barValue:HTMLParagraphElement = document.createElement('p')
        newBar.style.height = `${elm}%`
        newBar.classList.add('bar-style')
        barValue.innerHTML = `${elm}%`
        barValue.classList.add('bar-text')
        newBar.append(barValue)
        wrapper.append(newBar)
    })

}
createBars(bars)
