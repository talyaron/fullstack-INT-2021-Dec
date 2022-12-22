var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.use(express.static('public'));
app.get('/send-data', function (req, res) {
    res.send({ dataServer: "something" });
});
app.listen(port, function () {
    console.log("Server listening on port http://localhost:" + port);
});
