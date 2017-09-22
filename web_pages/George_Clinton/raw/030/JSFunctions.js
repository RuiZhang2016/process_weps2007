function getInternetExplorerVersion() {
	// Returns the version of Internet Explorer or a -1
	// (indicating the use of another browser).
    var rv = -1; // Return value assumes failure
    if (navigator.appName == 'Microsoft Internet Explorer')
    {
        var ua = navigator.userAgent;
        var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat( RegExp.$1 );
    }
    return rv;
}

var search_refinement = '';
var ie_version = getInternetExplorerVersion();

function openPopup(link,width,height,scrollbars) {
	if(!scrollbars) {
		scrollbars = "no";
	}
	
	var winl = (screen.width - width) / 2;
	var wint = (screen.height - height) / 2;
	winprops = 'top='+wint+',left='+winl;
	window.open(link,'map','scrollbars=' + scrollbars + ',resizable=no,width=' + width + ',height=' + height + ',' + winprops);
}


function clearSearch(el,theFocus,defaultText,isEmail) {
	if(!isEmail) {
		isEmail = false;
	}
	
	if(theFocus == 'focus')	{
		if(el.value.trim() == defaultText) {
			el.value = '';
		}
	} else if (theFocus == 'blur') {
		if(el.value.trim() == '')
		{
			el.value = defaultText;
		}
	} else if (theFocus == 'click') {
		if(el.value.trim() == '') {
			el.value = defaultText;
		}
		if(el.value.trim() == defaultText || (defaultText == "By City or ZIP Code" && $("#form_quick_browse>#dateRange").get(0).value.trim() == "Select a Date") || (isEmail && !isValidEmail(el.value.trim())))
		{	
			if(isEmail && !isValidEmail(el.value.trim())) {
				alert('Please enter a valid email address.');
			} else {
				alert('Please enter all search values.');							
			}
			
			return false;
		}
	}
	return true;
}

function isDate(value)
{
    return !isNaN(new Date(value));
}


function validateSearch() {
	do_it = true;
	
	if(document.getElementById("holiday")) {
		get_form = 'holiday';
	} else {
		get_form = 'big_promo';
	}
	$("#" + get_form + " select").each(function() {
		if($(this).get(0).value == '') {
			do_it = false;
		}
	});
	
	if(!do_it) {
		alert('Please select an option from each drop down.');
	}
	
	return do_it;
}

function validateDates() {
    var citySelected = false;
    $("#citysearch input.radiobox").each(function() {
        if($(this).get(0).checked) {
            citySelected = true;
        }
    });
    
    if(!citySelected && document.getElementById('area_text').value.trim() == '') {
        alert('No City Selected');
        return false;
    }
    
    
    dateRangeTo = Date.parse(document.getElementById('dateRangeTo').value);
    dateRangeFrom = Date.parse(document.getElementById('dateRangeFrom').value);
    currentDate = new Date();
    currentDate = currentDate.setDate(currentDate.getDate() - 1);
    
    if(!isDate(dateRangeTo) || !isDate(dateRangeFrom)) {
        alert('Please select a valid date range.');
        return false;
    }
    
    if( dateRangeTo < dateRangeFrom || dateRangeTo <= currentDate || dateRangeFrom <= currentDate ) {
        alert('Please enter a valid date range.');
        return false;
    }
    
    return true;
}


function setUrl(url)
{
    document.location=url;
}


function fixMenu() {
	$("#navigation li").hover(function(){
		$(this).addClass("sfhover");
	},function(){
		$(this).removeClass("sfhover");
	});
}

