import { Book } from "./book";

export class Library
{
    private books: Book []
    private address: string
    private manager: string

    constructor(books: Book [], address: string, mannager: string)
    {
            this.books = books
            this.address = address
            this.manager = mannager
    }

    public get Address()
    {
        return this.address
    }
    public get Manager()
    {
        return this.manager
    }
    public setAddress(address: string)
    {
        return this.address = address
    }
    public setManager(managerNAme: string)
    {
        return this.manager = managerNAme
    }
    public toString(): string
    {       let myBooks: string = ""
        for (let i = 0; i< this.books.length; i++){

               myBooks += `Book ${i+1} \n ${this.books[i].toStirng()} \n`                
        }       return myBooks
    }    
    public getNumberOfBooks():number
    {
        return this.books.length
    }
    public findByAuthor(author: string): Book[]
    {
        let myBookByAuthor: Book[] = []
                    
        for (let i = 0; i < this.books.length; i++){
        if ( this.books[i].getAuthor() == author){
                myBookByAuthor.push(this.books[i]) 
            } }   
        return myBookByAuthor
    }                        
}















