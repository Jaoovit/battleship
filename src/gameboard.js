//import { carrier, battleship, cruiser, submarine, destroyer } from "./ship";

class Gameboard {
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
    this.attack = [];
  }

  positionShip(x, y, ship, direction) {
    let shipPosition = new Array();

    if (direction === "horizontal" && y <= 10 - ship.length) {
      for (let z = 0; z <= ship.length - 1; z++) {
        shipPosition.push([x, y + z]);
      }
      this.ship.push(shipPosition);
    } else if (direction === "vertical" && x <= 10 - ship.length) {
      for (let z = 0; z <= ship.length - 1; z++) {
        shipPosition.push([x + z, y]);
      }
      this.ship.push(shipPosition);
    }
  }
  /*
  reciveAttack(x, y) {
    
  }
  */
}

let testGameboard = new Gameboard();

console.log(testGameboard);
testGameboard.positionShip(0, 0, [1, 2, 3, 4, 5], "horizontal");
testGameboard.positionShip(3, 5, [1, 2, 3, 4], "vertical")
console.log(testGameboard);

module.exports = Gameboard;
