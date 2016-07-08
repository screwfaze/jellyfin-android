define(["fetchHelper","jQuery","registrationservices"],function(e,t,r){function a(e){Dashboard.showLoadingMsg(),ApiClient.getPluginSecurityInfo().then(function(r){t("#txtSupporterKey",e).val(r.SupporterKey),r.SupporterKey&&!r.IsMBSupporter?(e.querySelector("#txtSupporterKey").classList.add("invalidEntry"),t(".notSupporter",e).show()):(e.querySelector("#txtSupporterKey").classList.remove("invalidEntry"),t(".notSupporter",e).hide()),Dashboard.hideLoadingMsg()})}function n(e){Dashboard.getPluginSecurityInfo().then(function(r){r.IsMBSupporter?t(".supporterContainer",e).addClass("hide"):t(".supporterContainer",e).removeClass("hide")})}function o(){Dashboard.showLoadingMsg();var r=this,a=t("#txtEmail",r).val(),n="https://mb3admin.com/admin/service/supporter/retrievekey?email="+a;return e.ajax({url:n,type:"POST",dataType:"json"}).then(function(e){Dashboard.hideLoadingMsg(),e.Success?require(["toast"],function(e){e(Globalize.translate("MessageKeyEmailedTo").replace("{0}",a))}):require(["toast"],function(t){t(e.ErrorMessage)})}),!1}function i(){return[{href:"about.html",name:Globalize.translate("TabAbout")},{href:"supporterkey.html",name:Globalize.translate("TabEmbyPremiere")}]}function s(e){r.showPremiereInfo(),e.preventDefault(),e.stopPropagation()}var u={updateSupporterKey:function(){Dashboard.showLoadingMsg();var e=this,r=t("#txtSupporterKey",e).val(),n={SupporterKey:r};return ApiClient.updatePluginSecurityInfo(n).then(function(){Dashboard.resetPluginSecurityInfo(),Dashboard.hideLoadingMsg(),Dashboard.alert(r?{message:Globalize.translate("MessageKeyUpdated"),title:Globalize.translate("HeaderConfirmation")}:{message:Globalize.translate("MessageKeyRemoved"),title:Globalize.translate("HeaderConfirmation")});var n=t(e).parents(".page")[0];a(n)}),!1},linkSupporterKeys:function(){Dashboard.showLoadingMsg();var r=this,a=t("#txtNewEmail",r).val(),n=t("#txtNewKey",r).val(),o=t("#txtOldKey",r).val(),i="https://mb3admin.com/admin/service/supporter/linkKeys";return e.ajax({url:i,type:"POST",dataType:"json",query:{email:a,newkey:n,oldkey:o}}).then(function(e){Dashboard.hideLoadingMsg(),e.Success?require(["toast"],function(e){e(Globalize.translate("MessageKeysLinked"))}):require(["toast"],function(t){t(e.ErrorMessage)})}),!1}};t(document).on("pageinit","#supporterKeyPage",function(){var e=this;t("#supporterKeyForm",this).on("submit",u.updateSupporterKey),t("#lostKeyForm",this).on("submit",o),t("#linkKeysForm",this).on("submit",u.linkSupporterKeys),e.querySelector(".benefits").innerHTML=Globalize.translate("HeaderSupporterBenefit",'<a class="lnkPremiere" href="http://emby.media/premiere" target="_blank">',"</a>"),e.querySelector(".lnkPremiere").addEventListener("click",s)}).on("pageshow","#supporterKeyPage",function(){LibraryMenu.setTabs("helpadmin",1,i);var e=this;n(e),a(e)})});