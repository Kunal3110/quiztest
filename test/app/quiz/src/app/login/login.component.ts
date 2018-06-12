import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uname:string;
pwd:string;
msg:string;
  constructor(private _router:Router) { }
  validate()
  {
    if(this.uname=="Kunal" && this.pwd=="sinha")
    {
      
      this._router.navigate(["./test"]);

    }
    else
      this.msg="Invalid Inputs";
    
  }

  ngOnInit() {
  }

}
