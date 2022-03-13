
const first = document.querySelector('.first') as HTMLDivElement;
const second = document.querySelector('.second') as HTMLDivElement;
const btn = document.querySelector('#btn') as HTMLButtonElement;

btn.addEventListener('click',(e:Event) =>{
    transfer(first,second);
});

function transfer (one:HTMLDivElement,two:HTMLDivElement ){
    two.innerHTML = one.innerHTML;
    two.style.cssText = 'color : red;background-color:black;'
};