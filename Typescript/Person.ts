

export class Person
{
    public name: string;
    public age: number;
    private address: string;

    constructor()
    {
         this.name
         this.age
         this.address = "Calle Alcala 35, MAdrid"
    }
    printName()
    {
        console.log(this.name);
        
    }
    yearOfBirth(currentYear: number): number
    {
        return currentYear - this.age
    }
    setAddress(address: string)
    {
        return this.address = address
    }
    getAddress(): string
    {
        return this.address
    }
}  








