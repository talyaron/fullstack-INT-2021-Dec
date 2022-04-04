var result = {};
var user, _a = void 0;
var manager = {
    name: "tal Yaron",
    username: "tal",
    password: "1234"
};
function handleUser(ev) {
    ev.preventDefault();
    var details = ev.target.elements;
    for (var i = 0; i < details.length; i++) {
        if (details[i].name && details[i].value) {
            result[details[i].name] = details[i].value;
        }
    }
    console.log(result['name']);
    if (result['name'] === manager['username'] && result['pass'] === manager['password']) {
        window.location.href = "./index1.html";
    }
}
var handleNew = function (ev) {
    var root = document.querySelector("#root");
    root.innerHTML = "<div id=\"newitem\">\n                                <form action=\"\" >\n                                    <input type=\"text\" name=\"typeName\" placeholder=\"enter type of item\" onchange=\"handleItem1(event)\" >\n                                    <input type=\"file\" onchange=\"loadImg(event)\" id=\"file\" style=\"display: none;\">\n                                    <p><img id=\"output\" width=\"200\" /></p>\n                                    <p><label for=\"file\" style=\"cursor: pointer;\" onclick=\"handleHidden(event)\">Upload Image</label></p>\n                                    <input type=\"number\" name=\"price\" placeholder=\"inter a price\" onchange=\"handleItem0(event)\" >\n\n                                </form>\n                                \n                                <div id=\"addItemName\"></div>\n                                <div id=\"addItemPrice\"></div>\n                                </div>\n                                <button onclick=\"handleDelete(event)\"> delete item</button>";
};
var loadImg = function (event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
};
function handleHidden(ev) {
    ev.target.hidden = true;
}
function handleItem1(ev) {
    console.log(ev);
    var content = ev.target.value;
    var div = document.querySelector("#addItemName");
    div.innerHTML = "<p>" + content + "</p>";
    ev.target.hidden = true;
}
function handleItem0(ev) {
    console.log(ev);
    var content = ev.target.value;
    var div = document.querySelector("#addItemPrice");
    div.innerHTML = "<p>" + content + " \u05E9\"\u05D7</p>";
    ev.target.hidden = true;
}
function handleDelete(ev) {
    var catchItem = document.querySelector("#newitem");
    console.log(catchItem);
    catchItem.innerHTML = "";
    ev.target.hidden = true;
}
