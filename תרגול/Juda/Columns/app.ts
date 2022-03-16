const columns:Array<number> = [30,40,50]

const column1:any=document.querySelector('#column1')
const column2:any=document.querySelector('#column2')
const column3:any=document.querySelector('#column3')

console.dir(column1)

column1.innerHTML=columns[0]

column2.innerHTML=columns[1]

column3.innerHTML=columns[2]

column1.style.height=columns[0]+'px'

column2.style.height=columns[1]+'px'

column3.style.height=columns[2]+'px'