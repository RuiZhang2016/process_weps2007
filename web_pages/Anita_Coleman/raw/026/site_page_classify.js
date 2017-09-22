//****************************************************************************/
//   CONFIDENTIAL AND PROPRIETARY PROPERTY OF MyFamily.COM                   */
// THIS PROGRAM IS AN UNPUBLISHED WORK FULLY PROTECTED BY THE UNITED STATES  */
// COPYRIGHT LAWS AND IS CONSIDERED A TRADE SECRET BELONGING TO THE COPY-    */
// RIGHT HOLDER.                                                             */
//****************************************************************************/

// interesting site path strings
var users = "users/";
var help  = "help/";
var ifa = "ifa/";
var vg = "VG/";
var famfolks = "famousfolks";
var censussub = "uscensussub";
var membership = "membership";
var ftostore = "ftostore";
var store = "store";
var genstore = "storemain";
var myMain = "my_main";
var allsearch = "allsearch";
var ifftop = "ifftop";
var ifamain = "ifa_main";
var indusers = "index.html";  // this is sub-category under users/

// variables parsed from URL
var fullURL = "";
var protocol= "";
var thishost= "";
var path    = "";
var query   = "";

// variables for omniture (if prevously set, this decl has no effect)
// add them as you need them
var s_pageType;
var s_pageName;
var s_server;

// other constants
var skipCgiBin = 8;  // skips the string "cgi-bin/"
var skipGenealogy = 10; // skips the string "genealogy/"

function parseURL(){
	var urlRE = /(\w+):\/\/([\w.\-:]+)\/([^\s?]*)\??(\S*)/;
	
	var result  = document.URL.match(urlRE);
	if( result != null ) {
		fullURL = result[0];
		protocol= result[1];
		thishost= result[2];
		path    = result[3];
		query   = result[4];
	} else fullURL = null;
}

function shortenHost( myHost ){
	var sHost = myHost;
	var ftmRE = /familytreemaker/i;
	var gbsRE = /bookstore/i;
	var bfhRE = /boston/i;
	var gcomRE = /genealogy/i;
	var flhRE = /flh/i;
	if( myHost.match( ftmRE ) ){
		sHost = "ftm";
	} else if( myHost.match( gbsRE ) ){
		sHost = "gbs";
	} else if( myHost.match( bfhRE ) ){
		sHost = "bfh";
	} else if( myHost.match( gcomRE ) ){
		sHost = "gcom";
	} else if( myHost.match( flhRE ) ){
		sHost = "flh";
	}
	return sHost;
}

function setPageName( pn ){
	if( path.substr(0, users.length) == users ){
		if( path.substr( users.length, users.length+indusers.length) == indusers ){
			pn += ":" + users.slice(0,-1)  + ":" + indusers;
		} else {
			pn += ":" + users.slice(0,-1);
		}
	} else if( path.substr(0, help.length) == help ){
		pn += ":" + help.slice(0,-1);
	} else if( path.substr(0, ifa.length) == ifa ){
		pn += ":" + ifa.slice(0,-1);
	} else if( path.substr(skipGenealogy, vg.length) == vg ){
		pn += ":" + vg.slice(0,-1);
	} else if( path.substr(0, famfolks.length) == famfolks ){
		pn += ":" + famfolks;
	} else if( path.substr(0, censussub.length) == censussub ){
		pn += ":" + censussub;
	} else if( path.substr(0, membership.length) == membership ){
		pn += ":" + membership;
	} else if( path.substr(skipCgiBin, ftostore.length) == ftostore ){
		pn += ":" + store; // intended to be the same as below 
	} else if( path.substr(skipCgiBin, store.length) == store ){
		pn += ":" + store;
	} else if( path.substr(skipCgiBin, myMain.length) == myMain ){
		pn += ":" + myMain;
	} else if( path.substr(0, allsearch.length) == allsearch ){
		pn += ":" + allsearch;
	} else if( path.substr(0, ifftop.length) == ifftop ){
		pn += ":" + ifftop;
	} else if( path.substr(skipCgiBin, ifamain.length) == ifamain ){
		pn += ":" + ifamain;
	} else if( path != "" ){
		pn += ":" + path;
	}
	return pn;
}

function mapSite(){
	var pn = shortenHost( thishost );
	if( path != null ) pn = setPageName( pn );
	s_pageName = pn;
	s_server = thishost;
}

// *** entry point ***
var type = typeof s_pageType;
var spname = typeof s_pageName;
if( type == "undefined" && spname == "undefined" ){
	parseURL();
	mapSite();
}

