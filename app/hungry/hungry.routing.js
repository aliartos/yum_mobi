"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var home_component_1 = require("./home/home.component");
// import { HistoryComponent } from './history/history.component';
// import { LoggedComponent } from '../shared/logged/logged.component';
// import {HungryRouteGuard} from './hungry-route.guard';
var hungryRoutes = [
    { path: "hungry", component: home_component_1.HomeComponent
    }
];
var HungryRoutingModule = (function () {
    //export const HungryRouting = RouterModule.forChild(hungryRoutes);
    function HungryRoutingModule() {
    }
    HungryRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(hungryRoutes)],
            exports: [router_1.NativeScriptRouterModule]
        })
        //export const HungryRouting = RouterModule.forChild(hungryRoutes);
    ], HungryRoutingModule);
    return HungryRoutingModule;
}());
exports.HungryRoutingModule = HungryRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVuZ3J5LnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJodW5ncnkucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFFdkUsd0RBQXNEO0FBQ3RELGtFQUFrRTtBQUNsRSx1RUFBdUU7QUFDdkUseURBQXlEO0FBRXpELElBQU0sWUFBWSxHQUFXO0lBQzNCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsOEJBQWE7S0FFekM7Q0FDRixDQUFDO0FBT0Y7SUFEQSxtRUFBbUU7SUFDbkU7SUFBbUMsQ0FBQztJQUF2QixtQkFBbUI7UUFML0IsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3pELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3BDLENBQUM7UUFDRixtRUFBbUU7T0FDdEQsbUJBQW1CLENBQUk7SUFBRCwwQkFBQztDQUFBLEFBQXBDLElBQW9DO0FBQXZCLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9ICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcclxuLy8gaW1wb3J0IHsgSGlzdG9yeUNvbXBvbmVudCB9IGZyb20gJy4vaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IExvZ2dlZENvbXBvbmVudCB9IGZyb20gJy4uL3NoYXJlZC9sb2dnZWQvbG9nZ2VkLmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7SHVuZ3J5Um91dGVHdWFyZH0gZnJvbSAnLi9odW5ncnktcm91dGUuZ3VhcmQnO1xyXG5cclxuY29uc3QgaHVuZ3J5Um91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgeyBwYXRoOiBcImh1bmdyeVwiLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnRcclxuICAgXHJcbiAgfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3QoaHVuZ3J5Um91dGVzKV0sXHJcbiAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cclxufSlcclxuLy9leHBvcnQgY29uc3QgSHVuZ3J5Um91dGluZyA9IFJvdXRlck1vZHVsZS5mb3JDaGlsZChodW5ncnlSb3V0ZXMpO1xyXG5leHBvcnQgY2xhc3MgSHVuZ3J5Um91dGluZ01vZHVsZSB7IH0iXX0=