// Backend/SweetShop.js

class SweetShop {
  constructor() {
    this.inventory = [];
  }

  addSweet(sweet) {
    this.inventory.push(sweet);
  }
}

module.exports = SweetShop;