import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmailListComponent } from './email-list/email-list.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


// Remove the AppComponent import here if it's standalone

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppComponent,
    EmailListComponent,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule
    // Add other Material modules here
  ],
  providers: [],

})
export class AppModule { }





