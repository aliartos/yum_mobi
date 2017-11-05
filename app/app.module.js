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
                shared_module_1.SharedModule, anon_module_1.AnonModule, hungry_module_1.HungryModule
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnRkFBOEU7QUFDOUUsc0NBQTJEO0FBQzNELDBDQUF5RTtBQUN6RSwyRUFBMkU7QUFDM0Usb0RBQXFFO0FBQ3JFLHNEQUF1RTtBQUV2RSw2Q0FBaUQ7QUFDakQsaURBQStDO0FBRS9DLG9EQUFrRDtBQUNsRCwwREFBd0Q7QUFDeEQsc0VBQW1FO0FBRW5FLHdEQUFzRDtBQUN0RCx3REFBc0Q7QUFDdEQsa0RBQWdEO0FBQ2hELDhEQUF5RDtBQUV6RCxtQ0FBNkM7QUFDN0MsZ0RBQStDO0FBQy9DLHdEQUF1RDtBQUV2RCwwRUFBd0U7QUFJeEUsNkVBQTZFO0FBQzdFLGtEQUFtRTtBQUVuRSwrQkFBWSxFQUFFLENBQUM7QUFtQ2Y7SUFIQTs7TUFFRTtJQUNGO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBakNyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLGlDQUF3QjtnQkFDeEIsK0JBQXVCO2dCQUN2Qiw2QkFBc0I7Z0JBQ3RCLDhCQUFnQjtnQkFDaEIsNEJBQVksRUFBRSx3QkFBVSxFQUFFLDRCQUFZO2FBQ3pDO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLGdDQUFjO2dCQUNkLDJDQUFtQjthQUN0QjtZQUNELFNBQVMsRUFBRTtnQkFDUCxzQkFBYTtnQkFDYiwwQkFBVztnQkFDWCw2QkFBYTtnQkFDYixnQkFBTyxFQUFFLGlCQUFRO2dCQUNqQixFQUFFLE9BQU8sRUFBRSxxQkFBUyxFQUFFLFFBQVEsRUFBRSxnQ0FBZ0MsRUFBRTtnQkFDbEUsOENBQXFCO2FBQ3hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLG9FQUFvRTtnQkFDcEUsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztRQUNGOztVQUVFO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyAgIERhdGVQaXBlLCBEZWNpbWFsUGlwZSwgTG93ZXJDYXNlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHR3by13YXkgYmluZGluZ1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtL2l0ZW0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBJdGVtc0NvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbXMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEl0ZW1EZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW0tZGV0YWlsLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XHJcbmltcG9ydCB7IEh1bmdyeU1vZHVsZSB9IGZyb20gJy4vaHVuZ3J5L2h1bmdyeS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBBbm9uTW9kdWxlIH0gZnJvbSAnLi9hbm9uL2Fub24ubW9kdWxlJztcclxuaW1wb3J0IHsgc2V0U3RhdHVzQmFyIH0gZnJvbSAnLi9zaGFyZWQvc3RhdHVzLWJhci11dGlscyc7XHJcblxyXG5pbXBvcnQgeyBBdXRoQXBpLCBBZG1pbkFwaSB9IGZyb20gJy4vcmVtb3RlJztcclxuaW1wb3J0IHsgQkFTRV9QQVRIIH0gZnJvbSAnLi9yZW1vdGUvdmFyaWFibGVzJzsgXHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tICcuL3JlbW90ZS9jb25maWd1cmF0aW9uJztcclxuXHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xyXG5cclxuXHJcblxyXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzICBpZiB5b3UgbmVlZCB0byB1c2UgdGhlIEhUVFAgd3JhcHBlclxyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcclxuXHJcbnNldFN0YXR1c0JhcigpO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGJvb3RzdHJhcDogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsICAgICAgICBcclxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcclxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxyXG4gICAgICAgIFNoYXJlZE1vZHVsZSwgQW5vbk1vZHVsZSwgSHVuZ3J5TW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50LFxyXG4gICAgICAgIEl0ZW1zQ29tcG9uZW50LFxyXG4gICAgICAgIEl0ZW1EZXRhaWxDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBMb3dlckNhc2VQaXBlLFxyXG4gICAgICAgIEl0ZW1TZXJ2aWNlLFxyXG4gICAgICAgIENvbmZpZ3VyYXRpb24sXHJcbiAgICAgICAgQXV0aEFwaSwgQWRtaW5BcGksXHJcbiAgICAgICAgeyBwcm92aWRlOiBCQVNFX1BBVEgsIHVzZVZhbHVlOiBcImh0dHA6Ly8xODUuOTIuMjIzLjE2NDo4MDgwL2FwaVwiIH0sIC8vaHR0cDovL3l1bS5jaGFuaWEvYXBpXHJcbiAgICAgICAgQXV0aGVudGljYXRpb25TZXJ2aWNlXHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIC8vdGVsbHMgdGhlIGNvbXBpbGVyIG5vdCB0byBlcnJvciBvbiB1bmtub3duIGVsZW1lbnRzIGFuZCBhdHRyaWJ1dGVzXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG4vKlxyXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXHJcbiovXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XHJcbiJdfQ==