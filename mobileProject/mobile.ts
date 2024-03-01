

export class Mobile
{
    private name: string
    private tradeMark: string
    private model: string
    private color: string
    private price: number
    constructor(name, tradeMark, model, color, price)
    {
        this.name = name
        this.tradeMark = tradeMark
        this. model = model
        this.color = color
        this.price = price
    }
    public getName(): string
    {
        return this.name
    }
    public getTradeMark(): string
    {
        return this.tradeMark
    }
    public getModel(): string
    {
        return this.model
    }
    public getColor(): string
    {
        return this.color
    }
    public getPrice(): number
    {
        return this.price
    }
    public setName(name: string)
    {
        return this.name = name
    }
    public setTradeMark(tradeMark: string)
    {
        return this.tradeMark = tradeMark
    }
    public setModel(model: string)
    {
        return this.model = model
    }
    public setColor(color: string)
    {
        return this.color = color
    }
    public setPrice(price: number)
    {
        return this.price = price
    }
    public printAll()
    {
        return `Name: ${this.name} \nTradeMark: ${this.tradeMark} \nmodel: ${this.model} \nColor: ${this.color} \nPrice: ${this.price} \n` 
    }

}