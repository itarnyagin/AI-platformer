class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.gravity = 10;
    this.onFloor = true;
  }
  move() {
    // gravity
    if (!this.onFloor) {
      this.y += 10;
    }
    // input
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 5;
    }
  }
  collide() {
    let mapSize = Object.size(tiles.tileMap);
    for (let i = 0; i < mapSize; i++) {
      let tile = utils.getTile(i);
      //scenario a: player is on top of a block
      if (
        player.y > tile.y - gridSize &&
        player.y < tile.y + gridSize &&
        player.x + gridSize > tile.x &&
        player.x < tile.x + gridSize
      ) {
        player.y = tile.y - gridSize;
      }
    }
  }
  render() {
    fill("black");
    image(sprite, this.x, this.y, gridSize, gridSize);
  }
}
