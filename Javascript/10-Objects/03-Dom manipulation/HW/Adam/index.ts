const TopSec = document.querySelector('.top') as HTMLDivElement;
const DownSec = document.querySelector('.down') as HTMLDivElement;


function transfer (one:HTMLDivElement,two:HTMLDivElement ){
    two.innerHTML = one.innerHTML;
   
};