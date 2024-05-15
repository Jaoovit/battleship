const Gameboard = require("../src/gameboard");
const Ship = require("../src/ship");

let testGameboard = new Gameboard();
let testShip = new Ship(5);

test("Position ship in the board", () => {
  position(0, 0, testShip, "horizontal");
  expect(testGameboard.ship).toBe([
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
  ]);
});

test("Position ship in the board", () => {
  position(0, 0, testShip, "vertical");
  expect(testGameboard.ship).toBe([
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
  ]);
});
