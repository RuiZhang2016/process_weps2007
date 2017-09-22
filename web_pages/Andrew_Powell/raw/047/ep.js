///////////////////////////////
// Firefox search plugin
///////////////////////////////

function addEngine() {
  try {
    window.external.AddSearchProvider('http://econpapers.repec.org/EP_searchplug.xml');
    window.external.AddSearchProvider('http://econpapers.repec.org/EPauth_searchplug.xml');
    window.external.AddSearchProvider('http://econpapers.repec.org/EPtitle_searchplug.xml');
  }
  catch(e) {
    if ((typeof window.sidebar == "object") && (typeof
            window.sidebar.addSearchEngine == "function")) {
        // Mozilla or Netscape
        window.sidebar.addSearchEngine(
        "http://econpapers.repec.org/EP_searchplug.src",
        "http://econpapers.repec.org/EP_searchplug.png",
        "EconPapers",
        "Economics" );
    }
    else {
      alert("Netscape 6, Mozilla 1.5 or Internet Explorer 7 and higher is needed to install the EconPapers search plugin");
    }
  }
}

/////////////////////////////////
// Display of search results,
// reference lists and citations
/////////////////////////////////

// not used?

function show_cites(link) {
  EP_Cites = window.open(link, 'EP_Cites',
                         'toolbar=yes,location=yes,menubar=yes,status=yes,scrollbars=yes,resizable=yes,height=480,Width=640');
  EP_Cites.focus();
  return false;
}

// not used?

function show_refs(link) {
  EP_Refs = window.open(link, 'EP_Refs',
                         'toolbar=yes,location=yes,menubar=yes,status=yes,scrollbars=yes,resizable=yes,height=480,Width=640');
  EP_Refs.focus();
//document.write( '<IFRAME src="' + link + '" width="400" height="500" scrolling="auto" frameborder="1">No iframe</IFRAME>' );
  return false;
}

//

function CloseAbstractFrame() {
  var form = document.getElementById( 'hidelink' );
  var link = form.link.value;
//alert( link );
  document.location.href = link;
}

//

function ShowAbstract(handle,link) {

  if ( link != '' ) {
    SetCloseLink( link );
  }
  var frame = document.getElementById("absframe")
  if ( handle != '' ) {
    var arg = '/scripts/a/abstract.pl?h='+handle;
  } else {
    var arg = '/scripts/a/abstract.pl?f='+link;
  }
  frame.setAttribute( "src", arg );

  return false;

}

//

function SwitchList( num ) {

  var tab = document.getElementById( 'tab'+num );
  var n = num-1;
  var tabs = document.getElementById( 'tab'+n );
  var list;
  while ( tabs ) {
    if ( n != num ) {
      tabs.className = 'tab';
      list = document.getElementById( 'list'+n );
      list.className = 'list';
    }
    n--;
    var tabs = document.getElementById( 'tab'+n );
  }
  var n = num+1;
  var tabs = document.getElementById( 'tab'+n );
  while ( tabs ) {
    if ( n != num ) {
      tabs.className = 'tab';
      list = document.getElementById( 'list'+n );
      list.className = 'list';
    }
    n++;
    var tabs = document.getElementById( 'tab'+n );
  }
  tab.className = 'activetab';
  list = document.getElementById( 'list'+num );
  list.className = 'activelist';
  
  return false;
  
}

//

function SetCloseLink( link ) {
  var form = document.getElementById( 'hidelink' );
  var reg = /^([^;]+);.+$/;
//  alert( link );
  var nlink = link.replace( reg, "$1" );
//  alert( nlink );
  form.link.value = nlink;
}

//

function Obfuscate( b, a ) {
  
  document.write( '<a href="mailto:' + a + '&#64;' + b + '">' + a + '&#64;' + b + '</a>' );
  
}

///////////////////////////////
// Customize search form
///////////////////////////////

function setsearchfield(form) {
  var name = navigator.appName;
  var len = 0;
  if ( name.indexOf( 'Netscape' ) > -1 ) {
    var version = navigator.appVersion
    var reg = /^[\d\.]+/;
    if ( reg.test( version ) ) {
      var matches = reg.exec( version );
      if ( matches[0] >= 5.0 ) {
        len = 22;
        }
      }
    }
  else if ( name.indexOf( 'Microsoft' ) > -1 ) {
    len = 23;
    }
  else if ( name.indexOf( 'Opera' ) > -1 ) {
    len = 30;
    }
    len = 0;
  if ( len > 0 ) {
    document.search.ft.size = len;
    }
}

/////////////////////////////////////////
// Turn on and off display of additional
// contact info for authors
/////////////////////////////////////////

