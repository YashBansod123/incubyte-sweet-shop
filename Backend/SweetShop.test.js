// Backend/SweetShop.test.js

const Sweet = require('./Sweet.js');
const SweetShop = require('./SweetShop.js');

describe('Sweet', () => {
  it('should find a sweet by its ID', () => {
  const shop = new SweetShop();
  const jalebi = new Sweet(1, 'Jalebi', 150);
  const gulabJamun = new Sweet(2, 'Gulab Jamun', 200);
  shop.addSweet(jalebi);
  shop.addSweet(gulabJamun);

  const foundSweet = shop.findSweetById(2);
  expect(foundSweet.name).toBe('Gulab Jamun');
});

it('should return undefined if a sweet is not found by ID', () => {
  const shop = new SweetShop();
  const jalebi = new Sweet(1, 'Jalebi', 150);
  shop.addSweet(jalebi);

  const foundSweet = shop.findSweetById(99); // An ID that doesn't exist
  expect(foundSweet).toBeUndefined();
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