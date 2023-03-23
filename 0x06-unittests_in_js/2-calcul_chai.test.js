const calculateNumber = require('./2-calcul_chai.js');
const { expect } = require('chai');

describe('SUM', () => {
  it('returns rounded positive sum', () => {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    expect(calculateNumber('SUM', 0.3, 0.5)).to.equal(1);
  });

  it('returns rounded negative sum', () => {
    expect(calculateNumber('SUM', -1, -8)).to.equal(-9);
    expect(calculateNumber('SUM', -2.4, -4.6)).to.equal(-7);
  });

  it('returns TypeError', () => {
    expect(() => calculateNumber('SUM', NaN, 7.8)).to.throw(TypeError);
    expect(() => calculateNumber('SUM', 7.8, NaN)).to.throw(TypeError);
    expect(() => calculateNumber('SUM', NaN, NaN)).to.throw(TypeError);
  });
});

describe('SUBTRACT', () => {
  it('returns rounded positive subtract', () => {
    expect(calculateNumber('SUBTRACT', 3, 1)).to.equal(2);
    expect(calculateNumber('SUBTRACT', 3.7, 1)).to.equal(3);
    expect(calculateNumber('SUBTRACT', 3.7, 1.2)).to.equal(3);
    expect(calculateNumber('SUBTRACT', 3.7, 1.5)).to.equal(2);
    expect(calculateNumber('SUBTRACT', 0.5, 0.3)).to.equal(1);
  });

  it('returns rounded negative subtract', () => {
    expect(calculateNumber('SUBTRACT', -1, -8)).to.equal(7);
    expect(calculateNumber('SUBTRACT', -2.4, -4.6)).to.equal(3);
  });

  it('returns TypeError', () => {
    expect(() => calculateNumber('SUBTRACT', NaN, 7.8)).to.throw(TypeError);
    expect(() => calculateNumber('SUBTRACT', 7.8, NaN)).to.throw(TypeError);
    expect(() => calculateNumber('SUBTRACT', NaN, NaN)).to.throw(TypeError);
  });
});

describe('DIVIDE', () => {
  it('returns rounded positive divide', () => {
    expect(calculateNumber('DIVIDE', 3, 1)).to.equal(3);
    expect(calculateNumber('DIVIDE', 3.7, 1)).to.equal(4);
    expect(calculateNumber('DIVIDE', 3.7, 1.2)).to.equal(4);
    expect(calculateNumber('DIVIDE', 3.7, 1.8)).to.equal(2);
    expect(calculateNumber('DIVIDE', 0.8, 0.6)).to.equal(1);
  });

  it('returns rounded negative divide', () => {
    expect(calculateNumber('DIVIDE', 8, -1)).to.equal(-8);
    expect(calculateNumber('DIVIDE', -4.4, -1.1)).to.equal(4);
  });

  it('returns Error', () => {
    expect(calculateNumber('DIVIDE', 3, 0), 'Error');
    expect(calculateNumber('DIVIDE', 3.7, 0), 'Error');
    expect(calculateNumber('DIVIDE', 3.7, 0), 'Error');
  });

  it('returns TypeError', () => {
    expect(() => calculateNumber('DIVIDE', NaN, 7.8)).to.throw(TypeError);
    expect(() => calculateNumber('DIVIDE', 7.8, NaN)).to.throw(TypeError);
    expect(() => calculateNumber('DIVIDE', NaN, NaN)).to.throw(TypeError);
  });
});
