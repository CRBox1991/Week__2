import { Mobile } from "./mobile";

export class MobileCollection
{
    private mobiles: Mobile[]
    private totalPrice: number
    constructor(mobileCollection: Mobile [])
    {
        this.mobiles = mobileCollection
        this.totalPrice = this.totalPriceCalcualtion()
    }

    public getMobiles()
    {
        return this.mobiles
    }
    public getTotalPrice()
    {
        return this.totalPrice
    }
    public setMobiles(collection: Mobile [])
    {
        return this.mobiles = collection
    }
    public setTotalPrice(num: number)
    {
        this.totalPrice = num
    }
    private totalPriceCalcualtion(): number
    {   
        let sumTotal: number = 0
        for(let i = 0; i < this.mobiles.length; i++)
        {
            sumTotal += this.mobiles[i].getPrice()            
        }
        return sumTotal
    }
    public printCollection(): string
    {
        let myColPrinted: string = ""
        let string1: string = `This are my mobiles: \n`
        let string2: string =`\nPrice overall: ${this.totalPrice} \n`

        for (let i = 0; i < this.mobiles.length; i++)
        {
            myColPrinted +=  `\nThe characterictics of the mobile ${this.mobiles[i].getName()} are:\nName: ${this.mobiles[i].getName()}
Trademark: ${this.mobiles[i].getTradeMark()}\nmodel: ${this.mobiles[i].getModel()}\nColor: ${this.mobiles[i].getColor()}\nPrice: ${this.mobiles[i].getPrice()}\n`
        }
        return string1 + myColPrinted + string2

    }
}

