"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = void 0;
const Rectangle_1 = require("./Rectangle");
class Square extends Rectangle_1.Rectangle {
    constructor(name, side) {
        super(name, side, side);
    }
    get getSide() {
        return this.getWidth;
    }
    set setSide(side) {
        this.setWidth = side;
        this.setLength = side;
    }
    set setWidth(width) {
        this.setSide = width;
    }
    set setLength(length) {
        this.setLength = length;
    }
    get caculateArea() {
        return this.getSide * this.getSide;
    }
    get caculatePerimeter() {
        return this.getSide * 4;
    }
    howToColor() {
        return `Color all four sides..`;
    }
}
exports.Square = Square;
