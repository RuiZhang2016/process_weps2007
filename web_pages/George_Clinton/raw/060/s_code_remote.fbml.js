/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
var s_un // site catalyst account name
var s_ios = 0 // whether or not the image was inserted into doc
var s_q = '' // the query string of the image
var s_code = ''
var code = ''
var s_bcr = 1 // whether or not the body onclick event handler was attached
var s_lnk = '' // current link object (when clicked)
var s_eo = '' // event object
var s_vb
var s_pl // plugins object (Array)
var s_tfs = 0 // frameset (?)
var s_etfs = 0 // embedded frameset (?)
var s_wd = window // window
var s_d = s_wd.document // window.document
var s_ssl = (s_wd.location.protocol.toLowerCase().indexOf('https') >= 0) // using SSL?

// browser checking vars
var s_n=navigator
var s_u=s_n.userAgent
var s_apn=s_n.appName
var s_v = s_n.appVersion
var s_apv
var s_i
var s_ie = s_v.indexOf('MSIE ')
var s_ns6 = s_u.indexOf('Netscape6/')
if (s_v.indexOf('Opera') >= 0 || s_u.indexOf('Opera') >= 0) s_apn = 'Opera';
var s_isie=(s_apn=='Microsoft Internet Explorer')
var s_isns=(s_apn=='Netscape')
var s_isopera=(s_apn=='Opera')
var s_ismac=(s_u.indexOf('Mac')>=0)
// get specific version of user agent by getting substring of ua string and then parsing it
if (s_ie > 0) {
	s_apv = parseInt(s_i = s_v.substring(s_ie + 5));
	if (s_apv > 3) s_apv = parseFloat(s_i)
} else if (s_ns6 > 0) {
	s_apv = parseFloat(s_u.substring(s_ns6 + 10));
} else s_apv = parseFloat(s_v);


// gets a substring on a variable s of l length (e.g. truncate the string to l chars)
// name = fixed length (?)
function s_fl(s, l) { return (s + '').substring(0, l) }

// name = click object (?)
// copy and return properties of clicked object
function s_co(o) {
	if (!o) return o;
	var n = new Object // new object
	var x; // current prop
	for (x in o) {
		// copy all the properties over the new object
		if (x.indexOf("select") < 0 && x.indexOf("filter") < 0) n[x] = o[x]
	}
	return n
}

// check if it is a number; return true or false
function s_num(x) {
	var s = x.toString()
	var g = '0123456789'
	var p, d;
	for (p = 0; p < s.length; p++) {
		d = s.substring(p, p + 1);
		if (g.indexOf(d) < 0) return 0
	}
	return 1
}

function s_rep(s,o,n){
	var i=s.indexOf(o)
	var l=n.length>0?n.length:1;
	while(s&&i>=0){
		s=s.substring(0,i)+n+s.substring(i+o.length);
		i=s.indexOf(o,i+l)
	}
	return s
}

// name = escape string (?)
function s_ape(s) {
	return s ? s_rep(escape('' + s), '+', '%2B') : s
}

// name = ??? 
// unescape string
function s_epa(s){
	return s ? unescape(s_rep('' + s, '+', ' ')) : s
}

// string parser?
// s = string
// d = delimiter
// f = function
// a = second parameter to the function
function s_pt(s, d, f, a) {
	var t = s
	var x = 0 // index into string
	var y, r; // r=result?

	// while there is a string to parse
	while (t) {
		y = t.indexOf(d); // find delimiter
		y = (y < 0) ? t.length : y; // working for right to left
		t = t.substring(0, y);
		r = f(t, a); // call the function passed with (substring, second param)
		if (r) return r;
		x += y + d.length;
		t = s.substring(x, s.length);
		t = (x < s.length) ? t : ''
	}
	return ''
}

function s_isf(t,a){
	if(t.substring(0,2)=='s_')t=t.substring(2);
	return (t!=''&&t==a)
}

