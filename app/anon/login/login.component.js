"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var variables_1 = require("../../remote/variables");
var authentication_service_1 = require("../../shared/authentication.service");
var LoginComponent = (function () {
    function LoginComponent(baseUrl, authService) {
        this.baseUrl = baseUrl;
        this.authService = authService;
        this.isLoading = false;
        this.username = {};
        this.password = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log("Base url: " + this.baseUrl);
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.isLoading = true;
        console.log('login tapped!', JSON.stringify(this.username));
        this.authService.login("", this.password, this.username)
            .finally(function () {
            _this.isLoading = false;
        })
            .subscribe(function (result) {
            console.log(result);
            if (result != null) {
                console.log('Logged as:' + result[1]);
            }
        }, function (error) {
            console.log(error);
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login-component',
            templateUrl: './login.component.html'
        }),
        __param(0, core_1.Inject(variables_1.BASE_PATH)),
        __metadata("design:paramtypes", [String, authentication_service_1.AuthenticationService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBEO0FBQzFELG9EQUFtRDtBQUNuRCw4RUFBNEU7QUFRNUU7SUFNSSx3QkFBdUMsT0FBZSxFQUFVLFdBQWtDO1FBQTNELFlBQU8sR0FBUCxPQUFPLENBQVE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBdUI7UUFKM0YsY0FBUyxHQUFZLEtBQUssQ0FBQTtRQUMxQixhQUFRLEdBQU8sRUFBRSxDQUFDO1FBQ2xCLGFBQVEsR0FBTyxFQUFFLENBQUM7SUFFOEUsQ0FBQztJQUV4RyxpQ0FBUSxHQUFSO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFSyw4QkFBSyxHQUFaO1FBQUEsaUJBa0JDO1FBakJHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFFNUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUN2RCxPQUFPLENBQUM7WUFDUCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN6QixDQUFDLENBQUM7YUFDRCxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0QixFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEMsQ0FBQztRQUNILENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXJCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQTlCUSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3hDLENBQUM7UUFRZSxXQUFBLGFBQU0sQ0FBQyxxQkFBUyxDQUFDLENBQUE7aURBQStDLDhDQUFxQjtPQU56RixjQUFjLENBK0IxQjtJQUFELHFCQUFDO0NBQUEsQUEvQkQsSUErQkM7QUEvQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJBU0VfUEFUSCB9IGZyb20gJy4uLy4uL3JlbW90ZS92YXJpYWJsZXMnO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvYXV0aGVudGljYXRpb24uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ2xvZ2luLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHB1YmxpYyBpc0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICAgcHVibGljIHVzZXJuYW1lOmFueSA9IHt9O1xyXG4gICAgcHVibGljIHBhc3N3b3JkOmFueSA9IHt9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoQkFTRV9QQVRIKSBwcml2YXRlIGJhc2VVcmw6IHN0cmluZywgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlICkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJCYXNlIHVybDogXCIrdGhpcy5iYXNlVXJsKTtcclxuICAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBsb2dpbigpIHtcclxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2xvZ2luIHRhcHBlZCEnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnVzZXJuYW1lKSk7XHJcblxyXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9naW4oXCJcIiwgdGhpcy5wYXNzd29yZCwgdGhpcy51c2VybmFtZSlcclxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlOyBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zdWJzY3JpYmUocmVzdWx0ID0+IHsgLy8gbG9naW4gc3VjY2Vzc2Z1bCBcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTG9nZ2VkIGFzOicgKyByZXN1bHRbMV0pOyBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yID0+IHsgLy8gbG9naW4gZmFpbGVkXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7IFxyXG4gICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuICJdfQ==