package com.photobomb;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import android.widget.Toast;
import android.view.Gravity;

public class AndroidBridgeModule extends ReactContextBaseJavaModule {
    
    @Override
    public String getName() {
        return "AndroidBridgeModule";
    }

    public AndroidBridgeModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void showToast(String message, int duration) {
        Toast toast = Toast.makeText(getReactApplicationContext(), message, duration);
		toast.setGravity(Gravity.CENTER, 0, 0);
		toast.show();
    }
}
