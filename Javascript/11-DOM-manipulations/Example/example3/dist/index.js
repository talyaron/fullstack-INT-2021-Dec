var elm1 = document.querySelector('.elm1');
var elm2 = document.querySelector('.elm2');
var elm2p = { leftPosition: elm2.getBoundingClientRect().x };
console.log(elm2p);
var elm1p = {
    leftPosition: elm1.getBoundingClientRect().x,
    rightPosition: elm1.getBoundingClientRect().right
};
if (elm2p.leftPosition > elm1p.leftPosition && elm2p.leftPosition < elm1p.rightPosition) {
    console.log('Overlap');
}
else {
    console.log('no Overlap');
}
