var s_dynamicAccountSelection=true;
var s_account="viavh1com";
var s_dynamicAccountList="viavh1comdev=vh1-d,vh1-q,bigfishgames";
var s_linkInternalFilters="javascript:,vh1.com,bestweekever.tv";

// if a hier property has been explicitly set, use it - otherwise, use the pathToString() method.
function omni_cfg_getHierarchy() {
   var h;
   if (typeof omniCall.hier == 'undefined'){
      h = omniCall.pathToString('h')+'/'+omniCall.pageName;
   } else {
      h = omniCall.hier;
   }

   h = h.replace(new RegExp("#VID:","g"),"/VID/");

   try {
      h = h.replace(new RegExp("/+","g"),"/");
   } catch(e){}
   
   if(h.substring(0,1) == "/"){
      h = h.substring(1);
   }
   h = h.replace(/\/series\//g,'/');
   h = h.replace(/\/dyn\//g,'/');
   return h;
}

function omni_config_getPagename(){
   var pn;
   try {
      path = omniCall.pathToString('p');
      if(typeof path == "undefined"){
         path = "";
      }
      if(path == "undefined"){
         path = "";
      }
      pn = path + omniCall.pageName;
      pn = pn.replace(new RegExp("/+","g"),"/");
      pn = pn.replace(/\/series\//g,'/');
	  pn = pn.replace(/\/dyn\//g,'/');
   }catch(e){
   }
   return pn;
}

function omni_config_getShowName(){
	var hr, sh, sn;
	try{
		if(omniCall.portal == "shows"){
			hr = omni_cfg_getHierarchy();
			sh = hr.split("/");
			sn = sh[1];
		}
	return sn;
	}catch(e){
		mtvi_catchError(e);
	}
}

var s_pageName=omni_config_getPagename();
var s_server="";
var s_channel=omniCall.portal;
var s_pageType="";
var s_prop1=omniCall.artist_rollup?unescape(omniCall.artist_rollup):"";
var s_prop2=omniCall.album?unescape(omniCall.album):"";
var s_prop3=unescape(omniCall.getQueryVals());
var s_prop4=omni_config_getShowName();
var s_prop5=omniCall.if_nt_zyg?omniCall.if_nt_zyg:"";
var s_prop6=omniCall.if_nt_span?omniCall.if_nt_span:"";
var s_prop7=omniCall.if_nt_demo?omniCall.if_nt_demo:"";
var s_prop8=omniCall.if_nt_userName?omniCall.if_nt_userName:"";
var s_prop9=omniCall.boardName?unescape(omniCall.boardName):"";
var s_prop10=omniCall.dynCharts?unescape(omniCall.dynCharts):"";
var s_prop11=omniCall.vid?omniCall.vid:"";
var s_prop12=omniCall.if_nt_vidOrigin?omniCall.if_nt_vidOrigin:"";
var s_prop13="";/* video label */
var s_prop14=omniCall.flipUrl?omniCall.flipUrl:"";
var s_prop15=omniCall.joinProps(omniCall.flipUrl,omniCall.flipImgIndx);
var s_prop16=omniCall.partner?omniCall.partner:"";
var s_prop17=""; /* podcast subscribers */
var s_prop18=omniCall.story?unescape(omniCall.story):"";
var s_prop19=omniCall.storyDate?omniCall.storyDate:"";
//var s_prop19=""; /* podcast downloads roll up */
//var s_prop20=omniCall.story?omniCall.joinProps(unescape(omniCall.story),omniCall.storyDate):"";
// As of 02/21/06 bucket used for internal campaigns -rm
var s_prop20=omniCall.intCmp?omniCall.intCmp:"";
var s_prop21=omniCall.OD_rollUp?omniCall.OD_rollUp:"";
var s_prop22=omniCall.rollUp?omniCall.rollUp:"";
var s_prop23=""; /* podcast subscriber user-agents */
var s_prop24=omniCall.if_nt_bandwidth?omniCall.if_nt_bandwidth:"";
var s_prop25=omniCall.if_nt_Flash?omniCall.if_nt_Flash:"";
var s_prop26=omniCall.rssTraffic?omniCall.rssTraffic:"";
var s_prop27="";
var s_prop28="";
var s_prop29="";
var s_prop30=""; /* podcast downloads */
/* E-commerce Variables */
var s_campaign="";
var s_hier2=omni_cfg_getHierarchy(); 
var s_hier3="";
var s_hier4=omniCall.partnerSearch;
var s_hier5="";
var s_state="";
var s_zip="";
var s_events="";
var s_products="";
var s_purchaseID="";
var s_eVar1="";
var s_eVar2="";
var s_eVar3="";
var s_eVar4="";
var s_eVar5="";

/************************** CONFIG SECTION **************************
	You may add or alter any code config here.                       
	Specify the Report Suite ID(s) to track here
*/

/* E-commerce Config */
var s_currencyCode="USD";
var s_eVarCFG="";
/* Link Tracking Config */
var s_trackDownloadLinks=true;
var s_trackExternalLinks=true;
var s_trackInlineStats=true;
/* linkInternalFilter moved to individual omni_config.js files JRRIII 12/04*/
var s_linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls";
var s_linkLeaveQueryString=false;
var s_linkTrackVars="s_eVar2,s_events,s_prop8";
var s_linkTrackEvents="None";
/* Plugin Config */
var s_usePlugins=true;

function s_doPlugins() {
	/* Add calls to plugins here */
	/* External Campaigns */ 
	s_vp_getCGI('s_campaign','extcmp');
	/* Internal campaigns */
	s_vp_getCGI('s_eVar1','intcmp');
	/* Internal Search Terms */
	//s_vp_getCGI('s_eVar1','');
	s_vp_getCGI('s_eVar2','searchterm');
	s_vp_getCGI('s_eVar3','searchtype');
}

/************************** PLUGINS SECTION *************************/
/* You may insert any plugins you wish to use here.                 */
/*
 * Plugin: Get Plugin Modified Value
 */
function s_vp_getValue(vs)
	{var k=vs.substring(0,2)=='s_'?vs.substring(2):vs;return s_wd[
	's_vpm_'+k]?s_wd['s_vpv_'+k]:s_gg(k)}
/*
 * Plugin: Get Query String CGI Variable Value
 */
function s_vp_getCGI(vs,k)
	{var v='';if(k&&s_wd.location.search){var q=s_wd.location.search,
	qq=q.indexOf('?');q=qq<0?q:q.substring(qq+1);v=s_pt(q,'&',s_cgif,
	k)}s_vpr(vs,v)}function s_cgif(t,k){if(t){var te=t.indexOf('='),
	sk=te<0?t:t.substring(0,te),sv=te<0?'True':t.substring(te+1);if(
	sk==k)return s_epa(sv)}return ''}
/*
 * Plugin: Get Value From Cookie
 */
function s_vp_getCookie(vs,k)
	{s_vpr(vs,s_c_r(k))}
/*
 * Plugin Utilities v2.0 (Required For All Plugins)
 */
function s_vpr(vs,v){if(s_wd[vs])s_wd[vs]=s_wd[vs];else s_wd[vs]=''
if(vs.substring(0,2) == 's_')vs=vs.substring(2);s_wd['s_vpv_'+vs]=v
s_wd['s_vpm_'+vs]=1}function s_dt(tz,t){var d=new Date;if(t)d.setTime(
t);d=new Date(d.getTime()+(d.getTimezoneOffset()*60*1000))
return new Date(Math.floor(d.getTime()+(tz*60*60*1000)))}
function s_vh_gt(k,v){var vh='|'+s_c_r('s_vh_'+k),vi=vh.indexOf('|'+v
+'='),ti=vi<0?vi:vi+2+v.length,pi=vh.indexOf('|',ti),t=ti<0?'':
vh.substring(ti,pi<0?vh.length:pi);return t}function s_vh_gl(k){var
vh=s_c_r('s_vh_'+k),e=vh?vh.indexOf('='):0;return vh?(vh.substring(0,
e?e:vh.length)):''}function s_vh_s(k,v){if(k&&v){var e=new Date,st=
e.getTime(),y=e.getYear(),c='s_vh_'+k,vh='|'+s_c_r(c)+'|',t=s_vh_gt(k,
v);e.setYear((y<1900?y+1900:y)+5);if(t)vh=s_rep(vh,'|'+v+'='+t+'|','|'
);if(vh.substring(0,1)=='|')vh=vh.substring(1);if(vh.substring(
vh.length-1,vh.length)=='|')vh=vh.substring(0,vh.length-1);vh=v
+'=[PCC]'+(vh?'|'+vh:'');s_c_w(c,vh,e);if(s_vh_gt(k,v)!='[PCC]')
return 0;vh=s_rep(vh,'[PCC]',st);s_c_w(c,vh,e)}return 1}