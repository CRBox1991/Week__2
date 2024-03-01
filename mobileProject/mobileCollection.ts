import { Mobile } from "./mobile";

export class MobileCollection
{
    private mobiles: Mobile[]
    private totalPrice: number
    constructor(mobileCollectio: Mobile [])
    {
        this.mobiles = mobileCollectio
        this.totalPrice;
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
}

