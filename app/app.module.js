"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
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
// Uncomment and add to NgModule imports if you need to use two-way binding
var forms_1 = require("nativescript-angular/forms");
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
                http_1.NativeScriptHttpModule,
                forms_1.NativeScriptFormsModule,
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
                { provide: variables_1.BASE_PATH, useValue: "http://localhost:8080/api" },
                authentication_service_1.AuthenticationService
            ],
            schemas: [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsMENBQXFGO0FBQ3JGLGdGQUE4RTtBQUM5RSw2Q0FBaUQ7QUFDakQsaURBQStDO0FBRS9DLG9EQUFrRDtBQUNsRCwwREFBd0Q7QUFDeEQsc0VBQW1FO0FBRW5FLHdEQUFzRDtBQUN0RCx3REFBc0Q7QUFDdEQsa0RBQWdEO0FBQ2hELDhEQUF5RDtBQUV6RCxtQ0FBNkM7QUFDN0MsZ0RBQStDO0FBQy9DLHdEQUF1RDtBQUV2RCwwRUFBd0U7QUFFeEUsMkVBQTJFO0FBQzNFLG9EQUFxRTtBQUVyRSw2RUFBNkU7QUFDN0Usa0RBQW1FO0FBRW5FLCtCQUFZLEVBQUUsQ0FBQztBQWlDZjtJQUhBOztNQUVFO0lBQ0Y7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUEvQnJCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsNkJBQXNCO2dCQUN0QiwrQkFBdUI7Z0JBQ3ZCLDhCQUFnQjtnQkFDaEIsNEJBQVksRUFBRSx3QkFBVSxFQUFFLDRCQUFZO2FBQ3pDO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLGdDQUFjO2dCQUNkLDJDQUFtQjthQUN0QjtZQUNELFNBQVMsRUFBRTtnQkFDUCxzQkFBYTtnQkFDYiwwQkFBVztnQkFDWCw2QkFBYTtnQkFDYixnQkFBTyxFQUFFLGlCQUFRO2dCQUNqQixFQUFFLE9BQU8sRUFBRSxxQkFBUyxFQUFFLFFBQVEsRUFBRSwyQkFBMkIsRUFBRTtnQkFDN0QsOENBQXFCO2FBQ3hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7UUFDRjs7VUFFRTtPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSwgRGF0ZVBpcGUsIERlY2ltYWxQaXBlLCBMb3dlckNhc2VQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtL2l0ZW0uc2VydmljZVwiO1xuaW1wb3J0IHsgSXRlbXNDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW1zLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSXRlbURldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbS1kZXRhaWwuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgSHVuZ3J5TW9kdWxlIH0gZnJvbSAnLi9odW5ncnkvaHVuZ3J5Lm1vZHVsZSc7XG5pbXBvcnQgeyBBbm9uTW9kdWxlIH0gZnJvbSAnLi9hbm9uL2Fub24ubW9kdWxlJztcbmltcG9ydCB7IHNldFN0YXR1c0JhciB9IGZyb20gJy4vc2hhcmVkL3N0YXR1cy1iYXItdXRpbHMnO1xuXG5pbXBvcnQgeyBBdXRoQXBpLCBBZG1pbkFwaSB9IGZyb20gJy4vcmVtb3RlJztcbmltcG9ydCB7IEJBU0VfUEFUSCB9IGZyb20gJy4vcmVtb3RlL3ZhcmlhYmxlcyc7IFxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4vcmVtb3RlL2NvbmZpZ3VyYXRpb24nO1xuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdHdvLXdheSBiaW5kaW5nXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzICBpZiB5b3UgbmVlZCB0byB1c2UgdGhlIEhUVFAgd3JhcHBlclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5cbnNldFN0YXR1c0JhcigpO1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgU2hhcmVkTW9kdWxlLCBBbm9uTW9kdWxlLCBIdW5ncnlNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIEl0ZW1zQ29tcG9uZW50LFxuICAgICAgICBJdGVtRGV0YWlsQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgTG93ZXJDYXNlUGlwZSxcbiAgICAgICAgSXRlbVNlcnZpY2UsXG4gICAgICAgIENvbmZpZ3VyYXRpb24sXG4gICAgICAgIEF1dGhBcGksIEFkbWluQXBpLFxuICAgICAgICB7IHByb3ZpZGU6IEJBU0VfUEFUSCwgdXNlVmFsdWU6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaVwiIH0sIC8vaHR0cDovL3l1bS5jaGFuaWEvYXBpXG4gICAgICAgIEF1dGhlbnRpY2F0aW9uU2VydmljZVxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXG4qL1xuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==