import * as application from 'application';
import * as platform from 'platform';
import * as utils from 'utils/utils';

/*android*/
declare var android: any;
/*ios*/
declare var UIApplication: any;
declare var UIStatusBarStyle: any;

export function  setStatusBar(){

    if(platform.isIOS){
        application.on(application.launchEvent, ()=>{
            utils.ios.getter(UIApplication,
                UIApplication.sharedApplication).statusBarStyle = UIStatusBarStyle.LightContent;
           
        });
    }
    else if(platform.isAndroid){
        
        application.on(application.launchEvent, ()=>{
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