function s_fsf(t,a){
	if(s_pt(a,',',s_isf,t))s_fsg+=(s_fsg!=''?',':'')+t;
	return 0
}
	
var s_fsg;

function s_fs(s,f){
	s_fsg='';
	s_pt(s,',',s_fsf,f);
	return s_fsg
}

var s_c_d='' // cookie domain

function s_c_gdf(t,a){
	if(!s_num(t))return 1;
	return 0
}

// name = cookie get domain(?)
function s_c_gd(){
	var d=s_wd.location.hostname
	var n=s_gg('cookieDomainPeriods')
	var p;
	if(d&&!s_c_d){
		n=n?parseInt(n):2;
		n=n>2?n:2;p=d.lastIndexOf('.');
		while(p>=0&&n>1){
			p=d.lastIndexOf('.',p-1);
			n--
		}
		s_c_d=p>0&&s_pt(d,'.',s_c_gdf,0)?d.substring(p):''
	}
	return s_c_d
}

// name = cookie read(?)
function s_c_r(k){
	k = s_ape(k);
	var c = ' ' + s_d.cookie
	var s = c.indexOf(' '+k+'=')
	var e = s < 0 ? s : c.indexOf(';', s)
	var v = s < 0 ? '' : s_epa(c.substring(s + 2 + k.length, e < 0 ? c.length : e));
	return v != '[[B]]' ? v : ''
}

// name = cookie write(?)
// k=key, v=value, e=expires
function s_c_w(k, v, e) {
	var d = s_c_gd() // domain
	var l = s_gg('cookieLifetime') // lifetime
	var s;
	v = '' + v; // cast value to string
	l = l ? ('' + l).toUpperCase() : '';

	if (e && l != 'SESSION' && l != 'NONE') { // if there is a long lifetime
		s = (v != '' ? parseInt(l ? l : 0) : -60);
		if (s) {
			e = new Date;
			e.setTime(e.getTime() + (s * 1000))
		}
	}

	if (k && l != 'NONE') { // set cookie to value
	// JB
		s_d.cookie = k + '=' + s_ape(v != '' ? v : '[[B]]') + '; ' + 'path=/;' + (e && l != 'SESSION' ? ' expires=' + e.toGMTString() + ';' : '') + (d ? ' domain=' + d + ';' : '');
		return s_c_r(k) == v // make sure the cookie is set
	}

	return 0
}

function s_cet(f, a, et, oe, fb) {
	var r; // return value
	var d = 0;
	/*
	@cc_on
	@if(@_jscript_version>=5){
		try{
			return f(a)
		} catch(e) {
			return et(e)
		}
		d=1
	}
	@end
	@*/
	if (!d) {
		if (s_ismac && s_u.indexOf('MSIE 4') >= 0) {
			return fb(a);
		} else {
			s_wd.s_oe = s_wd.onerror;
			s_wd.onerror = oe;
			r = f(a);
			s_wd.onerror = s_wd.s_oe;
			return r;
		}
	}
}

function s_gtfset(e){ return s_tfs }

function s_gtfsoe(e){
	s_wd.onerror = s_wd.s_oe;
	s_etfs = 1;
	var code = s_gs(s_un);
	if (code) s_d.write(code);
	s_etfs = 0;
	return true
}

function s_gtfsfb(a) { return s_wd }

// break out to the current frame
function s_gtfsf(w) {
	var p = w.parent
	var l = w.location;
	s_tfs = w;
	if (p && p.location != l && p.location.host == l.host) {
		s_tfs = p;
		return s_gtfsf(s_tfs)
	}
	return s_tfs
}

// name = get top frameset(?)
function s_gtfs() {
	if (!s_tfs) { // if there's no frameset
		s_tfs = s_wd; // set the framset to the window object
		if (!s_etfs) { // if there's no etfs
			// s_gtfsf = get top frameset frame
			// s_tfs = top frameset (current frame)
			// s_gtfset = get top trameset error t?
			// s_gtfsoe = get top frameset on error
			// s_gtfsfb = get top frameset fall back
			s_tfs = s_cet(s_gtfsf, s_tfs, s_gtfset, s_gtfsoe, s_gtfsfb);
		}
	}
	return s_tfs
}


