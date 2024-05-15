class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.sunk = false;
  }

  hit() {
    this.hits++;
    return this;
  }

  isSunk() {
    if (this.hits >= this.length) {
      this.sunk = true;
    }
    return this;
  }
}

const ship = new Ship(3);
ship.hit();
ship.isSunk();

ship;

module.exports = { Ship };
