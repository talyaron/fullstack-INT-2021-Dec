"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 4005;
app.use(express["static"](__dirname + '/public'));
app.get('/', function (req, res) {
  res.send('hi');
});
app.listen(port, function () {
  console.log("Express is listening at ".concat(port));
});