// insert image into document
// name = create anchor (?)
function s_ca(un) {
	un = un.toLowerCase();
	var ci = un.indexOf(',')
	var fun = (ci < 0) ? un : un.substring(0,ci)
	var imn = 's_i_' + fun;
	// if browser is capable of inserting an image (not opera and not netscape 6.0)
	if (s_d.images && (s_apv >= 3) && !s_isopera && ((s_ns6 < 0) || (s_apv >= 6.1)) ) {
		s_ios = 1;
		// if site catalyst image is not in document already and (not netscape || (old browser or new browser))
		if ( !s_d.images[imn] && (!s_isns || (s_apv < 4 || s_apv >= 5) ) ) {
			// added code by JB
			if (s_d.createElement && s_d.getElementById) {
				var tracking_div = null;
				if ( !(tracking_div = s_d.getElementById("trackingDiv")) ) {
					tracking_div = s_d.createElement('div');
					tracking_div.id = "trackingDiv";
					tracking_div = s_d.body.appendChild(tracking_div);
				}
				tracking_div.innerHTML = '<img name="' + imn + '" id="' + imn + '" height="1" width="1" border="0" alt="">';
			} else {
				s_d.write('<img name="' + imn + '" height=1 width=1 border=0 alt="">');
			}
			if (!s_d.images[imn]) s_ios = 0 // if it's still not in there, set var
		}
	}
}

function s_it(un){
	s_ca(un)
}

// name = make request (?)
// un = 
// sess = session
// q = query string
// ta = target
function s_mr(un, sess, q, ta) {
	un = un.toLowerCase();
	var ci = un.indexOf(',')
	var fun = (ci < 0) ? un : un.substring(0, ci)
	var unc = s_rep(fun, '_', '-')
	var imn = 's_i_' + fun // image name
	var im // image object
	var b // begin time
	var e // end time

	// create request string
	var rs = 'http' + (s_ssl ? 's' : '') + '://' + (s_ssl ? '102' : unc) + '.112.2O7.net/b/ss/' + un + '/1/G.7-PD-R/' + sess + '?[AQB]&ndh=1' + (q ? q : '') + (s_q ? s_q : '') + '&[AQE]';

	if (s_ios) {
		im = (s_wd[imn]) ? s_wd[imn] : s_d.images[imn]; // get image
		if (!im) im = s_wd[imn] = new Image; // if no image, make a new image
		im.src = rs; // assign the image src to the request string
/* stall the browser long enough to fire off a link call */
		if ( rs.indexOf('&pe=') >= 0 && (!ta || ta == '_self' || ta == '_top' || (s_wd.name && ta == s_wd.name)) ) {
			b = e = new Date;
			while (e.getTime() - b.getTime() < 500) { // wait 500 msec
				e = new Date
			}
		}
/* end stall browser */
		return ''
	}

	return '<img src="' + rs + '" width="1" height="1" border="0" alt="" />'
}

// returns variable with prefix s_xxxxx from window object if it exists, otherwise, returns window[xxxxxx]
// name = get global?
function s_gg(v) {
	var g = 's_' + v
	return (s_wd[g] || s_wd.s_disableLegacyVars) ? s_wd[g] : s_wd[v]
}

var s_qav='' // all the variables in a query string

