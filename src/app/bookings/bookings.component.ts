import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';
import {FormsModule} from '@angular/forms'
import * as moment from 'moment'
import * as num2word from "number-to-words";
import { Cust } from '../cust';
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  now : any;
  modalData :Cust = new Cust("","","",0,0,0,new Date);
  constructor(public appservice: DemoService) {
     
   }  
  ngOnInit() {
    this.appservice.get_customers();
  }
  date(date){
    this.now = moment(date).format('DD-MMM-YYYY, ddd'); 
    return this.now;
  }
  delete(x){
    this.appservice.delete_customer(x);
        window.location.reload();
  }
  num2word(x){
    return num2word.toWords(x);
  }
}
