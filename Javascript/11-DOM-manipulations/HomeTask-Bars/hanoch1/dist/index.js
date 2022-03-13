var graf = [50, 100, 60];
var Bar = document.querySelector('.bar');
console.log(Bar);
var schema;
graf.forEach(function (elm) {
    Bar.style.height = elm * 2 + 'px';
    //  const dup = Bar * graf.length;
    //  console.log(dup)
    // // const node = Bar.lastChild
    var clone = Bar.cloneNode(true);
    document.body.appendChild(clone);
});
