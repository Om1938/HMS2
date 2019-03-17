export class Cust {
    _id : string;
    room : string;
    name : string;
    id_proof : string;
    NoOfAdults : number;
    NoOfChildren : number; 
    NoofDays : number;
    date : Date;
    constructor(room:string,name:string,id_proof : string,NoOfAdults : number,NoOfChildren : number,NoofDays : number,date:Date){
        this.room = room;
        this.name = name;
        this.id_proof = id_proof;
        this.NoOfAdults = NoOfAdults;
        this.NoOfChildren = NoOfChildren;
        this.NoofDays = NoofDays;
        this.date = date;
    }
}
