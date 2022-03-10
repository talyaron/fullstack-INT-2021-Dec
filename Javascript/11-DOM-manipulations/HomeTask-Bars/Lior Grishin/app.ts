const barsWrapper:HTMLDivElement = document.querySelector('.wrapper')

const barArray:Array<number> = [80,40,30,65,45,72,12.5,90.5]

let barsAppered:boolean = false

const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const solarButton = document.getElementById('solar');
const body = document.body

// Button Event Handlers
darkButton.onclick = () => {
    // replace classes -> light to dark
    body.classList.replace('light','dark');
};

lightButton.onclick = () => {
    // replace classes -> dark to light
    body.classList.replace('dark', 'light');
};

solarButton.onclick = () => {
    // if class has solar
    if(body.classList.contains('solar')){
        // remove solar class
        body.classList.remove('solar');
        // change css bg-solar varibale cirle to yellow
        solarButton.style.cssText = `
            --bg-solar: var(--yellow);
        `
        // change text to solarize instead of normalize
        solarButton.innerText = `solarize`;
    }else{
        // if class dont have solar class

        // change css bg-solar varible circle to white
        solarButton.style.cssText = `
            --bg-solar: white;
        `

        // add solor class 
        body.classList.add('solar');
        // change text to normalize instead of solarize
        solarButton.innerText = `normalize`;
    }
};

function createGraphBars(barArray:Array<number>):void{
    // Checkes if user pass in the array value bigger than 100
    if(Math.max(...barArray) > 100 || Math.min(...barArray) < 0){
        alert('Function accept numbers between 0 - 100')
    }else{
        if(!barsAppered){
            // Getting the width of the wrapper
            const wrapperWidth:number = barsWrapper.offsetWidth
        
            // Calculating the width of each bar depends on barArrays length
            const barWidth:number = wrapperWidth/barArray.length
        
            barArray.forEach(element => {
        
                // Creating a new HTML Element as div (will represent our Bar)
                const newBar:HTMLDivElement = document.createElement('div')
    
                // Creating a new HTML as span (will represent our Bar value)
                const barValue:HTMLSpanElement = document.createElement('span') 
        
                // Adding to newBar class named 'bar'
                newBar.classList.add('bar')
                // Adding to barValue class named 'value'
                barValue.classList.add('value')
        
                // Setting the bar height as the element in % of 100%(wrapper)
                newBar.style.height =  `${element}%`
        
                // Setting bar width to fullfill the wrapper width
                newBar.style.width = `${barWidth}px`
        
                // Setting bar color to randomColor
                newBar.style.backgroundColor = `${getRandomColor()}`
    
                // Setting the value of the barValue to element value
                barValue.innerHTML = `${element}%`
    
                // Appending the bar as new bar to the wrapper
                barsWrapper.append(newBar)
                // Appeniding the value to the bar
                newBar.append(barValue)
            })
            barsAppered = true
        }else{
            alert('bars already appered first remove them! Use function removeBars()')
        }
    }
}

// Function removes bars
function removeBars():void{
    const warrpersBars = document.querySelectorAll('.bar')
        warrpersBars.forEach(element => {
            barsWrapper.removeChild(element)
        })
    barsAppered = false
}

// Function returns random color in RGB
function getRandomColor():string{
    const r = getRandomNumber(255)
    const g = getRandomNumber(255)
    const b = getRandomNumber(255)
    return `rgb(${r},${g},${b})`
}

// Function returns random number between 0 - max
function getRandomNumber(max:number):number{
    return Math.floor(Math.random() * max)
}