import { NgModule } from '@angular/core';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { DatePipe, DecimalPipe, LowerCasePipe } from '@angular/common';
import { GlobalSettingsService } from './services/global-settings-service.service';

@NgModule({
    imports: [NativeScriptModule],
    exports: [
        DecimalPipe,
        DatePipe,
        LowerCasePipe
    ],
    declarations: [],
    providers: [    
        DecimalPipe,
        DatePipe,
        GlobalSettingsService,
        LowerCasePipe,],
})
export class SharedModule { }
