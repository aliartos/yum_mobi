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
        this.username.text = "k.venizelos";
        this.password.text = "n3tfl!x!@#$";
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.isLoading = true;
        console.log("Base url: " + this.baseUrl);
        console.log('login tapped!', JSON.stringify(this.username.text), this.password.text);
        this.authService.login("", this.password.text, this.username.text)
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
            styleUrls: ['login.component.css'],
            templateUrl: './login.component.html'
        }),
        __param(0, core_1.Inject(variables_1.BASE_PATH)),
        __metadata("design:paramtypes", [String, authentication_service_1.AuthenticationService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBEO0FBQzFELG9EQUFtRDtBQUNuRCw4RUFBNEU7QUFVNUU7SUFNRSx3QkFBd0MsT0FBZSxFQUFVLFdBQWtDO1FBQTNELFlBQU8sR0FBUCxPQUFPLENBQVE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBdUI7UUFKNUYsY0FBUyxHQUFZLEtBQUssQ0FBQTtRQUMxQixhQUFRLEdBQVEsRUFBRSxDQUFDO1FBQ25CLGFBQVEsR0FBUSxFQUFFLENBQUM7SUFFNkUsQ0FBQztJQUV4RyxpQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUMsYUFBYSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFDLGFBQWEsQ0FBQztJQUNuQyxDQUFDO0lBRU0sOEJBQUssR0FBWjtRQUFBLGlCQXFCQztRQXBCQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUV0QixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFckYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO2FBQy9ELE9BQU8sQ0FBQztZQUNQLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLENBQUMsQ0FBQzthQUNELFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QyxDQUFDO1FBQ0gsQ0FBQyxFQUNELFVBQUEsS0FBSztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFckIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBbENVLGNBQWM7UUFQMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1lBQ2xDLFdBQVcsRUFBRSx3QkFBd0I7U0FDdEMsQ0FBQztRQVFjLFdBQUEsYUFBTSxDQUFDLHFCQUFTLENBQUMsQ0FBQTtpREFBK0MsOENBQXFCO09BTnhGLGNBQWMsQ0FtQzFCO0lBQUQscUJBQUM7Q0FBQSxBQW5DRCxJQW1DQztBQW5DWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQkFTRV9QQVRIIH0gZnJvbSAnLi4vLi4vcmVtb3RlL3ZhcmlhYmxlcyc7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0ICogYXMgdGV4dEZpZWxkTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtZmllbGRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdsb2dpbi1jb21wb25lbnQnLFxyXG4gIHN0eWxlVXJsczogWydsb2dpbi5jb21wb25lbnQuY3NzJ10sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgcHVibGljIGlzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlXHJcbiAgcHVibGljIHVzZXJuYW1lOiBhbnkgPSB7fTtcclxuICBwdWJsaWMgcGFzc3dvcmQ6IGFueSA9IHt9O1xyXG5cclxuICBjb25zdHJ1Y3RvciggQEluamVjdChCQVNFX1BBVEgpIHByaXZhdGUgYmFzZVVybDogc3RyaW5nLCBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMudXNlcm5hbWUudGV4dD1cImsudmVuaXplbG9zXCI7XHJcbiAgICB0aGlzLnBhc3N3b3JkLnRleHQ9XCJuM3RmbCF4IUAjJFwiO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxvZ2luKCkge1xyXG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiQmFzZSB1cmw6IFwiICsgdGhpcy5iYXNlVXJsKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnbG9naW4gdGFwcGVkIScsIEpTT04uc3RyaW5naWZ5KHRoaXMudXNlcm5hbWUudGV4dCksIHRoaXMucGFzc3dvcmQudGV4dCk7XHJcblxyXG4gICAgdGhpcy5hdXRoU2VydmljZS5sb2dpbihcIlwiLCB0aGlzLnBhc3N3b3JkLnRleHQsIHRoaXMudXNlcm5hbWUudGV4dClcclxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5zdWJzY3JpYmUocmVzdWx0ID0+IHsgLy8gbG9naW4gc3VjY2Vzc2Z1bCBcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ0xvZ2dlZCBhczonICsgcmVzdWx0WzFdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yID0+IHsgLy8gbG9naW4gZmFpbGVkXHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG5cclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIl19