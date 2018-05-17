import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { RouterExtensions } from 'nativescript-angular/router';
import * as firebase from "nativescript-plugin-firebase";



@Component({
    selector: 'dashboard',
    templateUrl: './dashboard/dashboard.component.html',
    styleUrls: ['./dashboard/dashboard.component.css']
})

export class DashBoardComponent {
    constructor(private router: Router) {

    }

    public logOut(){
      var logOut=  firebase.logout();
      console.log("logoutsuccessful");
      if(logOut){
          this.router.navigate(['/login']);
      }
  
    }
}