class Ship {
  constructor(length) {
    this.length = length;
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

export const carrier = new Ship(5);
export const battleship = new Ship(4);
export const cruiser = new Ship(3);
export const submarine = new Ship(3);
export const destroyer = new Ship(2);

module.exports = Ship;
