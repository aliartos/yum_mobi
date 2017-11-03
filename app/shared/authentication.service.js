"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var Rx_1 = require("rxjs/Rx");
var localStorage = require("nativescript-localstorage");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1dGhlbnRpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MsMENBQWdEO0FBQ2hELDhCQUErRDtBQUMvRCx3REFBMkQ7QUFFM0QsaUNBQStCO0FBQy9CLG1DQUFpQztBQUNqQyxxQ0FBbUM7QUFFbkMsa0NBQW9DO0FBRXBDLElBQU0sZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0FBRy9CO0lBUUUsK0JBQW9CLFdBQTJCLEVBQVUsSUFBMEIsRUFBVSxTQUF3QjtRQUFqRyxnQkFBVyxHQUFYLFdBQVcsQ0FBZ0I7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFzQjtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQWU7UUFGN0csWUFBTyxHQUFvQixJQUFJLFlBQU8sRUFBRSxDQUFDO0lBR2pELENBQUM7SUFFRCxxQ0FBSyxHQUFMLFVBQU0sS0FBYSxFQUFFLFFBQWdCLEVBQUUsUUFBZ0I7UUFDckQsdUJBQXVCO1FBQ3ZCLHNFQUFzRTtRQUN0RSx3Q0FBd0M7UUFDeEMsMEJBQTBCO1FBQzFCLDhDQUE4QztRQUxoRCxpQkFzQ0M7UUEvQkMsSUFBSSxLQUFLLEdBQWlCLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQztRQUVuRixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFBQyxDQUFDO1FBRTFELGlEQUFpRDtRQUNqRCxNQUFNLENBQUMsZUFBVSxDQUFDLFFBQVEsQ0FFeEIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLEVBRTFCLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcs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QUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNKLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZixDQUFDO0lBQ0gsQ0FBQztJQUVNLDRDQUFZLEdBQW5CLFVBQW9CLEtBQUs7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDMUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekgsQ0FBQztJQS9KVSxxQkFBcUI7UUFEakMsaUJBQVUsRUFBRTt5Q0FTc0IsTUFBTSxDQUFDLE9BQU8sRUFBZ0IsTUFBTSxDQUFDLGFBQWEsRUFBcUIsc0JBQWE7T0FSMUcscUJBQXFCLENBZ0tqQztJQUFELDRCQUFDO0NBQUEsQUFoS0QsSUFnS0M7QUFoS1ksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBMb3dlckNhc2VQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcy9SeCc7XHJcbmltcG9ydCAqIGFzIGxvY2FsU3RvcmFnZSAgZnJvbSAnbmF0aXZlc2NyaXB0LWxvY2Fsc3RvcmFnZSc7XHJcblxyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvdGhyb3cnO1xyXG5cclxuaW1wb3J0ICogYXMgcmVtb3RlIGZyb20gJy4uL3JlbW90ZSc7XHJcblxyXG5jb25zdCBsb2NhbFN0b3JhZ2VJdGVtID0gXCJ5dW1cIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uU2VydmljZSB7XHJcblxyXG4gIHByaXZhdGUgdXNlcjogcmVtb3RlLlVzZXI7XHJcbiAgLy9kZWJ1ZyB0b2tlbjogSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRVc2VyNFwiKSkudG9rZW5cclxuICBwcml2YXRlIHRva2VuOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBleHRBdXRoOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBjaGFuZ2VzOiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhTZXJ2aWNlOiByZW1vdGUuQXV0aEFwaSwgcHJpdmF0ZSBjb25mOiByZW1vdGUuQ29uZmlndXJhdGlvbiwgcHJpdmF0ZSBsb3dlckNhc2U6IExvd2VyQ2FzZVBpcGUpIHtcclxuICB9XHJcblxyXG4gIGxvZ2luKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIHVzZXJuYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgLy8gb24gc3VjY2Vzc2Z1bCBsb2dpbjpcclxuICAgIC8vIC0gc3RvcmVzIHRoZSB1c2VyIGRldGFpbHMgKGZpcnN0TmFtZSwgbGFzdE5hbWUsIGlkLCByb2xlIGFuZCB0b2tlbilcclxuICAgIC8vIGluIGEgcHJpdmF0ZSBvYmplY3Qgb2YgdGhlIGNvbXBvbmVudC5cclxuICAgIC8vIC0gc2V0cyB0aGlzLmNvbmYuYXBpS2V5XHJcbiAgICAvLyAtIHBlcnNpc3RzIHRoZSB1c2VyIGRldGFpbHMgaW4gbG9jYWxTdG9yYWdlXHJcblxyXG4gICAgbGV0IGNyZWRzOiByZW1vdGUuTG9naW4gPSB7IGVtYWlsOiBlbWFpbCwgcGFzc3dvcmQ6IHBhc3N3b3JkLCB1c2VybmFtZTogdXNlcm5hbWUgfTtcclxuXHJcbiAgICBpZiAodXNlcm5hbWUubGVuZ3RoID4gMCkgeyBjcmVkcy5lbWFpbCA9IGNyZWRzLnVzZXJuYW1lOyB9XHJcblxyXG4gICAgLy9QYXJhbGxlbCBwcm9jZXNzaW5nLCBsb2dpbiBhbmQgZ2V0IGF1dGggbWV0aG9kOlxyXG4gICAgcmV0dXJuIE9ic2VydmFibGUuZm9ya0pvaW4oXHJcblxyXG4gICAgICB0aGlzLmdldFJlbW90ZUF1dGhNZXRob2QoKSxcclxuXHJcbiAgICAgIHRoaXMuYXV0aFNlcnZpY2UuYXV0aExvZ2luUG9zdChjcmVkcykubWFwKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAvLyBsb2dpbiBzdWNjZXNzZnVsIGlmIHRoZXJlJ3MgYSBqd3QgdG9rZW4gaW4gdGhlIHJlc3BvbnNlXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnRva2VuKSB7XHJcblxyXG4gICAgICAgICAgdGhpcy51c2VyID0gcmVzcG9uc2UudXNlcjtcclxuICAgICAgICAgIHRoaXMudG9rZW4gPSByZXNwb25zZS50b2tlbjtcclxuICAgICAgICAgIHRoaXMuY29uZi5hcGlLZXkgPSBcIkJlYXJlciBcIiArIHJlc3BvbnNlLnRva2VuO1xyXG5cclxuICAgICAgICAgIC8vIHN0b3JlIHVzZXJuYW1lIGFuZCBqd3QgdG9rZW4gaW4gbG9jYWwgc3RvcmFnZSB0byBrZWVwIHVzZXIgbG9nZ2VkIGluIGJldHdlZW4gcGFnZSByZWZyZXNoZXNcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGxvY2FsU3RvcmFnZUl0ZW0sIEpTT04uc3RyaW5naWZ5KHsgdXNlcjogdGhpcy51c2VyLCB0b2tlbjogdGhpcy50b2tlbiwgZXh0QXV0aDogdGhpcy5leHRBdXRoIH0pKTtcclxuXHJcbiAgICAgICAgICAvLyByZXR1cm4gdHJ1ZSB0byBpbmRpY2F0ZSBzdWNjZXNzZnVsIGxvZ2luXHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UudXNlci5yb2xlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyByZXR1cm4gZmFsc2UgdG8gaW5kaWNhdGUgZmFpbGVkIGxvZ2luXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KS5jYXRjaCgoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICAgICAgfSlcclxuXHJcbiAgICApO1xyXG4gIH1cclxuIFxyXG4gIGdldExvZ2dlZEluVXNlcigpIHtcclxuICAgIHJldHVybiB0aGlzLnVzZXI7XHJcbiAgfVxyXG5cclxuICBpc0xvZ2dlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAodGhpcy5jb25mLmFwaUtleSAhPT0gdW5kZWZpbmVkICYmIHRoaXMudG9rZW4gIT09IG51bGwpO1xyXG4gIH1cclxuXHJcbiAgYm9vdHN0cmFwVXNlcigpOiB2b2lkIHtcclxuXHJcbiAgICAvL0dldCByZW1vdGUgYXV0aCBzZXR0aW5nXHJcbiAgICAvLyAtIGxvYWRzIHVzZXIgZGV0YWlscyBmcm9tIGxvY2FsU3RvcmFnZVxyXG4gICAgLy8gLSBzZXRzIHRoaXMuY29uZi5hcGlLZXlcclxuICAgIC8vIC0gcmV0cmlldmVzIHRoZSBsYXRlc3QgdXNlciBkZXRhaWxzIGZyb20gYmFja2VuZC4gPC0tKioqKioqKioqKioqKioqXHJcbiAgICAvLyAgICBvbmNlIHJlY2VpdmVkOlxyXG4gICAgLy8gICAgLSBwZXJzaXN0cyB0aGUgbmV3IHVzZXIgZGV0YWlscyBpbiBsb2NhbFN0b3JhZ2VcclxuICAgIC8vICAgIC0gc3RvcmVzIHRoZSBuZXcgdXNlciBkZXRhaWxzIGluIHRoZSBwcml2YXRlIG9iamVjdCBvZiB0aGUgY29tcG9uZW50XHJcbiAgICB2YXIgY3VycmVudFVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZUl0ZW0pKTtcclxuICAgIHRoaXMudXNlciA9IGN1cnJlbnRVc2VyICYmIGN1cnJlbnRVc2VyLnVzZXI7XHJcbiAgICB0aGlzLmV4dEF1dGggPSBjdXJyZW50VXNlciAmJiBjdXJyZW50VXNlci5leHRBdXRoO1xyXG4gICAgdmFyIHRva2VuID0gY3VycmVudFVzZXIgJiYgY3VycmVudFVzZXIudG9rZW47XHJcbiAgICBpZiAodG9rZW4gJiYgdG9rZW4gIT09IFwiXCIpIHtcclxuICAgICAgdGhpcy50b2tlbiA9IHRva2VuO1xyXG4gICAgICB0aGlzLmNvbmYuYXBpS2V5ID0gXCJCZWFyZXIgXCIgKyB0b2tlbjtcclxuXHJcbiAgICAgIGNvbnN0IGp3dDogc3RyaW5nW109IHRoaXMudG9rZW4uc3BsaXQoXCIuXCIpO1xyXG4gICAgICBjb25zdCBwYXlsb2FkID0gSlNPTi5wYXJzZShhdG9iKGp3dFsxXSkpO1xyXG4gICAgICBpZihwYXlsb2FkLmV4cCAmJiAgcGF5bG9hZC5leHAgPD0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKXtcclxuICAgICAgICAgIHRoaXMubG9nb3V0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0VG9rZW4oKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLnVzZXIgPyB0aGlzLnRva2VuIDogbnVsbDtcclxuICB9XHJcblxyXG4gIGdldE9ic2VydmFibGVDaGFuZ2UoKTogU3ViamVjdDxzdHJpbmc+IHtcclxuICAgIHJldHVybiB0aGlzLmNoYW5nZXM7XHJcbiAgfVxyXG5cclxuICBnZXRMb2dnZWRJblJvbGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLnVzZXIgPyB0aGlzLmxvd2VyQ2FzZS50cmFuc2Zvcm0odGhpcy51c2VyLnJvbGUpIDogbnVsbDtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVVzZXJEZXRhaWxzSGFzUGljdHVyZShoYXNQaWM6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMudXNlci5oYXNQaWN0dXJlID0gaGFzUGljO1xyXG4gICAgdGhpcy51c2VyLnJvbGUudG9Mb3dlckNhc2UoKTtcclxuICAgIHRoaXMuY2hhbmdlcy5uZXh0KE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShsb2NhbFN0b3JhZ2VJdGVtLCBKU09OLnN0cmluZ2lmeSh7IHVzZXI6IHRoaXMudXNlciwgdG9rZW46IHRoaXMudG9rZW4sIGV4dEF1dGg6IHRoaXMuZXh0QXV0aCB9KSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVVc2VyRGV0YWlscyhuZXdVc2VyRGV0YWlsczogcmVtb3RlLlVzZXIpIHtcclxuICAgIC8vIHRha2VzIGFuIG9iamVjdCB3aXRoIGZpcnN0TmFtZSBhbmQgbGFzdE5hbWVcclxuICAgIC8vIHRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZSB1c2VyIGdvZXMgdG8gL3NldHRpbmdzIHBhZ2UgYW5kIGFmdGVyIFBVVCBpcyBzdWNjZXNzZnVsXHJcbiAgICAvLyB3ZSBuZWVkIHRvIGNoYW5nZSB0aGUgdXNlciBkZXRhaWxzIG9mIHRoZSBsb2dnZWRJbiB1c2VyXHJcbiAgICAvLyAtIHVwZGF0ZXMgZmlyc3ROYW1lIGFuZCBsYXN0TmFtZSBvZiB0aGUgcHJpdmF0ZSBvYmplY3QgaW4gdGhlIGNvbXBvbmVudFxyXG4gICAgLy8gLSBwZXJzaXN0cyB0aGUgdXNlciBkZXRhaWxzIGluIGxvY2FsU3RvcmFnZVxyXG4gICAgdGhpcy51c2VyID0gbmV3VXNlckRldGFpbHM7XHJcbiAgICB0aGlzLnVzZXIucm9sZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgIHRoaXMuY2hhbmdlcy5uZXh0KE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KSk7XHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obG9jYWxTdG9yYWdlSXRlbSwgSlNPTi5zdHJpbmdpZnkoeyB1c2VyOiB0aGlzLnVzZXIsIHRva2VuOiB0aGlzLnRva2VuLCBleHRBdXRoOiB0aGlzLmV4dEF1dGggfSkpO1xyXG4gIH1cclxuXHJcbiAgbG9nb3V0KCk6IHZvaWQge1xyXG4gICAgLy8gY2xlYXIgdG9rZW4gcmVtb3ZlIHVzZXIgZnJvbSBsb2NhbCBzdG9yYWdlIHRvIGxvZyB1c2VyIG91dFxyXG4gICAgLy8gcmVtb3ZlcyB0aGUgbG9jYWxTdG9yYWdlIGl0ZW1cclxuICAgIC8vIHJlbW92ZXMgdGhlIGFwaUtleSBpbiBjb25mXHJcbiAgICAvLyByZW1vdmVzIHRoZSBwcml2YXRlIG9iamVjdCBpbiB0aGUgY29tcG9uZW50IHN0b3JpbmcgdGhlIHVzZXIgZGV0YWlscy5cclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGxvY2FsU3RvcmFnZUl0ZW0pO1xyXG4gICAgdGhpcy5jb25mLmFwaUtleSA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMudXNlciA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMudG9rZW4gPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIGdldFJlbW90ZUF1dGhNZXRob2QoKTogT2JzZXJ2YWJsZTxTdHJpbmc+IHtcclxuICAgIC8vR2V0IGF1dGhlbnRpY2F0aW9uIG1ldGhvZCBmcm9tIHNlcnZlclxyXG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuYXV0aE1ldGhvZEdldCgpLm1hcChcclxuICAgICAgdmFsdWUgPT4ge1xyXG4gICAgICAgIGlmKHZhbHVlKXtcclxuICAgICAgICAgIHRoaXMuZXh0QXV0aCA9IHZhbHVlO1xyXG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSkuY2F0Y2goKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XHJcbiAgICAgIH0pO1xyXG5cclxuXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGFzRXh0ZXJuYWxBdXRoKCk6IEJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuZXh0QXV0aCA9PT0gJ2xkYXAnKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyByZWZyZXNoVG9rZW4odG9rZW4pe1xyXG4gICAgIHRoaXMudG9rZW4gPSB0b2tlbjtcclxuICAgICB0aGlzLmNvbmYuYXBpS2V5ID0gXCJCZWFyZXIgXCIgKyB0aGlzLnRva2VuO1xyXG4gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGxvY2FsU3RvcmFnZUl0ZW0sIEpTT04uc3RyaW5naWZ5KHsgdXNlcjogdGhpcy51c2VyLCB0b2tlbjogdGhpcy50b2tlbiwgZXh0QXV0aDogdGhpcy5leHRBdXRoIH0pKTtcclxuICB9XHJcbn1cclxuIl19