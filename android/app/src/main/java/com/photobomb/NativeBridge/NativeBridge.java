package com.photobomb;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import android.widget.Toast;
import android.view.Gravity;

public class NativeBridge extends ReactContextBaseJavaModule {
    
    private static ReactApplicationContext m_reactContext;

    @Override
    public String getName() {
        return "NativeBridge";
    }

    public NativeBridge(ReactApplicationContext reactContext) {
        super(reactContext);
        m_reactContext = reactContext;
    }
    
    public static ReactApplicationContext getReactContext()
    {
        return m_reactContext;
    }

    public static void sendEvent(String eventName, WritableMap params)
    {
        getReactContext().getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(eventName, params);
    }

    @ReactMethod
    public void showToast(String message, int duration) {
        Toast toast = Toast.makeText(getReactApplicationContext(), message, duration);
		toast.setGravity(Gravity.CENTER, 0, 0);
		toast.show();
    }

    @ReactMethod
    public void getMessage(Callback jsCallback)
    {
        jsCallback.invoke("You Rock!!!");
    }
}
