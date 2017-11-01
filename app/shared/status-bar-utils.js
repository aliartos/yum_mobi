"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var application = require("application");
var platform = require("platform");
var utils = require("utils/utils");
function setStatusBar() {
    if (platform.isIOS) {
        application.on(application.launchEvent, function () {
            utils.ios.getter(UIApplication, UIApplication.sharedApplication).statusBarStyle = UIStatusBarStyle.LightContent;
        });
    }
    else if (platform.isAndroid) {
        application.on(application.launchEvent, function () {
            console.log("App launch!");
        });
        // application.android.onActivityStarted = function () {
        //     if (application.android && platform.device.sdkVersion >= "21") {
        //         const View = android.view.View;
        //         const window = application.android.startActivity.getWindow();
        //         window.setStatusBarColor(0x000000);
        //         const decorView = window.getDecorView();
        //         decorView.setSystemUiVisibility(
        //             View.SYSTEM_UI_FLAG_LAYOUT_STABLE
        //             | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
        //             | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
        //     }
        // };
    }
}
exports.setStatusBar = setStatusBar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLWJhci11dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0YXR1cy1iYXItdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBMkM7QUFDM0MsbUNBQXFDO0FBQ3JDLG1DQUFxQztBQVFyQztJQUVJLEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFDO1FBQ2YsV0FBVyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFO1lBQ3BDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFDMUIsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUMsY0FBYyxHQUFHLGdCQUFnQixDQUFDLFlBQVksQ0FBQztRQUV4RixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFBLENBQUM7UUFFeEIsV0FBVyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFO1lBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFFSCx3REFBd0Q7UUFDeEQsdUVBQXVFO1FBQ3ZFLDBDQUEwQztRQUMxQyx3RUFBd0U7UUFDeEUsOENBQThDO1FBRTlDLG1EQUFtRDtRQUNuRCwyQ0FBMkM7UUFDM0MsZ0RBQWdEO1FBQ2hELHNEQUFzRDtRQUN0RCx1REFBdUQ7UUFDdkQsUUFBUTtRQUNSLEtBQUs7SUFFVCxDQUFDO0FBR0wsQ0FBQztBQWhDRCxvQ0FnQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tICdhcHBsaWNhdGlvbic7XHJcbmltcG9ydCAqIGFzIHBsYXRmb3JtIGZyb20gJ3BsYXRmb3JtJztcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAndXRpbHMvdXRpbHMnO1xyXG5cclxuLyphbmRyb2lkKi9cclxuZGVjbGFyZSB2YXIgYW5kcm9pZDogYW55O1xyXG4vKmlvcyovXHJcbmRlY2xhcmUgdmFyIFVJQXBwbGljYXRpb246IGFueTtcclxuZGVjbGFyZSB2YXIgVUlTdGF0dXNCYXJTdHlsZTogYW55O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uICBzZXRTdGF0dXNCYXIoKXtcclxuXHJcbiAgICBpZihwbGF0Zm9ybS5pc0lPUyl7XHJcbiAgICAgICAgYXBwbGljYXRpb24ub24oYXBwbGljYXRpb24ubGF1bmNoRXZlbnQsICgpPT57XHJcbiAgICAgICAgICAgIHV0aWxzLmlvcy5nZXR0ZXIoVUlBcHBsaWNhdGlvbixcclxuICAgICAgICAgICAgICAgIFVJQXBwbGljYXRpb24uc2hhcmVkQXBwbGljYXRpb24pLnN0YXR1c0JhclN0eWxlID0gVUlTdGF0dXNCYXJTdHlsZS5MaWdodENvbnRlbnQ7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKHBsYXRmb3JtLmlzQW5kcm9pZCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYXBwbGljYXRpb24ub24oYXBwbGljYXRpb24ubGF1bmNoRXZlbnQsICgpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXBwIGxhdW5jaCFcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGFwcGxpY2F0aW9uLmFuZHJvaWQub25BY3Rpdml0eVN0YXJ0ZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gICAgIGlmIChhcHBsaWNhdGlvbi5hbmRyb2lkICYmIHBsYXRmb3JtLmRldmljZS5zZGtWZXJzaW9uID49IFwiMjFcIikge1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc3QgVmlldyA9IGFuZHJvaWQudmlldy5WaWV3O1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc3Qgd2luZG93ID0gYXBwbGljYXRpb24uYW5kcm9pZC5zdGFydEFjdGl2aXR5LmdldFdpbmRvdygpO1xyXG4gICAgICAgIC8vICAgICAgICAgd2luZG93LnNldFN0YXR1c0JhckNvbG9yKDB4MDAwMDAwKTtcclxuXHJcbiAgICAgICAgLy8gICAgICAgICBjb25zdCBkZWNvclZpZXcgPSB3aW5kb3cuZ2V0RGVjb3JWaWV3KCk7XHJcbiAgICAgICAgLy8gICAgICAgICBkZWNvclZpZXcuc2V0U3lzdGVtVWlWaXNpYmlsaXR5KFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIFZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX1NUQUJMRVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19MQVlPVVRfRlVMTFNDUkVFTlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19JTU1FUlNJVkVfU1RJQ0tZKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH07XHJcbiAgICBcclxuICAgIH1cclxuXHJcblxyXG59Il19