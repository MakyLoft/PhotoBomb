package com.photobomb;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import android.graphics.Paint;
import android.widget.Toast;
import android.view.Gravity;

import android.graphics.BitmapFactory;
import android.graphics.Bitmap;
import android.graphics.Bitmap.CompressFormat;

import android.graphics.Canvas;
import android.graphics.Matrix;

import android.os.Environment;

import java.io.File;
import java.io.OutputStream;
import java.io.FileOutputStream;
import java.io.IOException;

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
	
	@ReactMethod
    public void mergeImages(String imageBackgroundPath, String imageForegroundPath, Callback jsCallback)
    {
        File bgImagePath = new  File(imageBackgroundPath);
        File fgImagePath = new  File(imageForegroundPath);

        Bitmap bgImageBitmap = BitmapFactory.decodeFile(bgImagePath.getAbsolutePath());
        Bitmap fgImageBitmap = BitmapFactory.decodeFile(fgImagePath.getAbsolutePath());

        Bitmap mergeBitmap = Bitmap.createBitmap(bgImageBitmap.getWidth(), bgImageBitmap.getHeight(), bgImageBitmap.getConfig());
        Canvas mergeCanvas = new Canvas(mergeBitmap);
        mergeCanvas.drawBitmap(bgImageBitmap, new Matrix(), null);
        mergeCanvas.drawBitmap(fgImageBitmap, new Matrix(), null);

        String fileName = Environment.getExternalStorageDirectory() + "/MergeTest.png";

        try(OutputStream stream = new FileOutputStream(fileName)) {
            mergeBitmap.compress(CompressFormat.PNG, 80, stream);
            stream.close();
        } catch (IOException e) {

        }

        jsCallback.invoke(fileName);
    }
}
