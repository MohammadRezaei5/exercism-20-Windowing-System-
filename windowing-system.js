// i cant understand prototype and class, look back again and again read more ... 😑😶😐😔

// const size = new Size(1080, 764);

// console.log(size.width);
// console.log(size.height);

class Size {
  constructor(width = 80, height = 60) {
    this.height = height;
    this.width = width;
  }
  resize(newWidth, newHeight) {
    this.height = newHeight;
    this.width = newWidth;
  }
}

// size.resize(1920, 1080);
// console.log(size.width);
// console.log(size.height);

///---///
// const point = new Position();
// console.log(point.x);
// console.log(point.y);

class Position {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  move(x, y) {
    this.x = x;
    this.y = y;
  }
}

// point.move(100, 200);

// console.log(point.x);
// console.log(point.y);
