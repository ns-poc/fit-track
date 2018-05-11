import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { LoginComponent } from "./login.component";

@NgModule({
    imports: [
        NativeScriptFormsModule,
        NativeScriptCommonModule,
    ],
    declarations: [
        LoginComponent
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class LoginModule { }