function s_havf(t, a) {
	var b = t.substring(0,4)
	var s = t.substring(4)
	var n = parseInt(s)
	var k = 's_g_' + t
	var m = 's_vpm_' + t
	var q = t // current substring
	var v = s_gg('linkTrackVars')
	var e = s_gg('linkTrackEvents');

	if (!s_wd['s_' + t]) s_wd['s_' + t] = '';
	s_wd[k] = s_wd[m] ? s_wd['s_vpv_' + t] : s_gg(t);

	if (s_lnk || s_eo) {
		v = v ? v + ',pageName,pageURL,referrer,charSet,cookieDomainPeriods,cookieLifetime,currencyCode,purchaseID' : '';
		if (v && !s_pt(v, ',' ,s_isf, t)) s_wd[k] = '';
		if (t == 'events' && e) s_wd[k] = s_fs(s_wd[k], e)
	}

	s_wd[m] = 0;
	if (t == 'pageURL') q = 'g';
	else if (t == 'referrer') q = 'r';
	else if (t == 'charSet') q = 'ce';
	else if (t == 'cookieDomainPeriods') q = 'cdp';
	else if (t == 'cookieLifetime') q = 'cl'
	else if (t == 'currencyCode') q = 'cc';
	else if (t == 'channel') q = 'ch';
	else if (t == 'campaign') q = 'v0';
	else if (s_num(s)) {
		if (b == 'prop') q = 'c' + n;
		else if (b == 'eVar') q = 'v' + n;
		else if (b == 'hier') q = 'h' + n
	}
	if (s_wd[k] && t != 'linkName' && t != 'linkType') s_qav += '&' + q + '=' + s_ape(s_wd[k]);
	return ''
}

// name = has all vars (?)
function s_hav(){
	var n
	// av = all vars
	var av = 'charSet,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,channel,server,pageType,campaign,state,zip,events,products,currencyCode,purchaseID,linkName,linkType';
	for (n = 1; n < 51; n++) av += ',prop' + n + ',eVar' + n + ',hier' + n; // 50 props, eVars, and heirs
	s_qav = ''; // query all vars
	s_pt(av, ',' ,s_havf, 0); // parse those suckers
	return s_qav // return even more query parameters
}

function s_lnf(t,h){
	t=t?t.toLowerCase():'';
	h=h?h.toLowerCase():'';
	var te=t.indexOf('=');
	if(t&&te>0&&h.indexOf(t.substring(te+1))>=0)
	return t.substring(0,te);
	return ''
}

// name = link name (?)
function s_ln(h){
	if (s_gg('linkNames'))
	return s_pt(s_gg('linkNames'), ',', s_lnf, h);
	return ''
}

// name = link type download file
function s_ltdf(t, h) {
	t = (t) ? t.toLowerCase() : '';
	h = (h) ? h.toLowerCase() : '';
	var qi = h.indexOf('?');
	h = (qi >= 0) ? h.substring(0,qi) : h;
	if (t && h.substring(h.length - (t.length + 1) ) == '.' + t) return 1;
	return 0
}

// name = link type external filter
function s_ltef(t, h) {
	t = (t) ? t.toLowerCase() : '';
	h = (h) ? h.toLowerCase() : '';
	if (t && h.indexOf(t) >= 0) return 1;
	return 0
}

// name = link type
function s_lt(h) {
	var lft = s_gg('linkDownloadFileTypes')
	var lef = s_gg('linkExternalFilters')
	var lif = s_gg('linkInternalFilters') ? s_gg('linkInternalFilters') : s_wd.location.hostname;
	h = h.toLowerCase();

	if (s_gg('trackDownloadLinks') && lft && s_pt(lft, ',', s_ltdf, h)) return 'd';
	if ( s_gg('trackExternalLinks') 
		&& (lef || lif)
		&& ( !lef || s_pt(lef, ',', s_ltef, h) )
		&& ( !lif || !s_pt(lif, ',', s_ltef, h) )
		) {
		return 'e';
	}
	return ''
}

// name = link click (?)
// called when the link is clicked
function s_lc(e) {
	s_lnk = s_co(this) // get the link object
	s_gs(''); // generate string
	s_lnk = '';
	if (this.s_oc) return this.s_oc(e); // call the original onclick event handler
	return true
}

// name = link setup
function s_ls() {
	var l
	var ln
	var oc;

	// for all thelinks in the document
	for (ln = 0; ln < s_d.links.length; ln++){
		l = s_d.links[ln];
		oc = l.onclick ? l.onclick.toString() : '';
		// assign site catalyst onclick handler to the object instead and retain the orig
		if (oc.indexOf("s_gs(") < 0 && oc.indexOf("s_lc(") < 0 ) {
			l.s_oc = l.onclick;
			l.onclick = s_lc
		}
	}
}

