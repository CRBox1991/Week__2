import { Mobile } from "./mobile";

let mobile1 = new Mobile("Samsung", "mobile000000001", "AJ20", "Red", 457)

console.log(mobile1.getName());
console.log(mobile1.getTradeMark());
console.log(mobile1.getModel());
console.log(mobile1.getColor());
console.log(mobile1.getPrice());
console.log(mobile1.setName("Iphone"));
console.log(mobile1.setTradeMark("Iphone000000000001"));
console.log(mobile1.setModel("15 Pro Max"));
console.log(mobile1.setColor("Yellow"));
console.log(mobile1.setPrice(1345));

