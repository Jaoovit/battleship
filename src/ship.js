class Ship {
  constructor(length) {
    this.length = length;
    this.size = new Array(length).fill(0);
    this.hits = 0;
    this.sunk = false;
  }

  hit() {
    this.hits++;
    return this.hits;
  }

  isSunk() {
    if (this.hits >= this.length) {
      this.sunk = true;
      this.sunk;
    }
    return this.sunk;
  }
}

const carrier = new Ship(5);
const battleship = new Ship(4);
const cruiser = new Ship(3);
const submarine = new Ship(3);
const destroyer = new Ship(2);

module.exports = Ship;
