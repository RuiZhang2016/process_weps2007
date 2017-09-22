//config 
//OAS_sitepage = 'artistdirect.com/styles';
//OAS_listpos = 'Top,Bottom';
//OAS_query = '';
//OAS_target = '_top';
//config end

if ( !OAS_sitepage || OAS_sitepage == null || OAS_sitepage == '' ) { OAS_sitepage = 'artistdirect.com/'; }
if ( !OAS_query || OAS_query == null || OAS_query == '' ) { OAS_query = ''; }
if ( !OAS_target || OAS_target == null || OAS_target == '' ) { OAS_target = '_top'; }




var duration = 1000 * 60 * 20 * 1;
var pc = GetCookie( 'NAD_pc' );
var ses = GetCookie( 'NAD_ses' );
var if_google = ( getParam( 'affiliate' )=='google' )? "true":"false";
if( if_google == "false" ) {
	if( ses == null ) 
	{
		NAD_date = new Date( (new Date()).getTime() + duration );
		document.cookie="NAD_ses=set; path=/; domain=artistdirect.com; expires=" + NAD_date.toGMTString();
		document.cookie="NAD_pc=1; path=/; domain=artistdirect.com;";
		NAD_popstatus= "1; " + NAD_date.toDateString() + " " + NAD_date.toTimeString();
		pc = 1;
	} else {
		if( pc == null ) { pc = 0; }
		pc++;
		document.cookie="NAD_pc=" + pc + "; path=/; domain=artistdirect.com";
		NAD_popstatus=pc;
	}
}
if( pc == 1 ) { NAD_listpos.push(n_pop); }


var OAS_listpos = '';
if( NAD_listpos.length>0 ) { OAS_listpos=NAD_listpos.join( ',' ); }
OAS_url = 'http://oascentral.artistdirect.com/RealMedia/ads/';
OAS_rn = '001234567890'; OAS_rns = '1234567890';
OAS_rn = new String (Math.random()); OAS_rns = OAS_rn.substring (2, 11);
function OAS_NORMAL(pos) { document.write('<A HREF="' + OAS_url + 'click_nx.ads/' + OAS_sitepage + '/1' + OAS_rns + '@' + OAS_listpos + '!' + pos + '?' + OAS_query + '" TARGET=' + OAS_target + '>'); document.write('<IMG SRC="' + OAS_url + 'adstream_nx.ads/' + OAS_sitepage + '/1' + OAS_rns + '@' + OAS_listpos + '!' + pos + '?' + OAS_query + '" BORDER=0></A>'); }

OAS_version = 11;
if (navigator.userAgent.indexOf('Mozilla/3') != -1 || navigator.userAgent.indexOf('Mozilla/4.0 WebTV') != -1) { OAS_version = 10; }
if (OAS_version >= 11) {document.write('<SCR' + 'IPT LANGUAGE=JavaScript1.1 SRC="' + OAS_url + 'adstream_mjx.ads/' + OAS_sitepage + '/1' + OAS_rns + '@' + OAS_listpos + '?' + OAS_query + '"></SCR' + 'IPT>');}

function OAS_AD(pos) { if (OAS_version >= 11) { OAS_RICH(pos); } else { OAS_NORMAL(pos); } }