class Tile {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.s = s;
  }
}

let tileMap = {
  "3,3": { x: 300, y: 200, s: 50 },
  "3,4": { x: 300, y: 400, s: 50 },
  "2,2": { x: 200, y: 200, s: 50 },
  "2,3": { x: 200, y: 300, s: 50 },
};
let wrongMap = new Map();
wrongMap["bla"] = "blaa";
wrongMap["bla2"] = "blaaa2";
