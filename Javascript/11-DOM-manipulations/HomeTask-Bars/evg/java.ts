const wrapper:any = document.querySelector(".wrapper");
const bar:any = document.querySelectorAll(".bars");
const arr:Array<number> = [ 4, 6, 5, 8 ];
console.dir(bar);
console.dir(wrapper);


// for (let i = 0; i < arr.length; i++) {
//     let column = bar[i];
//     column.style.width = '100px';
//     column.style.height = `${arr[i]*20}px`;
// }

for ( let i=0 ; i<arr.length; i++) {
    let test= bar[i];
    test.style.height= `${arr[i]*100}px`

}