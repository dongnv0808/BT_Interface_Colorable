export abstract class Shape{
    private name: string;
    constructor(name: string){
        this.name = name;
    }
    abstract get caculateArea(): number;
    abstract get caculatePerimeter(): number;
}