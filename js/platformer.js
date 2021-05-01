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
}
