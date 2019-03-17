import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';
import { Cust } from '../cust';

import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-executive',
  templateUrl: './executive.component.html',
  styleUrls: ['./executive.component.css']
})
export class ExecutiveComponent {
  room: string = "Exec"; 
  value : number;
  cust: Cust = new Cust(this.room,"","",null,null,null,new Date);  
  constructor(public appservice: DemoService) {
  }
    calculatenprint(){
    this.appservice.add_customer(this.cust);
    this.value = this.appservice.calculate(this.cust);
    }
}
