let gui = false;
let utils = {
  objSize(obj) {
    var size = 0,
      key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  },
  grid(size) {
    if (gui) {
      for (var i = 0; i < width; i += size) {
        line(i, 0, i, height);
        line(width, i, 0, i);
      }
    }
  },
  helperText() {
    fill("black");
    textSize(20);
    text(tiles.tileMap.length, 10, 50);
    text("value 2", 10, 80);
  },
  gui(x, y) {
    let x_cor = utils.snap(x) - gridSize / 2;
    let y_cor = utils.snap(y) - gridSize / 2;
    if (gui) {
      rect(x_cor, y_cor, gridSize, gridSize);
      if (mouseIsPressed) {
        tiles.tileMap.push([x_cor, y_cor, gridSize]);
      }
    }
  },
  snap(num) {
    // subtract offset (to center lines)
    // divide by grid to get row/column
    // round to snap to the closest one
    var cell = Math.round((num - gridSize / 2) / gridSize);
    // multiply back to grid scale
    // add offset to center
    return cell * gridSize + gridSize / 2;
  },
};
