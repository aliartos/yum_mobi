import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {   DatePipe, DecimalPipe, LowerCasePipe } from '@angular/common';
// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { ItemService } from "./item/item.service";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

import { SharedModule } from './shared/shared.module';
import { HungryModule } from './hungry/hungry.module';
import { AnonModule } from './anon/anon.module';
import { setStatusBar } from './shared/status-bar-utils';

import { AuthApi, AdminApi } from './remote';
import { BASE_PATH } from './remote/variables'; 
import { Configuration } from './remote/configuration';

import { AuthenticationService } from './shared/authentication.service';



// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
import { NativeScriptHttpModule } from "nativescript-angular/http";

setStatusBar();

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,        
        NativeScriptRouterModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        AppRoutingModule,
        SharedModule, AnonModule, HungryModule
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent
    ],
    providers: [
        LowerCasePipe,
        ItemService,
        Configuration,
        AuthApi, AdminApi,
        { provide: BASE_PATH, useValue: "http://185.92.223.164:8080/api" }, //http://yum.chania/api
        AuthenticationService
    ],
    schemas: [
        //tells the compiler not to error on unknown elements and attributes
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
