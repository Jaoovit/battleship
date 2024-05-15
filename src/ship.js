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
/*
class Gameboard {
  creteBoard() {
    let board = new Array();
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        board.push([i, j]);
      }
    }
    return board;
  }

  constructor() {
    this.board = this.creteBoard();
    this.enemyBoard = this.creteBoard();
  }
}

const gameboard = new Gameboard();
console.log(gameboard.board);
console.log(gameboard.enemyBoard);
*/
const ship = new Ship(3);
ship.hit();
ship.isSunk();

ship;

module.exports = Ship;
