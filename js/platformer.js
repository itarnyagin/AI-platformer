let tiles;
let btn_gui;
let btn_start;
let start = false;
let gridSize = 50;
function preload() {
  img = loadImage("../assets/bitmap.png  ");
  sprite = loadImage("../assets/spinache.jpg");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  // gui button
  btn_gui = createButton("GUI");
  btn_gui.position(0, 0);
  btn_gui.mouseClicked(() => {
    gui = !gui;
  });
  // start button
  btn_start = createButton("START");
  btn_start.position(0, 35);
  btn_start.mouseClicked(() => {
    start = true;
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
  if (start) {
    player.move();
    player.collide();
  }
  player.render();
}

function keyPressed() {
  if (key == "g") {
    gui = !gui;
  }
  if (key == "s") {
    start = true;
  }
}
