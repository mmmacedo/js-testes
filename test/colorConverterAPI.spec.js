const assert = require('assert');
const request = require('request');

describe('Teste de API de conversores de cores', function () {
    describe('Teste de conversão de RGB para HEX', function () {
        it('Teste de conversao de vermelho', function (done) {
            request('http://localhost:9000/rgb-to-hex/255/0/0', function (error, response, body) {
                assert.equal(response.statusCode, 200);
                assert.equal(body, '#ff0000');
                done();
            })
        });
    });

    describe('Teste de conversão de RGB para HEX', function () {
        it('Teste de conversao de vermelho', function (done) {
            request('http://localhost:9000/hex-to-rgb/ff0000', function (error, response, body) {
                assert.equal(response.statusCode, 200);
                assert.equal(body, '[255,0,0]');
                done();
            })
        });
    });
});