const Gameboard = require("../src/gameboard");
const Ship = require("../src/ship");

let testGameboard = new Gameboard();
let testShip = new Ship(5);

test("Position ship in the board", () => {
  testGameboard.positionShip(0, 0, testShip.size, "horizontal");
  expect(testGameboard.ship).toStrictEqual([
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
  ]);
});

test("Position ship in the board", () => {
  testGameboard.positionShip(0, 0, testShip.size, "vertical");
  expect(testGameboard.ship).toStrictEqual([
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
  ]);
});
/*
test("Recive Attack", () => {
  testGameboard.reciveAttack(0, 0);
  expect(testGameboard.attack).toBe([0,0]);
})
*/