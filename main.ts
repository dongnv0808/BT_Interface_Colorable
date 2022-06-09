import { Circle } from "./Circle";
import { Cylinder } from "./Cylinder";
import { Rectangle } from "./Rectangle";
import { Square } from "./Square";

let circle = new Circle("Hinh tron", 3);
let rectangle = new Rectangle("Hinh chu nhat", 3, 6);
let cylinder = new Cylinder("Hinh tru", 3, 8);
let square = new Square("Hinh vuong", 5);
let shapes: {}[] = [];
shapes.push(circle)
shapes.push(rectangle)
shapes.push(cylinder)
shapes.push(square)
console.log(shapes)
    shapes.forEach((item:any) => {
        console.log(item.caculateArea);
        if(item instanceof Square){
            console.log(item.howToColor());
        }
    })
