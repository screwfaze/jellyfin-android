define(["events","libraryBrowser","imageLoader","alphaPicker"],function(e,t,a,r){return function(e,n,i){function o(e){var a=s(e),r=g[a];return r||(r=g[a]={query:{SortBy:"SortName",SortOrder:"Ascending",IncludeItemTypes:"Movie",Recursive:!0,Fields:"PrimaryImageAspectRatio,MediaSourceCount,SortName,SyncInfo",ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb",StartIndex:0,Limit:y},view:t.getSavedView(a)||t.getDefaultItemsView("Poster","Poster")},r.query.ParentId=n.topParentId,t.loadSavedQueryValues(a,r.query)),r}function l(e){return o(e).query}function s(e){return e.savedQueryKey||(e.savedQueryKey=t.getSavedQueryKey("movies")),e.savedQueryKey}function u(e){Dashboard.showLoadingMsg();var r=l(e);ApiClient.getItems(Dashboard.getCurrentUserId(),r).then(function(n){function o(){r.StartIndex+=r.Limit,u(i)}function l(){r.StartIndex-=r.Limit,u(i)}window.scrollTo(0,0),d(e);var m,y=LibraryBrowser.getQueryPagingHtml({startIndex:r.StartIndex,limit:r.Limit,totalRecordCount:n.TotalRecordCount,showLimit:!1,updatePageSizeSetting:!1,addLayoutButton:!1,sortButton:!1,filterButton:!1}),g=c.getCurrentViewStyle();m="Thumb"==g?t.getPosterViewHtml({items:n.Items,shape:"backdrop",preferThumb:!0,context:"movies",lazy:!0,overlayPlayButton:!0}):"ThumbCard"==g?t.getPosterViewHtml({items:n.Items,shape:"backdrop",preferThumb:!0,context:"movies",lazy:!0,cardLayout:!0,showTitle:!0,showYear:!0}):"Banner"==g?t.getPosterViewHtml({items:n.Items,shape:"banner",preferBanner:!0,context:"movies",lazy:!0}):"List"==g?t.getListViewHtml({items:n.Items,context:"movies",sortBy:r.SortBy}):t.getPosterViewHtml("PosterCard"==g?{items:n.Items,shape:"portrait",context:"movies",showTitle:!0,showYear:!0,lazy:!0,cardLayout:!0}:{items:n.Items,shape:"portrait",context:"movies",centerText:!0,lazy:!0,overlayPlayButton:!0});var v,S,h=i.querySelectorAll(".paging");for(v=0,S=h.length;S>v;v++)h[v].innerHTML=y;for(h=i.querySelectorAll(".btnNextPage"),v=0,S=h.length;S>v;v++)h[v].addEventListener("click",o);for(h=i.querySelectorAll(".btnPreviousPage"),v=0,S=h.length;S>v;v++)h[v].addEventListener("click",l);var p=i.querySelector(".itemsContainer");p.innerHTML=m,a.lazyChildren(p),t.saveQueryValues(s(e),r),Dashboard.hideLoadingMsg()})}function d(e){var t=l(e);c.alphaPicker.value(t.NameStartsWithOrGreater)}function m(e){var a=e.querySelector(".alphaPicker");a.addEventListener("alphavaluechanged",function(t){var a=t.detail.value,r=l(e);r.NameStartsWithOrGreater=a,r.StartIndex=0,u(e)}),c.alphaPicker=new r({element:a,valueChangeEvent:"click"}),e.querySelector(".btnFilter").addEventListener("click",function(){c.showFilterMenu()}),e.querySelector(".btnSort").addEventListener("click",function(a){t.showSortMenu({items:[{name:Globalize.translate("OptionNameSort"),id:"SortName"},{name:Globalize.translate("OptionBudget"),id:"Budget,SortName"},{name:Globalize.translate("OptionImdbRating"),id:"CommunityRating,SortName"},{name:Globalize.translate("OptionCriticRating"),id:"CriticRating,SortName"},{name:Globalize.translate("OptionDateAdded"),id:"DateCreated,SortName"},{name:Globalize.translate("OptionDatePlayed"),id:"DatePlayed,SortName"},{name:Globalize.translate("OptionMetascore"),id:"Metascore,SortName"},{name:Globalize.translate("OptionParentalRating"),id:"OfficialRating,SortName"},{name:Globalize.translate("OptionPlayCount"),id:"PlayCount,SortName"},{name:Globalize.translate("OptionReleaseDate"),id:"PremiereDate,SortName"},{name:Globalize.translate("OptionRevenue"),id:"Revenue,SortName"},{name:Globalize.translate("OptionRuntime"),id:"Runtime,SortName"},{name:Globalize.translate("OptionVideoBitrate"),id:"VideoBitRate,SortName"}],callback:function(){l(e).StartIndex=0,u(e)},query:l(e),button:a.target})});var n=e.querySelector(".btnSelectView");n.addEventListener("click",function(e){t.showLayoutMenu(e.target,c.getCurrentViewStyle(),"Banner,List,Poster,PosterCard,Thumb,ThumbCard".split(","))}),n.addEventListener("layoutchange",function(a){var r=a.detail.viewStyle;o(e).view=r,t.saveViewSetting(s(e),r),l(e).StartIndex=0,u(e)})}var c=this,y=t.getDefaultPageSize(),g={};c.showFilterMenu=function(){require(["components/filterdialog/filterdialog"],function(e){var t=new e({query:l(i),mode:"movies"});Events.on(t,"filterchange",function(){l(i).StartIndex=0,u(i)}),t.show()})},c.getCurrentViewStyle=function(){return o(i).view},m(i),c.renderTab=function(){u(i),d(i)},c.destroy=function(){}}});