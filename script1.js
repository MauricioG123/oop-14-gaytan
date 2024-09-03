function Rectangle(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
}

Rectangle.prototype.area = function () {
    return this.height * this.weight;
}

Rectangle.prototype.perimeter = function () {
    return 2 * this.height + this.weight;
}

Rectangle.prototype.isSquare = function () {
    return this.height === this.weight;
}

Rectangle.prototype.changeName= function (newName) {
    return (this.name = newName);
}

const rect = new Rectangle('Rectangle 1', 10, 10);
const rect2 = new Rectangle('Rectangle 2', 30, 50);


console.log(rect)
console.log(rect2.area());