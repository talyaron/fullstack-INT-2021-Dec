var box = document.querySelector('.box');
var graf = [50, 20, 30];
var schema;
var box1;
// let dup:
function duplicate(box, graf) {
    graf.forEach(function (elm) {
        schema = elm * 10;
        // console.log(schema)
        box.style.height = schema + 'px';
        var dup = box + box * elm.innerHTML;
    });
    return "" + dup;
    // let dup = box * graf.length
    // return dup
}
box.style.width = duplicate();
