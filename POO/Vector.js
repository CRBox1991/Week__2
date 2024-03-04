

class Vector{
    constructor(n,m){
        this.array = [] 
        
        for (let i = 0; i < n ; i++){
            this.array.push(Math.round(Math.random() * m))            
         }                       
    } 

    add(a){
        let sumArrays=[];
        if (a.length == this.array.length){                    
            for (let i = 0; i < a.length; i++){        
                sumArrays[i]=(a[i]+this.array[i])
            }  
        }
        return sumArrays
    }     

    productNum(n){
        let producto = this.array.map(
            function (value){
                return value * n 
            })
            return producto
        } 
    
    subs(a){
        let subsArrays=[];
        if (a.length == this.array.length){                    
            for (let i = 0; i < a.length; i++){        
                subsArrays[i]=(a[i] - this.array[i])
            }  
        }
        return subsArrays

    }

    product(a){
        let productArrays=[];
        if (a.length == this.array.length){                    
            for (let i = 0; i < a.length; i++){        
                productArrays[i]=(a[i] * this.array[i])
            }  
        }
        return productArrays

    }
    
}


    
// let myVector = new Vector(5,10)
//     console.log(myVector);
//     console.log(myVector.add([1,2,3,4,5]));
//     console.log(myVector.productNum(2));
//     console.log(myVector.subs([1,2,3,4,4]));
//     console.log(myVector.product([1,2,3,4,5]));

    module.exports = {Vector}
    