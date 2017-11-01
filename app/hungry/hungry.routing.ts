import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes, RouterModule }  from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { HistoryComponent } from './history/history.component';
// import { LoggedComponent } from '../shared/logged/logged.component';
// import {HungryRouteGuard} from './hungry-route.guard';

const hungryRoutes: Routes = [
  { path: "hungry", component: HomeComponent
   
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(hungryRoutes)],
  exports: [NativeScriptRouterModule]
})
//export const HungryRouting = RouterModule.forChild(hungryRoutes);
export class HungryRoutingModule { }