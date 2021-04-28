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
    text("new tilemap thing do", 10, 50);
    text("value 2", 10, 80);
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
