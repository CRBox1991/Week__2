import { Person } from "./Person"
import { Contacts } from "./contacts"


let person1 = new Person("Juan", 28, "Calle Alcala")
    person1.yearOfBirth(2024)
    person1.setAddress("Calle Laguna")

let person2 = new Person("Manuela", 24, "Calle la Dorada")
    person2.yearOfBirth(2024)
    person2.setAddress("Calle Alcala")

let contacts = new Contacts()
    contacts.people = [person1, person2]

    contacts.printCalendar();