/* Client-side access to querystring name=value pairs
	Version 1.2.3
	22 Jun 2005
	Adam Vandenberg
*/
function Querystring(qs) { // optionally pass a querystring to parse
	this.params = new Object()
	this.get=Querystring_get
	
	if (qs == null)
		qs=location.search.substring(1,location.search.length)

	if (qs.length == 0) return

    // Turn <plus> back to <space>
    // See: http://www.w3.org/TR/REC-html40/interact/forms.html#h-17.13.4.1
	qs = qs.replace(/\+/g, ' ')
	var args = qs.split('&') // parse out name/value pairs separated via &
	
    // split out each name=value pair
	for (var i=0;i<args.length;i++) {
		var value;
		var pair = args[i].split('=')
		var name = unescape(pair[0])

		if (pair.length == 2)
			value = unescape(pair[1])
		else
			value = name
		
		this.params[name] = value
	}
}


function Querystring_get(key, default_) {
	// This silly looking line changes UNDEFINED to NULL
	if (default_ == null) default_ = null;
	
	var value=this.params[key]
	if (value==null) value=default_;
	
	return value
}


/*
function trackC()
{
    var qs = new Querystring();
    
    var c = qs.get("c");
    
    if(c != null && c.length > 0) {
        $.get(uri, function(xml) {
        });
    }
}

$(document).ready(function() {
    trackC();
});
*/


function createForms(form,action,customFunction) {
	query_string = "";
	$("#" + form + " input").each(function(){
		$(this).keypress(function(oEvent) {
			if(oEvent.keyCode == 13 || oEvent.which == 13) {
				$('form').submit(function() {return false;});
				submitFunction(form,action,customFunction);
			}
		});
	});
	
	$("#" + form + " select").each(function(){
		$(this).keypress(function(oEvent) {
			if(oEvent.keyCode == 13 || oEvent.which == 13) {
				$('form').submit(function() {return false;});
				submitFunction(form,action,customFunction);
			}
		});
	});
	
	$("#" + form + " img").click(function(){
		submitFunction(form,action,customFunction);
	});
}

var searching = false;
function submitFunction(form,action,customFunction) {
	if(customFunction) {
		do_it = eval(customFunction) && !searching;
	} else {
		do_it = !searching;
	}
	
	if(do_it) {
	    searching = true;
		action_check = action.split("|");
		if(action_check.length > 1) {
			arguments_array = action_check[1].split("^");
			eval(action_check[0] + "(" + arguments_array + ")")
		} else {
		   
			$("#" + form + " input").each(function(){
			    if($(this).get(0).type == 'text' && $(this).get(0).value.trim() != '') {
				    query_string += "&" + $(this).get(0).name + "=" + escape($(this).get(0).value);
				} else {
				    if($(this).get(0).checked && $(this).get(0).value != 'other-city') {
				        query_string += "&" + $(this).get(0).name + "=" + escape($(this).get(0).value);
				    }
				}
			});
			
			$("#" + form + " select").each(function(){
				query_string += "&" + $(this).get(0).name + "=" + escape($(this).get(0).value);
			});
			
			if(query_string.match(/^&/) == '&') {
				query_string = query_string.replace(/^&/,'');
			}
			
			document.location = action + "?" +  query_string;
		}
		return true;
	} else {
		return false;
	}
}


var first_time = true;


function initFlash(random_number) {
	//set the timeout of the element that is already there to fade out
	//about a second before the next element starts to fade in, this
	//will help avoid flickering.
	if(first_time) {
		$(".featured_advert a").html("<img width=\"400\" height=\"220\" class=\"flash\" />");	
		//alert($(".featured_advert a img").get(0));
		first_time = false;
	}
	y = setTimeout("$(\".featured_advert img.flash\").fadeOut(\"crawl\")",4750);
	
	$(".featured_advert img.flash").set("src",flash_files[random_number][0]);
	$(".featured_advert a").set("href",flash_files[random_number][1]);
	$(".featured_advert img.flash").set("alt",flash_files[random_number][2]);
	$(".featured_advert a").set("title",flash_files[random_number][2] + " Tickets");
	$(".featured_advert img.flash").fadeIn("crawl");

	random_number++;
	//the flash files array is output at the bottom of the page and 
	//is written by .net and an xml file.
	if(random_number >= flash_files.length) {
		random_number = 0;
	}
	// recursion!
	z = setTimeout('initFlash(' + random_number + ')', 6000);
}


