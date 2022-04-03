var result = {};
var user, _a = void 0;
var manager = {
    name: "tal Yaron",
    username: "tal",
    password: "1234"
};
function handleUser(ev) {
    var details = ev.target.elements;
    for (var i = 0; i < details.length; i++) {
        if (details[i].name && details[i].value) {
            result[details[i].name] = details[i].value;
        }
    }
    if (result['name'] === manager["username"] && result['pass'] === manager['password']) {
    }
}
