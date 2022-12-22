var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.use(express.static('public'));
var users = [
    { name: 'Moshe', age: 23 },
    { name: 'Miriam', age: 33 },
    { name: "Aharon", age: 26 }
];
app.get('/api/user1', function (req, res) {
    try {
        res.send({ user: users[0] });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
//route for user 2
app.get('/api/user2', function (req, res) {
    try {
        setTimeout(function () {
            res.send({ user: users[1] });
        }, 3000);
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.get('/api/user3', function (req, res) {
    try {
        res.send({ user: users[2] });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
