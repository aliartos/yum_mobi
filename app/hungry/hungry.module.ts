import { NgModule } from '@angular/core';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { HungryRoutingModule} from './hungry.routing';
import { HungryApi } from '../remote';
 

@NgModule({
    imports: [ NativeScriptModule, SharedModule, HungryRoutingModule ],
    exports: [],
    declarations: [HomeComponent],
    providers: [ HungryApi ],
})
export class HungryModule { }
