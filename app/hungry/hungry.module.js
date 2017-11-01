"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var home_component_1 = require("./home/home.component");
var shared_module_1 = require("../shared/shared.module");
var hungry_routing_1 = require("./hungry.routing");
var HungryModule = (function () {
    function HungryModule() {
    }
    HungryModule = __decorate([
        core_1.NgModule({
            imports: [nativescript_module_1.NativeScriptModule, shared_module_1.SharedModule, hungry_routing_1.HungryRoutingModule],
            exports: [],
            declarations: [home_component_1.HomeComponent],
            providers: [],
        })
    ], HungryModule);
    return HungryModule;
}());
exports.HungryModule = HungryModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVuZ3J5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImh1bmdyeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsZ0ZBQThFO0FBQzlFLHdEQUFzRDtBQUN0RCx5REFBdUQ7QUFDdkQsbURBQXNEO0FBUXREO0lBQUE7SUFBNEIsQ0FBQztJQUFoQixZQUFZO1FBTnhCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFFLHdDQUFrQixFQUFFLDRCQUFZLEVBQUUsb0NBQW1CLENBQUU7WUFDbEUsT0FBTyxFQUFFLEVBQUU7WUFDWCxZQUFZLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1lBQzdCLFNBQVMsRUFBRSxFQUFFO1NBQ2hCLENBQUM7T0FDVyxZQUFZLENBQUk7SUFBRCxtQkFBQztDQUFBLEFBQTdCLElBQTZCO0FBQWhCLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcclxuaW1wb3J0IHsgSHVuZ3J5Um91dGluZ01vZHVsZX0gZnJvbSAnLi9odW5ncnkucm91dGluZyc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogWyBOYXRpdmVTY3JpcHRNb2R1bGUsIFNoYXJlZE1vZHVsZSwgSHVuZ3J5Um91dGluZ01vZHVsZSBdLFxyXG4gICAgZXhwb3J0czogW10sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtIb21lQ29tcG9uZW50XSxcclxuICAgIHByb3ZpZGVyczogW10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIdW5ncnlNb2R1bGUgeyB9XHJcbiJdfQ==