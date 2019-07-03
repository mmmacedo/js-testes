const assert = require('assert');
const counter = require('../src/counter');

describe('Testando contador', function () {

    beforeEach(function () {
        counter.count = 0;
    })

    it('Contador deve iniciar com valor zero', function () {
        const conterResult = counter.count;
        assert.equal(conterResult, 0);
    });

    it('Teste de incremento', function () {
        const conterResult = counter.increment();
        assert.equal(conterResult, 1);
    });

    it('Teste de decremento', function () {
        const conterResult = counter.decrement();
        assert.equal(conterResult, -1);
    });

    it('Teste de incremento de valor', function () {
        let randomValue = Math.floor((Math.random() * 10) + 1);
        const conterResult = counter.incrementValue(randomValue);
        assert.equal(conterResult, randomValue);
    });

    it('Teste de decremento de valor', function () {
        let randomValue = Math.floor((Math.random() * 10) + 1);
        const conterResult = counter.decrementValue(randomValue);
        assert.equal(conterResult, randomValue);
    });
});