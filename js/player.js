class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  move() {}
  collide() {}
  render() {
    fill("black");
    rect(this.x, this.y, gridSize, gridSize);
    image(sprite, this.x, this.y, gridSize * 1.5, gridSize * 1.5);
  }
}
