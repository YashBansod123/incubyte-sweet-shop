// Backend/SweetShop.test.js

const Sweet = require('./Sweet.js');
const SweetShop = require('./SweetShop.js');

describe('Sweet', () => {
  it('should create a sweet with a name and price', () => {
    const sweet = new Sweet('Jalebi', 150);
    expect(sweet.name).toBe('Jalebi');
    expect(sweet.price).toBe(150);
  });
});

describe('SweetShop', () => {
  it('should add a sweet to the inventory', () => {
    const shop = new SweetShop();
    const jalebi = new Sweet('Jalebi', 150);

    shop.addSweet(jalebi);

    expect(shop.inventory).toHaveLength(1);
    expect(shop.inventory[0]).toBe(jalebi);
  });
});