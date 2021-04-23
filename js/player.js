let player = {
    x = 500,
    y = 10,
    size = tileSize,
    gravity = 1.001,
    v_speed = 5,
    onFloor = false,
  move() {
    if (this.checkFloor() === false) {
      this.v_speed *= this.gravity;
      this.y += this.v_speed;
    }
    keyPressed();
  },
  checkFloor() {
    return false;
  },
  render() {
    fill("red");
    rect(this.x, this.y, this.size, this.size);
  },
};
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
