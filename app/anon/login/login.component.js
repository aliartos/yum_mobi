"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var variables_1 = require("../../remote/variables");
var authentication_service_1 = require("../../shared/authentication.service");
//import { Http, Headers, Response, RequestOptions } from "@angular/http";
var page_1 = require("ui/page");
var dialogs = require("ui/dialogs");
var LoginComponent = (function () {
    function LoginComponent(baseUrl, authService, router, page) {
        this.baseUrl = baseUrl;
        this.authService = authService;
        this.router = router;
        this.page = page;
        this.isLoading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // 
        this.page.actionBarHidden = true;
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
                _this.router.navigate(['hungry']);
            }
        }, function (error) {
            console.log(error);
            _this.response = JSON.stringify(error);
            dialogs.alert({
                title: "Error",
                message: "Wrong credentials!",
                okButtonText: "ok"
            });
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
            router_1.Router,
            page_1.Page])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBEO0FBQzFELDBDQUF5QztBQUN6QyxvREFBbUQ7QUFDbkQsOEVBQTRFO0FBRTVFLDBFQUEwRTtBQUMxRSxnQ0FBK0I7QUFDL0Isb0NBQXNDO0FBU3RDO0lBT0Usd0JBQXdDLE9BQWUsRUFBVSxXQUFrQyxFQUN2RixNQUFjLEVBQ2hCLElBQVU7UUFGb0IsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUF1QjtRQUN2RixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2hCLFNBQUksR0FBSixJQUFJLENBQU07UUFQWixjQUFTLEdBQVksS0FBSyxDQUFBO0lBUTlCLENBQUM7SUFFTCxpQ0FBUSxHQUFSO1FBQ0UsR0FBRztRQUNILElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQztRQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0lBRU0sOEJBQUssR0FBWjtRQUFBLGlCQStCQztRQTlCQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUV0QixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFHM0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUNyRCxPQUFPLENBQUM7WUFDUCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN6QixDQUFDLENBQUM7YUFDRCxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkMsRUFBRSxDQUFDLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUV0QyxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFFbkMsQ0FBQztRQUNILENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN0QyxPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUNaLEtBQUssRUFBRSxPQUFPO2dCQUNkLE9BQU8sRUFBRSxvQkFBb0I7Z0JBQzdCLFlBQVksRUFBRSxJQUFJO2FBQ3JCLENBQUMsQ0FBQTtRQUNGLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQWxEVSxjQUFjO1FBUDFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztZQUNsQyxXQUFXLEVBQUUsd0JBQXdCO1NBQ3RDLENBQUM7UUFTYyxXQUFBLGFBQU0sQ0FBQyxxQkFBUyxDQUFDLENBQUE7aURBQStDLDhDQUFxQjtZQUMvRSxlQUFNO1lBQ1YsV0FBSTtPQVRULGNBQWMsQ0FtRDFCO0lBQUQscUJBQUM7Q0FBQSxBQW5ERCxJQW1EQztBQW5EWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBCQVNFX1BBVEggfSBmcm9tICcuLi8uLi9yZW1vdGUvdmFyaWFibGVzJztcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xyXG4vL2ltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlLCBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnbG9naW4tY29tcG9uZW50JyxcclxuICBzdHlsZVVybHM6IFsnbG9naW4uY29tcG9uZW50LmNzcyddLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHByaXZhdGUgaXNMb2FkaW5nOiBib29sZWFuID0gZmFsc2VcclxuICBwdWJsaWMgdXNlcm5hbWU6IHN0cmluZztcclxuICBwdWJsaWMgcGFzc3dvcmQ6IHN0cmluZztcclxuICBwdWJsaWMgcmVzcG9uc2U6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoIEBJbmplY3QoQkFTRV9QQVRIKSBwcml2YXRlIGJhc2VVcmw6IHN0cmluZywgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlXHJcbiAgICAsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIFxyXG4gICAgcHJpdmF0ZSBwYWdlOiBQYWdlXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyBcclxuICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgdGhpcy51c2VybmFtZSA9IFwiYWRtaW5AeXVtLmNvbVwiO1xyXG4gICAgdGhpcy5wYXNzd29yZCA9IFwiMTIzNDU2XCI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9naW4oKSB7XHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJCYXNlIHVybDogXCIgKyB0aGlzLmJhc2VVcmwpO1xyXG4gICAgY29uc29sZS5sb2coJ2xvZ2luIHRhcHBlZCEnLCB0aGlzLnVzZXJuYW1lLCB0aGlzLnBhc3N3b3JkKTtcclxuXHJcbiAgICAgXHJcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luKFwiXCIsIHRoaXMucGFzc3dvcmQsIHRoaXMudXNlcm5hbWUpXHJcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB9KVxyXG4gICAgICAuc3Vic2NyaWJlKHJlc3VsdCA9PiB7IC8vIGxvZ2luIHN1Y2Nlc3NmdWwgXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICB0aGlzLnJlc3BvbnNlID0gSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcclxuICAgICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdMb2dnZWQgYXM6JyArIHJlc3VsdFsxXSk7XHJcblxyXG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydodW5ncnknXSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgZXJyb3IgPT4geyAvLyBsb2dpbiBmYWlsZWRcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgdGhpcy5yZXNwb25zZSA9IEpTT04uc3RyaW5naWZ5KGVycm9yKTtcclxuICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgIHRpdGxlOiBcIkVycm9yXCIsXHJcbiAgICAgICAgICBtZXNzYWdlOiBcIldyb25nIGNyZWRlbnRpYWxzIVwiLFxyXG4gICAgICAgICAgb2tCdXR0b25UZXh0OiBcIm9rXCJcclxuICAgICAgfSlcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gIH1cclxufVxyXG5cclxuXHJcbiJdfQ==