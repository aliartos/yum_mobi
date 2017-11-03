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
                { provide: variables_1.BASE_PATH, useValue: "http://ip:8080/api" },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnRkFBOEU7QUFDOUUsc0NBQTJEO0FBQzNELDBDQUF5RTtBQUN6RSwyRUFBMkU7QUFDM0Usb0RBQXFFO0FBQ3JFLHNEQUF1RTtBQUV2RSw2Q0FBaUQ7QUFDakQsaURBQStDO0FBRS9DLG9EQUFrRDtBQUNsRCwwREFBd0Q7QUFDeEQsc0VBQW1FO0FBRW5FLHdEQUFzRDtBQUN0RCx3REFBc0Q7QUFDdEQsa0RBQWdEO0FBQ2hELDhEQUF5RDtBQUV6RCxtQ0FBNkM7QUFDN0MsZ0RBQStDO0FBQy9DLHdEQUF1RDtBQUV2RCwwRUFBd0U7QUFJeEUsNkVBQTZFO0FBQzdFLGtEQUFtRTtBQUVuRSwrQkFBWSxFQUFFLENBQUM7QUFtQ2Y7SUFIQTs7TUFFRTtJQUNGO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBakNyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLGlDQUF3QjtnQkFDeEIsK0JBQXVCO2dCQUN2Qiw2QkFBc0I7Z0JBQ3RCLDhCQUFnQjtnQkFDaEIsNEJBQVksRUFBRSx3QkFBVSxFQUFFLDRCQUFZO2FBQ3pDO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLGdDQUFjO2dCQUNkLDJDQUFtQjthQUN0QjtZQUNELFNBQVMsRUFBRTtnQkFDUCxzQkFBYTtnQkFDYiwwQkFBVztnQkFDWCw2QkFBYTtnQkFDYixnQkFBTyxFQUFFLGlCQUFRO2dCQUNqQixFQUFFLE9BQU8sRUFBRSxxQkFBUyxFQUFFLFFBQVEsRUFBRSxvQkFBb0IsRUFBRTtnQkFDdEQsOENBQXFCO2FBQ3hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLG9FQUFvRTtnQkFDcEUsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztRQUNGOztVQUVFO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7ICAgRGF0ZVBpcGUsIERlY2ltYWxQaXBlLCBMb3dlckNhc2VQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHR3by13YXkgYmluZGluZ1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vaXRlbS9pdGVtLnNlcnZpY2VcIjtcbmltcG9ydCB7IEl0ZW1zQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEl0ZW1EZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW0tZGV0YWlsLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IEh1bmdyeU1vZHVsZSB9IGZyb20gJy4vaHVuZ3J5L2h1bmdyeS5tb2R1bGUnO1xuaW1wb3J0IHsgQW5vbk1vZHVsZSB9IGZyb20gJy4vYW5vbi9hbm9uLm1vZHVsZSc7XG5pbXBvcnQgeyBzZXRTdGF0dXNCYXIgfSBmcm9tICcuL3NoYXJlZC9zdGF0dXMtYmFyLXV0aWxzJztcblxuaW1wb3J0IHsgQXV0aEFwaSwgQWRtaW5BcGkgfSBmcm9tICcuL3JlbW90ZSc7XG5pbXBvcnQgeyBCQVNFX1BBVEggfSBmcm9tICcuL3JlbW90ZS92YXJpYWJsZXMnOyBcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tICcuL3JlbW90ZS9jb25maWd1cmF0aW9uJztcblxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5cblxuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzICBpZiB5b3UgbmVlZCB0byB1c2UgdGhlIEhUVFAgd3JhcHBlclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5cbnNldFN0YXR1c0JhcigpO1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLCAgICAgICAgXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIFNoYXJlZE1vZHVsZSwgQW5vbk1vZHVsZSwgSHVuZ3J5TW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBJdGVtc0NvbXBvbmVudCxcbiAgICAgICAgSXRlbURldGFpbENvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIExvd2VyQ2FzZVBpcGUsXG4gICAgICAgIEl0ZW1TZXJ2aWNlLFxuICAgICAgICBDb25maWd1cmF0aW9uLFxuICAgICAgICBBdXRoQXBpLCBBZG1pbkFwaSxcbiAgICAgICAgeyBwcm92aWRlOiBCQVNFX1BBVEgsIHVzZVZhbHVlOiBcImh0dHA6Ly9pcDo4MDgwL2FwaVwiIH0sIC8vaHR0cDovL3l1bS5jaGFuaWEvYXBpXG4gICAgICAgIEF1dGhlbnRpY2F0aW9uU2VydmljZVxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICAvL3RlbGxzIHRoZSBjb21waWxlciBub3QgdG8gZXJyb3Igb24gdW5rbm93biBlbGVtZW50cyBhbmQgYXR0cmlidXRlc1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXG4qL1xuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==