import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { RouterModule } from '@angular/router';
import { Http, Response, Headers, RequestOptions, HttpModule } from '@angular/http';

import * as moment from 'moment';
import { AppComponent } from './app.component';
import { ExecutiveComponent } from './executive/executive.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StandardComponent } from './standard/standard.component';
import { SuiteComponent } from './suite/suite.component';
import { DemoService } from './demo.service';
import { BookingsComponent } from './bookings/bookings.component';


@NgModule({
  declarations: [
    AppComponent,
    ExecutiveComponent,
    NavbarComponent,
    StandardComponent,
    SuiteComponent,
    BookingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,HttpModule,
    RouterModule.forRoot([
      {path:'exec' ,component:ExecutiveComponent},
      {path:'stan' ,component:StandardComponent},
      {path:'suit' ,component:SuiteComponent},
      {path:'bookings' ,component:BookingsComponent}
    ])
  ],
  providers: [DemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
