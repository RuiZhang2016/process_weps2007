// vi:softtabstop=4:shiftwidth=4:

var adsenseTrackerActive = false;
var adsenseTrackerUnit = '';
var adsenseLogger = cvoid;

function showhide(layer_ref)
{
    var state = null;
    if (document.getElementById)
    {
        state = document.getElementById(layer_ref).style.display;
    }
    if (state != null && state == 'block')
    {
        state = 'none';
    } 
    else
    { 
        state = 'block'; 
    }
    if (document.getElementById)
    {
        hza = document.getElementById(layer_ref);
        hza.style.display = state;
    }
    else if (document.all)
    {
        //IS IE 
        eval( "document.all." + layer_ref + ".style.display = state"); 
    } 
    else if (document.layers)
    {
        //IS NETSCAPE 4 or below
        document.layers[layer_ref].display = state;
    }
}

// prefixes and suffixes language filter array
var lngFilter = Array(
 'go to','View ads about','gehe zu','Afficher la page',
 'Afficher des annonces sur','Anzeigen über', 'gaan na',
 '|ma Ja','war-du','vs a','Jdi na',
 'Zobrazit reklamy na téma','ewch i','g til',
 'Se annoncer om','iru al','ir a','Ver anuncios sobre',
 'liigu edasi aadressile','bisitatu','mene osoitteeseen',
 'Tarkastele mainoksia aiheesta','far til','gean nei',
 'tigh chuig','rach gu','Jeho ko\'pe:','idemo na','Ugrs:',
 'vade a','fara','visita','Visualizza annunci su',
 'Ayo menyang','ire ad','kumbama na','eiti','Dodieties uz',
 '|- ilekku povuka','pergi ke','mur sa','ga naar',
 'Bekijk advertenties over','g til','Se annonser om',
 'anar a','|ku jAntu','przejd do','Pokarz reklamy o',
 'ir para','Ver anúncios sobre','riy|man','va a','du-te la',
 'posjeti','|yanna','prejdi na','Zobraziť reklamy s témou',
 'pojdi na','endai ku','Aad','shko n','e ya ho','lebet ka',
 'g till','Se annonser om','nenda','|a git','pumunta sa','\'alu ki he',
 '|adresine git','Şu konuyla ilgili reklamları görüntüle:','ko','|ga boring','yiya kwi','lo si','iya ku','A(z)|témával kapcsolatos hirdetések megtekintése',
 '|&#2965;&#3021;&#2965;&#3009;&#2970;&#3021; &#2970;&#3014;&#2994;&#3021;&#2994;&#2997;&#3009;&#2990;&#3021;',
 '|&#3093;&#3135; &#3125;&#3142;&#3123;&#3149;&#3123;&#3074;&#3105;&#3135;','&#6033;&#6085;&#6016;&#6070;&#6035;&#6091;',
 '|&#1576;&#1585;&#1734; &#1576;&#1734;','v&#224;o trang',
 '|ünvanına keç','küçü:','Andate versu à',
 'ба|рафтан',
 'Просмотреть рекламу по теме',
 '|адресіне бару',
 'Εμφάνιση διαφημίσεων σχετικά με',
 '|에 대한 광고 보기',
 'गच्छ|प्रति',
 'მოინახულე',
 'դեպի','ໄປຫາ',
 '|の広告検索',
 '|मा जानुहोस्',
 '|ला जा'
);

// filter phrase with lngFilter
function filterPhrase(phrase)
{
    var suprefixes, filterhit;

    phrase = phrase.replace(/^\s+|\s+$/g, '');
    if (phrase != '')
    {
	for(var i=0; i<lngFilter.length; i++)
	{
	    suprefixes = lngFilter[i].split('|');
	    // check prefix
	    if (suprefixes[0].length > 0
		&& phrase.substring(0, suprefixes[0].length) == suprefixes[0])
	    {
		phrase = phrase.substring(suprefixes[0].length);
		filterhit = true;
	    }
	    // check suffix
	    if (suprefixes.length > 1 && suprefixes[1].length > 0
		&& phrase.substring(phrase.length - suprefixes[1].length)
		 == suprefixes[1])
	    {
		phrase = phrase.substring(0,
					  phrase.length - suprefixes[1].length);
		filterhit = true;
	    }
	    if (filterhit)
	    {
		phrase = phrase.replace(/^\s+|\s+$/g, '');
		break;
	    }
	}
    }
    return phrase;
}

