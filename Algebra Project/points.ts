

export class Point
{
    private x: number
    private y: number
    constructor(x: number, y: number)
    {
        this.x = x
        this.y = y
    }
public getX()
{
    return this.x
}
public getY()
{
    return this.y
}
public setX(x: number)
{
    return this.x = x
}
public setY(y: number)
{
    return this.y = y
} 
public toString(x:number, y: number): string
{
    return `"(${this.x},${this.y})"`
}
// formula para calcular la distancia Manhattan entre dos puntos Distancia de Manhattan = |x - 0| + |y - 0|  
// como el punto inicial (0,0) se simplifica a distatanciaToOrigin = |x| + |y| se suma el valor absoluto
public distanceToOrigin(): number
{    
    let distance: number = this.x + this.y
    return distance
}
// formula para calcular la Distancia de Manhattan = |x2 - x1 | + |y2 - y1| 
// en este caso anotherPoint es = |x - 0| + |y - 0| por lo que primero se calcula la distancia a 0
//con distanToOrigin del punto 1, donde el resultado seria anotherPoint y se da como parametro de entrada para calculateDistance
public calculateDistance(anotherPoint: number): number
{   
    let distance1: number = (this.x + this.y) - anotherPoint 
    return distance1
}

}