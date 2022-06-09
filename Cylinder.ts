import { Circle } from "./Circle";

export class Cylinder extends Circle{
    private height: number;
    constructor(name: string, radius: number, height: number){
        super(name, radius);
        this.height = height;
    }
    get getHeight(): number{
        return this.height;
    }
    set setHeight(height: number){
        this.height = height;
    }
    get caculateArea(): number {
        return super.caculateArea + super.caculateArea * this.height;
    }
    get caculatePerimeter(): number {
        return super.caculateArea * this.height;
    }
}