// init tracker
function adsenseTrackerInit()
{
    var pageHasAdsense = false;
    var el = document.getElementsByTagName("iframe");

    for (var i=0; i<el.length; i++)
    {
	if (el[i].src.indexOf('googlesyndication.com') > -1)
	{
	    pageHasAdsense = true;
	    el[i].onmouseover = adsenseTrackerActivate;
	    el[i].onmouseout = adsenseTrackerDeActivate;
	}
    }
    if (pageHasAdsense)
    {
	if (typeof window.attachEvent != 'undefined')
	{
	    // this works for IE
	    window.attachEvent('onbeforeunload', adsenseTrackerCheckClick);
	}
	else if (typeof window.addEventListener != 'undefined')
	{
	    // this works for firefox
	    window.addEventListener('beforeunload',
				    adsenseTrackerCheckClick,
				    false);
	}
    }
}

function busyWait(msec) {
    var now = new Date();
    var later = now.getTime() + msec;
    while ((new Date()).getTime() < later) { }
}

// check if it's our click
function adsenseTrackerCheckClick()
{
    var active = adsenseTrackerActive;
    var unit = adsenseTrackerUnit;
    var logger = adsenseLogger;
    var adtext;

    if (active)
    {
	// check for ad Url/AdLinks text (is disabled in Firefox by default)
	adsenseLogger();
	return;

	if (window.status)
	{
	    adtext = filterPhrase(window.status);
	}
	if (unit != '')
	{
	    if (adtext) {
		logger(adtext);
	    }
	    else
	    {
		logger("-");
	    }
	    eval(cmd);
	}
    }
}

// when moving mouse to adsense frame, activate click tracking for current ad unit...
function adsenseTrackerActivate()
{
    if (this.parentNode && this.parentNode.id.substring(0,4) == 'asc_')
    {
	adsenseTrackerUnit = this.parentNode.id.substring(4);
	adsenseTrackerActive = true;
	adsenseLogger = eval("loggers_" + adsenseTrackerUnit);
    }
}

// when moving mouse out of adsense frame, deactivate click tracking...
function adsenseTrackerDeActivate()
{
    adsenseTrackerUnit = '';
    adsenseLogger = cvoid;
    adsenseTrackerActive = false;
}

function cvoid() { return; }

function ctrack(r, args)
{
    var t = new Image(1,1);
    t.src = "http://track.topix.net/click/a-" + r + ".gif" + args;
    t.onload = function() { cvoid(); }
    if (typeof window.addEventListener != 'undefined') {
	// moz, saf1.2, ow5b6.1
	for (var i = 0; i < 40; i++) {
	    if (t.complete) {
		return;
	    }
	    busyWait(10);
	}
    }
}

// report click to google Analytics
function reportToGoogleAnalytics(reportedUrl)
{
    if (typeof urchinTracker == 'function')
    {
	urchinTracker(reportedUrl);
    }
}

function attachOnLoadEvent(func)
{
    if (typeof window.addEventListener != 'undefined')
    {
	// moz, saf1.2, ow5b6.1
	window.addEventListener('load', func, false);
    }
    else if (typeof document.addEventListener != 'undefined')
    {
	// MSN/OSX, op7.50, saf1.2, ow5b6.1
	document.addEventListener('load', func, false);
    }
    else if (typeof window.attachEvent != 'undefined')
    {
	// ie5.0w, ie5.5w, ie6w
	window.attachEvent('onload', func);
    }
    else
    {
	// all other browsers
	if (typeof window.onload == 'function')
	{
	    var oldonload = onload;
	    window.onload = function()
	    {
		oldonload();
		func();
	    };
	}
	else
	{
	    window.onload = func;
	}
    }
}

function trackclick(url, src, title, type)
{
    var r = Math.floor(Math.random()*1000000000);
    var img = "http://track.topix.net/artclick/c-" + r + 
		"?src=" + escape(src) + "&title=" + escape(title) +
		"&url=" + escape(url) + "&type=" + type;
    (new Image()).src = img;
    return true;
}
