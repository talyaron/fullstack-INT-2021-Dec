const numberArrey:Array<number>=[10,25,40,45,70];
const wrapper:HTMLDivElement= document.querySelector ('.wrapper');
const bars:any= document.querySelectorAll ('.bar');




for( let i = 0; i< numberArrey.length; i++){
    let bar = bars [i];
    bar.style.width = '100px';
    bar.style.height = `${numberArrey[i]*5}px`;
    bar.innerText = numberArrey[i];
    bar.style.top = `${500-numberArrey[i]*5}px`;
}
