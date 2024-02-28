import { Person } from "./Person";

let person1 = new Person()
    person1.name = "Cristian"
    person1.age = 33;

person1.printName();
console.log(person1.yearOfBirth(2024));
console.log(person1.getAddress());
console.log(person1.setAddress("Calle Miguel Hernandez 12, Alcala de Henares"));