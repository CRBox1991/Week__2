import { Vector } from "./vector";

let vector1: Vector = new Vector(5,10);
    vector1.print()


let vector2: Vector = new Vector(5,30)
vector2.print()
console.log(vector2.add(vector1))
console.log(vector2.subs(vector1))
console.log(vector2.mult(vector1));
console.log(vector2.multNumber(3));