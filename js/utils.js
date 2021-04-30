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
    text(Object.size(tiles.tileMap), 10, 50);
    text("value 2", 10, 80);
  },
  // gui
  placeTile(x, y, s) {
    let gridOffset = s / 2;
    let snap_x = snap(x, gridOffset) - gridOffset;
    let snap_y = snap(y, gridOffset) - gridOffset;
    rect(snap_x, snap_y, gridSize, gridSize);

    console.log(createIndex(300, 300));
    if (mouseIsPressed == true) {
      tiles.tileMap[createIndex(snap_x, snap_y)] = {
        x: snap_x,
        y: snap_y,
        s: gridSize,
      };
    }
  },
};

// snap
function snap(op, gridOffset) {
  // subtract offset (to center lines)
  // divide by grid to get row/column
  // round to snap to the closest one
  var cell = Math.round((op - gridOffset) / gridSize);
  // multiply back to grid scale
  // add offset to center
  return cell * gridSize + gridOffset;
}

// index
function createIndex(x, y) {
  let index = `${x / gridSize},${y / gridSize}`;
  return index;
}

// object size

Object.size = function (obj) {
  var size = 0,
    key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};
