class Tile {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.s = s;
  }
}
tiles = {
  tileMap: {},
  render() {
    let mapSize = Object.size(tiles.tileMap);
    for (let i = 0; i < mapSize; i++) {
      rect(getTile(i).x, getTile(i).y, getTile(i).s, getTile(i).s);
    }
  },
};

function getTile(n, o = tiles.tileMap) {
  let index = Object.keys(o)[n];
  let tile = tiles.tileMap[index];
  return tile;
}
