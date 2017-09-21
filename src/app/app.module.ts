import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import { TodosComponent } from './todos/todos.component';
import {LoginService} from "./login/login.service";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {TodosService} from "./todos/todos.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TodosComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    LoginService,
    TodosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
