"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 4001;
app.use(express["static"]('public'));
app.get('/', function (req, res) {
  res.render(store.html);
});
app.get('/erp', function (req, res) {
  res.render(erp.html);
});
app.listen(port, function () {
  "server listen on port ".concat(port);
});