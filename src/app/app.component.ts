import { Component } from '@angular/core';
import { Hero} from './heroes/hero';
import { DataService } from './data.service';
import { Http } from '@angular/http';
import { trigger,state,style,transition,animate,keyframes} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css'],
  

})
export class AppComponent {

  myData=[];
  
  constructor(private http:Http){
    this.http.get('https://jsonplaceholder.typicode.com/photos')
      .subscribe(res =>{
       this.myData=res.json();
       console.log(this.myData);
      });
      
     };
  
}
