class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.sunk = false;
  }
}

const normalShip = new Ship(3);

normalShip;

module.exports = { Ship };
