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
}

