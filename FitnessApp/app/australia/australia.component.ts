import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { RouterExtensions } from 'nativescript-angular/router';
import * as firebase from "nativescript-plugin-firebase";



@Component({
    selector: 'australia',
    templateUrl: './australia/australia.component.html',
    styleUrls: ['./australia/australia.component.css']
})

export class AustraliaComponent {
    constructor(private router: Router) {

    }

    album: { bandName: string, albumName: string, year: string, owned: boolean, myRating: string} = {
        bandName: "Ed Sheeran",
        albumName: "X",
        year: "2017",
        owned: true,
        myRating: "9.5"
    };

    public logOut(){
        var logOut=  firebase.logout();
        console.log("logoutsuccessful");
        if(logOut){
            this.router.navigate(['/login']);
        }
      }
}