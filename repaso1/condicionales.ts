

export function zodiac(day:number, month:number)
{
    if ((day >= 21 && day <= 31 && month == 3) || (day >= 1 && day <= 19 && month == 4))
    { return "You are Aries"} 
    else if ((day >= 20 && day <= 30 && month == 4) || (day >= 1 && day <= 20 && month == 5))
    { return "You are Taurus"}
    else if ((day >= 21 && day <= 31 && month == 5) || (day >= 1 && day <= 20 && month == 6))
    { return "You are Gemini"}
    else if ((day >= 21 && day <= 30 && month == 6) || (day >= 1 && day <= 22 && month == 7))
    { return "You are Cancer"}
    else if ((day >= 23 && day <= 31 && month == 7) || (day >= 1 && day <= 22 && month == 8))
    { return "You are Leo"}
    else if ((day >= 23 && day <= 31 && month == 8) || (day >= 1 && day <= 22 && month == 9))
    { return "You are Virgo"}
    else if ((day >= 23 && day <= 30 && month == 9) || (day >= 1 && day <= 22 && month == 10))
    { return "You are Libra"}
    else if ((day >= 23 && day <= 31 && month == 10) || (day >= 1 && day <= 21 && month == 11))
    { return "You are Scorpio"}
    else if ((day >= 22 && day <= 30 && month == 11) || (day >= 1 && day <= 21 && month == 12))
    { return "You are Sagittarius"}
    else if ((day >= 22 && day <= 31 && month == 12) || (day >= 1 && day <= 19 && month == 1))
    { return "You are Capricorn"}
    else if ((day >= 20 && day <= 31 && month == 1) || (day >= 1 && day <= 18 && month == 2))
    { return "You are Aquarius"}
    else if ((day >= 19 && day <= 29 && month == 2) || (day >= 1 && day <= 20 && month == 3))
    { return "You are Pisces"}
    else { return "Wrong date"}
}

// console.log(zodiac(23,1));
// console.log(zodiac(0,3));
// console.log(zodiac(17,1));
// console.log(zodiac(32,1));

export function continent(country: string)
{
    if (country == "China" || country == "Japon"  || country == "India" || country =="Corea del Sur" || country == "Bangladesh")
    {
        console.log("Your are in Asia");
    }
    else if (country == "Italia" || country == "Francia" || country == "Portugal")
    {
        console.log("You are in Europe");        
    }        
    else if (country == "Marruecos" || country == "Tanger" || country == "Tunez" || country == "Egipto")
    {
        console.log("You are in Africa");        
    }
    else if ( country == "Australia" || country == "Nueva Zelanda" || country == "Fiyi" || country == "Islas Salomon")
    {
        console.log("You are in Oceania")
    }
    else if ( country == "EEUU" || country == "Argentina" || country == "Colombia" || country == "Canada")
    {
        console.log("You are in America")
    }
}

// continent("China");
// continent("Italia");
// continent("Fiyi");
// continent("Canada");
// continent("Egipto");

export function isEven(x: number)
{
    if(x %2 == 0)
    {
        console.log("El numero es par");        
    } else
    {
        console.log("El numero es impar");        
    }
}
 
//isEven(10)
//isEven(9)


