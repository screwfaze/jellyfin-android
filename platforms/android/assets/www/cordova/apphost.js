define(["appStorage","browser"],function(e,i){function n(){return null}function t(){var e={PlayableMediaTypes:["Audio","Video"],SupportsPersistentIdentifier:!1,DeviceProfile:n()};return e}var o;return{getWindowState:function(){return document.windowState||"Normal"},setWindowState:function(){alert("setWindowState is not supported and should not be called")},exit:function(){alert("exit is not supported and should not be called")},supports:function(e){var n=[];return i.safari||n.push("filedownload"),-1!=n.indexOf(e.toLowerCase())},appInfo:function(){return o?Promise.resolve(o):new Promise(function(i){document.addEventListener("deviceready",function(){cordova.getAppVersion.getVersionNumber(function(n){var t=browserInfo.android?"Emby for Android Mobile":browserInfo.safari?"Emby for iOS":"Emby Mobile",r=device.model.replace(/[^\w\s]/gi,""),a=null;window.MainActivity&&(a=e.getItem("legacyDeviceId"),a||(a=MainActivity.getLegacyDeviceId(),e.setItem("legacyDeviceId",a))),o={deviceId:a||device.uuid,deviceName:r,appName:t,appVersion:n},i(o)})},!1)})},capabilities:t}});