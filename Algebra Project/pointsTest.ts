import { Point } from "./points";

let point1 = new Point(45, 67)
//console.log(point1.getX());
//console.log(point1.getY());
//console.log(point1.setX(12));
//console.log(point1.setY(23));
//console.log(point1.toString(45,67));
//console.log(point1.distanceToOrigin());


let point2 = new Point(3,2)
let point3 = new Point(1,4)
console.log(point2.distanceToOrigin());
console.log(point3.distanceToOrigin());
console.log(point2.calculateDistance(point1));
console.log(point3.calculateDistance(point1));
//console.log(point1.getQuadrant());
//console.log(point2.getQuadrant());
//console.log(point3.getQuadrant());














