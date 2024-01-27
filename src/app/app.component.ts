
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count=0
  hitebutton=false;

  add(){
    this.count ++;
  }
  sub()
{
  if(this.count > 0){
    this.count --;
  }
}
hide(){
this.hitebutton=true;
}
}

