

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
}