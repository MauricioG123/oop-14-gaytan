function Shape(name) {
    this.name = name;
}

Shape.prototype.logName = function () {
    console.log(`Shape Name: ${this.name}`);
}

function Rectangle(name, height, width) {
    Shape.call(this, name);

    this.height = height;
    this.width = width;
}

Rectangle.prototype = Object.create(Shape.prototype);

function Circle(name, radius) {
    Shape.call(this, name);

    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.constructor = Rectangle;
Circle.prototype.constructor = Circle;

const rect = new Rectangle('Rectangle 1', 20, 20);
const cir = new Circle('Cirlce 1', 30);

console.log(rect, cir);

rect.logName();
cir.logName();