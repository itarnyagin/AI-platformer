let tiles;
let btn;
let gridSize = 50;
function setup() {
  createCanvas(windowWidth, windowHeight);
  btn = createButton("GUI");
  btn.position(0, 0);
  btn.mouseClicked(() => {
    gui = !gui;
  });
}

function draw() {
  // style and colors
  background("pink");
  fill(0);
  strokeWeight(4);
  stroke(255);

  // utilities
  utils.helperText();
  if (gui) {
    utils.grid(gridSize);
    utils.placeTile(mouseX, mouseY, gridSize);
  }

  // render tiles
  fill("green");
  tiles.render();
}
