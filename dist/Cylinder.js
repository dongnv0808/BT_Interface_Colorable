"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cylinder = void 0;
const Circle_1 = require("./Circle");
class Cylinder extends Circle_1.Circle {
    constructor(name, radius, height) {
        super(name, radius);
        this.height = height;
    }
    get getHeight() {
        return this.height;
    }
    set setHeight(height) {
        this.height = height;
    }
    get caculateArea() {
        return super.caculateArea + super.caculateArea * this.height;
    }
    get caculatePerimeter() {
        return super.caculateArea * this.height;
    }
}
exports.Cylinder = Cylinder;
