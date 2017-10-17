const express = require('express');
const app = express();
const port = 3000;

// app.get('/', function (request, response) => response.send('hello world'));
app.get('/', function (request, response) {
    response.send('hello world');
});

app.listen(port, function () {
    console.log('Example app listening on port ${port}');
});
