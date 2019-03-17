import { Injectable } from '@angular/core';
import { Cust } from './cust';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class DemoService {
  constructor(public http:Http){  }
  cust: Cust[] = [];
  cust1: Cust[] = [];
  noOfCust: number = 0;
  i : number;
  add_customer(refCust: Cust) {
    for(this.i = 0;this.i<this.noOfCust;this.i++){
      if(refCust.date == this.cust[this.i].date && refCust.name == this.cust[this.i].name && refCust.room == this.cust[this.i].room){
        alert("Already Booked !!");
        return;
      }
    }
    //this.cust.push(refCust);
    this.cust[this.noOfCust] = new Cust(refCust.room, refCust.name, refCust.id_proof, refCust.NoOfAdults, refCust.NoOfChildren, refCust.NoofDays,refCust.date);
    console.log(this.cust);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.noOfCust++;
    this.http.post('http://localhost:3000/users',
      JSON.stringify(refCust), { headers: headers })
      .subscribe(err => console.log(err));
  }
  get_customer(i: number) {
    if (i <= this.noOfCust) {
      return this.cust[i];
    }    
  }
  get_customers(){
    this.http.get('http://localhost:3000/users')
     .map((res: Response) => res.json())
     .subscribe((res: any) => {
       this.cust1 = res;
     });
     return this.cust1;
  }
  delete_customer(id){
    this.http.delete('http://localhost:3000/users/'+ id).subscribe(err=>console.log(err));
  }
  calculate(refCust: Cust) {
    return refCust.NoofDays * (refCust.NoOfAdults * 500 + refCust.NoOfChildren * 200);
  }
  getRentalA(roomType : string){
    switch(roomType){
      case "Exec":{
        return 500;
      }
      case "stan":{
        return 750;
      }
      case "suit":{
        return 1000;
      }
    }
  }
  getRentalC(roomType : string){
    switch(roomType){
      case "Exec":{
        return 300;
      }
      case "stan":{
        return 450;
      }
      case "suit":{
        return 600;
      }
    }
  }
  getRoomType(roomType : string){
    switch(roomType){
      case "Exec":{
        return "Executive";
      }
      case "stan":{
        return "Standard";
      }
      case "suit":{
        return "Suite";
      }
    }
  }
  
  titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
  } 
}
