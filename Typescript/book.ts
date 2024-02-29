

export class Book
{
    private title: string
    private nPages: number
    private isbn: string
    private author: string
    private editorial: string

    constructor(title:string, nPages: number, isbn:string, author:string, editorial:string)
    {
        this.title = title
        this.nPages = nPages
        this.isbn = isbn
        this.author = author
        this.editorial = editorial
    }
    public get Title()
    {
        return this.title
    }
    public get NPages()
    {
        return this.nPages
    }
    public get ISBN()
    {
        return this.isbn
    }
    public getAuthor()
    {
        return this.author
    }
    public get Editorial()
    {
        return this.editorial
    }
    public setTitle(title:string)
    {
       return this.title = title
    }
    public setNPages(nPages:number)
    {
        return this.nPages = nPages
    }
    public setISBN(isbn:string)
    {
        return this.isbn = isbn
    }
    public setAuthor(author:string)
    {
        return this.author = author
    }
    public setEditorial(editorial:string)
    {
        return this.editorial = editorial
    }
    public toStirng(): string
    {
        return `Title - ${this.title} \nNumber of Pages - ${this.nPages} \nISBN - ${this.isbn} \nAuthor - ${this.author} \nEditorial - ${this.editorial} \n`
    }
}




