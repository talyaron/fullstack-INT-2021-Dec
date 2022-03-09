const wrapper = document.querySelectorAll('.wrapper')
const box = document.querySelectorAll('.box')

console.dir(box);
console.dir(wrapper);

function testing(box){
box.forEach( a => {
   a .innerText = a.id
});


}
testing(box);