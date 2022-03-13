var array = [130, 105, 63, 200, 300, 700];
var graphs = document.querySelectorAll('.graph');
function arrayCoeffic(list) {
    var coefficient = [];
    var max = Math.max.apply(Math, list);
    for (var i = 0; i < list.length; i++) {
        coefficient[i] = (((list[i]) / max) * 100 + '%');
    }
    return coefficient;
}
function graphChangeVisual(divs, coeffic) {
    for (var i = 0; i < coeffic.length; i++) {
        divs[i].style.height = coeffic[i];
        divs[i].innerHTML = "<p>" + array[i] + "</p>";
    }
}
graphChangeVisual(graphs, arrayCoeffic(array));
