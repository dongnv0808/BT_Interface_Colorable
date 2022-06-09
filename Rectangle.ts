import { Colorable } from "./Colorable";
import { Shape } from "./shape";

export class Rectangle extends Shape{
    private width: number;
    private length: number;
    constructor(name: string, width: number, length: number){
        super(name);
        this.width = width;
        this.length = length;
    }
    get getWidth(): number{
        return this.width;
    }
    set setWidth(width: number){
        this.width = width;
    }
    get getLength(): number{
        return this.length;
    }
    set setLength(length: number){
        this.length = length;
    }
    get caculateArea(): number {
        return this.width * this.length;
    }
    get caculatePerimeter(): number {
        return (this.width + this.length)*2
    }
}