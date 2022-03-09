const arrayOfNumber: Array<number> =[10,30,55,70,100]
const wrapper:HTMLDivElement = document.querySelector(".wrapper");
const columnn:any =document.querySelectorAll(".column");

console.log(arrayOfNumber)

for (let i = 0; i < arrayOfNumber.length; i++) {
    let column = columnn[i];
    column.style.width = '100px';
    column.style.height = `${arrayOfNumber[i]*6}px`;
    column.innerText = arrayOfNumber[i];
    column.style.top = `${600-arrayOfNumber[i]*6}px`;
}