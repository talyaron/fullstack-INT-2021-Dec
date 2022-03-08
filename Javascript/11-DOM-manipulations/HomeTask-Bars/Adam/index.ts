
const WinCount:any= document.querySelectorAll(`.bar`);
console.dir(WinCount)
const wrapper: HTMLDivElement = document.querySelector(".wrapper");
const values:Array<number>=[7,5,3,3,3];

    for(let i=0;i<values.length;i++){
    WinCount[i].style.width=`100px`;
    WinCount[i].style.height= `${values[i]*4}px`;
    WinCount[i].innerText=`${values[i]}`
    }
