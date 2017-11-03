"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var variables_1 = require("../../remote/variables");
var authentication_service_1 = require("../../shared/authentication.service");
var http_1 = require("@angular/http");
var LoginComponent = (function () {
    function LoginComponent(baseUrl, authService, http) {
        this.baseUrl = baseUrl;
        this.authService = authService;
        this.http = http;
        this.isLoading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // 
        this.username = "admin@yum.com";
        this.password = "123456";
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.isLoading = true;
        console.log("Base url: " + this.baseUrl);
        console.log('login tapped!', this.username, this.password);
        this.authService.login("", this.password, this.username)
            .finally(function () {
            _this.isLoading = false;
        })
            .subscribe(function (result) {
            console.log(result);
            _this.response = JSON.stringify(result);
            if (result != null) {
                console.log('Logged as:' + result[1]);
            }
        }, function (error) {
            console.log(error);
            _this.response = JSON.stringify(error);
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
        __metadata("design:paramtypes", [String, authentication_service_1.AuthenticationService,
            http_1.Http])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBEO0FBQzFELG9EQUFtRDtBQUNuRCw4RUFBNEU7QUFFNUUsc0NBQXdFO0FBU3hFO0lBT0Usd0JBQXdDLE9BQWUsRUFBVSxXQUFrQyxFQUN2RixJQUFVO1FBRGtCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBdUI7UUFDdkYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQU5kLGNBQVMsR0FBWSxLQUFLLENBQUE7SUFPOUIsQ0FBQztJQUVMLGlDQUFRLEdBQVI7UUFDRSxHQUFHO1FBQ0gsSUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQztJQUVNLDhCQUFLLEdBQVo7UUFBQSxpQkF1QkM7UUF0QkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFFdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRzNELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDckQsT0FBTyxDQUFDO1lBQ1AsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDekIsQ0FBQyxDQUFDO2FBQ0QsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QyxDQUFDO1FBQ0gsQ0FBQyxFQUNELFVBQUEsS0FBSztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkIsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQXhDVSxjQUFjO1FBUDFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztZQUNsQyxXQUFXLEVBQUUsd0JBQXdCO1NBQ3RDLENBQUM7UUFTYyxXQUFBLGFBQU0sQ0FBQyxxQkFBUyxDQUFDLENBQUE7aURBQStDLDhDQUFxQjtZQUNqRixXQUFJO09BUlgsY0FBYyxDQXlDMUI7SUFBRCxxQkFBQztDQUFBLEFBekNELElBeUNDO0FBekNZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCQVNFX1BBVEggfSBmcm9tICcuLi8uLi9yZW1vdGUvdmFyaWFibGVzJztcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSwgUmVxdWVzdE9wdGlvbnMgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ2xvZ2luLWNvbXBvbmVudCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2xvZ2luLmNvbXBvbmVudC5jc3MnXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBwcml2YXRlIGlzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlXHJcbiAgcHVibGljIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgcHVibGljIHBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgcHVibGljIHJlc3BvbnNlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCBASW5qZWN0KEJBU0VfUEFUSCkgcHJpdmF0ZSBiYXNlVXJsOiBzdHJpbmcsIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZVxyXG4gICAgLCBwcml2YXRlIGh0dHA6IEh0dHBcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vIFxyXG4gICAgdGhpcy51c2VybmFtZSA9IFwiYWRtaW5AeXVtLmNvbVwiO1xyXG4gICAgdGhpcy5wYXNzd29yZCA9IFwiMTIzNDU2XCI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9naW4oKSB7XHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJCYXNlIHVybDogXCIgKyB0aGlzLmJhc2VVcmwpO1xyXG4gICAgY29uc29sZS5sb2coJ2xvZ2luIHRhcHBlZCEnLCB0aGlzLnVzZXJuYW1lLCB0aGlzLnBhc3N3b3JkKTtcclxuXHJcbiAgICAgXHJcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luKFwiXCIsIHRoaXMucGFzc3dvcmQsIHRoaXMudXNlcm5hbWUpXHJcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB9KVxyXG4gICAgICAuc3Vic2NyaWJlKHJlc3VsdCA9PiB7IC8vIGxvZ2luIHN1Y2Nlc3NmdWwgXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICB0aGlzLnJlc3BvbnNlID0gSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcclxuICAgICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdMb2dnZWQgYXM6JyArIHJlc3VsdFsxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBlcnJvciA9PiB7IC8vIGxvZ2luIGZhaWxlZFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB0aGlzLnJlc3BvbnNlID0gSlNPTi5zdHJpbmdpZnkoZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgfVxyXG59XHJcblxyXG5cclxuIl19