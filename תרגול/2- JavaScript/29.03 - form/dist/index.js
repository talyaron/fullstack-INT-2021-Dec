var root = document.querySelector('.root');
var users = [
    { username: "Dorit", password: "123" }
];
function hendleReg(e) {
    e.preventDefault();
    console.log(e);
    var username = e.target.children.userName.value;
    var password = e.target.children.password.value;
    var confirmPassword = e.target.children.confirmPassword.value;
    for (var i = 0; i < users.length; i++) {
        if (users[i].username == username) {
            console.log('exist');
        }
        else {
            console.log('not exist');
            if (password === confirmPassword) {
                console.log('pass the same');
            }
            else {
                console.log("pass not the same");
            }
        }
    }
    users.push({ username: username, password: password });
    console.log(users);
}
function hendleLogin(e) {
    e.preventDefault();
    try {
        var username = e.target.children.userName.value;
        var password = e.target.children.password.value;
        console.log(username, password);
        for (var i = 0; i < users.length; i++) {
            if (users[i].username === username && users[i].password === password) {
                console.log('hi');
                root.innerHTML = "\n                <h1>\n                    hi\n                </h1>\n                ";
            }
            else {
                root.innerHTML = "\n                <h1>\n                    User not found\n                </h1>\n                ";
            }
        }
    }
    catch (error) {
        console.log(error);
    }
}
