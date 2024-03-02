import { Point } from "./points"

export class Triangle
{
    private vertex1: Point
    private vertex2: Point
    private vertex3: Point
constructor(vetex1: Point, vertex2: Point, vertex3: Point)
{
    this.vertex1 = vetex1
    this.vertex2 = vertex2
    this.vertex3 = vertex3
}
public calculateLengthSide(): number  []
{    
    let myTriangle: number  [] = []

    myTriangle = [this.vertex1.calculateDistance(this.vertex2), this.vertex2.calculateDistance(this.vertex3),
                  this.vertex3.calculateDistance(this.vertex1)]
    
    return myTriangle
}

}