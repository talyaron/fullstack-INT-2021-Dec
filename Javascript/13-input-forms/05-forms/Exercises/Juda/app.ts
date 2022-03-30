const result:HTMLDivElement = document.querySelector('.result')

function handleSend(ev: any) {
    ev.preventDefault();
  
console.log(ev)

const number1:number = ev.target.elements.num1.value
const number2:number = ev.target.elements.num2.value

console.log(number1)
console.log(number2)



result.innerText=`The division is ${number1/number2}`

}


