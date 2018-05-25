import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { RouterExtensions } from 'nativescript-angular/router';
import * as firebase from "nativescript-plugin-firebase";
import { AustraliaComponent } from "../australia/australia.component"


@Component({
    selector: 'dashboard',
    templateUrl: './dashboard/dashboard.component.html',
    styleUrls: ['./dashboard/dashboard.component.css']
})

export class DashBoardComponent {
    constructor(private router: Router) {

    }
    countries: { name: string, imageSrc: string }[] = [
        { name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
        { name: "Belgium", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/be.png" },
        { name: "Bulgaria", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/bg.png" },
        { name: "Canada", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ca.png" },
        { name: "Switzerland", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ch.png" },
        { name: "China", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cn.png" },
        { name: "Czech Republic", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cz.png" },
        { name: "Germany", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/de.png" },
        { name: "Spain", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/es.png" },
        { name: "Ethiopia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/et.png" },
        { name: "Croatia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hr.png" },
        { name: "Hungary", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hu.png" },
        { name: "Italy", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/it.png" },
        { name: "Jamaica", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/jm.png" },
        { name: "Romania", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ro.png" },
        { name: "Russia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ru.png" },
        { name: "United States", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/us.png" },
    ];

    onItemTap(): void {
        console.log('Item with index: ' + ' tapped');
    }


    public onTap(){
        console.log("Clicked on Australia");
        this.router.navigate(["australia"]);
    }

    public onShare(){

    }
    
    public onProfileClick(){

    }

    public onSettingsClick(){
        
    }

    public logOut(){
      var logOut=  firebase.logout();
      console.log("logoutsuccessful");
      if(logOut){
          this.router.navigate(['/login']);
      }
    }
}