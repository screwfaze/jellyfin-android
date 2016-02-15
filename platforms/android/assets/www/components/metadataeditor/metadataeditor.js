define(["paperdialoghelper","paper-checkbox","paper-dialog","paper-input","paper-item-body","paper-icon-item","paper-textarea"],function(e){function t(){e.close(O)}function a(e,a){function i(){Dashboard.alert(Globalize.translate("MessageItemSaved")),Dashboard.hideLoadingMsg(),t(!0)}ApiClient.updateItem(a).then(function(){var t=$("#selectContentType",e).val()||"";(R.ContentType||"")!=t?ApiClient.ajax({url:ApiClient.getUrl("Items/"+a.Id+"/ContentType",{ContentType:t}),type:"POST"}).then(function(){i()}):i()})}function i(e){return $(".chkAirDay:checked",e).map(function(){return this.getAttribute("data-day")}).get()}function r(e){return $("#txtAlbumArtist",e).val().trim().split(";").filter(function(e){return e.length>0}).map(function(e){return{Name:e}})}function n(e){return $("#txtArtist",e).val().trim().split(";").filter(function(e){return e.length>0}).map(function(e){return{Name:e}})}function o(e,t,a){var i=$(t,e).val();if(!i)return null;if(I[a]){var r=parseISO8601Date(I[a],{toLocal:!0}),n=r.toISOString().split("T");if(0==n[0].indexOf(i)){var o=n[1];i+="T"+o}}return i}function l(){Dashboard.showLoadingMsg();var e=this;try{var t={Id:I.Id,Name:$("#txtName",e).val(),ForcedSortName:$("#txtSortName",e).val(),DisplayMediaType:$("#txtDisplayMediaType",e).val(),CommunityRating:$("#txtCommunityRating",e).val(),VoteCount:$("#txtCommunityVoteCount",e).val(),HomePageUrl:$("#txtHomePageUrl",e).val(),Budget:$("#txtBudget",e).val(),Revenue:$("#txtRevenue",e).val(),CriticRating:$("#txtCriticRating",e).val(),CriticRatingSummary:$("#txtCriticRatingSummary",e).val(),IndexNumber:$("#txtIndexNumber",e).val()||null,DisplaySpecialsWithSeasons:e.querySelector("#chkDisplaySpecialsInline").checked,AbsoluteEpisodeNumber:$("#txtAbsoluteEpisodeNumber",e).val(),DvdEpisodeNumber:$("#txtDvdEpisodeNumber",e).val(),DvdSeasonNumber:$("#txtDvdSeasonNumber",e).val(),AirsBeforeSeasonNumber:$("#txtAirsBeforeSeason",e).val(),AirsAfterSeasonNumber:$("#txtAirsAfterSeason",e).val(),AirsBeforeEpisodeNumber:$("#txtAirsBeforeEpisode",e).val(),ParentIndexNumber:$("#txtParentIndexNumber",e).val()||null,DisplayOrder:$("#selectDisplayOrder",e).val(),Players:$("#txtPlayers",e).val(),Album:$("#txtAlbum",e).val(),AlbumArtist:r(e),ArtistItems:n(e),Metascore:$("#txtMetascore",e).val(),AwardSummary:$("#txtAwardSummary",e).val(),Overview:$("#txtOverview",e).val(),ShortOverview:$("#txtShortOverview",e).val(),Status:$("#selectStatus",e).val(),AirDays:i(e),AirTime:$("#txtAirTime",e).val(),Genres:d($("#listGenres",e)),ProductionLocations:d($("#listCountries",e)),Tags:d($("#listTags",e)),Keywords:d($("#listKeywords",e)),Studios:d($("#listStudios",e)).map(function(e){return{Name:e}}),PremiereDate:o(e,"#txtPremiereDate","PremiereDate"),DateCreated:o(e,"#txtDateAdded","DateCreated"),EndDate:o(e,"#txtEndDate","EndDate"),ProductionYear:$("#txtProductionYear",e).val(),AspectRatio:$("#txtOriginalAspectRatio",e).val(),Video3DFormat:$("#select3dFormat",e).val(),OfficialRating:$("#selectOfficialRating",e).val(),CustomRating:$("#selectCustomRating",e).val(),People:I.People,LockData:e.querySelector("#chkLockData").checked,LockedFields:$(".selectLockedField",e).get().filter(function(e){return!e.checked}).map(function(e){return e.getAttribute("data-value")})};if(t.ProviderIds=$.extend({},I.ProviderIds||{}),$(".txtExternalId",e).each(function(){var e=this.getAttribute("data-providerkey");t.ProviderIds[e]=this.value}),t.PreferredMetadataLanguage=$("#selectLanguage",e).val(),t.PreferredMetadataCountryCode=$("#selectCountry",e).val(),"Person"==I.Type){var l=$("#txtPlaceOfBirth",e).val();t.ProductionLocations=l?[l]:[]}if("Series"==I.Type){var s=$("#txtSeriesRuntime",e).val();t.RunTimeTicks=s?6e8*s:null}var u=$("#txtTagline",e).val();t.Taglines=u?[u]:[],a(e,t)}catch(p){alert(p)}return!1}function s(e,t){for(;!e.classList||!e.classList.contains(t);)if(e=e.parentNode,!e)return null;return e}function d(e){return e.find(".textValue").map(function(){return $(this).text()}).get()}function u(e,t){require(["prompt"],function(a){a({label:"Value:"}).then(function(a){var i=$(e).parents(".editableListviewContainer").find(".paperList"),r=d(i);r.push(a),C(i[0],r,t)})})}function p(e){$(e).parents("paper-icon-item").remove()}function c(e,t,a){require(["components/metadataeditor/personeditor"],function(i){i.show(t).then(function(t){var i=-1==a;i&&I.People.push(t),w(e,I.People)})})}function m(e){$(".btnCancel",e).on("click",function(){t(!1)}),e.querySelector(".btnHeaderSave").addEventListener("click",function(){e.querySelector(".btnSave").click()}),e.querySelector("#chkLockData").addEventListener("click",function(e){e.target.checked?$(".providerSettingsContainer").hide():$(".providerSettingsContainer").show()}),e.addEventListener("click",function(e){var t=s(e.target,"btnRemoveFromEditorList");t&&p(t);var a=s(e.target,"btnAddTextItem");a&&u(a)}),$("form",e).off("submit",l).on("submit",l),$("#btnAddPerson",e).on("click",function(){c(e,{},-1)})}function v(e){return e?ApiClient.getItem(Dashboard.getCurrentUserId(),e):ApiClient.getRootFolder(Dashboard.getCurrentUserId())}function h(e){return e?ApiClient.getJSON(ApiClient.getUrl("Items/"+e+"/MetadataEditor")):Promise.resolve({})}function f(e,t){var a="";a+="<option value=''></option>";for(var i=0,r=t.length;r>i;i++){var n=t[i];a+="<option value='"+n.TwoLetterISORegionName+"'>"+n.DisplayName+"</option>"}e.innerHTML=a}function b(e,t){var a="";a+="<option value=''></option>";for(var i=0,r=t.length;r>i;i++){var n=t[i];a+="<option value='"+n.TwoLetterISOLanguageName+"'>"+n.DisplayName+"</option>"}e.innerHTML=a}function y(e,t){t.ContentTypeOptions.length?$("#fldContentType",e).show():$("#fldContentType",e).hide();var a=t.ContentTypeOptions.map(function(e){return'<option value="'+e.Value+'">'+e.Name+"</option>"}).join("");$("#selectContentType",e).html(a).val(t.ContentType||"")}function g(){var e=this.getAttribute("data-formatstring"),t=this.getAttribute("data-buttonclass");this.value?$("."+t).attr("href",e.replace("{0}",this.value)):$("."+t).attr("href","#")}function x(e,t,a){for(var i="",r=t.ProviderIds||{},n=0,o=a.length;o>n;n++){var l=a[n],s="txt1"+l.Key,d="btnOpen1"+l.Key,u=l.UrlFormatString||"",p=Globalize.translate("LabelDynamicExternalId").replace("{0}",l.Name);i+="<div>";var c=r[l.Key]||"";i+='<paper-input style="display:inline-block;width:80%;" class="txtExternalId" value="'+c+'" data-providerkey="'+l.Key+'" data-formatstring="'+u+'" data-buttonclass="'+d+'" id="'+s+'" label="'+p+'"></paper-input>',u&&(i+='<a class="clearLink '+d+'" href="#" target="_blank" data-role="none" style="float: none; width: 1.75em"><paper-icon-button icon="open-in-browser"></paper-icon-button></a>'),i+="</div>"}var m=$(".externalIds",e).html(i).trigger("create");$(".txtExternalId",m).on("change",g).trigger("change")}function S(e,t){t.Path&&"Remote"!=t.LocationType?$("#fldPath",e).show():$("#fldPath",e).hide(),"Series"==t.Type?$("#fldSeriesRuntime",e).show():$("#fldSeriesRuntime",e).hide(),"Series"==t.Type||"Person"==t.Type?$("#fldEndDate",e).show():$("#fldEndDate",e).hide(),"Movie"==t.Type||"Game"==t.MediaType||"Trailer"==t.MediaType||"MusicVideo"==t.Type?($("#fldBudget",e).show(),$("#fldRevenue",e).show()):($("#fldBudget",e).hide(),$("#fldRevenue",e).hide()),"MusicAlbum"==t.Type?$("#albumAssociationMessage",e).show():$("#albumAssociationMessage",e).hide(),"Game"==t.MediaType?$("#fldPlayers",e).show():$("#fldPlayers",e).hide(),"Movie"==t.Type||"Trailer"==t.Type?($("#fldCriticRating",e).show(),$("#fldCriticRatingSummary",e).show()):($("#fldCriticRating",e).hide(),$("#fldCriticRatingSummary",e).hide()),"Movie"==t.Type?$("#fldAwardSummary",e).show():$("#fldAwardSummary",e).hide(),"Movie"==t.Type||"Trailer"==t.Type?$("#fldMetascore",e).show():$("#fldMetascore",e).hide(),"Series"==t.Type?($("#fldStatus",e).show(),$("#fldAirDays",e).show(),$("#fldAirTime",e).show()):($("#fldStatus",e).hide(),$("#fldAirDays",e).hide(),$("#fldAirTime",e).hide()),"Video"==t.MediaType&&"TvChannel"!=t.Type?$("#fld3dFormat",e).show():$("#fld3dFormat",e).hide(),"Audio"==t.Type?$("#fldAlbumArtist",e).show():$("#fldAlbumArtist",e).hide(),"Audio"==t.Type||"MusicVideo"==t.Type?($("#fldArtist",e).show(),$("#fldAlbum",e).show()):($("#fldArtist",e).hide(),$("#fldAlbum",e).hide()),"Episode"==t.Type?$("#collapsibleDvdEpisodeInfo",e).show():$("#collapsibleDvdEpisodeInfo",e).hide(),"Episode"==t.Type&&0==t.ParentIndexNumber?$("#collapsibleSpecialEpisodeInfo",e).show():$("#collapsibleSpecialEpisodeInfo",e).hide(),"Person"==t.Type||"Genre"==t.Type||"Studio"==t.Type||"GameGenre"==t.Type||"MusicGenre"==t.Type||"TvChannel"==t.Type?($("#fldCommunityRating",e).hide(),$("#fldCommunityVoteCount",e).hide(),$("#genresCollapsible",e).hide(),$("#peopleCollapsible",e).hide(),$("#studiosCollapsible",e).hide(),"TvChannel"==t.Type?$("#fldOfficialRating",e).show():$("#fldOfficialRating",e).hide(),$("#fldCustomRating",e).hide()):($("#fldCommunityRating",e).show(),$("#fldCommunityVoteCount",e).show(),$("#genresCollapsible",e).show(),$("#peopleCollapsible",e).show(),$("#studiosCollapsible",e).show(),$("#fldOfficialRating",e).show(),$("#fldCustomRating",e).show()),"Movie"==t.Type||"Trailer"==t.Type||"MusicArtist"==t.Type?$("#countriesCollapsible",e).show():$("#countriesCollapsible",e).hide(),"TvChannel"==t.Type?($("#tagsCollapsible",e).hide(),$("#metadataSettingsCollapsible",e).hide(),$("#fldPremiereDate",e).hide(),$("#fldSortName",e).hide(),$("#fldDateAdded",e).hide(),$("#fldYear",e).hide()):($("#tagsCollapsible",e).show(),$("#metadataSettingsCollapsible",e).show(),$("#fldPremiereDate",e).show(),$("#fldSortName",e).show(),$("#fldDateAdded",e).show(),$("#fldYear",e).show()),Dashboard.getCurrentUser().then(function(a){-1!=LibraryBrowser.getMoreCommands(t,a).indexOf("identify")?$("#btnIdentify",e).show():$("#btnIdentify",e).hide()}),"Movie"==t.Type||"Trailer"==t.Type||"BoxSet"==t.Type?$("#keywordsCollapsible",e).show():$("#keywordsCollapsible",e).hide(),"Video"==t.MediaType&&"TvChannel"!=t.Type?$("#fldSourceType",e).show():$("#fldSourceType",e).hide(),"Person"==t.Type?(e.querySelector("#txtProductionYear").label=Globalize.translate("LabelBirthYear"),e.querySelector("#txtPremiereDate").label=Globalize.translate("LabelBirthDate"),e.querySelector("#txtEndDate").label=Globalize.translate("LabelDeathDate"),$("#fldPlaceOfBirth",e).show()):(e.querySelector("#txtProductionYear").label=Globalize.translate("LabelYear"),e.querySelector("#txtPremiereDate").label=Globalize.translate("LabelReleaseDate"),e.querySelector("#txtEndDate").label=Globalize.translate("LabelEndDate"),$("#fldPlaceOfBirth",e).hide()),"Video"==t.MediaType&&"TvChannel"!=t.Type?$("#fldOriginalAspectRatio",e).show():$("#fldOriginalAspectRatio",e).hide(),"Audio"==t.Type||"Episode"==t.Type||"Season"==t.Type?($("#fldIndexNumber",e).show(),e.querySelector("#txtIndexNumber").label=Globalize.translate("Episode"==t.Type?"LabelEpisodeNumber":"Season"==t.Type?"LabelSeasonNumber":"Audio"==t.Type?"LabelTrackNumber":"LabelNumber")):$("#fldIndexNumber",e).hide(),"Audio"==t.Type||"Episode"==t.Type?($("#fldParentIndexNumber",e).show(),e.querySelector("#txtParentIndexNumber").label=Globalize.translate("Episode"==t.Type?"LabelSeasonNumber":"Audio"==t.Type?"LabelDiscNumber":"LabelParentNumber")):$("#fldParentIndexNumber",e).hide(),"Series"==t.Type?$("#fldDisplaySpecialsInline",e).show():$("#fldDisplaySpecialsInline",e).hide(),"BoxSet"==t.Type?($("#fldDisplayOrder",e).show(),$("#labelDisplayOrder",e).html(Globalize.translate("LabelTitleDisplayOrder")),$("#selectDisplayOrder",e).html('<option value="SortName">'+Globalize.translate("OptionSortName")+'</option><option value="PremiereDate">'+Globalize.translate("OptionReleaseDate")+"</option>")):($("#selectDisplayOrder",e).html(""),$("#fldDisplayOrder",e).hide());var a=$(".fldDisplaySetting",e);a.filter(function(e){return"none"!=a[e].style.display}).length?$("#collapsibleDisplaySettings",e).show():$("#collapsibleDisplaySettings",e).hide()}function T(e,t,a){var i=$("#selectOfficialRating",e);D(a,i,t.OfficialRating),i.val(t.OfficialRating||""),i=$("#selectCustomRating",e),D(a,i,t.CustomRating),i.val(t.CustomRating||"");var r=$("#selectStatus",e);A(r),r.val(t.Status||""),$("#select3dFormat",e).val(t.Video3DFormat||""),$(".chkAirDay",e).each(function(){this.checked=-1!=(t.AirDays||[]).indexOf(this.getAttribute("data-day"))}),C($("#listCountries",e)[0],t.ProductionLocations||[]),C($("#listGenres",e)[0],t.Genres),w(e,t.People||[]),C($("#listStudios",e)[0],(t.Studios||[]).map(function(e){return e.Name||""})),C($("#listTags",e)[0],t.Tags),C($("#listKeywords",e)[0],t.Keywords);var n=t.LockData||!1,o=e.querySelector("#chkLockData");o.checked=n,o.checked?$(".providerSettingsContainer",e).hide():$(".providerSettingsContainer",e).show(),N(e,t,t.LockedFields),e.querySelector("#chkDisplaySpecialsInline").checked=t.DisplaySpecialsWithSeasons||!1,$("#txtPath",e).val(t.Path||""),$("#txtName",e).val(t.Name||""),e.querySelector("#txtOverview").value=t.Overview||"",$("#txtShortOverview",e).val(t.ShortOverview||""),$("#txtTagline",e).val(t.Taglines&&t.Taglines.length?t.Taglines[0]:""),$("#txtSortName",e).val(t.ForcedSortName||""),$("#txtDisplayMediaType",e).val(t.DisplayMediaType||""),$("#txtCommunityRating",e).val(t.CommunityRating||""),$("#txtCommunityVoteCount",e).val(t.VoteCount||""),$("#txtHomePageUrl",e).val(t.HomePageUrl||""),$("#txtAwardSummary",e).val(t.AwardSummary||""),$("#txtMetascore",e).val(t.Metascore||""),$("#txtBudget",e).val(t.Budget||""),$("#txtRevenue",e).val(t.Revenue||""),$("#txtCriticRating",e).val(t.CriticRating||""),$("#txtCriticRatingSummary",e).val(t.CriticRatingSummary||""),$("#txtIndexNumber",e).val("IndexNumber"in t?t.IndexNumber:""),$("#txtParentIndexNumber",e).val("ParentIndexNumber"in t?t.ParentIndexNumber:""),$("#txtPlayers",e).val(t.Players||""),$("#txtAbsoluteEpisodeNumber",e).val("AbsoluteEpisodeNumber"in t?t.AbsoluteEpisodeNumber:""),$("#txtDvdEpisodeNumber",e).val("DvdEpisodeNumber"in t?t.DvdEpisodeNumber:""),$("#txtDvdSeasonNumber",e).val("DvdSeasonNumber"in t?t.DvdSeasonNumber:""),$("#txtAirsBeforeSeason",e).val("AirsBeforeSeasonNumber"in t?t.AirsBeforeSeasonNumber:""),$("#txtAirsAfterSeason",e).val("AirsAfterSeasonNumber"in t?t.AirsAfterSeasonNumber:""),$("#txtAirsBeforeEpisode",e).val("AirsBeforeEpisodeNumber"in t?t.AirsBeforeEpisodeNumber:""),$("#txtAlbum",e).val(t.Album||""),$("#txtAlbumArtist",e).val((t.AlbumArtists||[]).map(function(e){return e.Name}).join(";")),$("#selectDisplayOrder",e).val(t.DisplayOrder),$("#txtArtist",e).val((t.ArtistItems||[]).map(function(e){return e.Name}).join(";"));var l;if(t.DateCreated)try{l=parseISO8601Date(t.DateCreated,{toLocal:!0}),$("#txtDateAdded",e).val(l.toISOString().slice(0,10))}catch(s){$("#txtDateAdded",e).val("")}else $("#txtDateAdded",e).val("");if(t.PremiereDate)try{l=parseISO8601Date(t.PremiereDate,{toLocal:!0}),$("#txtPremiereDate",e).val(l.toISOString().slice(0,10))}catch(s){$("#txtPremiereDate",e).val("")}else $("#txtPremiereDate",e).val("");if(t.EndDate)try{l=parseISO8601Date(t.EndDate,{toLocal:!0}),$("#txtEndDate",e).val(l.toISOString().slice(0,10))}catch(s){$("#txtEndDate",e).val("")}else $("#txtEndDate",e).val("");$("#txtProductionYear",e).val(t.ProductionYear||""),$("#txtAirTime",e).val(t.AirTime||"");var d=t.ProductionLocations&&t.ProductionLocations.length?t.ProductionLocations[0]:"";if($("#txtPlaceOfBirth",e).val(d),$("#txtOriginalAspectRatio",e).val(t.AspectRatio||""),$("#selectLanguage",e).val(t.PreferredMetadataLanguage||""),$("#selectCountry",e).val(t.PreferredMetadataCountryCode||""),t.RunTimeTicks){var u=t.RunTimeTicks/6e8;$("#txtSeriesRuntime",e).val(Math.round(u))}else $("#txtSeriesRuntime",e).val("")}function D(e,t,a){var i="";i+="<option value=''></option>";var r,n,o,l=[],s=!1;for(r=0,n=e.length;n>r;r++)o=e[r],l.push({Name:o.Name,Value:o.Name}),o.Name==a&&(s=!0);for(a&&!s&&l.push({Name:a,Value:a}),r=0,n=l.length;n>r;r++)o=l[r],i+="<option value='"+o.Value+"'>"+o.Name+"</option>";t.html(i)}function A(e){var t="";t+="<option value=''></option>",t+="<option value='Continuing'>"+Globalize.translate("OptionContinuing")+"</option>",t+="<option value='Ended'>"+Globalize.translate("OptionEnded")+"</option>",e.html(t)}function C(e,t,a){t=t||[],"undefined"==typeof a?t.sort(function(e,t){return e.toLowerCase().localeCompare(t.toLowerCase())}):t=a(t);for(var i="",r=0;r<t.length;r++)i+="<paper-icon-item>",i+='<paper-fab mini style="background-color:#444;" icon="live-tv" item-icon></paper-fab>',i+="<paper-item-body>",i+='<div class="textValue">',i+=t[r],i+="</div>",i+="</paper-item-body>",i+='<paper-icon-button icon="delete" data-index="'+r+'" class="btnRemoveFromEditorList"></paper-icon-button>',i+="</paper-icon-item>";e.innerHTML=i}function w(e,t){for(var a="",i="",r=e.querySelector("#peopleList"),n=0,o=t.length;o>n;n++){var l=t[n];i+="<paper-icon-item>",i+='<paper-fab class="btnEditPerson" data-index="'+n+'" mini style="background-color:#444;" icon="person" item-icon></paper-fab>',i+="<paper-item-body>",i+='<a class="btnEditPerson clearLink" href="#" data-index="'+n+'">',i+='<div class="textValue">',i+=l.Name||"",i+="</div>",l.Role&&l.Role!=a&&(i+="<div secondary>"+l.Role+"</div>"),i+="</a>",i+="</paper-item-body>",i+='<paper-icon-button icon="delete" data-index="'+n+'" class="btnDeletePerson"></paper-icon-button>',i+="</paper-icon-item>"}r.innerHTML=i,$(".btnDeletePerson",r).on("click",function(){var t=parseInt(this.getAttribute("data-index"));I.People.splice(t,1),w(e,I.People)}),$(".btnEditPerson",r).on("click",function(){var t=parseInt(this.getAttribute("data-index"));c(e,I.People[t],t)})}function P(e,t){for(var a="",i=0;i<e.length;i++){var r=e[i],n=r.name,o=r.value||r.name,l=-1==t.indexOf(o)?" checked":"";a+='<paper-checkbox class="selectLockedField" data-value="'+o+'" style="display:block;margin:1em 0;"'+l+">"+n+"</paper-checkbox>"}return a}function N(e,t,a){var i=$(".providerSettingsContainer",e);a=a||new Array;var r=[{name:Globalize.translate("OptionName"),value:"Name"},{name:Globalize.translate("OptionOverview"),value:"Overview"},{name:Globalize.translate("OptionGenres"),value:"Genres"},{name:Globalize.translate("OptionParentalRating"),value:"OfficialRating"},{name:Globalize.translate("OptionPeople"),value:"Cast"}];r.push("Person"==t.Type?{name:Globalize.translate("OptionBirthLocation"),value:"ProductionLocations"}:{name:Globalize.translate("OptionProductionLocations"),value:"ProductionLocations"}),"Series"==t.Type&&r.push({name:Globalize.translate("OptionRuntime"),value:"Runtime"}),r.push({name:Globalize.translate("OptionStudios"),value:"Studios"}),r.push({name:Globalize.translate("OptionTags"),value:"Tags"}),r.push({name:Globalize.translate("OptionKeywords"),value:"Keywords"}),r.push({name:Globalize.translate("OptionImages"),value:"Images"}),r.push({name:Globalize.translate("OptionBackdrops"),value:"Backdrops"}),"Game"==t.Type&&r.push({name:Globalize.translate("OptionScreenshots"),value:"Screenshots"});var n="";n+="<h1>"+Globalize.translate("HeaderEnabledFields")+"</h1>",n+="<p>"+Globalize.translate("HeaderEnabledFieldsHelp")+"</p>",n+=P(r,a),i.html(n)}function L(e,t){Dashboard.showLoadingMsg(),Promise.all([v(t),h(t)]).then(function(t){var a=t[0];R=t[1],I=a;var i=R.Cultures,r=R.Countries;y(e,R),x(e,a,R.ExternalIdInfos),b(e.querySelector("#selectLanguage"),i),f(e.querySelector("#selectCountry"),r),LibraryBrowser.renderName(a,$(".itemName",e),!0),S(e,a),T(e,a,R.ParentalRatingOptions),"Photo"==a.MediaType?$("#btnEditImages",e).hide():$("#btnEditImages",e).show(),"Video"==a.MediaType&&"Episode"!=a.Type?$("#fldShortOverview",e).show():$("#fldShortOverview",e).hide(),"Video"==a.MediaType&&"Episode"!=a.Type?$("#fldTagline",e).show():$("#fldTagline",e).hide(),Dashboard.hideLoadingMsg()})}var O,R,I;return{show:function(t){return new Promise(function(a){Dashboard.showLoadingMsg();var i=new XMLHttpRequest;i.open("GET","components/metadataeditor/metadataeditor.template.html",!0),i.onload=function(){var i=this.response,r=e.createDialog({removeOnClose:!0,size:"medium"});r.classList.add("ui-body-b"),r.classList.add("background-theme-b"),r.classList.add("formDialog");var n="";n+=Globalize.translateDocument(i),r.innerHTML=n,document.body.appendChild(r),e.open(r),r.addEventListener("iron-overlay-closed",function(){a()}),O=r,m(r),L(r,t)},i.send()})}}});