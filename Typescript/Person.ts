

export class Person
{
    public name: string;
    public age: number;
    private address: string;

    constructor(name, age, address)
    {
         this.name = name
         this.age  = age
         this.address = address
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








