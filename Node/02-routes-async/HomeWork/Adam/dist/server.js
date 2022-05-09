var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.use(express.static('public'));
var jokes = [
    { joke: 'Hapoel Tel Aviv' },
    { joke: 'Rest in peace boiling water. You will be mist!' },
    { joke: 'If we shouldnt eat at night, why do they put a light in the fridge?' }
];
app.get('/api/joke1', function (req, res) {
    try {
        res.send({ user: jokes[0] });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.get('/api/joke2', function (req, res) {
    try {
        {
            res.send({ user: jokes[1] });
        }
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.get('/api/joke3', function (req, res) {
    try {
        res.send({ user: jokes[2] });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
