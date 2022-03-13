const bigbox:HTMLElement=document.querySelector(".box")
const myArray=[23, 18, 11, 34, 56]
function getSomeColor(){
    let red=Math.floor(Math.random()*255)
    let green=Math.floor(Math.random()*255)
    let blue=Math.floor(Math.random()*255)
    return `rgb(${red}, ${green}, ${blue})`
}
myArray.forEach(Element=>{
    let col= document.createElement("div")
    let tex= document.createElement("h5")
    bigbox.appendChild(col)
    col.appendChild(tex)
    col.className="col"
    col.style.width="50px"
    col.style.height=10*Element+'px'
    col.style.borderColor="black"
    col.style.borderStyle="groove"
    tex.innerHTML=Element+''
    let newcolor=getSomeColor()
    col.style.backgroundColor=newcolor
})
let smallbox= document.createElement("h3")
smallbox.innerHTML=`[${myArray}]`
bigbox.appendChild(smallbox)
bigbox.style.display="flex"
bigbox.style.justifyContent="space-evenly"
bigbox.style.alignItems="flex-end"

console.dir(bigbox)
console.dir(myArray)


