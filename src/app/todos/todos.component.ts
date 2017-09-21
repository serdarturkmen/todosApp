import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {TodosService} from "./todos.service";
import {Subscription} from "rxjs/Subscription";
import {LoginService} from "../login/login.service";
import {Todos} from "./todos.model";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit, OnDestroy {


  private subscription: Subscription;
  public todosInProgress: Todos[] = [];
  public todosCompleted: Todos[] = [];
  public isAdding = false;
  public todoTmp;
  constructor(private todosService: TodosService, private loginService: LoginService) { }



  ngOnInit() {
    this.getTodos();
    this.todoTmp = new Todos();
    this.isAdding = false;
  }

  logout(): void{
    this.loginService.logout();
  }


  getTodos(){
    this.todosInProgress = [];
    this.todosCompleted = [];
    this.subscription = this.todosService.getTodos().subscribe(
      (response) =>{
         let todoList: Todos[] =<Array<Todos>> response.json().data;
         todoList.forEach( todoItem => {
           if(todoItem.status=="completed"){
             this.todosCompleted.push(todoItem);
           }else{
             this.todosInProgress.push(todoItem);
           }
         });
      },
      (error) => {

      },
      () =>{

      }
    )

  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

  showNewItem(){
    this.isAdding = true;
  }

  cancelAdding(){
    this.isAdding = false;
  }

  addNewItem(){

    this.subscription = this.todosService.addTodo(this.todoTmp).subscribe(
      (response) => {
          this.getTodos();
      },
      (error) => {

      },
      () => {

      }
    )

  }

}
