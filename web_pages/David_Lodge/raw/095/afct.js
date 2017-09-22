/*
 * This file contains the javascript to display
 * Google AFC ads. At the moment SFGate
 * only wants to display text ads
 * ssaux
 */

// backup targeting
var google_went_through = 0; // Used to avoid infinite loop
// saved values for backup targeting
var saved_google_vars = getSavedGoogleVars();

function getSavedGoogleVars() {
    var gvars = new Array();
    var sgvars = new Array();
    if ( typeof window.sfg_afc_saved_google_vars == "undefined" ) {
        sfg_afc_saved_google_vars = 'google_ad_channel,google_max_num_ads,google_ad_client';
    }

    gvars = sfg_afc_saved_google_vars.split(/ *, */);

    for ( i = 0 ; i < gvars.length ; i++ ) {
        if ( typeof window[gvars[0]] != "undefined" ) {
            var obj = new Object;
            obj.name = gvars[i];
            obj.value = window[gvars[i]];
            sgvars.push(obj);
        }
    }
    return sgvars;
}

function sfgate_dump(msg) {
    if ( window.dump ) {
        dump(msg);
    }
}

function gate_split_vu(s, maxlength) {
    var fragments = new Array();
    if ( s.length > maxlength ) {
        var sStart = s;
        var aI = 0;
        while ( sStart.length > maxlength ) {
            fragments[aI] = sStart.slice(0,maxlength);
            aI++;
            sStart = sStart.slice(maxlength);
        }
        fragments[aI] = sStart;
        return fragments.join('<br />')
    } 
    return s;
}
function google_ad_request_done(google_ads) {
    var s = '';
    var i;

    /*
     * Verify that there are actually ads to display.
     */
    if (google_ads.length == 0) {
        if (google_went_through == 0) {
            google_went_through = 1;
            google_ad_output = 'js';
            for ( i = 0 ; i < saved_google_vars.length ; i++ ) {
                window[saved_google_vars[i].name] = saved_google_vars[i].value;
                if ( saved_google_vars[i].name == 'google_ad_channel' ) {
                    google_ad_channel += ',negative';
                }
            }
            google_kw_type='broad';
            if ( typeof window.sfg_google_negative_keyword == 'undefined' ) {
                sfg_google_negative_keyword = 'san francisco';
            }
            google_kw = sfg_google_negative_keyword;
            document.write("<scr" + "ipt src='http://pagead2.googlesyndication.com/pagead/show_ads.js'></scr" + "ipt>");
        }
	return;
    }
    // sfgate_dump('received '+google_ads.length+' ads for '+window.location+'\n');

    // allows a "skip ad" type of functionality. We don't
    // want a skip ad link to appear if we don't receive any google ad.
    if ( window.afc_pre_google_ad ) {
        s += window.afc_pre_google_ad;
    }
    // default in case feedback_url is missing
    var fu = escape('http://adwords.google.com');
    if (google_info) {
	fu = escape(google_info.feedback_url);
    }
    // what's this html
    var wt = '<ul><li><a href="/cgi-bin/google/search/whatsthis?feedback_url='+fu+'" TARGET="afcwhatsthis" onClick="var w = window.open(\'\',\'afcwhatsthis\',\'directories=no,height=280,width=380,location=no,resizable=yes,screenx=50,screeny=50,toolbar=no\'); w.focus()">What\'s This?</a></li></ul>';

    s += '\n<div id="google_container1">';
    if (google_ads[0].type == "image") {
	s += '\n<div id="' + sfg_afc_google_encl_div +'" class="google google_image">\n<div class="google_header"><h3>Ads by Google</h3>';
	// if the enclosing id is googlesky
	// then we place the "what's this at the bottom. Otherwise it's at the top
	if ( sfg_afc_google_encl_div != 'googlesky' ) {
	    s += wt;
	}	    

	s += '</div>\n'; // <div class="google_header"

        s += '<a href="' + google_ads[0].url +
            '" target="_top" title="go to ' + google_ads[0].visible_url +
            '"><img border="0" src="' + google_ads[0].image_url +
            '"width="' + google_ads[0].image_width +
            '"height="' + google_ads[0].image_height + '"></a>';
        s += '</div>';
    } else if (google_ads[0].type == "text") {
	// by convention. If enclosing div id ends with nb (no border)
	// and there's only one ad, remove the 'nb' from the end
	// of the div id.
	var regexp = new RegExp("^(.*)nb$");
	var reRes = regexp.exec(sfg_afc_google_encl_div);
	if ( reRes && google_ads.length == 1 ) {
	    sfg_afc_google_encl_div = reRes[1];
	}
	s += '\n<div id="' + sfg_afc_google_encl_div +'" class="google">\n<div class="google_header"><h3>Ads by Google</h3>';
	// if the enclosing id is googlesky
	// then we place the "what's this at the bottom. Otherwise it's at the top
	if ( sfg_afc_google_encl_div != 'googlesky' ) {
	    s += wt;
	}	    

	s += '</div>\n'; // <div class="google_header"
	for(i=0; i < google_ads.length; ++i) {
	    var vu = google_ads[i].visible_url;
            if ( typeof window.sfg_afc_maxvu_length != "undefined" &&
                 sfg_afc_maxvu_length > 0 ) {
                vu = gate_split_vu(vu, sfg_afc_maxvu_length);
            } else if ( vu.length > 24 && sfg_afc_google_encl_div == 'googlesky' ) {
		vu = gate_split_vu(vu, 24);
	    }
	    var he = '<a href="'  + google_ads[i].url + 
		'" title=\"go to ' + google_ads[i].visible_url +  '"' +
		' onmouseout="window.status=\'\'; return true;" ' +
		' onmouseover="window.status=\'go to ' +
		google_ads[i].visible_url + '\'; return true;">';		
            // start of google_item, google_firstitem, google_uniqueitem
	    s += '<div class="google_';
	    // Handle class = first item
	    // and class unique item
	    if (google_ads.length == 1) {
		s += 'unique';
	    } else if ( i == 0 ) {
		s += 'first';
	    }
	    s += 'item">\n<h4>'+ he + google_ads[i].line1 +
		'</a></h4>\n';
	    s += '<p class="google_description">'+ he +
		google_ads[i].line2 + ' ' + google_ads[i].line3 + '</a></p>\n';
	    s += '<p class="google_url">' + he +
		vu + '</a></p>\n</div>\n';
	}
	if ( sfg_afc_google_encl_div == 'googlesky' ) {
	    s += wt;
	}
	s += '</div>';
    }
    s += '</div>'; // google_container1
    // allows a "skip ad" type of functionality. We don't
    // want a skip ad link to appear if we don't receive any google ad.
    if ( window.afc_post_google_ad ) {
        s += window.afc_post_google_ad;
    }
    //sfgate_dump(s); // debug only
    document.write(s);
    return;
}
