import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "gr-login",
    templateUrl: "./login/login.component.html",
    styleUrls: ["./login/login.component.css"],
})
export class LoginComponent {

    constructor(private router: Router) {

    }

    login() {

        this.router.navigate(["dashboard"]);
    }

}
