import { NgModule } from '@angular/core';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { HungryRoutingModule} from './hungry.routing';

@NgModule({
    imports: [ NativeScriptModule, SharedModule, HungryRoutingModule ],
    exports: [],
    declarations: [HomeComponent],
    providers: [],
})
export class HungryModule { }
