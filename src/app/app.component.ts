import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div class="container clearfix"><h1>Welcome to test change {{name}}</h1></div>
  <chat-box></chat-box>`,
})
export class AppComponent  
{ 
  name = 'Virtuel Car Dashboard Assistant';
  address:string;

  constructor(){
    this.address ="Nagpur"
  } 
}
