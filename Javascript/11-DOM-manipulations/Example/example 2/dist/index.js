var root = document.querySelector('#root');
window.addEventListener('scroll', listenToPoistion); //every time the window is being scrolled run this function
function listenToPoistion() {
    var position = root.getBoundingClientRect();
    console.log(position);
}
