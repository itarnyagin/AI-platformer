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
    for (var i = 0; i < width; i += size) {
      line(i, 0, i, height);
      line(width, i, 0, i);
    }
  },
  helperText() {
    fill("black");
    textSize(20);
    text(Object.size(tiles.tileMap), 10, 90);
  },
  // gui
  placeTile(x, y) {
    let gridOffset = gridSize / 2;
    let snap_x = Math.round((x - gridOffset) / gridSize) * gridSize;
    let snap_y = Math.round((y - gridOffset) / gridSize) * gridSize;
    rect(snap_x, snap_y, gridSize, gridSize);

    if (mouseIsPressed == true) {
      tiles.tileMap[`${snap_x / gridSize},${snap_y / gridSize}`] = {
        x: snap_x,
        y: snap_y,
        s: gridSize,
      };
    }
  },
  getTile(n) {
    return tiles.tileMap[Object.keys(tiles.tileMap)[n]];
  },
};

// object size

Object.size = function (obj) {
  var size = 0,
    key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};
