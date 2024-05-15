const { Ship } = require("../src/ship.js");

test.todo("the output is a correct ship"),
  () => {
    expect(new Ship(3)).toEqual({
      length: 3,
      hits: 0,
      sunk: false,
    });
  };
