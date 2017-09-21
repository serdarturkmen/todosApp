
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {API_URL} from "../app.constants";
import {Todos} from "./todos.model";

@Injectable()
export class TodosService{

  constructor(private http: Http){

  }


  getTodos(): Observable<any>{
    let sessionId = window.localStorage.getItem("sessionId");
    return this.http.get(API_URL +"/todos?sessionId="+sessionId);
  }

  addTodo(todo: Todos): Observable<any>{
    let sessionId = window.localStorage.getItem("sessionId");
    todo.status="completed";
    return this.http.put(API_URL +"/todo?sessionId="+sessionId,todo);
  }


}
