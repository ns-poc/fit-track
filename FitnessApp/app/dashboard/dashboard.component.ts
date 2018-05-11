import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { RouterExtensions } from 'nativescript-angular/router'


@Component({
    selector: 'dashboard',
    templateUrl: './dashboard/dashboard.component.html',
    styleUrls: ['./dashboard/dashboard.component.css']
})

export class DashBoardComponent {
    constructor(private router: Router) {

    }

}