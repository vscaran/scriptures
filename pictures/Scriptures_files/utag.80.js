//tealium universal tag - utag.80 ut4.0.202008191912, Copyright 2020 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={};u.extend=[];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
}};utag.o[loader].loader.LOAD(id);})("80","lds.ldsorg");}catch(error){utag.DB(error);}
var loc=window.location.href.split("?")[0];var locP=loc.split('/');var domain=window.document.location.hostname.split('.');domainExt=(domain.length>2)?domain[2]:domain[1];domainExt=(domain.length>3)?domain[3]:domain[2];var t_checkVideoInterval;var t_checkCount=0;var t_lastaction='';function track_mediaServer(resource,id,name,account){var not_watched_0=true;var not_watched_25=true;var not_watched_50=true;var not_watched_75=true;var not_watched_90=true;t_videos[0].onplay=function(){if(t_lastaction!='video start'||t_lastaction!='video resume'){if(not_watched_0==true){utag.link({'video_player':'LDS Media Server','video_name':name,'video_account':account,'video_id':id,'video_action':'video start'});t_lastaction='video start';not_watched_0=false;}else{utag.link({'video_player':'LDS Media Server','video_name':name,'video_account':account,'video_id':id,'video_action':'video resume'});t_lastaction='video resume';}}};t_videos[0].onpause=function(){if(t_lastaction!='video pause'){utag.link({'video_player':'LDS Media Server','video_name':name,'video_account':account,'video_id':id,'video_action':'video pause'});t_lastaction='video pause';}};t_videos[0].onended=function(){if(t_lastaction!='video complete'){utag.link({'video_player':'LDS Media Server','video_name':name,'video_account':account,'video_id':id,'video_action':'video complete'});t_lastaction=='video complete'}};t_videos[0].ontimeupdate=function(){var currentTime=t_videos[0].currentTime
var duration=t_videos[0].duration
var percentage_watched=(currentTime/duration)*100;if((percentage_watched.toFixed()==25)&&(not_watched_25==true)){if(t_lastaction!='video 25% watched'){utag.link({'video_player':'LDS Media Server','video_name':name,'video_account':account,'video_id':id,'video_action':'video 25% watched','video_milestone':'25%'});not_watched_25=false;t_lastaction=='video 25% watched'}}
if((percentage_watched.toFixed()==50)&&(not_watched_50==true)){if(t_lastaction!='video 50% watched'){utag.link({'video_player':'LDS Media Server','video_name':name,'video_account':account,'video_id':id,'video_action':'video 50% watched','video_milestone':'50%'});not_watched_50=false;t_lastaction=='video 50% watched'}}
if((percentage_watched.toFixed()==75)&&(not_watched_75==true)){if(t_lastaction!='video 75% watched'){utag.link({'video_player':'LDS Media Server','video_name':name,'video_account':account,'video_id':id,'video_action':'video 75% watched','video_milestone':'75%'});not_watched_75=false;t_lastaction=='video 75% watched'}}
if((percentage_watched.toFixed()==90)&&(not_watched_90==true)){if(t_lastaction!='video 90% watched'){utag.link({'video_player':'LDS Media Server','video_name':name,'video_account':account,'video_id':id,'video_action':'video 90% watched','video_milestone':'90%'});not_watched_90=false;t_lastaction=='video 90% watched'}}};}
function track_brightcove(resource,id,name,account){console.log('found brightcove');var not_watched_0=true;var not_watched_25=true;var not_watched_50=true;var not_watched_75=true;var not_watched_90=true;videojs(resource).on("play",function(){if(t_lastaction!='video start'||t_lastaction!='video resume'){if(not_watched_0==true){utag.link({'video_player':videojs(resource).bcAnalytics.settings.playerName,'video_name':name,'video_account':account,'video_id':id,'video_action':'video start'});t_lastaction='video start';not_watched_0=false;}else{utag.link({'video_player':videojs(resource).bcAnalytics.settings.playerName,'video_name':name,'video_account':account,'video_id':id,'video_action':'video resume'});t_lastaction='video resume';}}});videojs(resource).on("pause",function(){if(t_lastaction!='video pause'){utag.link({'video_player':videojs(resource).bcAnalytics.settings.playerName,'video_name':name,'video_account':account,'video_id':id,'video_action':'video pause'});t_lastaction='video pause';}});videojs(resource).on("ended",function(){if(t_lastaction!='video pause'){utag.link({'video_player':videojs(resource).bcAnalytics.settings.playerName,'video_name':name,'video_account':account,'video_id':id,'video_action':'video complete'});t_lastaction='video complete';}});videojs(resource).on("timeupdate",function(){var currentTime=document.getElementById(resource).currentTime;var duration=document.getElementById(resource).duration;var percentage_watched=(currentTime/duration)*100;if((percentage_watched.toFixed()==25)&&(not_watched_25==true)){not_watched_25=false;if(t_lastaction!='video 25% watched'){utag.link({'video_player':videojs(resource).bcAnalytics.settings.playerName,'video_name':name,'video_account':account,'video_id':id,'video_action':'video 25% watched','video_milestone':'25%'});t_lastaction='video 25% watched';}}else if((percentage_watched.toFixed()==50)&&(not_watched_50==true)){not_watched_50=false;if(t_lastaction!='video 50% watched'){utag.link({'video_player':videojs(resource).bcAnalytics.settings.playerName,'video_name':name,'video_account':account,'video_id':id,'video_action':'video 50% watched','video_milestone':'50%'});t_lastaction='video 50% watched';}}else if((percentage_watched.toFixed()==75)&&(not_watched_75==true)){not_watched_75=false;if(t_lastaction!='video 75% watched'){utag.link({'video_player':videojs(resource).bcAnalytics.settings.playerName,'video_name':name,'video_account':account,'video_id':id,'video_action':'video 75% watched','video_milestone':'75%'});t_lastaction='video 75% watched';}}else if((percentage_watched.toFixed()==90)&&(not_watched_90==true)){not_watched_90=false;if(t_lastaction!='video 90% watched'){utag.link({'video_player':videojs(resource).bcAnalytics.settings.playerName,'video_name':name,'video_account':account,'video_id':id,'video_action':'video 90% watched','video_milestone':'90%'});t_lastaction='video 90% watched';}}});}
function t_checkVideo(){var videoNum=document.getElementsByTagName('video').length;clearInterval(t_checkVideoInterval);if(videoNum<1){t_startVideoCheck();}
else{t_VideoLoad();}}
function t_VideoLoad(){if(t_checkCount<=5){t_checkCount++;}
else{clearInterval(t_checkVideoInterval);}
t_videos=document.getElementsByTagName('video');for(x=0;x<t_videos.length;x++){if(typeof(videojs)!='undefined'){track_brightcove(t_videos[x].id,t_videos[0].dataset.videoId,t_videos[x].id.replace('_html5_api',''),t_videos[0].dataset.account);clearInterval(t_checkVideoInterval);}
else if(t_videos[0].currentSrc.indexOf('mediasrv.lds.org')!=-1){track_mediaServer(t_videos[x],t_videos[x].dataset.videoId,t_videos[x].dataset.videoTitle,'None');clearInterval(t_checkVideoInterval);}}}
function t_startVideoCheck(){t_checkVideoInterval=setInterval("t_checkVideo()",1000);}
function t_stopVideoCheck(){clearInterval(t_checkVideoInterval);}
t_checkVideo();