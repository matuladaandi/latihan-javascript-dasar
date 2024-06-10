class Shape {
  pain() {
    console.log("paint shape 1");
  }
}

class Circle extends Shape {
  pain() {
    // mengakses pain() yg ada di class Shape
    super.pain();
    console.log("paint circle 2");
  }
}

const circle = new Circle();
circle.pain();
