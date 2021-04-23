let reward;

class Reward {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }
  col(x, y) {
    if (x == this.x && y == this.y) {
      window.location.href = "./victory.html";
    }
  }
  render() {
    fill("green");
    rect(this.x, this.y, this.size, this.size);
  }
}
