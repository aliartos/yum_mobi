"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var remote = require("../remote");
var localStorageItem = "yum";
var AuthenticationService = (function () {
    function AuthenticationService(authService, conf, lowerCase) {
        this.authService = authService;
        this.conf = conf;
        this.lowerCase = lowerCase;
        this.changes = new Rx_1.Subject();
    }
    AuthenticationService.prototype.login = function (email, password, username) {
        // on successful login:
        // - stores the user details (firstName, lastName, id, role and token)
        // in a private object of the component.
        // - sets this.conf.apiKey
        // - persists the user details in localStorage
        var _this = this;
        var creds = { email: email, password: password, username: username };
        if (username.length > 0) {
            creds.email = creds.username;
        }
        //Parallel processing, login and get auth method:
        return Rx_1.Observable.forkJoin(this.getRemoteAuthMethod(), this.authService.authLoginPost(creds).map(function (response) {
            // login successful if there's a jwt token in the response
            if (response.token) {
                _this.user = response.user;
                _this.token = response.token;
                _this.conf.apiKey = "Bearer " + response.token;
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem(localStorageItem, JSON.stringify({ user: _this.user, token: _this.token, extAuth: _this.extAuth }));
                // return true to indicate successful login
                return response.user.role;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        }).catch(function (error) {
            return Rx_1.Observable.throw(error);
        }));
    };
    AuthenticationService.prototype.getLoggedInUser = function () {
        return this.user;
    };
    AuthenticationService.prototype.isLogged = function () {
        return (this.conf.apiKey !== undefined && this.token !== null);
    };
    AuthenticationService.prototype.bootstrapUser = function () {
        //Get remote auth setting
        // - loads user details from localStorage
        // - sets this.conf.apiKey
        // - retrieves the latest user details from backend. <--***************
        //    once received:
        //    - persists the new user details in localStorage
        //    - stores the new user details in the private object of the component
        var currentUser = JSON.parse(localStorage.getItem(localStorageItem));
        this.user = currentUser && currentUser.user;
        this.extAuth = currentUser && currentUser.extAuth;
        var token = currentUser && currentUser.token;
        if (token && token !== "") {
            this.token = token;
            this.conf.apiKey = "Bearer " + token;
            var jwt = this.token.split(".");
            var payload = JSON.parse(atob(jwt[1]));
            if (payload.exp && payload.exp <= new Date().getTime() / 1000) {
                this.logout();
            }
        }
    };
    AuthenticationService.prototype.getToken = function () {
        return this.user ? this.token : null;
    };
    AuthenticationService.prototype.getObservableChange = function () {
        return this.changes;
    };
    AuthenticationService.prototype.getLoggedInRole = function () {
        return this.user ? this.lowerCase.transform(this.user.role) : null;
    };
    AuthenticationService.prototype.updateUserDetailsHasPicture = function (hasPic) {
        this.user.hasPicture = hasPic;
        this.user.role.toLowerCase();
        this.changes.next(Math.random().toString(36).substring(7));
        localStorage.setItem(localStorageItem, JSON.stringify({ user: this.user, token: this.token, extAuth: this.extAuth }));
    };
    AuthenticationService.prototype.updateUserDetails = function (newUserDetails) {
        // takes an object with firstName and lastName
        // this method is called when the user goes to /settings page and after PUT is successful
        // we need to change the user details of the loggedIn user
        // - updates firstName and lastName of the private object in the component
        // - persists the user details in localStorage
        this.user = newUserDetails;
        this.user.role.toLowerCase();
        this.changes.next(Math.random().toString(36).substring(7));
        localStorage.setItem(localStorageItem, JSON.stringify({ user: this.user, token: this.token, extAuth: this.extAuth }));
    };
    AuthenticationService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        // removes the localStorage item
        // removes the apiKey in conf
        // removes the private object in the component storing the user details.
        localStorage.removeItem(localStorageItem);
        this.conf.apiKey = undefined;
        this.user = undefined;
        this.token = undefined;
    };
    AuthenticationService.prototype.getRemoteAuthMethod = function () {
        var _this = this;
        //Get authentication method from server
        return this.authService.authMethodGet().map(function (value) {
            if (value) {
                _this.extAuth = value;
                return value;
            }
        }).catch(function (error) {
            return Rx_1.Observable.throw(error);
        });
    };
    AuthenticationService.prototype.hasExternalAuth = function () {
        if (this.extAuth === 'ldap') {
            return true;
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.refreshToken = function (token) {
        this.token = token;
        this.conf.apiKey = "Bearer " + this.token;
        localStorage.setItem(localStorageItem, JSON.stringify({ user: this.user, token: this.token, extAuth: this.extAuth }));
    };
    AuthenticationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [remote.AuthApi, remote.Configuration, common_1.LowerCasePipe])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1dGhlbnRpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MsMENBQWdEO0FBQ2hELDhCQUErRDtBQUUvRCxpQ0FBK0I7QUFDL0IsbUNBQWlDO0FBQ2pDLHFDQUFtQztBQUVuQyxrQ0FBb0M7QUFFcEMsSUFBTSxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7QUFHL0I7SUFRRSwrQkFBb0IsV0FBMkIsRUFBVSxJQUEwQixFQUFVLFNBQXdCO1FBQWpHLGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQXNCO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBZTtRQUY3RyxZQUFPLEdBQW9CLElBQUksWUFBTyxFQUFFLENBQUM7SUFHakQsQ0FBQztJQUVELHFDQUFLLEdBQUwsVUFBTSxLQUFhLEVBQUUsUUFBZ0IsRUFBRSxRQUFnQjtRQUNyRCx1QkFBdUI7UUFDdkIsc0VBQXNFO1FBQ3RFLHdDQUF3QztRQUN4QywwQkFBMEI7UUFDMUIsOENBQThDO1FBTGhELGlCQXNDQztRQS9CQyxJQUFJLEtBQUssR0FBaUIsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDO1FBRW5GLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUFDLENBQUM7UUFFMUQsaURBQWlEO1FBQ2pELE1BQU0sQ0FBQyxlQUFVLENBQUMsUUFBUSxDQUV4QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFFMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsUUFB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Q0FBQyxDQUFDO1lBQ0osTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNmLENBQUM7SUFDSCxDQUFDO0lBRU0sNENBQVksR0FBbkIsVUFBb0IsS0FBSztRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMxQyxZQUFZLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6SCxDQUFDO0lBL0pVLHFCQUFxQjtRQURqQyxpQkFBVSxFQUFFO3lDQVNzQixNQUFNLENBQUMsT0FBTyxFQUFnQixNQUFNLENBQUMsYUFBYSxFQUFxQixzQkFBYTtPQVIxRyxxQkFBcUIsQ0FnS2pDO0lBQUQsNEJBQUM7Q0FBQSxBQWhLRCxJQWdLQztBQWhLWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IExvd2VyQ2FzZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzL1J4JztcclxuXHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdyc7XHJcblxyXG5pbXBvcnQgKiBhcyByZW1vdGUgZnJvbSAnLi4vcmVtb3RlJztcclxuXHJcbmNvbnN0IGxvY2FsU3RvcmFnZUl0ZW0gPSBcInl1bVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25TZXJ2aWNlIHtcclxuXHJcbiAgcHJpdmF0ZSB1c2VyOiByZW1vdGUuVXNlcjtcclxuICAvL2RlYnVnIHRva2VuOiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudFVzZXI0XCIpKS50b2tlblxyXG4gIHByaXZhdGUgdG9rZW46IHN0cmluZztcclxuICBwcml2YXRlIGV4dEF1dGg6IHN0cmluZztcclxuICBwcml2YXRlIGNoYW5nZXM6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IHJlbW90ZS5BdXRoQXBpLCBwcml2YXRlIGNvbmY6IHJlbW90ZS5Db25maWd1cmF0aW9uLCBwcml2YXRlIGxvd2VyQ2FzZTogTG93ZXJDYXNlUGlwZSkge1xyXG4gIH1cclxuXHJcbiAgbG9naW4oZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgdXNlcm5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAvLyBvbiBzdWNjZXNzZnVsIGxvZ2luOlxyXG4gICAgLy8gLSBzdG9yZXMgdGhlIHVzZXIgZGV0YWlscyAoZmlyc3ROYW1lLCBsYXN0TmFtZSwgaWQsIHJvbGUgYW5kIHRva2VuKVxyXG4gICAgLy8gaW4gYSBwcml2YXRlIG9iamVjdCBvZiB0aGUgY29tcG9uZW50LlxyXG4gICAgLy8gLSBzZXRzIHRoaXMuY29uZi5hcGlLZXlcclxuICAgIC8vIC0gcGVyc2lzdHMgdGhlIHVzZXIgZGV0YWlscyBpbiBsb2NhbFN0b3JhZ2VcclxuXHJcbiAgICBsZXQgY3JlZHM6IHJlbW90ZS5Mb2dpbiA9IHsgZW1haWw6IGVtYWlsLCBwYXNzd29yZDogcGFzc3dvcmQsIHVzZXJuYW1lOiB1c2VybmFtZSB9O1xyXG5cclxuICAgIGlmICh1c2VybmFtZS5sZW5ndGggPiAwKSB7IGNyZWRzLmVtYWlsID0gY3JlZHMudXNlcm5hbWU7IH1cclxuXHJcbiAgICAvL1BhcmFsbGVsIHByb2Nlc3NpbmcsIGxvZ2luIGFuZCBnZXQgYXV0aCBtZXRob2Q6XHJcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5mb3JrSm9pbihcclxuXHJcbiAgICAgIHRoaXMuZ2V0UmVtb3RlQXV0aE1ldGhvZCgpLFxyXG5cclxuICAgICAgdGhpcy5hdXRoU2VydmljZS5hdXRoTG9naW5Qb3N0KGNyZWRzKS5tYXAocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIC8vIGxvZ2luIHN1Y2Nlc3NmdWwgaWYgdGhlcmUncyBhIGp3dCB0b2tlbiBpbiB0aGUgcmVzcG9uc2VcclxuICAgICAgICBpZiAocmVzcG9uc2UudG9rZW4pIHtcclxuXHJcbiAgICAgICAgICB0aGlzLnVzZXIgPSByZXNwb25zZS51c2VyO1xyXG4gICAgICAgICAgdGhpcy50b2tlbiA9IHJlc3BvbnNlLnRva2VuO1xyXG4gICAgICAgICAgdGhpcy5jb25mLmFwaUtleSA9IFwiQmVhcmVyIFwiICsgcmVzcG9uc2UudG9rZW47XHJcblxyXG4gICAgICAgICAgLy8gc3RvcmUgdXNlcm5hbWUgYW5kIGp3dCB0b2tlbiBpbiBsb2NhbCBzdG9yYWdlIHRvIGtlZXAgdXNlciBsb2dnZWQgaW4gYmV0d2VlbiBwYWdlIHJlZnJlc2hlc1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obG9jYWxTdG9yYWdlSXRlbSwgSlNPTi5zdHJpbmdpZnkoeyB1c2VyOiB0aGlzLnVzZXIsIHRva2VuOiB0aGlzLnRva2VuLCBleHRBdXRoOiB0aGlzLmV4dEF1dGggfSkpO1xyXG5cclxuICAgICAgICAgIC8vIHJldHVybiB0cnVlIHRvIGluZGljYXRlIHN1Y2Nlc3NmdWwgbG9naW5cclxuICAgICAgICAgIHJldHVybiByZXNwb25zZS51c2VyLnJvbGU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIHJldHVybiBmYWxzZSB0byBpbmRpY2F0ZSBmYWlsZWQgbG9naW5cclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pLmNhdGNoKChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG4gICAgICB9KVxyXG5cclxuICAgICk7XHJcbiAgfVxyXG4gXHJcbiAgZ2V0TG9nZ2VkSW5Vc2VyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudXNlcjtcclxuICB9XHJcblxyXG4gIGlzTG9nZ2VkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICh0aGlzLmNvbmYuYXBpS2V5ICE9PSB1bmRlZmluZWQgJiYgdGhpcy50b2tlbiAhPT0gbnVsbCk7XHJcbiAgfVxyXG5cclxuICBib290c3RyYXBVc2VyKCk6IHZvaWQge1xyXG5cclxuICAgIC8vR2V0IHJlbW90ZSBhdXRoIHNldHRpbmdcclxuICAgIC8vIC0gbG9hZHMgdXNlciBkZXRhaWxzIGZyb20gbG9jYWxTdG9yYWdlXHJcbiAgICAvLyAtIHNldHMgdGhpcy5jb25mLmFwaUtleVxyXG4gICAgLy8gLSByZXRyaWV2ZXMgdGhlIGxhdGVzdCB1c2VyIGRldGFpbHMgZnJvbSBiYWNrZW5kLiA8LS0qKioqKioqKioqKioqKipcclxuICAgIC8vICAgIG9uY2UgcmVjZWl2ZWQ6XHJcbiAgICAvLyAgICAtIHBlcnNpc3RzIHRoZSBuZXcgdXNlciBkZXRhaWxzIGluIGxvY2FsU3RvcmFnZVxyXG4gICAgLy8gICAgLSBzdG9yZXMgdGhlIG5ldyB1c2VyIGRldGFpbHMgaW4gdGhlIHByaXZhdGUgb2JqZWN0IG9mIHRoZSBjb21wb25lbnRcclxuICAgIHZhciBjdXJyZW50VXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlSXRlbSkpO1xyXG4gICAgdGhpcy51c2VyID0gY3VycmVudFVzZXIgJiYgY3VycmVudFVzZXIudXNlcjtcclxuICAgIHRoaXMuZXh0QXV0aCA9IGN1cnJlbnRVc2VyICYmIGN1cnJlbnRVc2VyLmV4dEF1dGg7XHJcbiAgICB2YXIgdG9rZW4gPSBjdXJyZW50VXNlciAmJiBjdXJyZW50VXNlci50b2tlbjtcclxuICAgIGlmICh0b2tlbiAmJiB0b2tlbiAhPT0gXCJcIikge1xyXG4gICAgICB0aGlzLnRva2VuID0gdG9rZW47XHJcbiAgICAgIHRoaXMuY29uZi5hcGlLZXkgPSBcIkJlYXJlciBcIiArIHRva2VuO1xyXG5cclxuICAgICAgY29uc3Qgand0OiBzdHJpbmdbXT0gdGhpcy50b2tlbi5zcGxpdChcIi5cIik7XHJcbiAgICAgIGNvbnN0IHBheWxvYWQgPSBKU09OLnBhcnNlKGF0b2Ioand0WzFdKSk7XHJcbiAgICAgIGlmKHBheWxvYWQuZXhwICYmICBwYXlsb2FkLmV4cCA8PSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApe1xyXG4gICAgICAgICAgdGhpcy5sb2dvdXQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgfVxyXG5cclxuICBnZXRUb2tlbigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMudXNlciA/IHRoaXMudG9rZW4gOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0T2JzZXJ2YWJsZUNoYW5nZSgpOiBTdWJqZWN0PHN0cmluZz4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlcztcclxuICB9XHJcblxyXG4gIGdldExvZ2dlZEluUm9sZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMudXNlciA/IHRoaXMubG93ZXJDYXNlLnRyYW5zZm9ybSh0aGlzLnVzZXIucm9sZSkgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlVXNlckRldGFpbHNIYXNQaWN0dXJlKGhhc1BpYzogYm9vbGVhbikge1xyXG4gICAgdGhpcy51c2VyLmhhc1BpY3R1cmUgPSBoYXNQaWM7XHJcbiAgICB0aGlzLnVzZXIucm9sZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgdGhpcy5jaGFuZ2VzLm5leHQoTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGxvY2FsU3RvcmFnZUl0ZW0sIEpTT04uc3RyaW5naWZ5KHsgdXNlcjogdGhpcy51c2VyLCB0b2tlbjogdGhpcy50b2tlbiwgZXh0QXV0aDogdGhpcy5leHRBdXRoIH0pKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVVzZXJEZXRhaWxzKG5ld1VzZXJEZXRhaWxzOiByZW1vdGUuVXNlcikge1xyXG4gICAgLy8gdGFrZXMgYW4gb2JqZWN0IHdpdGggZmlyc3ROYW1lIGFuZCBsYXN0TmFtZVxyXG4gICAgLy8gdGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlIHVzZXIgZ29lcyB0byAvc2V0dGluZ3MgcGFnZSBhbmQgYWZ0ZXIgUFVUIGlzIHN1Y2Nlc3NmdWxcclxuICAgIC8vIHdlIG5lZWQgdG8gY2hhbmdlIHRoZSB1c2VyIGRldGFpbHMgb2YgdGhlIGxvZ2dlZEluIHVzZXJcclxuICAgIC8vIC0gdXBkYXRlcyBmaXJzdE5hbWUgYW5kIGxhc3ROYW1lIG9mIHRoZSBwcml2YXRlIG9iamVjdCBpbiB0aGUgY29tcG9uZW50XHJcbiAgICAvLyAtIHBlcnNpc3RzIHRoZSB1c2VyIGRldGFpbHMgaW4gbG9jYWxTdG9yYWdlXHJcbiAgICB0aGlzLnVzZXIgPSBuZXdVc2VyRGV0YWlscztcclxuICAgIHRoaXMudXNlci5yb2xlLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgdGhpcy5jaGFuZ2VzLm5leHQoTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpKTtcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShsb2NhbFN0b3JhZ2VJdGVtLCBKU09OLnN0cmluZ2lmeSh7IHVzZXI6IHRoaXMudXNlciwgdG9rZW46IHRoaXMudG9rZW4sIGV4dEF1dGg6IHRoaXMuZXh0QXV0aCB9KSk7XHJcbiAgfVxyXG5cclxuICBsb2dvdXQoKTogdm9pZCB7XHJcbiAgICAvLyBjbGVhciB0b2tlbiByZW1vdmUgdXNlciBmcm9tIGxvY2FsIHN0b3JhZ2UgdG8gbG9nIHVzZXIgb3V0XHJcbiAgICAvLyByZW1vdmVzIHRoZSBsb2NhbFN0b3JhZ2UgaXRlbVxyXG4gICAgLy8gcmVtb3ZlcyB0aGUgYXBpS2V5IGluIGNvbmZcclxuICAgIC8vIHJlbW92ZXMgdGhlIHByaXZhdGUgb2JqZWN0IGluIHRoZSBjb21wb25lbnQgc3RvcmluZyB0aGUgdXNlciBkZXRhaWxzLlxyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0obG9jYWxTdG9yYWdlSXRlbSk7XHJcbiAgICB0aGlzLmNvbmYuYXBpS2V5ID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy51c2VyID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy50b2tlbiA9IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgZ2V0UmVtb3RlQXV0aE1ldGhvZCgpOiBPYnNlcnZhYmxlPFN0cmluZz4ge1xyXG4gICAgLy9HZXQgYXV0aGVudGljYXRpb24gbWV0aG9kIGZyb20gc2VydmVyXHJcbiAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5hdXRoTWV0aG9kR2V0KCkubWFwKFxyXG4gICAgICB2YWx1ZSA9PiB7XHJcbiAgICAgICAgaWYodmFsdWUpe1xyXG4gICAgICAgICAgdGhpcy5leHRBdXRoID0gdmFsdWU7XHJcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KS5jYXRjaCgoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICAgICAgfSk7XHJcblxyXG5cclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYXNFeHRlcm5hbEF1dGgoKTogQm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5leHRBdXRoID09PSAnbGRhcCcpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlZnJlc2hUb2tlbih0b2tlbil7XHJcbiAgICAgdGhpcy50b2tlbiA9IHRva2VuO1xyXG4gICAgIHRoaXMuY29uZi5hcGlLZXkgPSBcIkJlYXJlciBcIiArIHRoaXMudG9rZW47XHJcbiAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obG9jYWxTdG9yYWdlSXRlbSwgSlNPTi5zdHJpbmdpZnkoeyB1c2VyOiB0aGlzLnVzZXIsIHRva2VuOiB0aGlzLnRva2VuLCBleHRBdXRoOiB0aGlzLmV4dEF1dGggfSkpO1xyXG4gIH1cclxufVxyXG4iXX0=