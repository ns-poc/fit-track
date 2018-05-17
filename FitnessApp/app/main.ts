import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";
import * as app from 'application';
import * as appSettings from "application-settings";
import * as firebase from "nativescript-plugin-firebase";

platformNativeScriptDynamic().bootstrapModule(AppModule);

firebase.init({
    onAuthStateChanged: function (data) { // optional but useful to immediately re-logon the user when he re-visits your app
        console.log(data.loggedIn ? "Logged in to firebase" : "Logged out from firebase");
        appSettings.setBoolean("loggedIn", data.loggedIn);

        if (data.loggedIn) {
            console.log("user's email address: " + (data.user.email ? data.user.email : "N/A"));
        }
    }
}).then(instance => {
    console.log("firebase.init done");
}).catch(err => {
    console.log("Firebase init error: " + err);
});
