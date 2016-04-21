define(["appSettings"],function(e){function n(n){function i(){Events.trigger(d,"ended")}function t(){Events.trigger(d,"timeupdate")}function r(){Events.trigger(d,"volumechange")}function o(){Events.trigger(d,"playing")}function a(){Events.trigger(d,"pause")}function u(e,n,i){var t={QueueableMediaTypes:i.MediaType,ItemId:i.Id,NowPlayingItem:{},MediaSourceId:n.Id};n.RunTimeTicks&&(t.NowPlayingItem.RunTimeTicks=n.RunTimeTicks);var r=e.url,o=getParameterByName("AudioStreamIndex",r);return o&&(t.AudioStreamIndex=parseInt(o)),null!=MediaPlayer.currentSubtitleStreamIndex&&(t.SubtitleStreamIndex=MediaPlayer.currentSubtitleStreamIndex),t.PlayMethod=e.playMethod,t.LiveStreamId=n.LiveStreamId,t.PlaySessionId=getParameterByName("PlaySessionId",r),n.RunTimeTicks&&n.RunTimeTicks>0&&(t.CanSeek=!0),t}var d=this;d.enableProgressReporting="audio"==n.type;var l={};d.currentTime=function(e){return null!=e?void AndroidVlcPlayer.sendVlcCommand("setposition",e.toString()):l.currentTime},d.duration=function(){return l?l.duration:null},d.stop=function(){AndroidVlcPlayer.sendVlcCommand("stop",null)},d.pause=function(){AndroidVlcPlayer.sendVlcCommand("pause",null)},d.unpause=function(){AndroidVlcPlayer.sendVlcCommand("unpause",null)},d.volume=function(e){return l?null!=e?void AndroidVlcPlayer.sendVlcCommand("setvolume",(100*e).toString()):l.volume:void 0},d.setCurrentSrc=function(i,t,r){if(!i)return void d.destroy();var o=i.url,a=o.indexOf("#t="),c=1e3*(i.startPositionInSeekParam||0);if(-1!=a&&(o=o.split("#")[0]),"audio"==n.type)AndroidVlcPlayer.playAudioVlc(o,JSON.stringify(t),JSON.stringify(r),n.poster);else{{var s=u(i,r,t),p=ApiClient.serverAddress(),m=r.MediaStreams.filter(function(e){return"Video"==e.Type})[0],y=m?m.Width:null;m?m.Height:null}require(["qualityoptions"],function(n){var a=e.maxStreamingBitrate(),u=n.getVideoQualityOptions(a,y).map(function(e){return{Name:e.name,Value:e.bitrate+"-"+e.maxHeight}}),m="Transcode"==s.PlayMethod?(i.startTimeTicksOffset||0)/1e4:c;MediaPlayer.getDeviceProfile().then(function(e){var n=MediaController.playbackTimeLimitMs||0;AndroidVlcPlayer.playVideoVlc(o,m,t.Name,JSON.stringify(t),JSON.stringify(r),JSON.stringify(s),ApiClient.serverInfo().Id,p,ApiClient.appName(),ApiClient.appVersion(),ApiClient.deviceId(),ApiClient.deviceName(),ApiClient.getCurrentUserId(),ApiClient.accessToken(),JSON.stringify(e),JSON.stringify(u),n),l.currentSrc=o,d.report("playing",null,c,!1,100)})})}},d.currentSrc=function(){return l?l.currentSrc:void 0},d.paused=function(){return l?l.paused:!1},d.cleanup=function(e){e!==!1&&AndroidVlcPlayer.destroyVlc(),l={}},d.enableCustomVideoControls=function(){return!1},d.report=function(e,n,u,d,c){var s=l;s.duration=n,s.currentTime=u,s.paused=d,s.volume=(c||0)/100,"playbackstop"==e?i():"volumechange"==e?r():"positionchange"==e?t():"paused"==e?a():"unpaused"==e?o():"playing"==e&&o()},d.init=function(){return Promise.resolve()},d.onActivityClosed=function(e,n,i){l.currentTime=i,e&&MediaPlayer.stop(!1),d.report("playbackstop",l.duration,i,!1,100)},window.VlcAudio&&(window.AudioRenderer.Current=d),window.VideoRenderer.Current=d}window.VlcAudio&&(window.AudioRenderer=function(e){return e=e||{},e.type="audio",new n(e)}),window.VideoRenderer=function(e){return e=e||{},e.type="video",new n(e)}});