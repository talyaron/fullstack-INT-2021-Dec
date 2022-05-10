var express = require('express');
var app = express();
var port = process.env.PORT || 4000;
app.use(express.static('public'));
var jokes = [
    { name: "joke1", src: "./images/splash class room image.jpg" },
    { name: "joke2", src: "./images/splash class room image.jpg" },
    { name: "joke3", src: "./images/splash class room image.jpg" }
];
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
