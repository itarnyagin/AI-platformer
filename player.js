class Player {
  constructor() {
    this.x = 500;
    this.y = 10;
    this.size = tileSize;
    this.gravity = 1.005;
    this.v_speed = 0;
    this.onFloor = false;
  }
  move() {
    if (!this.onFloor) {
      this.v_speed == 0 ? (this.v_speed = 10) : this.v_speed;
      this.y += this.v_speed;
      this.v_speed *= this.gravity;
      checkFloor(this.x, this.y);
    }
    // check keyboard input
    keyPressed();
  }
  render() {
    fill("red");
    rect(this.x, this.y, this.size, this.size);
  }
}
function checkFloor(x, y) {
  if (y > f_height - tileSize) {
    player.y = f_height - tileSize;
    this.onFloor = true;
    v_speed = 0;
  }
}
function keyPressed() {
  // move left - right
  if (keyIsDown(LEFT_ARROW)) {
    player.x -= 10;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    player.x += 10;
  }
  if (player.onFloor) {
    if (keyIsDown(UP_ARROW)) {
      player.y -= 50;
    }
  }
}

// *TODO make shit work
