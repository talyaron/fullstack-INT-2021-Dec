
const express = require('express');
const app = express();
const port = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render(store.html)
});

app.get('/erp', function (req, res) {
    res.render(erp.html)
});

app.listen(port, () => { `server listen on port ${port}` });