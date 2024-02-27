let {Person} = require("./Person")
let {Contacts} = require("./Contacts")


let person1 = new Person(55,165)
person1.nombre = "Alicia";
person1.edad = 33;
person1.sexo = "Femenino";
person1.nacionalidad = "Argentina";
person1.dateOfBirth = 1991
person1.hobbies = ["Dormir", "Juagar play", "Leer"]

let person2 = new Person(55,165)
person2.nombre = "Alicia";
person2.edad = 33;
person2.sexo = "Femenino";
person2.nacionalidad = "Argentina";
person2.dateOfBirth = 1991
person2.hobbies = ["Dormir", "Juagar play", "Leer"]

let contactos = new Contacts()
    contactos.person = [person1,person2]
    
    console.log(contactos.printPersons());
