"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var http_1 = require("nativescript-angular/http");
var login_component_1 = require("./login/login.component");
var AnonModule = (function () {
    function AnonModule() {
    }
    AnonModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                router_1.NativeScriptRouterModule,
                http_1.NativeScriptHttpModule
            ],
            exports: [login_component_1.LoginComponent],
            declarations: [login_component_1.LoginComponent],
            providers: [],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], AnonModule);
    return AnonModule;
}());
exports.AnonModule = AnonModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbm9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGdGQUE4RTtBQUM5RSxvREFBcUU7QUFDckUsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSxrREFBbUU7QUFDbkUsMkRBQXlEO0FBY3pEO0lBQUE7SUFBMEIsQ0FBQztJQUFkLFVBQVU7UUFadEIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsK0JBQXVCO2dCQUN2QixpQ0FBd0I7Z0JBQ3hCLDZCQUFzQjthQUN6QjtZQUNELE9BQU8sRUFBRSxDQUFDLGdDQUFjLENBQUM7WUFDekIsWUFBWSxFQUFFLENBQUMsZ0NBQWMsQ0FBQztZQUM5QixTQUFTLEVBQUUsRUFBRTtZQUNiLE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1NBQzlCLENBQUM7T0FDVyxVQUFVLENBQUk7SUFBRCxpQkFBQztDQUFBLEFBQTNCLElBQTJCO0FBQWQsZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGVcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbTG9naW5Db21wb25lbnRdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbTG9naW5Db21wb25lbnRdLFxyXG4gICAgcHJvdmlkZXJzOiBbXSxcclxuICAgIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQW5vbk1vZHVsZSB7IH1cclxuIl19