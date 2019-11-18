package com.android; 

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;


public class HelloManager extends ReactContextBaseJavaModule {

    public HelloManager(ReactApplicationContext reactContext){
        super(reactContext);
    }

    @Override 
    public String getName(){
        return "HelloManager";
    }

    @ReactMethod 
    public void greetUser(String name, Callback callback){
        System.out.println("Username " + name );

        String greeting = "Welcome " + name;

        callback.invoke(greeting);
    }


}
