"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Cylinder_1 = require("./Cylinder");
const Rectangle_1 = require("./Rectangle");
const Square_1 = require("./Square");
let circle = new Circle_1.Circle("Hinh tron", 3);
let rectangle = new Rectangle_1.Rectangle("Hinh chu nhat", 3, 6);
let cylinder = new Cylinder_1.Cylinder("Hinh tru", 3, 8);
let square = new Square_1.Square("Hinh vuong", 5);
let shapes = [];
shapes.push(circle);
shapes.push(rectangle);
shapes.push(cylinder);
shapes.push(square);
console.log(shapes);
shapes.forEach((item) => {
    console.log(item.caculateArea);
    if (item instanceof Square_1.Square) {
        console.log(item.howToColor());
    }
});
