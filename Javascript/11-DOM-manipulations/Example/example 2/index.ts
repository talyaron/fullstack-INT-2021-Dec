const root = document.querySelector('#root');

window.addEventListener('scroll',listenToPoistion);

function listenToPoistion(){
  
   
    const position:DOMRect = root.getBoundingClientRect()
    console.log(position.y)
}