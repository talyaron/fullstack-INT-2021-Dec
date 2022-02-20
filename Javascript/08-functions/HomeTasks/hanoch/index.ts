const chois = prompt<any>("give me number or string")
console.log(chois)
const babi:Array<any> = [5, 10, 'baba', 'hanoch']
const number = babi.map(elm =>{
    if (typeof chois === 'number' ){
        return (elm)
    }
})
console.log(babi)