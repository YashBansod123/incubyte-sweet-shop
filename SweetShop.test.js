// SweetShop.test.js

const Sweet = require('./Sweet'); // This line will fail because Sweet.js doesn't exist yet

describe('Sweet', () => {
  it('should create a sweet with a name and price', () => {
    const sweet = new Sweet('Jalebi', 150);
    expect(sweet.name).toBe('Jalebi');
    expect(sweet.price).toBe(150);
  });
});