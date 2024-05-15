//import { carrier, battleship, cruiser, submarine, destroyer } from "./ship";

export class Gameboard {
  createBoard() {
    let theBoard = new Array();
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        theBoard.push([i, j]);
      }
    }
    return theBoard;
  }

  constructor() {
    this.board = this.createBoard();
    this.ship = [];
  }

  positionShip(x, y, ship, direction) {
    for (let z = 0; z <= ship.length - 1; z++) {
      if (direction === "horizontal" && y <= 10 - ship.length)
        console.log([x, y + z]);

      if (direction === "vertical" && x <= 10 - ship.length)
        console.log([x + z, y]);
    }
  }
}

let testGameboard = new Gameboard();

console.log(testGameboard);
console.log(testGameboard.positionShip(0, 5, [1, 2, 3], "vertical"));

module.exports = Gameboard;