// body click
function s_bc(e) {
	s_eo = e.srcElement ? e.srcElement : e.target;
	s_gs('')
	s_eo=''
}

// name = object type
// returns node type / tag name
function s_ot(o) {
	var a = o.type
	var b = o.tagName;
	return (a && a.toUpperCase ? a : b && b.toUpperCase ? b : o.href ? 'A' : '').toUpperCase()
}


// name = object ID
function s_oid(o) {
	var t = s_ot(o) // type
	var p = o.protocol // protocol
	var c = o.onclick // onclick function
	var n = '' // link target
	var x = 0; // 'type' of link

	if (!o.s_oid) {
		// if item is link or area, with no onclick, no protocol or no javascript protocol
		if (o.href && (t == 'A' || t == 'AREA') && (!c || !p || p.toLowerCase().indexOf('javascript') < 0) ) {
			n = o.href;
		// if it has on onclick function attached
		} else if(c) {
			n = s_rep(s_rep(s_rep(s_rep(c.toString(),"\r",''),"\n",''),"\t",''),' ',''); // get onclick function and strip out all whitespace
			x = 2
		// else, is it an input?
		} else if (o.value && (t == 'INPUT' || t == 'SUBMIT') ) {
			n = o.value; // take the value of the button
			x = 3
		// else just a plain old image
		} else if (o.src && t == 'IMAGE') {
			n = o.src; // take the value of the IMG source
		}

		if (n) {
			o.s_oid = s_fl(n, 100); // set the .s_oid prop to a truncated version of the n var
			o.s_oidt = x // set to the mode
		}
	}
	return o.s_oid
}

function s_rqf(t,un){
	var e = t.indexOf('=')
	var u = (e >= 0) ? ',' + t.substring(0,e) + ',' : '';
	return (u && u.indexOf(',' + un + ',') >= 0) ? s_epa(t.substring(e + 1)) : ''
}

function s_rq(un){
	var c = un.indexOf(',')
	var v = s_c_r('s_sq') // read the sq cookie
	var q = '';
	if (c < 0) {
		return s_pt(v, '&', s_rqf, un);
	}
	return s_pt(un, ',', s_rq, 0)
}
	
var s_sqq, s_squ

function s_sqp(t,a) {
	var e = t.indexOf('=')
	var q = (e < 0) ? '' : s_epa(t.substring(e + 1));
	s_sqq[q] = '';
	if (e >= 0) s_pt(t.substring(0, e), ',' ,s_sqs, q);
	return 0
}

function s_sqs(un,q){
	s_squ[un] = q;
	return 0
}

function s_sq(un, q) {
	s_sqq = new Object;
	s_squ = new Object;
	s_sqq[q] = '';

	var k = 's_sq' // key
	var v = s_c_r(k) // read the value of the s_sq cookie key
	var x
	var c = 0;

	s_pt(v, '&', s_sqp, 0);
	s_pt(un, ',', s_sqs, q);

	v = '';

	for (x in s_squ) {
		s_sqq[s_squ[x]] += (s_sqq[s_squ[x]] ? ',' : '') + x;
	}

	for (x in s_sqq) {
		if (x && s_sqq[x] && (x == q || c < 2)) {
			v += (v ? '&' : '') + s_sqq[x] + '=' + s_ape(x);
			c++
		}
	}

	// write the cookie
	return s_c_w(k, v, 0)
}

function s_wdl(e){
	s_wd.s_wd_l=1;
	var r=true;
	if(s_wd.s_ol)r=s_wd.s_ol(e);
	if(s_wd.s_ls)s_wd.s_ls();
	return r
}

