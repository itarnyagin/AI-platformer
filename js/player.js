class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.gravity = 10;
    this.onFloor = false;
  }
  move() {
    // gravity
    this.y += 10;
    // input
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 5;
    }
    if (keyIsDown(UP_ARROW)) {
      this.y -= 15;
    }
  }
  collide() {
    let mapSize = Object.size(tiles.tileMap);
    for (let i = 0; i < mapSize; i++) {
      let tile = utils.getTile(i);
      //scenario a: player is on top of a block
      if (
        this.y > tile.y - gridSize &&
        this.y < tile.y + gridSize &&
        this.x + gridSize > tile.x &&
        this.x < tile.x + gridSize
      ) {
        this.y = tile.y - gridSize;
        this.onFloor = true;
      }
    }
  }
  render() {
    fill("black");
    image(sprite, this.x, this.y, gridSize, gridSize);
  }
}
