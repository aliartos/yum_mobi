"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
// Uncomment and add to NgModule imports if you need to use two-way binding
var forms_1 = require("nativescript-angular/forms");
var router_1 = require("nativescript-angular/router");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var item_service_1 = require("./item/item.service");
var items_component_1 = require("./item/items.component");
var item_detail_component_1 = require("./item/item-detail.component");
var shared_module_1 = require("./shared/shared.module");
var hungry_module_1 = require("./hungry/hungry.module");
var anon_module_1 = require("./anon/anon.module");
var status_bar_utils_1 = require("./shared/status-bar-utils");
var remote_1 = require("./remote");
var variables_1 = require("./remote/variables");
var configuration_1 = require("./remote/configuration");
var authentication_service_1 = require("./shared/authentication.service");
var angular_calendar_1 = require("angular-calendar");
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
var http_1 = require("nativescript-angular/http");
status_bar_utils_1.setStatusBar();
var AppModule = (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                router_1.NativeScriptRouterModule,
                forms_1.NativeScriptFormsModule,
                http_1.NativeScriptHttpModule,
                app_routing_1.AppRoutingModule,
                shared_module_1.SharedModule, anon_module_1.AnonModule, hungry_module_1.HungryModule,
                angular_calendar_1.CalendarModule.forRoot()
            ],
            declarations: [
                app_component_1.AppComponent,
                items_component_1.ItemsComponent,
                item_detail_component_1.ItemDetailComponent
            ],
            providers: [
                common_1.LowerCasePipe,
                item_service_1.ItemService,
                configuration_1.Configuration,
                remote_1.AuthApi, remote_1.AdminApi,
                { provide: variables_1.BASE_PATH, useValue: "http://185.92.223.164:8080/api" },
                authentication_service_1.AuthenticationService
            ],
            schemas: [
                //tells the compiler not to error on unknown elements and attributes
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnRkFBOEU7QUFDOUUsc0NBQTJEO0FBQzNELDBDQUF5RTtBQUN6RSwyRUFBMkU7QUFDM0Usb0RBQXFFO0FBQ3JFLHNEQUF1RTtBQUV2RSw2Q0FBaUQ7QUFDakQsaURBQStDO0FBRS9DLG9EQUFrRDtBQUNsRCwwREFBd0Q7QUFDeEQsc0VBQW1FO0FBRW5FLHdEQUFzRDtBQUN0RCx3REFBc0Q7QUFDdEQsa0RBQWdEO0FBQ2hELDhEQUF5RDtBQUV6RCxtQ0FBNkM7QUFDN0MsZ0RBQStDO0FBQy9DLHdEQUF1RDtBQUV2RCwwRUFBd0U7QUFDeEUscURBQWtEO0FBR2xELDZFQUE2RTtBQUM3RSxrREFBbUU7QUFFbkUsK0JBQVksRUFBRSxDQUFDO0FBb0NmO0lBSEE7O01BRUU7SUFDRjtJQUF5QixDQUFDO0lBQWIsU0FBUztRQWxDckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQixpQ0FBd0I7Z0JBQ3hCLCtCQUF1QjtnQkFDdkIsNkJBQXNCO2dCQUN0Qiw4QkFBZ0I7Z0JBQ2hCLDRCQUFZLEVBQUUsd0JBQVUsRUFBRSw0QkFBWTtnQkFDdEMsaUNBQWMsQ0FBQyxPQUFPLEVBQUU7YUFDM0I7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1osZ0NBQWM7Z0JBQ2QsMkNBQW1CO2FBQ3RCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLHNCQUFhO2dCQUNiLDBCQUFXO2dCQUNYLDZCQUFhO2dCQUNiLGdCQUFPLEVBQUUsaUJBQVE7Z0JBQ2pCLEVBQUUsT0FBTyxFQUFFLHFCQUFTLEVBQUUsUUFBUSxFQUFFLGdDQUFnQyxFQUFFO2dCQUNsRSw4Q0FBcUI7YUFDeEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsb0VBQW9FO2dCQUNwRSx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO1FBQ0Y7O1VBRUU7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7ICAgRGF0ZVBpcGUsIERlY2ltYWxQaXBlLCBMb3dlckNhc2VQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdHdvLXdheSBiaW5kaW5nXHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gXCIuL2l0ZW0vaXRlbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEl0ZW1zQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtcy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSXRlbURldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbS1kZXRhaWwuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcclxuaW1wb3J0IHsgSHVuZ3J5TW9kdWxlIH0gZnJvbSAnLi9odW5ncnkvaHVuZ3J5Lm1vZHVsZSc7XHJcbmltcG9ydCB7IEFub25Nb2R1bGUgfSBmcm9tICcuL2Fub24vYW5vbi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBzZXRTdGF0dXNCYXIgfSBmcm9tICcuL3NoYXJlZC9zdGF0dXMtYmFyLXV0aWxzJztcclxuXHJcbmltcG9ydCB7IEF1dGhBcGksIEFkbWluQXBpIH0gZnJvbSAnLi9yZW1vdGUnO1xyXG5pbXBvcnQgeyBCQVNFX1BBVEggfSBmcm9tICcuL3JlbW90ZS92YXJpYWJsZXMnOyBcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4vcmVtb3RlL2NvbmZpZ3VyYXRpb24nO1xyXG5cclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvYXV0aGVudGljYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IENhbGVuZGFyTW9kdWxlIH0gZnJvbSAnYW5ndWxhci1jYWxlbmRhcic7XHJcblxyXG5cclxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyAgaWYgeW91IG5lZWQgdG8gdXNlIHRoZSBIVFRQIHdyYXBwZXJcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XHJcblxyXG5zZXRTdGF0dXNCYXIoKTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBib290c3RyYXA6IFtcclxuICAgICAgICBBcHBDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLCAgICAgICAgXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXHJcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcclxuICAgICAgICBTaGFyZWRNb2R1bGUsIEFub25Nb2R1bGUsIEh1bmdyeU1vZHVsZSxcclxuICAgICAgICBDYWxlbmRhck1vZHVsZS5mb3JSb290KClcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBBcHBDb21wb25lbnQsXHJcbiAgICAgICAgSXRlbXNDb21wb25lbnQsXHJcbiAgICAgICAgSXRlbURldGFpbENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIExvd2VyQ2FzZVBpcGUsXHJcbiAgICAgICAgSXRlbVNlcnZpY2UsXHJcbiAgICAgICAgQ29uZmlndXJhdGlvbixcclxuICAgICAgICBBdXRoQXBpLCBBZG1pbkFwaSwgXHJcbiAgICAgICAgeyBwcm92aWRlOiBCQVNFX1BBVEgsIHVzZVZhbHVlOiBcImh0dHA6Ly8xODUuOTIuMjIzLjE2NDo4MDgwL2FwaVwiIH0sIC8vaHR0cDovL3l1bS5jaGFuaWEvYXBpXHJcbiAgICAgICAgQXV0aGVudGljYXRpb25TZXJ2aWNlXHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIC8vdGVsbHMgdGhlIGNvbXBpbGVyIG5vdCB0byBlcnJvciBvbiB1bmtub3duIGVsZW1lbnRzIGFuZCBhdHRyaWJ1dGVzXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG4vKlxyXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXHJcbiovXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XHJcbiJdfQ==