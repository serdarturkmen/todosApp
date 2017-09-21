import { Component } from '@angular/core';
import {NavigationStart, Router} from "@angular/router";
import "rxjs/add/operator/filter";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router){

    router.events.filter((e: NavigationStart) => e instanceof NavigationStart)
      .subscribe((e: NavigationStart) => {
        let isAuthenticated = window.localStorage.getItem("isAuthenticated");
        if(e.url !== '/login') {
          if(isAuthenticated!=="true") {
            router.navigate(['/login']);
          }
        }
      });
  }
}
