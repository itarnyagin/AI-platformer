class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.gravity = 10;
    this.onFloor = true;
  }
  move() {
    if (!this.onFloor) {
      this.y += 10;
    }
  }
  collide() {
    let mapSize = Object.size(tiles.tileMap);
    for (let i = 0; i < mapSize; i++) {
      let tile = utils.getTile(i);
      //scenario a: player is on top of a block
      if (
        player.y + gridSize > tile.y &&
        player.x + gridSize > tile.x &&
        player.x < tile.x + gridSize
      ) {
        player.y = tile.y - gridSize;
      }
      // scenario c: player is under a block
    }
  }
  render() {
    fill("black");
    image(sprite, this.x, this.y, gridSize, gridSize);
  }
}
