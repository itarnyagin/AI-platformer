tiles = {
  tileMap: {},
  render() {
    for (let i = 0; i < Object.size(tiles.tileMap); i++) {
      let tile = utils.getTile(i);
      rect(tile.x, tile.y, tile.s, tile.s);
      image(img, tile.x, tile.y, tile.s, tile.s);
    }
  },
};

tiles.tileMap = {
  "0,7": {
    x: 0,
    y: 350,
    s: 50,
  },
  "1,7": {
    x: 50,
    y: 350,
    s: 50,
  },
  "2,7": {
    x: 100,
    y: 350,
    s: 50,
  },
  "3,7": {
    x: 150,
    y: 350,
    s: 50,
  },
  "4,7": {
    x: 200,
    y: 350,
    s: 50,
  },
  "5,7": {
    x: 250,
    y: 350,
    s: 50,
  },
  "6,7": {
    x: 300,
    y: 350,
    s: 50,
  },
  "7,7": {
    x: 350,
    y: 350,
    s: 50,
  },
};
