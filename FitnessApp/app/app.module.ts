import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { LoginComponent } from "./login/login.component";
import { DashBoardComponent } from "./dashboard/dashboard.component";


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        DashBoardComponent
    ],
    providers: [
        
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class AppModule { }