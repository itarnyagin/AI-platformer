function getTile(n, o = tiles.tileMap) {
  let index = Object.keys(o)[n];
  let tile = tiles.tileMap[index];
  return tile;
}

tiles = {
  render() {
    for (let i = 0; i < Object.size(tiles.tileMap); i++) {
      let tile = getTile(i);
      rect(tile.x, tile.y, tile.s, tile.s);
    }
  },
};

tiles.tileMap = {
  "0,1": {
    x: 0,
    y: 50,
    s: 50,
  },
  "0,2": {
    x: 0,
    y: 100,
    s: 50,
  },
  "0,3": {
    x: 0,
    y: 150,
    s: 50,
  },
  "0,4": {
    x: 0,
    y: 200,
    s: 50,
  },
  "0,5": {
    x: 0,
    y: 250,
    s: 50,
  },
  "0,6": {
    x: 0,
    y: 300,
    s: 50,
  },
  "0,7": {
    x: 0,
    y: 350,
    s: 50,
  },
  "0,8": {
    x: 0,
    y: 400,
    s: 50,
  },
  "0,9": {
    x: 0,
    y: 450,
    s: 50,
  },
  "0,10": {
    x: 0,
    y: 500,
    s: 50,
  },
  "1,10": {
    x: 50,
    y: 500,
    s: 50,
  },
  "2,10": {
    x: 100,
    y: 500,
    s: 50,
  },
  "3,10": {
    x: 150,
    y: 500,
    s: 50,
  },
  "4,10": {
    x: 200,
    y: 500,
    s: 50,
  },
  "5,10": {
    x: 250,
    y: 500,
    s: 50,
  },
  "6,10": {
    x: 300,
    y: 500,
    s: 50,
  },
  "7,10": {
    x: 350,
    y: 500,
    s: 50,
  },
  "8,10": {
    x: 400,
    y: 500,
    s: 50,
  },
  "9,10": {
    x: 450,
    y: 500,
    s: 50,
  },
  "10,10": {
    x: 500,
    y: 500,
    s: 50,
  },
  "11,10": {
    x: 550,
    y: 500,
    s: 50,
  },
  "12,10": {
    x: 600,
    y: 500,
    s: 50,
  },
  "13,10": {
    x: 650,
    y: 500,
    s: 50,
  },
  "14,10": {
    x: 700,
    y: 500,
    s: 50,
  },
  "15,10": {
    x: 750,
    y: 500,
    s: 50,
  },
  "16,10": {
    x: 800,
    y: 500,
    s: 50,
  },
  "17,10": {
    x: 850,
    y: 500,
    s: 50,
  },
  "18,10": {
    x: 900,
    y: 500,
    s: 50,
  },
  "19,10": {
    x: 950,
    y: 500,
    s: 50,
  },
  "20,10": {
    x: 1000,
    y: 500,
    s: 50,
  },
  "21,10": {
    x: 1050,
    y: 500,
    s: 50,
  },
  "22,10": {
    x: 1100,
    y: 500,
    s: 50,
  },
  "23,10": {
    x: 1150,
    y: 500,
    s: 50,
  },
  "24,10": {
    x: 1200,
    y: 500,
    s: 50,
  },
  "25,10": {
    x: 1250,
    y: 500,
    s: 50,
  },
  "26,10": {
    x: 1300,
    y: 500,
    s: 50,
  },
  "27,10": {
    x: 1350,
    y: 500,
    s: 50,
  },
  "28,10": {
    x: 1400,
    y: 500,
    s: 50,
  },
  "29,10": {
    x: 1450,
    y: 500,
    s: 50,
  },
  "30,10": {
    x: 1500,
    y: 500,
    s: 50,
  },
  "30,9": {
    x: 1500,
    y: 450,
    s: 50,
  },
  "30,8": {
    x: 1500,
    y: 400,
    s: 50,
  },
  "30,7": {
    x: 1500,
    y: 350,
    s: 50,
  },
  "30,6": {
    x: 1500,
    y: 300,
    s: 50,
  },
  "30,5": {
    x: 1500,
    y: 250,
    s: 50,
  },
  "30,4": {
    x: 1500,
    y: 200,
    s: 50,
  },
  "30,3": {
    x: 1500,
    y: 150,
    s: 50,
  },
  "30,2": {
    x: 1500,
    y: 100,
    s: 50,
  },
  "30,1": {
    x: 1500,
    y: 50,
    s: 50,
  },
  "6,8": {
    x: 300,
    y: 400,
    s: 50,
  },
  "7,8": {
    x: 350,
    y: 400,
    s: 50,
  },
  "9,6": {
    x: 450,
    y: 300,
    s: 50,
  },
  "10,6": {
    x: 500,
    y: 300,
    s: 50,
  },
  "13,4": {
    x: 650,
    y: 200,
    s: 50,
  },
  "14,4": {
    x: 700,
    y: 200,
    s: 50,
  },
  "16,2": {
    x: 800,
    y: 100,
    s: 50,
  },
  "17,2": {
    x: 850,
    y: 100,
    s: 50,
  },
  "18,2": {
    x: 900,
    y: 100,
    s: 50,
  },
  "19,2": {
    x: 950,
    y: 100,
    s: 50,
  },
  "23,2": {
    x: 1150,
    y: 100,
    s: 50,
  },
  "24,2": {
    x: 1200,
    y: 100,
    s: 50,
  },
  "25,2": {
    x: 1250,
    y: 100,
    s: 50,
  },
  "26,2": {
    x: 1300,
    y: 100,
    s: 50,
  },
  "27,2": {
    x: 1350,
    y: 100,
    s: 50,
  },
  "28,2": {
    x: 1400,
    y: 100,
    s: 50,
  },
  "29,2": {
    x: 1450,
    y: 100,
    s: 50,
  },
  "30,0": {
    x: 1500,
    y: 0,
    s: 50,
  },
  "29,6": {
    x: 1450,
    y: 300,
    s: 50,
  },
  "28,6": {
    x: 1400,
    y: 300,
    s: 50,
  },
  "27,6": {
    x: 1350,
    y: 300,
    s: 50,
  },
  "26,6": {
    x: 1300,
    y: 300,
    s: 50,
  },
  "26,7": {
    x: 1300,
    y: 350,
    s: 50,
  },
  "26,8": {
    x: 1300,
    y: 400,
    s: 50,
  },
  "26,9": {
    x: 1300,
    y: 450,
    s: 50,
  },
  "0,0": {
    x: 0,
    y: 0,
    s: 50,
  },
};
