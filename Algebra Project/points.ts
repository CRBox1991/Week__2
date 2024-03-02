

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
// la distacia cartesiana es d = sqrt ((x2 - x1)**2 + (y2 - y1)**2) d = (x2 - 0)**2 + (y2 -0)**2
// por lo que se simplifica a d = ((x**2) + (y**2))
    let distance: number = Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y, 2))
    return distance
}
// la distacia cartesiana es d = sqrt ((x2 - x1)**2 + (y2 - y1)**2)
public calculateDistance(anotherPoint: Point): number
{   
    let distance1: number = Math.sqrt(((this.x - anotherPoint.getX())**2) + ((this.y - anotherPoint.getY())**2))
    return distance1
}
public getQuadrant(): number
{
    let myQuadrant: number = 0
    if(this.x == 0 && this.y == 0)
    {
        return 0
    } if(this.x > 0 && this.y > 0)
    {
        return 1
    } if(this.x < 0 && this.y > 0)
    {
        return 2
    } if(this.x < 0 && this.y < 0)
    {
        return 3
    } if(this.x > 0 && this.y < 0)
    {
        return 4
    }
    return myQuadrant

}
}

