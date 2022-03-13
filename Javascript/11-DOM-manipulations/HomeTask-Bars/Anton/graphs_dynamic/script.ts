const array = [100, 56, 89, 75, 36, 69, 33];
const max= Math.max(...array);

const wrapper = document.querySelector('.wrapper');
let width = '80vw';

let h = window.innerHeight*0.6 + 'px';


const wrapperStyle=wrapper.style;
wrapperStyle.width = width;
wrapperStyle.height = h;

wrapperStyle.backgroundColor ='rgba(254,162,22,0.1)';
wrapperStyle.border = '0.1rem solid black';
wrapperStyle.display = 'flex';
wrapperStyle.justifyContent = 'space-between';
wrapperStyle.alignItems = 'flex-end';
wrapperStyle.margin = 'auto';


const text= document.createTextNode('graph');
const par = document.createElement('P');




par.appendChild(text)
wrapper.appendChild(par)

array.forEach(element => {
    const bar = document.createElement('div');
    const barStyle = bar.style;
    
    barStyle.width = '3rem';
    barStyle.backgroundColor = 'red';
    console.log('i')
    barStyle.height= ((element/max)*100) + '%';
    wrapper.appendChild(bar) 
})

