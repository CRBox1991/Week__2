

export class Vector
{
    private elements: number []
    constructor(n:number, k:number)
    {
        this.elements = []

        for (let i = 0; i < n; i++){
            this.elements.push(Math.round(Math.random() * k))
        }
    }

    public print()
    {
        console.log(this.elements);
        
    }
    public add(v1:Vector): Vector 
    {
        let sumVector: Vector = new Vector(0,0);
        //if (this.elements.length == v1.elements.length){

        // for(let i = 0; i < this.elements.length; i++){
        //     sumVector[i]=this.elements[i] + v1.elements[i] 
        //         } 

        sumVector.elements = this.elements.map(
            function(value, i)
            {
               return value + v1.elements[i]
            }
        )
        return sumVector
    }
    public subs(v1: Vector):Vector
    {
        let subsVector:Vector = new Vector(0,0)      
        // for(let i = 0; i < this.elements.length; i++){
        //     subsVector.elements[i]=this.elements[i] - v1.elements[i] 
        //         } 
        subsVector.elements = this.elements.map(
            function(value,i)
            {
                return value - v1.elements[i]
            }
        )

        return subsVector
    }
    public mult(v1:Vector):Vector
    {
        let multVector: Vector = new Vector(0,0)
        // for(let i = 0; i < this.elements.length; i++){
        //  multVector.elements[i] = this.elements[i] * v1.elements[i]
        // }  
        multVector.elements = this.elements.map(
            function(value, i)
            {
                return value * v1.elements[i]
            }
        )
        return multVector        
    }    
    public multNumber(n:number):Vector
    {
        let multNumber: Vector = new Vector(0,0)
            multNumber.elements = this.elements.map(
            function(value)
            {
               return value * n
            }
        )
        return multNumber
    }
} 
    // public subs(v1:Vector):Vector
         
            
    
    






    
    
    


