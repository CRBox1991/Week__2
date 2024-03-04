let myLib = require("./person")


let newPerson =  new myLib.Person (90, 198)
    newPerson.nombre = "Mario"
    newPerson.edad = 40
    newPerson.sexo = "Masculino"
    newPerson.nacionalidad = "Italiano"
    newPerson.dateOfBirth = 1984
    newPerson.hobbies = ["Jugar futbol", "Nadar", "Bricolaje" , "Ver television"]


console.log(newPerson.calcularIMC());
console.log(newPerson.printAll());
console.log(newPerson.calcularEdad(2024));
console.log(newPerson.printHobbies());


