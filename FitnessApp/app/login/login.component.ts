import { Component } from "@angular/core";
import { Router } from "@angular/router";

import * as application from "application";
import * as firebase from "nativescript-plugin-firebase";
import * as frame from "ui/frame";

import * as dialogs from "ui/dialogs";




@Component({
    selector: "gr-login",
    templateUrl: "./login/login.component.html",
    styleUrls: ["./login/login.component.css"],
})
export class LoginComponent {
    constructor(private router: Router) {

    }

    public onGoogleLogin() {
        firebase.login({
            type: firebase.LoginType.GOOGLE,
        }).then(user => {
            console.log('Login success -- User details');
            console.log(JSON.stringify(user));
            this.router.navigate(["/dashboard"]);
        }).catch(err => {
            console.log(err);
            dialogs.alert(err);
        })
    }
    public logOut(){
        firebase.logout();
    }

}
