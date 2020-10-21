//Last Updated by J. Tippets 5/30/2019

var t_url = document.location.href;
var t_domain = window.document.location.hostname.split('.');
var t_profile = 'main'
var t_blacklist = 'false'

//set tracking=false cookie
if (t_url.indexOf('tracking=false') != -1) { document.cookie = "tracking=false; path=/; domain=." + t_domain[1] + "." + t_domain[2]; }
else if (t_url.indexOf('tracking=true') != -1) { document.cookie = "tracking=true; path=/; domain=." + t_domain[1] + "." + t_domain[2]; }
var t_cookie = document.cookie;

//determine which tealium profile to load
if ((t_url.indexOf('.lds.org') != -1) || (t_url.indexOf('.churchofjesuschrist.org') != -1)) { t_profile = 'ldsorg'; }
if ((t_url.indexOf('.mormon.org') != -1) || (t_url.indexOf('.comeuntochrist.org') != -1) || (t_url.indexOf('.veniracristo.org') != -1) || (t_url.indexOf('.vindeacristo.org') != -1)) { t_profile = 'mormonorg'; }
if ((t_url.indexOf('.ldschurch.org') != -1) || (t_url.indexOf('office365lds.sharepoint.com') != -1)) { t_profile = 'ldschurch'; }
if (t_url.indexOf('.mormonchannel.org') != -1) { t_profile = 'mormonchannel'; }
if ((t_url.indexOf('.mormonnewsroom.org') != -1) || ((t_url.indexOf('mnr-') != -1) && (t_url.indexOf('ldschurch.org') != -1))) { t_profile = 'mormonnewsroom'; }
if ((t_url.indexOf('.mormontabernaclechoir.org') != -1) || (t_url.indexOf('.thetabernaclechoir.org') != -1)) { t_profile = 'tabernaclechoir'; }

if (t_url.indexOf('.justserve.org') != -1) { t_profile = 'justserve'; }
if (t_url.indexOf('.ldscharities.org') != -1) { t_profile = 'ldscharities'; }
if (t_url.indexOf('.deseretindustries.org') != -1) { t_profile = 'deseretindustries'; }
if (t_url.indexOf('.overcomingpornography.org') != -1) { t_profile = 'overcomingpornography'; }


//list of black listed sites
if (t_url.indexOf('galt.lds.org')!=-1|| t_url.indexOf('pb.lds.org')!=-1|| t_url.indexOf('pb.ldschurch.org')!=-1||t_url.indexOf('bl.lds.org')!=-1|| t_url.indexOf('testproposal.lds.org')!=-1) 
{ t_blacklist = 'true'; }

//determine which verion of utag.js to load
var t_env = 'prod'

//load tealium utag.js file
if (t_url.indexOf('tracking=false') == -1 && t_cookie.indexOf('tracking=false') == -1 && t_blacklist != 'true') {
	a = '//tags.tiqcdn.com/utag/lds/' + t_profile + '/' + t_env + '/utag.js';
	b = document; c = 'script'; d = b.createElement(c); d.src = a; d.type = 'text/java' + c; d.async = true;
	a = b.getElementsByTagName(c)[0]; a.parentNode.insertBefore(d, a);
}


