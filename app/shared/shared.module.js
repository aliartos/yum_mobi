"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var common_1 = require("@angular/common");
var global_settings_service_service_1 = require("./services/global-settings-service.service");
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [nativescript_module_1.NativeScriptModule],
            exports: [
                common_1.DecimalPipe,
                common_1.DatePipe,
                common_1.LowerCasePipe
            ],
            declarations: [],
            providers: [
                common_1.DecimalPipe,
                common_1.DatePipe,
                global_settings_service_service_1.GlobalSettingsService,
                common_1.LowerCasePipe,
            ],
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsZ0ZBQThFO0FBQzlFLDBDQUF1RTtBQUN2RSw4RkFBbUY7QUFnQm5GO0lBQUE7SUFBNEIsQ0FBQztJQUFoQixZQUFZO1FBZHhCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLHdDQUFrQixDQUFDO1lBQzdCLE9BQU8sRUFBRTtnQkFDTCxvQkFBVztnQkFDWCxpQkFBUTtnQkFDUixzQkFBYTthQUNoQjtZQUNELFlBQVksRUFBRSxFQUFFO1lBQ2hCLFNBQVMsRUFBRTtnQkFDUCxvQkFBVztnQkFDWCxpQkFBUTtnQkFDUix1REFBcUI7Z0JBQ3JCLHNCQUFhO2FBQUU7U0FDdEIsQ0FBQztPQUNXLFlBQVksQ0FBSTtJQUFELG1CQUFDO0NBQUEsQUFBN0IsSUFBNkI7QUFBaEIsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBEYXRlUGlwZSwgRGVjaW1hbFBpcGUsIExvd2VyQ2FzZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBHbG9iYWxTZXR0aW5nc1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2dsb2JhbC1zZXR0aW5ncy1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRNb2R1bGVdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIERlY2ltYWxQaXBlLFxyXG4gICAgICAgIERhdGVQaXBlLFxyXG4gICAgICAgIExvd2VyQ2FzZVBpcGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtdLFxyXG4gICAgcHJvdmlkZXJzOiBbICAgIFxyXG4gICAgICAgIERlY2ltYWxQaXBlLFxyXG4gICAgICAgIERhdGVQaXBlLFxyXG4gICAgICAgIEdsb2JhbFNldHRpbmdzU2VydmljZSxcclxuICAgICAgICBMb3dlckNhc2VQaXBlLF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUgeyB9XHJcbiJdfQ==