"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const shape_1 = require("./shape");
class Circle extends shape_1.Shape {
    constructor(name, radius) {
        super(name);
        this.radius = radius;
    }
    get getRadius() {
        return this.radius;
    }
    set setRadius(radius) {
        this.radius = radius;
    }
    get caculateArea() {
        return this.radius * this.radius * Math.PI;
    }
    get caculatePerimeter() {
        return 2 * this.radius * Math.PI;
    }
}
exports.Circle = Circle;
