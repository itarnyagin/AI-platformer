let tiles = [];
let tile;
let tileNum = 0;
let f_height;
let tileSize = 50;
let numOfTiles;
let player;
let reward;

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20);

  f_height = windowHeight - 100;
  numOfTiles = width / tileSize;
  c_floor(numOfTiles);
  player = new Player();
  reward = new Reward(1000, f_height - tileSize, tileSize);
}

function draw() {
  background(220);
  fill(0);
  strokeWeight(4);
  stroke(255);

  for (let tile of tiles) {
    tile.display(); // draw tile
  }
  player.move();
  player.render();
  reward.render();
  reward.col(player.x, player.y);
}

// tile class
class Tile {
  constructor(y, size, enemy) {
    this.x = tileNum * tileSize;
    this.y = y;
    this.size = size;
    this.enemy = enemy;
  }
  display() {
    rect(this.x, this.y, this.size, this.size);
  }
}

function c_floor(num) {
  for (let i = 0; i < num; i++) {
    tiles.push(new Tile(f_height, 50, tileSize));
    tileNum++;
  }
}
