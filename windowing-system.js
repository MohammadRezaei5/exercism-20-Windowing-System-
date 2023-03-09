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
