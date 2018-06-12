import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestComponent,
  
  ],
  imports: [
    BrowserModule, HttpModule,FormsModule, RouterModule.forRoot(
      [

        {path:'login', component:LoginComponent},
        {path:'test' , component:TestComponent}



      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
