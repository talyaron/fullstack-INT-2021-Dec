var result = {};
function handleSend(ev) {
    ev.preventDefault();
    var elements = ev.target.elements;
    // console.log(elements)
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].name && elements[i].value) {
            result[elements[i].name] = elements[i].value;
        }
    }
    var img = document.querySelector("#root");
    var value = result['img'];
    img.innerHTML = "<img src=\"" + value + "\" width=\"100px\" hight=\"100px\"/>";
    if (result['pass'] == result['repass']) {
        alert('ok');
    }
}
