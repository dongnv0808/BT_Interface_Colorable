import { Colorable } from "./Colorable";
import { Rectangle } from "./Rectangle";

export class Square extends Rectangle implements Colorable{
    constructor(name: string, side: number){
        super(name, side, side);
    }
    get getSide(): number{
        return this.getWidth;
    }
    set setSide(side: number){
        this.setWidth = side;
        this.setLength = side;
    }
    set setWidth(width: number) {
        this.setSide = width;
    }
    set setLength(length: number) {
        this.setLength = length;
    }
    get caculateArea(): number {
        return this.getSide * this.getSide;
    }
    get caculatePerimeter(): number {
        return this.getSide * 4;
    }
    howToColor(): string {
        return `Color all four sides..`
    }
}