class Player {
  constructor() {
    this.x = 500;
    this.y = 10;
    this.size = tileSize;
    this.gravity = 1.005;
    this.v_speed = 10;
  }
  move() {
    // gravity
    this.v_speed *= this.gravity;
    this.y += this.v_speed;

    // collition with floor
    if (this.y > f_height - tileSize) {
      this.y = f_height - tileSize;
    }
    keyPressed();
  }
  render() {
    fill("red");
    rect(this.x, this.y, this.size, this.size);
  }
}

function keyPressed() {
  if (keyIsDown(LEFT_ARROW)) {
    player.x -= 10;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    player.x += 10;
  }
}
