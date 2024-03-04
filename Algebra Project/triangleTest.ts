import { Point } from "./points";
import { Triangle } from "./triangle";

let Point1 = new Point(4,1)
let Point2 = new Point(3,1)
let Point3 = new Point(5,1)
let triangle1 = new Triangle(Point1, Point2, Point3)
console.log(triangle1.calculateLengthSide());
