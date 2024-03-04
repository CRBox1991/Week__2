import { Point } from "./points";

let point1 = new Point(2, 5)
//console.log(point1.getX());
//console.log(point1.getY());
//console.log(point1.setX(12));
//console.log(point1.setY(23));
//console.log(point1.toString(45,67));
console.log(point1.distanceToOrigin());


let point2 = new Point(-3,2)
let point3 = new Point(100,4)
let point4 = new Point(7,9)
let point5 = new Point(6,-9)
//console.log(point2.distanceToOrigin());
//console.log(point3.distanceToOrigin());
console.log(point2.calculateDistance(point1));
console.log(point2.calculateDistance(point3));
console.log(point2.calculateDistance(point4));
console.log(point2.calculateDistance(point5));
//console.log(point1.getQuadrant());
//console.log(point2.getQuadrant());
//console.log(point3.getQuadrant());
console.log(point2.myNearest([point1,point3,point4,point5]));
console.log(point1.calculateDistance(point2));
console.log(point1.calculateDistance(point3));
console.log(point1.calculateDistance(point4));
console.log(point1.calculateDistance(point5));
console.log(point1.myNearest([point3,point5, point2, point4]));
















