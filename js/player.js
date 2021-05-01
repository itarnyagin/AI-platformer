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
      if (player.y >= tile.y - gridSize) {
        player.y = 0;
      }
    }
  }
  render() {
    fill("black");
    image(sprite, this.x, this.y, gridSize, gridSize);
  }
}
