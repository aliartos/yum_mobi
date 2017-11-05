"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var home_component_1 = require("./home/home.component");
var shared_module_1 = require("../shared/shared.module");
var hungry_routing_1 = require("./hungry.routing");
var remote_1 = require("../remote");
var HungryModule = (function () {
    function HungryModule() {
    }
    HungryModule = __decorate([
        core_1.NgModule({
            imports: [nativescript_module_1.NativeScriptModule, shared_module_1.SharedModule, hungry_routing_1.HungryRoutingModule],
            exports: [],
            declarations: [home_component_1.HomeComponent],
            providers: [remote_1.HungryApi],
        })
    ], HungryModule);
    return HungryModule;
}());
exports.HungryModule = HungryModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVuZ3J5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImh1bmdyeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsZ0ZBQThFO0FBQzlFLHdEQUFzRDtBQUN0RCx5REFBdUQ7QUFDdkQsbURBQXNEO0FBQ3RELG9DQUFzQztBQVN0QztJQUFBO0lBQTRCLENBQUM7SUFBaEIsWUFBWTtRQU54QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBRSx3Q0FBa0IsRUFBRSw0QkFBWSxFQUFFLG9DQUFtQixDQUFFO1lBQ2xFLE9BQU8sRUFBRSxFQUFFO1lBQ1gsWUFBWSxFQUFFLENBQUMsOEJBQWEsQ0FBQztZQUM3QixTQUFTLEVBQUUsQ0FBRSxrQkFBUyxDQUFFO1NBQzNCLENBQUM7T0FDVyxZQUFZLENBQUk7SUFBRCxtQkFBQztDQUFBLEFBQTdCLElBQTZCO0FBQWhCLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcclxuaW1wb3J0IHsgSHVuZ3J5Um91dGluZ01vZHVsZX0gZnJvbSAnLi9odW5ncnkucm91dGluZyc7XHJcbmltcG9ydCB7IEh1bmdyeUFwaSB9IGZyb20gJy4uL3JlbW90ZSc7XHJcbiBcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbIE5hdGl2ZVNjcmlwdE1vZHVsZSwgU2hhcmVkTW9kdWxlLCBIdW5ncnlSb3V0aW5nTW9kdWxlIF0sXHJcbiAgICBleHBvcnRzOiBbXSxcclxuICAgIGRlY2xhcmF0aW9uczogW0hvbWVDb21wb25lbnRdLFxyXG4gICAgcHJvdmlkZXJzOiBbIEh1bmdyeUFwaSBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSHVuZ3J5TW9kdWxlIHsgfVxyXG4iXX0=