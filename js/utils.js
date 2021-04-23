let x_cor;
let y_cor;
let ts;
let showGrid = false;
let utils = {
  grid(size) {
    if (showGrid) {
      for (var i = 0; i < width; i += size) {
        line(i, 0, i, height);
        line(width, i, 0, i);
      }
    }
  },
  helperText() {
    fill("black");
    textSize(20);
    text(tiles.length, 10, 50);
    text("value 2", 10, 80);
  },
  gui(x, y, s) {
    button = createButton("Grid");
    button.position(0, 0);
    button.mousePressed(() => {
      showGrid = !showGrid;
    });
    s ? (ts = s) : (ts = gridSize);
    rect(snap(x) - s / 2, snap(y) - s / 2, ts, ts);
  },
  snap() {
    var cell = Math.round((op - 25) / 50);
    if (mouseIsPressed) {
      tiles.push([x_cor, y_cor, ts]);
    }
    return cell * 50 + 25;
  },
};
