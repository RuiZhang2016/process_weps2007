var Mint = new Object();
Mint.save = function() 
{
	var now		= new Date();
	var debug	= false; // this is set by php 
	var path	= '/mint/mint_v108/mint' + ((debug)?'.debug':'') + '.php?key=51543037303937347831437a6d4c7854545937784a4a317163487131666c70';
	
	// Loop through the different plug-ins to assemble the query string
	for (var developer in this) 
	{
		for (var plugin in this[developer]) 
		{
			if (this[developer][plugin] && this[developer][plugin].onsave) 
			{
				path += this[developer][plugin].onsave();
			};
		};
	};
	// Slap the current time on there to prevent caching on subsequent page views in a few browsers
	path += '&'+now.getTime();
	
	// Redirect to the debug page
	if (debug) { window.location.href = path; return; };
	
	// Record this visit
	document.write('<img src="'+path+'" alt="" style="position: absolute; left: -9999px;" onload="this.parentNode.removeChild(this);" />');
};
	
if (!Mint.SI) { Mint.SI = new Object(); }
Mint.SI.Referrer = {
	onsave	: function() {
		if (typeof Mint_SI_DocumentTitle=='undefined') { Mint_SI_DocumentTitle = document.title; }
		return '&referer=' + escape(document.referrer) + '&resource=' + escape(document.URL) + '&resource_title=' + escape(Mint_SI_DocumentTitle);
		}
	};
// incredibly funky onload add-event scripting, for all browsers

		 if(typeof window.addEventListener != 'undefined')
		 {
		 	//.. gecko, safari, konqueror and standard
		 	window.addEventListener('load', outclicks_init, false);
		 }
		 else if(typeof document.addEventListener != 'undefined')
		 {
		 	//.. opera 7
		 	document.addEventListener('load', outclicks_init, false);
		 }
		 else if(typeof window.attachEvent != 'undefined')
		 {
		 	//.. win/ie
		 	window.attachEvent('onload', outclicks_init);
		 }

		 //** remove this condition to degrade older browsers
		 else
		 {
		 	//.. mac/ie5 and anything else that gets this far

		 	//if there's an existing onload function
		 	if(typeof window.onload == 'function')
		 	{
		 		//store it
		 		var existing = onload;

		 		//add new onload handler
		 		window.onload = function()
		 		{
		 			//call existing onload function
		 			existing();

		 			//call outclicks_init onload function
		 			outclicks_init();
		 		};
		 	}
		 	else
		 	{
		 		//setup onload function
		 		window.onload = outclicks_init;
		 	}
		 }
function outclicks_init () {
	 links = document.getElementsByTagName('a');
	 this_domain = "ausculture.com";

	 for (i=0; i < links.length; i++) {
		link = links[i].href.replace("www.","");
		// if it is off domain or a js link, don't record.
		if(link.match(eval('/^(http(s)?:\\/\\/)?'+this_domain+'/')) || links[i].href.indexOf('javascript:') != -1) 
			continue;
		
		links[i].onclick = trackOutclicks;

	 }

}

function trackOutclicks() {
	var path = '/mint/mint_v108/pepper/andrewsutherland/outclicks/data.php';
	
	// can't use encodeURIComponent everywhere. escape() should work for this scenario
	path += "?outclick="+escape(this.href);
	path += "&from_title="+escape(document.title);
	path += "&from="+escape(self.location);

	// old browsers
	if (typeof encodeURIComponent == 'undefined') {
			// when user clicks a site, then back, then clicks another, don't retrack their hits
			// don't worry, it confuses me too
			c = document.getElementById('outClickTracker');
			if (c) c.parentNode.removeChild(c);
			document.body.innerHTML += '<script src="'+path+'" language="javascript" id="outClickTracker"></script>';
	}
	else {

		var data = false;
		/*@cc_on @*/
		/*@if (@_jscript_version >= 5)
		try { data = new ActiveXObject("Msxml2.XMLHTTP"); } 
		catch (e) { try { data = new ActiveXObject("Microsoft.XMLHTTP"); } catch (E) { data = false; } }
		@end @*/
		if (!data && typeof XMLHttpRequest!='undefined') data = new XMLHttpRequest();
		if (data) data.open("GET", path, false); data.send(null);
		
	}

}



	 
Mint.save();