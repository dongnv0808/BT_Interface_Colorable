"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const shape_1 = require("./shape");
class Rectangle extends shape_1.Shape {
    constructor(name, width, length) {
        super(name);
        this.width = width;
        this.length = length;
    }
    get getWidth() {
        return this.width;
    }
    set setWidth(width) {
        this.width = width;
    }
    get getLength() {
        return this.length;
    }
    set setLength(length) {
        this.length = length;
    }
    get caculateArea() {
        return this.width * this.length;
    }
    get caculatePerimeter() {
        return (this.width + this.length) * 2;
    }
}
exports.Rectangle = Rectangle;
