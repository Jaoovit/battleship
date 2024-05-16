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
    let shipPosition = new Array();

    if (direction === "horizontal" && y <= 10 - ship.length) {
      for (let z = 0; z <= ship.length - 1; z++) {
        shipPosition.push([x, y + z]);
      }
      return shipPosition;
    } else if (direction === "vertical" && x <= 10 - ship.length) {
      for (let z = 0; z <= ship.length - 1; z++) {
        shipPosition.push([x + z, y]);
      }
      return shipPosition;
    }
  }
}

let testGameboard = new Gameboard();

console.log(testGameboard);
console.log(testGameboard.positionShip(0, 5, [1, 2, 3, 4], "vertical"));

module.exports = Gameboard;
