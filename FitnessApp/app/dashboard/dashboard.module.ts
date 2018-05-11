import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { DashBoardComponent } from "./dashboard.component";

@NgModule({
    imports: [
        NativeScriptFormsModule,
        NativeScriptCommonModule,
    ],
    declarations: [
        DashBoardComponent,
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class DashBoardModule { }
