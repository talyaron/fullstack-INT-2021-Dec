const bars:any= document.querySelectorAll(`.bar`);
console.dir(bars)
const wrapper: HTMLDivElement = document.querySelector(".wrapper");
const values:Array<number>=[25,57,43,58,70,86,90];

console.log(bars[1].style.height)

    for(let i=0;i<values.length;i++){
    bars[i].style.width=`100px`;
    bars[i].style.height= `${values[i]*4}px`;
    //bars[i].children.p.innerText=`${values[i]}`
    bars[i].innerText=`${values[i]}`
    }


