const express = require('express');
const converter = require('./src/colorConverter');

const app = express();

app.get('/rgb-to-hex/:red/:green/:blue', function (req, res) {
    const {
        red,
        green,
        blue
    } = req.params;
    const color = converter.toHex([red, green, blue]);
    res.send(color);
});

app.get('/hex-to-rgb/:rgb', function (req, res) {
    const {
        rgb
    } = req.params;
    const color = converter.toRGB(rgb);
    res.send(color);
});

var server = app.listen(9000);
server.timeout = 500;
console.log('Server rodando em: http://localhost:9000');