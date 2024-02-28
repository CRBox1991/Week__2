import { Person } from "./Person"
import { Contacts } from "./contacts"


let person1 = new Person()
    person1.name = "Juan"
    person1.age = 28
    person1.yearOfBirth(2024)
    person1.setAddress("Calle Laguna")

let person2 = new Person()
    person2.name = "Manuela"
    person2.age = 24
    person2.yearOfBirth(2024)
    person2.setAddress("Calle Alcala")

let contacts = new Contacts()
    contacts.people = [person1, person2]

    contacts.printCalendar();