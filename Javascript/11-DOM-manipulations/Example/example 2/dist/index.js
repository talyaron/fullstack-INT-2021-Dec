var root = document.querySelector('#root');
window.addEventListener('scroll', listenToPoistion);
function listenToPoistion() {
    var position = root.getBoundingClientRect();
    console.log(position.y);
}
