pageIdOn("pageinit","myPreferencesMenuPage",function(){var e=this;$(".btnLogout",e).on("click",function(){Dashboard.logout()})}),pageIdOn("pageshow","myPreferencesMenuPage",function(){var e=this,r=getParameterByName("userId")||Dashboard.getCurrentUserId();$(".lnkDisplayPreferences",e).attr("href","mypreferencesdisplay.html?userId="+r),$(".lnkLanguagePreferences",e).attr("href","mypreferenceslanguages.html?userId="+r),$(".lnkHomeScreenPreferences",e).attr("href","mypreferenceshome.html?userId="+r),$(".lnkMyProfile",e).attr("href","myprofile.html?userId="+r),$(".lnkSync",e).attr("href","mysyncsettings.html?userId="+r),Dashboard.capabilities().SupportsSync?e.querySelector(".lnkSync").classList.remove("hide"):e.querySelector(".lnkSync").classList.add("hide"),Dashboard.getCurrentUser().then(function(r){e.querySelector(".headerUser").innerHTML=r.Name,e.querySelector(".adminSection").classList.add(AppInfo.isNativeApp&&browserInfo.safari&&r.Policy.IsAdministrator?"hide":"hide")}),Dashboard.isConnectMode()?e.querySelector(".selectServer").classList.remove("hide"):e.querySelector(".selectServer").classList.add("hide")});