function showhide(cid) {

document.getElementById(cid).style.display=(document.getElementById(cid).style.display!="inline") ? "inline" : "none"

return false;

}

///////////////////////////////////
// specific to search form
///////////////////////////////////

function SavedSearch(searchnum) {
  document.forms.SavedSearches.ss.value = searchnum;
  document.forms.SavedSearches.submit();
}

function FixForPlang(form) {
  if ( form.pl.selectedIndex !== 0 ) {
    form.wp.checked = false;
    form.art.checked = false;
    form.bkchp.checked = false;
    form.soft.checked = true;
    form.auth.checked = false;
  }
}

//

function SetAuthorSearch(form) {
  if ( form.aus.value !== "" & form.pl.selectedIndex == 0 ) {
    form.auth.checked = true;
  }
}

//

function SetDateSort(form) {
  if ( form.ni.selectedIndex != 0 ) {
    form.sort[1].checked = true;
  }
}

////////////////////////////////////////
// Stuff for dealing with redirects from
// old location, telling people that we 
// moved
////////////////////////////////////////

function canCookie() {

  var test = getCookie( 'EPTest' );
  if ( test == null ) {
    setCookie( 'EPTest', 'test', null, '/' );
    test = getCookie( 'EPTest' );
  }
  if ( test == null ) {
    return false;
  } else {
    return true;
    //return false;
  }

}

//

function WriteRelocation() {

  var showReloc  = false;
  var showNetEc  = false;
  var NetEcFound = false;

  if ( canCookie() ) {
    var kaka = getCookie( 'EPredir' );
    if ( kaka == 'NetEc' ) {
      deleteCookie( 'EPredir', '/' );
      showNetEc = true;
    } else if ( kaka == 'NetEcFound' ) {
      deleteCookie( 'EPredir', '/' );
      showNetEc = true;
      NetEcFound = true;    
    } else {
      count = parseInt( kaka );
      if ( count < 10 ) {
        count++;
        setCookie( 'EPredir', count, null, '/' );
        showReloc = true
      }
    }
  } else {
    // kan vi kolla referrer och visa RelocInfo
    var re = /\/econpapers.repec.org\//i;
    if ( ! re.test( document.referrer ) ) {
      showReloc = true;
    }
  }
  
  if ( showNetEc ) {
    document.write( '<p><font color="red">The BibEc and WoPEc services of NetEc have been shut down and your request has been redirected to <a href="/">EconPapers</a>. ' +
                    'All current data from BibEc and WoPEc is available here at <a href="/">EconPapers</a> and at <a href="http://ideas.repec.org/">IDEAS</a>.</font></p>' );
    if ( NetEcFound ) document.write( '<p><font color="red">This page corresponds to the one you requested from BibEc or WoPEc.</font></p>' );
  } else if ( showReloc ) {
    document.write( "<p><font color='red'><b>EconPapers has moved to http://econpapers.repec.org! Please update your bookmarks.</b></font></p>" );
  }  

}

// Some borrowed code

/**
 * Read the JavaScript cookies tutorial at:
 *   http://www.netspade.com/articles/javascript/cookies.xml
 */

/**
 * Sets a Cookie with the given name and value.
 *
 * name       Name of the cookie
 * value      Value of the cookie
 * [expires]  Expiration date of the cookie (default: end of current session)
 * [path]     Path where the cookie is valid (default: path of calling document)
 * [domain]   Domain where the cookie is valid
 *              (default: domain of calling document)
 * [secure]   Boolean value indicating if the cookie transmission requires a
 *              secure transmission
 */
function setCookie(name, value, expires, path, domain, secure)
{
    document.cookie= name + "=" + escape(value) +
        ((expires) ? "; expires=" + expires.toGMTString() : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
}

/**
 * Gets the value of the specified cookie.
 *
 * name  Name of the desired cookie.
 *
 * Returns a string containing value of specified cookie,
 *   or null if cookie does not exist.
 */
function getCookie(name)
{
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1)
    {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
    }
    var end = document.cookie.indexOf(";", begin);
    if (end == -1)
    {
        end = dc.length;
    }
    return unescape(dc.substring(begin + prefix.length, end));
}

/**
 * Deletes the specified cookie.
 *
 * name      name of the cookie
 * [path]    path of the cookie (must be same as path used to create cookie)
 * [domain]  domain of the cookie (must be same as domain used to create cookie)
 */
function deleteCookie(name, path, domain)
{
    if (getCookie(name))
    {
        document.cookie = name + "=" + 
            ((path) ? "; path=" + path : "") +
            ((domain) ? "; domain=" + domain : "") +
            "; expires=Thu, 01-Jan-70 00:00:01 GMT";
    }
}
