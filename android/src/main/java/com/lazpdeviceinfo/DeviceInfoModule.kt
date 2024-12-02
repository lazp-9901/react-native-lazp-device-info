package com.lazpdeviceinfo

import android.os.Build
import android.util.Log;
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.WritableMap

class DeviceInfoModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
  override fun getName(): String {
    return "DeviceInfoModule"
  }

  @ReactMethod
  fun getDeviceInfo(promise: Promise) {
    try {
        val deviceInfo: WritableMap = Arguments.createMap()
        deviceInfo.putString("brand", Build.BRAND)
        deviceInfo.putString("model", Build.MODEL)
        deviceInfo.putString("osVersion", Build.VERSION.RELEASE)
        deviceInfo.putString("sdkVersion", Build.VERSION.SDK_INT.toString())
        promise.resolve(deviceInfo)
    } catch (e: Exception) {
        promise.reject("ERROR Lazp module", e)
    }
  }

  @ReactMethod
  fun getTest(promise: Promise) {
    promise.resolve("Test module")
  }
}
