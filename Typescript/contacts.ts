import { Person } from "./Person";

export class Contacts
{
    public people: object []

    constructor ()
    {
        this.people = []
    }
    printCalendar()
    {
        console.log(this.people)
        
    }
}