function setCookie(name, value, expires, path, domain, secure) {
	//only used to set a cookie to know whether or not someone
	//has seen the ibmboxoffice alert.
    document.cookie= name + "=" + escape(value) +
        ((expires) ? "; expires=" + expires.toGMTString() : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
}


function readCookie(name){
	//Used to help determine the partner
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++)
	{
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}


function checkIbmAlert() {
	var alerted = readCookie('ibmalert');
	if(alerted == null) {
		return false;
	} else {
		return true;
	}
}


String.prototype.trim = function() { return this.replace(/^\s+|\s+$/, ''); };


String.prototype.replaceHttps = function() { return this.replace(/href="https:\/\//gi,"href=\"http://");};


function ibmAlert(partner_site,alerted) {
	if(partner_site == 'ibmboxoffice' && !alerted) {
		var message = "* Cash Witthaus is an IBM approved Vendor,\n" +

              "  working directly with our strategic partner,\n" +

                                      "  Razorgator ( In order to provide this service )\n\n" +

                                      "* For assistance with ticket purchases, event details,\n" +

                                      "  such as Group Customization/Hospitality/Transportation/Hotels,\n" + 

                                      "  etc.., please contact Cash Witthaus directly\n" +

                                      "  (480-444-1111) Ask for Colin Cash.\n\n" +

                                      "* When purchasing for business, it is your responsibility\n" +

                                      "  to ensure your IBM Divisions expenditure guidelines are adhered to.\n" +

                                      "  If a Purchase Order is required, call Cash Witthaus\n" +

                                      "  (480-444-1111) Ask for Colin Cash." ;
		alert(message);
		setCookie("ibmalert",true,'','','',''); 
	}
}

var z;


function isValidEmail(str) {
	return (str.indexOf(".") > 2) && (str.indexOf("@") > 0);
}


function FindWhichSearch(f) {
	var q = f.value;
	if (document.getElementById('whichSearch_fox').checked) {
		var searchURL = "http://msn.foxsports.com/search?sp-q=" + q ;
		window.open(searchURL);
		//window.location.href = "http://msn.foxsports.com/search?sp-q=" + q ; 
	} else {
		var searchURL = "http://search.msn.com/results.aspx?q=" + q + "&cp=1252&FORM=FOXSP";
		window.open(searchURL);
	}
	return false;
}


function checkClassicPage() {
	if(window.location.toString().match(/\/checkout\//i) != "/checkout/" && ( window.location.toString().match(/\.asp\?/) == '.asp?' || window.location.toString().match(/\.asp$/) == '.asp' || window.location.toString().match(/\.asp#/) == '.asp#' ) || ( window.location.toString().match(/\.html\?/) == '.html?' || window.location.toString().match(/\.html/) == '.html')) {
		return true;
	}	
	
	return false;
}


function isCheckout() {
	if(window.location.toString().match(/\/checkout\//i) == '/checkout/') {
		return true;
	}
	
	return false;
}

function fixIframes() {
	$('iframe').each(function() {
		this_id = $(this).get(0).id.replace('iframe', '');
		$(this).css('width',$('#div' + this_id).css('width') + 'px');
		$(this).css('height',$('#div' + this_id).css('height') + 'px');
	});
}

function refineSearchCriteria(obj) {
	$("#content_header select").not(obj).each(function() {
		$(this).get(0).disabled = obj.value.trim() != '';		
	});
	if(obj.value.trim() != '') {
		$('.refine_search').get(0).href = obj.value.trim();
	} else {
		$('.refine_search').get(0).href = 'javascript:;';
	}
}

$(document).load(function() {	
	fan_2_fan_list = '49ers,seahawks,prorodeo,rosebowl,philadelphiaeagles,gohuskies,mensfinalfour';
	var partner_site = readCookie('PartnerUrlName');
	
	var alerted = checkIbmAlert();
	
	ibmAlert(partner_site,alerted);	
    
	var is_classic_page = checkClassicPage();
	
	var is_checkout = isCheckout();
	
	if(is_classic_page) {       		
        if(fan_2_fan_list.match(partner_site) != partner_site || partner_site == null) {	 
			//Razorgator and normal cobrands
		    $.get("/LegacySupport/Ahah.aspx?control=UserInfo|CobrandHeader|TopNav|LeftSideBar|Footer&cache=" + Math.ceil(Math.random()*999999) + "-" + Math.ceil(Math.random()*999999), function(xml) {    
				//sanity check to verify proper elements and fill in the proper control.
		        if(document.getElementById('personal_navigation') && $("div#personal_navigation").get(0).innerHTML.trim() == "") {          
                    $("div#personal_navigation").append($("/controls/control[@id='UserInfo']/html",xml).text().replaceHttps());
                }
                if(document.getElementById('left_side_bar') && $("div#left_side_bar").get(0).innerHTML.match(/left_side_nav/) != "left_side_nav") {
                    $("div#left_side_bar").prepend($("/controls/control[@id='LeftSideBar']/html",xml).text().replaceHttps());
                    if(document.getElementById('quick_browse')) {
                        createForms("quick_browse","/" + partner_site + "/pages/cityselector/","clearSearch($(\"#form_quick_browse>#area\").get()[0], 'click', 'By City or ZIP Code')");
                    }
                    
                    if(document.getElementById('expedia_quickbrowse')) {
	                    createForms("expedia_quickbrowse","/" + partner_site + "/pages/search/","clearSearch(document.getElementById('expedia_keyword'), 'click', 'by Artist, Venue or Team')");	
	                }
	                
	                if(document.getElementById('citi_quickbrowse')) {
	                    createForms("citi_quickbrowse","/" + partner_site + "/pages/search/","clearSearch(document.getElementById('citi_keyword'), 'click', 'by Artist, Venue or Team')");	
	                }
                }
                if(document.getElementById('navigation') && $("div#navigation").get()[0].innerHTML.match(/ul/i) == null && partner_site != 'expedia') {
                    $("div#navigation").append($("/controls/control[@id='TopNav']/html",xml).text().replaceHttps());
                    fixIframes();
                }
                if(document.getElementById('cobrand_header') && $("div#cobrand_header").get(0).innerHTML.trim() == "") {  
    	            $("div#cobrand_header").append($("/controls/control[@id='CobrandHeader']/html",xml).text().replaceHttps());
    	        }
    	        //if(document.getElementById('footer') && $("div#footer").get(0).innerHTML.trim() == "") {
                //    $("div#footer").html($("/controls/control[@id='Footer']/html",xml).text().replaceHttps());
                //}
                //We have to refix the menu in IE
                //after we load the nav dynamically.
                if(ie_version > 1 && ie_version < 7) {	
		            fixMenu();
	            }
            });
        } else {
			//Fan2Fan
            $.get("/LegacySupport/Ahah.aspx?control=UserInfo|TopNav|LeftSideBar|Footer|CobrandHeader&cache=" + Math.round(999999*Math.random()) + "-" + Math.round(999999*Math.random()), function(xml) {
                if($("div#personal_navigation").get(0).innerHTML.trim() == "") {    
                    $("div#personal_navigation").append($("/controls/control[@id='UserInfo']/html",xml).text().replaceHttps());
                }
                if($("div#left_side_bar").get(0).innerHTML.match(/left_side_nav/) != "left_side_nav") {
                    $("div#left_side_bar").prepend($("/controls/control[@id='LeftSideBar']/html",xml).text().replaceHttps());
                    createForms("quick_browse","/" + partner_site + "/pages/cityselector/","clearSearch($(\"#form_quick_browse>#area\").get()[0], 'click', 'By City or ZIP Code')");
                }
                
                $("div#navigation").hide();
                $("div#header #logo").hide();
                $("div#header #search").hide();
                
                $("div#header").append($("/controls/control[@id='CobrandHeader']/html",xml).text().replaceHttps());
                
                //if($("div#footer").get(0).innerHTML.trim() == "") {
                //    $("div#footer").html($("/controls/control[@id='Footer']/html",xml).text().replaceHttps());
                //}
            });
        }
	} else if (is_checkout) {
		//checkout, it is handled differently.
	    $.get("/LegacySupport/Ahah.aspx?control=CobrandHeader|Footer&cache=" + Math.ceil(Math.random()*999999) + "-" + Math.ceil(Math.random()*999999), function(xml) {       
	       $("#container").css("background-image","none");
	       
           //$('#footer').append($('/controls/control[@id=\"Footer\"]/html',xml).text().replaceHttps());
           
           //alert($('/controls/control[@id=\"Footer\"]/html',xml).text().replaceHttps());
           
           if(fan_2_fan_list.match(partner_site) == partner_site) {
                $("div#navigation").hide();
           }
           
           if(document.getElementById('search')) {
               $("#search").css("display","none");
           }
           $("#cobrand_header").append($("/controls/control[@id='CobrandHeader']/html",xml).text());
        });
	}
	
	//These next three statements identify the three major forms on the page
	//and initiates the generic form controls.
	if(document.getElementById('newsletter_promo')) {
		createForms("newsletter_promo","/" + partner_site + "/pages/subscriber/","clearSearch(document.getElementById('email'),'click', 'Enter an Email Address',true)");
	}	
	if(document.getElementById('search')) {
		createForms("search","/" + partner_site + "/pages/search/","clearSearch(document.getElementById('keyword'), 'click', 'by Artist, Venue or Team')");
	}
	
	if(document.getElementById('keywordsearch')) {
		createForms("keywordsearch","/" + partner_site + "/pages/search/","clearSearch(document.getElementById('keyword'), 'click', 'by Artist, Venue or Team')");
	}
	
	if(document.getElementById('citysearch')) {
		createForms("citysearch","/" + partner_site + "/pages/cityselector/","validateDates()");
	}
	
	if(document.getElementById('quick_browse')) {
		createForms("quick_browse","/" + partner_site + "/pages/cityselector/","clearSearch($(\"#form_quick_browse>#area\").get()[0], 'click', 'By City or ZIP Code')");	
	}	
	
	if(document.getElementById('expedia_quickbrowse')) {
	    createForms("expedia_quickbrowse","/" + partner_site + "/pages/search/","clearSearch(document.getElementById('expedia_keyword'), 'click', 'by Artist, Venue or Team')");	
	}
	
	if(document.getElementById('citi_quickbrowse')) {
	    createForms("citi_quickbrowse","/" + partner_site + "/pages/search/","clearSearch(document.getElementById('citi_keyword'), 'click', 'by Artist, Venue or Team')");	
	}
	
	if(document.getElementById('headerSearch')) {
		createForms("headerSearch","FindWhichSearch|document.getElementById('searchTerm')");
	}
	
	if(document.getElementById('holiday')) {
		createForms("holiday","/" + partner_site + "/pages/search/","validateSearch()");
	}
	
	if(document.getElementById('big_promo')) {
		createForms("big_promo","/" + partner_site + "/pages/search/","validateSearch()");
	}
	
	//navigation iframe fix 
	fixIframes();
	
	//initiate flash control on homepage.
	if(document.getElementById('flash_control')) {
	    //initFlash(random_number);
	}
	
	//make the dropdown nav work in IE
    if(ie_version > 1 && ie_version < 7) {	
		fixMenu();
	}
	//make the first cell in the event page clickable.
	$("td.clickable").each(function() {
		$(this).click(function() {
			document.location = $(this).find("a").get(0).href;
		});
		
		$(this).hover(function(){
			$(this).find("p").css("text-decoration","underline");
		},function(){
			$(this).find("p").css("text-decoration","none");
		});
	});
	
	$("#content_header select").change(function() {
		refineSearchCriteria(this);
	});
});