// name = window setup(?)
// un = univ name
// unl = univ name list
function s_wds(un){
	un = un.toLowerCase();
	s_wd.s_wd_l = 1;

	if ( (s_apv > 3) && (!s_isie || !s_ismac || (s_apv >= 5)) ) {
		s_wd.s_wd_l = 0;

		if (!s_wd.s_unl) {
			s_wd.s_unl = new Array;
		}
		s_wd.s_unl[s_wd.s_unl.length] = un;

		// attach events for IE
		if (s_d.body && s_d.body.attachEvent){
			if (!s_wd.s_bcr && s_d.body.attachEvent('onclick', s_bc)) {
				s_wd.s_bcr = 1
			}

		// attach events for mozilla, etc.
		} else if (s_d.body && s_d.body.addEventListener) {
			if (!s_wd.s_bcr && s_d.body.addEventListener('click', s_bc, false)) {
				s_wd.s_bcr = 1
			}

		// check the onload handler
		} else {
			var ol = s_wd.onload ? s_wd.onload.toString() : '';
			// if the site catalyst stuff isn't already being loaded onload
			if (ol.indexOf("s_wdl(") < 0) {
				s_wd.s_ol = s_wd.onload; // hold the old onload in s_ol
				s_wd.onload = s_wdl // assign a new onload
			}
		}
	}
} // END: s_wds()


// parse plugins
function s_iepf(i, a) {
	if (i.substring(0, 1) != '{') i = '{' + i + '}';
	if (s_d.body.isComponentInstalled(i, 'ComponentID')) {
		var n = s_pl.length;
		s_pl[n] = new Object;
		s_pl[n].name = i + ':' + s_d.body.getComponentVersion(i,'ComponentID')
	}
	return 0
}


// name = visitor sampling
function s_vs(un, x) {
	var s=s_gg('visitorSampling')
	var g=s_gg('visitorSamplingGroup')
	var k='s_vsn_'+un+(g?'_'+g:'')
	var n=s_c_r(k)
	var e=new Date
	var y=e.getYear();
	e.setYear(y+10+(y<1900?1900:0));
	if(s){
		s*=100;
		if(!n){
			if(!s_c_w(k,x,e))return 0;
			n=x
		}
		if(n%10000>s)return 0
	}
	return 1
}

function s_dyasmf(t, m) {
	if (t && m && (m.indexOf(t) >= 0) ) return 1;
	return 0
}

function s_dyasf(t, m) {
	var i = t ? t.indexOf('=') : -1;
	var un;
	var s;
	if(i >=0 && m) {
		var un = t.substring(0, i);
		var s = t.substring(i + 1);
		if (s_pt(s, ',', s_dyasmf, m)) return un;
	}
	return 0
} // END: s_dyasf()


// name = dynamic account selection
// un = account name
// l = list
// m = match?
function s_dyas(un, l, m) {
	if (!m) m = s_wd.location.host; // get the host (m = machine?)
	if (!m.toLowerCase) m = m.toString();
	l = l.toLowerCase();
	m = m.toLowerCase();
	var nun = s_pt(l, ';', s_dyasf, m);
	if (nun) return nun;
	return un
} // END: s_dyas()


