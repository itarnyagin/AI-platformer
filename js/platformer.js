let tiles;
let btn;
let gridSize = 50;
function preload() {
  img = loadImage("../assets/bitmap.png  ");
  sprite = loadImage("../assets/spinache.jpg");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  btn = createButton("GUI");
  btn.position(0, 0);
  btn.mouseClicked(() => {
    gui = !gui;
  });
  // player
  player = new Player(100, 0);
}

function draw() {
  // style and colors
  background("lightblue");
  fill(0);
  stroke(255);

  // utilities
  if (gui) {
    utils.grid(gridSize);
    strokeWeight(1);
    utils.placeTile(mouseX, mouseY);
    strokeWeight(1);
  } else {
    strokeWeight(0);
  }

  // render tiles
  fill("purple");
  tiles.render();
  // helper text
  utils.helperText();
  // player dynamics
  player.render();
}
