import { Book } from "./book"
import { Library } from "./library"


let book1 = new Book("Los tres cerditos", 113, "1233456-BC5599876", "Cristian Redondo", "Santillana")
let book2 = new Book("A las tres son las 6", 364, "0098664-BC884756", "Cristian Redondo", "Rubio")
let book3 = new Book("Tu, yo y el perro", 964, "1987564-BC8886436", "Margaret Gracia", "Rubio")

let myLibros: Book [] = [book1, book2, book3]

let myLibrary = new Library(myLibros, "Calle Alcala 55", "Juan Pedro")
    
    
console.log(myLibrary.toString());
console.log(myLibrary.getNumberOfBooks());
console.log(myLibrary.findByAuthor("Cristian Redondo"));
console.log(myLibrary.findByAuthor("Margaret Gracia"));