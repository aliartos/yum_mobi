import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        NativeScriptHttpModule
    ],
    exports: [LoginComponent],
    declarations: [LoginComponent],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AnonModule { }
