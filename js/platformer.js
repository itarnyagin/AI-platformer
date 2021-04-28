let tiles;
let tileMap;
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

  // rendering
  utils.grid(gridSize);
  utils.helperText();

  // render tiles
  fill("green");
  tiles.render();
}
