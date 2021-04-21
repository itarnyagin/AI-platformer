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
    // gravity
    if (this.v_speed == 0) {
      this.v_speed += 10;
    }
    this.v_speed *= this.gravity;
    this.y += this.v_speed;

    // collision with floor
    if (this.y > f_height - tileSize) {
      this.y = f_height - tileSize;
      this.v_speed = 0;
    }
    // check keyboard input
    keyPressed();
  }
  render() {
    fill("red");
    rect(this.x, this.y, this.size, this.size);
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
}

// *TODO make isOnFloor function, and add vertical velocity function n shit
