

export function hasEven(myNums: number [])
{ 
    let i: number= 0;
  // creamos una variable boleana con un valor false de inicio
  let encontrado: boolean = false
  // en la condicion de while le decimo que siga recorriendo el bucle, mientras que exixtan numeros y 
  // encontrado tenga el valor de true (!encontrado).
  while(i<myNums.length && !encontrado){
  // el valor de encontrado cambiará cuando el indice del array tenga un valor que al dividirse entre 2 sea = 0
  // en ese momento se deja de cumplir la condicion y se sale del bucle
    encontrado = myNums[i] % 2 == 0
    i++
  }     
  return encontrado
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

