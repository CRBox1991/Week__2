

export function hasEven(myNums: number [])
{ 
    let i: number = 0
    let siPares: string ="";
    while(i < myNums.length)
    {   
    if (myNums[i] % 2 == 0){
            siPares = "true"       
        } else { siPares = "false"}  
    i++       
    }
    return siPares         
}

 console.log(hasEven([1,21,413,62,881,901,91,521,301]));
 console.log(hasEven([1,3,3,3,3,3,3]));


export function startWithM(myNames: string [])
{
    let i:number = 0;
    let starWithM: boolean = true;
    while( i < myNames.length && starWithM == true )    
    {      
        if(myNames[i].charAt(0) != "M") 
        {
            starWithM = false
        } 
              
        i++;
    }    
    return starWithM
    
}
console.log(startWithM(["Maria", "juan"]));
console.log(startWithM(["Maria", "Manuela"]));

