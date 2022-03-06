//    const boxs:any = document.querySelectorAll('.box');
//    console.dir(boxs)
//    boxs.forEach(element=>{
//        element.textContent = element.id
//        console.log(element.id)
//    })
function copyIdtoText() {
    var boxs = document.querySelectorAll('.box');
    console.dir(boxs);
    boxs.forEach(function (element) {
        element.textContent = element.id;
        console.log(element.id);
    });
}
