// Backend/SweetShop.test.js

const Sweet = require('./Sweet.js');
const SweetShop = require('./SweetShop.js');

// This block is ONLY for testing the Sweet class itself
// ...and change it to this to add quantity
describe('Sweet', () => {
  it('should create a sweet with an id, name, price, and quantity', () => {
    const sweet = new Sweet(1, 'Jalebi', 150, 10); // Added quantity: 10
    expect(sweet.id).toBe(1);
    expect(sweet.name).toBe('Jalebi');
    expect(sweet.price).toBe(150);
    expect(sweet.quantity).toBe(10); // Check for quantity
  });
});

// This block is for ALL tests related to the SweetShop
describe('SweetShop', () => {
  it('should add a sweet to the inventory', () => {
    const shop = new SweetShop();
    const jalebi = new Sweet(1, 'Jalebi', 150); // Using the correct constructor
    shop.addSweet(jalebi);
    expect(shop.inventory).toHaveLength(1);
    expect(shop.inventory[0]).toBe(jalebi);
  });

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
    const foundSweet = shop.findSweetById(99);
    expect(foundSweet).toBeUndefined();
  });
});