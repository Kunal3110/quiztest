import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

uname:string;
  private _url:string='./assets/test.json';
  questions:any[];

  constructor(private _http:Http) {
var observable = this._http.get(this._url)
.map(x=>x.json());
observable.subscribe(x=>this.questions=x);

   }
   msg:string;
   q:any;
   calculateScore =function(){

var count=0;
/*alert(this.questions[0].qno+this.questions[0].correct);*/
if(this.questions[0].qno == this.questions[0].correct) count++;
if(this.questions[1].qno == this.questions[1].correct) count++;
if(this.questions[2].qno == this.questions[2].correct) count++;
if(this.questions[3].qno == this.questions[3].correct) count++;

this.msg ='Score of is'+count+ ' out of 4';
   }

  ngOnInit() {
  }

}
