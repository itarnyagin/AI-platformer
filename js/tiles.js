class Tile {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.s = s;
  }
}
tiles = {
  tileMap: {
    "3,2": { x: 300, y: 200, s: 50 },
    "3,4": { x: 300, y: 400, s: 50 },
    "2,2": { x: 200, y: 200, s: 50 },
    "2,3": { x: 200, y: 300, s: 50 },
  },
  render() {
    for (let i = 0; i < Object.size(tiles.tileMap); i++) {
      rect(getTile(i).x, getTile(i).y, getTile(i).s, getTile(i).s);
    }
  },
};

function getTile(n, o = tiles.tileMap) {
  let index = Object.keys(o)[n];
  let tile = tiles.tileMap[index];
  return tile;
}
