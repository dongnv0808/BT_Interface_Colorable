import { Colorable } from "./Colorable";
import { Shape } from "./shape";

export class Circle extends Shape{
    private radius: number;
    constructor(name: string, radius: number){
        super(name);
        this.radius = radius;
    }
    get getRadius(): number{
        return this.radius;
    }
    set setRadius(radius: number){
        this.radius = radius;
    }
    get caculateArea(): number {
        return this.radius * this.radius * Math.PI;
    }
    get caculatePerimeter(): number {
        return 2 * this.radius * Math.PI
    }
}