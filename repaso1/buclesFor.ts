export function evenNumbers(num: number)
{
    
    for(let i:number = 0; i < num ; i++)
    {   
        if( i % 2 != 0) {
            console.log(i)
        }             
    }     
}

//evenNumbers(9)
//evenNumbers(20)

export function myRevert(myArr:string [])
{   
    let arrInvertido: string [] = []
    for(let i: number = myArr.length - 1; i >= 0; i--) { 
       
       arrInvertido.push(myArr[i])
    }
    return arrInvertido
}

//console.log(myRevert(["Juan", "Pepe", "Alicia"]));

export function isRainbow(colors: string[])
{
    
    for (let i: number = 0; i < colors.length; i++ )
    {
        if(colors[i] == "rojo")
        {
            console.log("El color " + colors[i] + " si esta en el Arcoiris");            
        } else if(colors[i] == "naranja")
        {
            console.log("El color " + colors[i] + " si esta en el Arcoiris");            
        } else if(colors[i] == "amarillo")
        {
            console.log("El color " + colors[i] + " si esta en el Arcoiris");            
        } else if(colors[i] == "verde")
        {
            console.log("El color " + colors[i] + " si esta en el Arcoiris");            
        } else if(colors[i] == "cyan")
        {
            console.log("El color " + colors[i] + " si esta en el Arcoiris");            
        } else if(colors[i] == "azul")
        {
            console.log("El color " + colors[i] + " si esta en el Arcoiris");            
        } else if(colors[i] == "morado")
        {
            console.log("El color " + colors[i] + " si esta en el Arcoiris");            
        } else
        {
            console.log(`el color ${colors[i]} no esta en el Arcoiris`);            
        }
    }
}

//isRainbow(["rojo", "marron", "verde", "amarillo", "magenta", "vinotinto", "burdeos", "ocre"])


 export function add(myWords: string [])
{   
    let myNunDeCaracteres: number = 0 
    for (let i: number = 0; i < myWords.length; i++)
    {
     myNunDeCaracteres += myWords[i].length       
    }
    return myNunDeCaracteres
    
}

//console.log(add(["rojo", "marron", "verde", "amarillo", "magenta", "vinotinto", "burdeos", "ocre"]))