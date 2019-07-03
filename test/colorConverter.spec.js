const assert = require('assert');
const colorConverter = require('../src/colorConverter');

describe('Teste de conversores de cores', function () {

    describe('Teste de conversão de RGB para HEX', function () {
        it('Teste de conversao de vermelho', function () {
            const colorRGB = [255, 0, 0];
            const colorHex = colorConverter.toHex(colorRGB);
            assert.equal(colorHex, '#ff0000');
        });

        it('Teste de conversao de Verde', function () {
            const colorRGB = [0, 255, 0];
            const colorHex = colorConverter.toHex(colorRGB);
            assert.equal(colorHex, '#00ff00');
        });

        it('Teste de conversao de Azul', function () {
            const colorRGB = [00, 00, 255];
            const colorHex = colorConverter.toHex(colorRGB);
            assert.equal(colorHex, '#0000ff');
        });

        it('Teste de conversao de cor aleatória', function () {
            const colorRGB = [10, 20, 30];
            const colorHex = colorConverter.toHex(colorRGB);
            assert.equal(colorHex, '#0a141e');
        });
    });

    describe('Teste de conversão de HEX para RGB', function () {
        it('Teste de conversao de vermelho', function () {
            const colorHex = '#ff0000';
            const colorRGB = colorConverter.toRGB(colorHex);
            assert.deepEqual(colorRGB, [255, 0, 0]);
        });

        it('Teste de conversao de Verde', function () {
            const colorHex = '#00ff00';
            const colorRGB = colorConverter.toRGB(colorHex);
            assert.deepEqual(colorRGB, [0, 255, 0]);
        });

        it('Teste de conversao de Azul', function () {
            const colorHex = '#0000ff';
            const colorRGB = colorConverter.toRGB(colorHex);
            assert.deepEqual(colorRGB, [0, 0, 255]);
        });

        it('Teste de conversao de Aleatório', function () {
            const colorHex = '#0a141e';
            const colorRGB = colorConverter.toRGB(colorHex);
            assert.deepEqual(colorRGB, [10, 20, 30]);
        });
    });
});