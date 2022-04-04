var result = {};
var user, _a = void 0;
var manager = {
    name: "Tal Yaron",
    username: "tal",
    password: "1234"
};
function handleUser(ev) {
    ev.preventDefault();
    var details = ev.target.elements;
    console.dir(ev);
    for (var i = 0; i < details.length; i++) {
        if (details[i].name && details[i].value) {
            result[details[i].name] = details[i].value;
        }
    }
    console.log("name from form " + result['name']);
    console.log("name from array " + manager['name']);
    console.log("password from form " + result['pass']);
    console.log("password from arry " + manager['password']);
    if (result['name'] === manager["name"] && result['pass'] === manager['password']) {
        console.log('its ok');
        root = document.querySelector("#root");
        root.innerHTML = "<a src=\"director.html\"></a>";
    }
}
