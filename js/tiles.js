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

tiles.tileMap = {};
