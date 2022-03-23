function createList(rootElement, numberOfElements) {
    try {
        var html = "<div class='list'>";
        for (var i = 0; i < numberOfElements; i++) {
            html += createElement(i);
        }
        html += "</div>";
        rootElement.innerHTML = html;
    }
    catch (err) {
        console.error(err);
    }
    finally {
        console.log("Do it anaway");
    }
}
function createElement(id) {
    return "<div id=\"id-" + id + "\">" + id + ": <button onclick='handleDeleteMe(event)' name='aaa'>DELETE ME</button><input type='color' onchange='handleChangeColor(event)' /></div>";
}
var root = document.querySelector("#root");
createList(root, 25);
function handleDeleteMe(ev) {
    console.dir(ev);
    ev.target.parentNode.remove();
}
function handleChangeColor(ev) {
    try {
        console.dir(ev);
        var value = ev.target.value;
        var parentNode = ev.target.parentNode.children.aaa;
        parentNode.style.color = value;
    }
    catch (err) {
        console.error(err);
    }
}
