import { Mobile } from "./mobile";
import { MobileCollection } from "./mobileCollection";

let mobile1 = new Mobile("Samsung", "mobile000000001", "AJ20", "Red", 457);
let mobile2 = new Mobile("Samsung", "mobile000000002", "Galaxy s25", "Blue", 957);
let mobile3 = new Mobile("Motorola", "motor000000001", "SpecialOne", "Black", 258);
let mobile4 = new Mobile("Alcatel", "Alca0000987889", "lujuria", "Pink", 99);



let myCollection: Mobile [] =[mobile1, mobile2, mobile3, mobile4];

let collection1 = new MobileCollection(myCollection)
console.log(collection1.getTotalPrice());

console.log(collection1.printCollection());
