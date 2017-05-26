import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ChatComponent } from './chat.component';


@NgModule({
  imports:      [ BrowserModule, HttpModule,JsonpModule, FormsModule  ],
  declarations: [ AppComponent, ChatComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
