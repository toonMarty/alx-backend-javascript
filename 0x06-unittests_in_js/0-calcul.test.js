const calculateNumber = require('./0-calcul.js');
const assert = require('assert');

describe('calculateNumber', () => {
  it('returns rounded positive sum', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    assert.strictEqual(calculateNumber(0.3, 0.5), 1);
  });

  it('returns rounded negative sum', () => {
    assert.strictEqual(calculateNumber(-1, -8), -9);
    assert.strictEqual(calculateNumber(-2.4, -4.6), -7);
  });

  it('returns TypeError', () => {
    assert.throws(() => calculateNumber(NaN, 7.8), { name: 'TypeError' });
    assert.throws(() => calculateNumber(7.8, NaN), { name: 'TypeError' });
    assert.throws(() => calculateNumber(NaN, NaN), { name: 'TypeError' });
  });
});
