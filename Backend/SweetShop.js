// Backend/SweetShop.js

class SweetShop {
  constructor() {
    this.inventory = [];
  }

  addSweet(sweet) {
    this.inventory.push(sweet);
  }

  // Add this new method
  findSweetById(id) {
    return this.inventory.find(sweet => sweet.id === id);
  }
}

module.exports = SweetShop;