// generate string (?)
function s_gs(un) {
	un = un.toLowerCase();
	var dyas = s_gg('dynamicAccountSelection')
	var dyal = s_gg('dynamicAccountList')
	var dyam = s_gg('dynamicAccountMatch');
	if (dyas && dyal) un = s_dyas(un, dyal, dyam);
	s_un = un;

	var trk = 1
	var tm = new Date
	var sed = Math && Math.random ? Math.floor(Math.random() * 10000000000000) : tm.getTime()
	var sess = 's' + Math.floor(tm.getTime() / 10800000) % 10 + sed
	var yr = tm.getYear()
	var tfs = s_gtfs() // get top frameset
	var t // time/date string
	var ta = ''
	var q = '' // the query string?
	var qs = ''; // the query string?
	yr = yr < 1900 ? yr + 1900 : yr;

	// make long time/date string
	t = tm.getDate() + '/' + tm.getMonth() + '/' + yr + ' ' + tm.getHours() + ':' + tm.getMinutes() + ':' + tm.getSeconds() + ' ' + tm.getDay() + '' + tm.getTimezoneOffset();

	// if no query string exists currently
	if (!s_q) {
		var tl = tfs.location // top framset's location(?)
		var s = '' // screen dimensions as string
		var c = '' // color depth
		var v = '' // result of javaEnabled()... Y or N
		var p = ''
		var bw = '' // browser width
		var bh = '' // browser height
		var j = '1.0' // java(script) version (?)
		var k = s_c_w('s_cc', 'true', 0) ? 'Y' : 'N' // is cookie set properly?
		var hp = '' // homepage (IE only)
		var ct = '' // connection type (IE only)
		var iepl = s_gg('iePlugins')
		var pn = 0
		var ps;
		if (s_apv >= 4) s = screen.width + 'x' + screen.height; // get screen dimensions

		if (s_isns || s_isopera) { // for netscape and opera
			if (s_apv >= 3) { // as long as the browser is >= 3
				j = '1.1';
				v = s_n.javaEnabled() ? 'Y' : 'N';
				if (s_apv >= 4) { // set some more vars if we can
					j='1.2';
					c = screen.pixelDepth;
					bw = s_wd.innerWidth; // browser width
					bh = s_wd.innerHeight; // browser height
					if (s_apv >= 4.06) j = '1.3'
				}
			}
			s_pl = s_n.plugins // get plugins object

		} else if (s_isie) { // for IE
			if (s_apv >= 4) {
				v = s_n.javaEnabled() ? 'Y' : 'N';
				j = '1.2';
				c = screen.colorDepth;
				if (s_apv >= 5) { // for versions 5+
					bw = s_d.documentElement.offsetWidth; // body width
					bh = s_d.documentElement.offsetHeight; // body height
					j = '1.3';
					if (!s_ismac && s_d.body) { // windows only
						s_d.body.addBehavior("#default#homePage");
						hp = s_d.body.isHomePage(tl) ? "Y" : "N";
						s_d.body.addBehavior("#default#clientCaps"); // client capabilities (?)
						ct = s_d.body.connectionType;
						if (iepl) {
							s_pl = new Array;
							s_pt(iepl, ',', s_iepf, ''); //  parse the plugins array
						}
					}
				}

			} else {
				r = '';
			}

			if (!s_pl && iepl) s_pl = s_n.plugins
		}

		if (s_pl) {
			while ( (pn < s_pl.length) && (pn < 50) ) {
				ps = s_fl(s_pl[pn].name, 100) + ';';
				if (p.indexOf(ps) < 0) p += ps;
				pn++
			}
		}

		// set the query string (finally)
		s_q = (s ? '&s=' + s_ape(s) : '') + 
					(c ? '&c=' + s_ape(c) : '') + 
					(j ? '&j=' + j : '') + 
					(v ? '&v=' + v : '') + 
					(k ? '&k=' + k : '') + 
					(bw ? '&bw=' + bw : '') + 
					(bh ? '&bh=' + bh : '') + 
					(ct ? '&ct=' + s_ape(ct) : '') + 
					(hp ? '&hp=' + hp : '') + 
					(s_vb ? '&vb=' + s_vb : '') + 
					(p ? '&p=' + s_ape(p) : '');

	} // end if no query string

	// get plugin info
	if (s_gg('usePlugins')) s_wd.s_doPlugins();

	// figure out current location and referring page
	var l = s_wd.location
	var r = tfs.document.referrer; // the frameset's referrer
	if (!s_gg("pageURL")) s_wd.s_pageURL = s_fl(l ? l : '' , 255);
	if (!s_gg("referrer")) s_wd.s_referrer = s_fl(r ? r : '' , 255);

	// add time and all variables to the query string
	q += (t ? '&t=' + s_ape(t) : '') + s_hav();

	// if link clicked or event object populated
	if (s_lnk || s_eo) {
		var o = s_eo ? s_eo : s_lnk;
		if (!o) return '';

		var p = s_wd.s_g_pageName // page name
		var w = 1 // window has page name
		var t = s_ot(o) // node name of link
		var n = s_oid(o) // link object contents
		var x = o.s_oidt // link type
		var h // link href
		var l // link name
		var i // index of query string in href
		var oc; // onclick function as string

		// if the event object and we're in an onclick event
		if (s_eo && o == s_eo) {
			// walk back to the BODY node
			while (o && !n && t != 'BODY') {
				o = (o.parentElement) ? o.parentElement : o.parentNode;
				if (!o) return '';
				t = s_ot(o);
				n = s_oid(o);
				x = o.s_oidt
			}
			// we should be at the BODY now
			oc = (o.onclick) ? o.onclick.toString() : '';
			// if the obeject has any instance of the generate string function, return
			if (oc.indexOf("s_gs(") >= 0) return ''
		}
		ta = o.target; // target frame

		h = (o.href) ? o.href : ''; // link HREF, if available
		i = h.indexOf('?'); // index of the query string in the href
		h = s_gg('linkLeaveQueryString') || i < 0 ? h : h.substring(0, i);
		l = s_gg('linkName') ? s_gg('linkName') : s_ln(h);
		t = s_gg('linkType') ? s_gg('linkType').toLowerCase() : s_lt(h);

		if (t && (h || l)) {
			q += '&pe=lnk_' + (t == 'd' || t == 'e' ? s_ape(t) : 'o') + 
			(h ? '&pev1=' + s_ape(h) : '') + 
			(l ? '&pev2=' + s_ape(l) : '');
		} else {
			trk = 0;
		}

		if (s_gg('trackInlineStats')) {
			if (!p) {
				p = s_wd.s_g_pageURL;
				w = 0
			}
			t = s_ot(o);
			i = o.sourceIndex;
			if (s_gg('objectID')) {
				n = s_gg('objectID');
				x = 1;
				i = 1
			}

			if (p && n && t) {
				qs = '&pid=' + s_ape(s_fl(p, 255)) + 
							(w ? '&pidt=' + w : '') + 
							'&oid=' + s_ape(s_fl(n, 100)) + 
							(x ? '&oidt=' + x : '') + 
							'&ot=' + s_ape(t) + 
							(i ? '&oi=' + i : '');
			}
		} // end trackInlineStats

		// clear out the vars
		s_wd.s_linkName = s_wd.s_linkType = s_wd.s_objectID = s_lnk = s_eo = '';
		if (!s_wd.s_disableLegacyVars) s_wd.linkName = s_wd.linkType = s_wd.objectID = ''
	}

	// if no tracking or query string, return no code
	if (!trk && !qs) return '';


	// set up the code to return
	var code = '';

	if (un) { // if one site
		if (trk && s_vs(un, sed)) {
			code += s_mr(un, sess, q + (qs ? qs : s_rq(un)), ta);
		}
		s_sq(un, trk ? '' : qs)

	} else if (s_wd.s_unl) { // if multiple sites
		for (var unn = 0; unn < s_wd.s_unl.length; unn++) {
			un = s_wd.s_unl[unn];
			if (trk && s_vs(un, sed)) code += s_mr(un, sess, q + (qs ? qs : s_rq(un)), ta)
			s_sq(un, trk ? '' : qs)
		}
	}

	return code
} // END: s_gs()


function s_dc(un) {
	un = un.toLowerCase(); // un = reporting suite / account name
	var dyas = s_gg('dynamicAccountSelection');
	var dyal = s_gg('dynamicAccountList');
	var dyam = s_gg('dynamicAccountMatch');

	// if dynamic account selection and are dynamic account list are defined,
	// then determine the account name from the server
	if (dyas && dyal) un = s_dyas(un, dyal, dyam);

	// attach event handler to body onclick
	s_wds(un);

	// insert image into doc
	s_ca(un);

	// generate string
	// return s_gs(un)

} // END: s_dc()

