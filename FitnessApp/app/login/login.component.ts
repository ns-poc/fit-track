import { Component } from "@angular/core";
import { Router } from "@angular/router";

import * as application from "application";
import * as firebase from "nativescript-plugin-firebase";
import * as frame from "ui/frame";
import { RouterExtensions } from "nativescript-angular/router";
import * as dialogs from "ui/dialogs";
import * as appSettings from "application-settings";




@Component({
    selector: "gr-login",
    templateUrl: "./login/login.component.html",
    styleUrls: ["./login/login.component.css"],
})
export class LoginComponent {
    constructor(private router: Router, private routerExtensions: RouterExtensions) {
        if (appSettings.getBoolean("loggedIn")) {
            this.routerExtensions.navigate(["/dashboard"],{ clearHistory: true });
        }
    }

    public onGoogleLogin() {
        firebase.login({
            type: firebase.LoginType.GOOGLE,
        }).then(user => {
            console.log('Login success -- User details');
            console.log(JSON.stringify(user));
            this.routerExtensions.navigate(["/dashboard"],{ clearHistory: true });
        }).catch(err => {
            console.log(err);
            dialogs.alert(err);
        })
    }

    public onFacebookLogin() {
        firebase.login({
            type: firebase.LoginType.FACEBOOK,
        }).then(user => {
            console.log('Login success -- User details');
            console.log(JSON.stringify(user));
            appSettings.setBoolean("loggedIn", true);
            this.router.navigate(["/dashboard"]);
        }).catch(err => {
            console.log(err);
            dialogs.alert(err);
        })
    }
    public logOut(){
        firebase.logout().then(function (){
            appSettings.setBoolean("loggedIn", false);
        });
    }

}
