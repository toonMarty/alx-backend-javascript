const calculateNumber = require('./1-calcul.js');
const assert = require('assert');

describe('SUM', () => {
  it('returns rounded positive sum', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
    assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
    assert.strictEqual(calculateNumber('SUM', 0.3, 0.5), 1);
  });

  it('returns rounded negative sum', () => {
    assert.strictEqual(calculateNumber('SUM', -1, -8), -9);
    assert.strictEqual(calculateNumber('SUM', -2.4, -4.6), -7);
  });

  it('returns TypeError', () => {
    assert.throws(() => calculateNumber('SUM', NaN, 7.8), { name: 'TypeError' });
    assert.throws(() => calculateNumber('SUM', 7.8, NaN), { name: 'TypeError' });
    assert.throws(() => calculateNumber('SUM', NaN, NaN), { name: 'TypeError' });
  });
});

describe('SUBTRACT', () => {
  it('returns rounded positive subtract', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 3, 1), 2);
    assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 1), 3);
    assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 1.2), 3);
    assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 1.5), 2);
    assert.strictEqual(calculateNumber('SUBTRACT', 0.5, 0.3), 1);
  });

  it('returns rounded negative subtract', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', -1, -8), 7);
    assert.strictEqual(calculateNumber('SUBTRACT', -2.4, -4.6), 3);
  });

  it('returns TypeError', () => {
    assert.throws(() => calculateNumber('SUBTRACT', NaN, 7.8), { name: 'TypeError' });
    assert.throws(() => calculateNumber('SUBTRACT', 7.8, NaN), { name: 'TypeError' });
    assert.throws(() => calculateNumber('SUBTRACT', NaN, NaN), { name: 'TypeError' });
  });
});

describe('DIVIDE', () => {
  it('returns rounded positive divide', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 3, 1), 3);
    assert.strictEqual(calculateNumber('DIVIDE', 3.7, 1), 4);
    assert.strictEqual(calculateNumber('DIVIDE', 3.7, 1.2), 4);
    assert.strictEqual(calculateNumber('DIVIDE', 3.7, 1.8), 2);
    assert.strictEqual(calculateNumber('DIVIDE', 0.8, 0.6), 1);
  });

  it('returns rounded negative divide', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 8, -1), -8);
    assert.strictEqual(calculateNumber('DIVIDE', -4.4, -1.1), 4);
  });

  it('returns Error', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 3, 0), 'Error');
    assert.strictEqual(calculateNumber('DIVIDE', 3.7, 0), 'Error');
    assert.strictEqual(calculateNumber('DIVIDE', 3.7, 0), 'Error');
  });

  it('returns TypeError', () => {
    assert.throws(() => calculateNumber('DIVIDE', NaN, 7.8), { name: 'TypeError' });
    assert.throws(() => calculateNumber('DIVIDE', 7.8, NaN), { name: 'TypeError' });
    assert.throws(() => calculateNumber('DIVIDE', NaN, NaN), { name: 'TypeError' });
  });
});
