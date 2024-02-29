import { Book } from "./book";

let book1 = new Book("Los tres cerditos", 113, "1233456-BC5599876", "Cristian Redondo", "Santillana")

console.log(book1.Title)
console.log(book1.NPages);
console.log(book1.ISBN);
console.log(book1.getAuthor());
console.log(book1.Editorial);
console.log(book1.setTitle("Los tres mosqueteros"));
console.log(book1.setNPages(276));
console.log(book1.setISBN("13488763-BC399846"));
console.log(book1.setAuthor("Sofia Veragara"));
console.log(book1.setEditorial("Rubio"));
console.log(book1.toStirng());