let gridSize = 50;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // style and colors
  background("pink");
  fill(0);
  strokeWeight(4);
  stroke(255);

  // rendering
  utils.grid(gridSize);
  utils.helperText();
  utils.gui(mouseX, mouseY, gridSize);

  // render tiles
  fill("green");
  drawTiles();
}
