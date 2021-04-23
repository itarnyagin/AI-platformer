let floorHeight = 400;
function drawTiles() {
  for (let i = 0; i < tiles.length; i++) {
    rect(tiles[i][0], tiles[i][1], tiles[i][2]);
  }
}

function makeTile(x, y, s) {
  tiles.push([x, y, s]);
}

let tiles = [];
