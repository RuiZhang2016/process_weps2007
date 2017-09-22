function event_obj(ajax_url)
{
	this.ajax_params = {
			ajax_url : '',
			timeout : 5000,
			success_handler : this.ajax_success_handler,
			failure_handler : this.ajax_failure_handler,
			display_processing_message : this.ajax_display_processing_message
	//		ajax_debug : true,
	//		test_no_ajax : true
	//		test_timeout : true
	//		test_permission_denied : true
	//		test_http_404 : true
			} ;

	this.base_url = ajax_url ;
	this.default_id = '' ;


//	this.ajax_is_enabled = ajax_check_enabled({ajax_debug : true, test_no_ajax : true}) ;
	this.ajax_is_enabled = ajax_check_enabled() ;
} ;


// creates an ajax_class object and initiates the AJAX connection
event_obj.prototype.ajax_comm_with_server=function( event_id)
{
	var params = this.ajax_params ;
	params.ajax_url = this.base_url + event_id ;
	params.extended_data = event_id ;
	var ajax = new ajax_class( params) ;
	ajax.comm_with_server() ;
} ;


// let the user know that we're making a connection by displaying an animated gif, this is called from the
//   ajax js so you don't need to worry about when to call it
event_obj.prototype.ajax_display_processing_message=function( on_off)
{
	// clear the ajax div contents
	if (on_off != 'off')
	{
		// need to reference global var instead of "this" b/c of scope issues
		event.update_ajax_div( '') ;
	}

	// hide/show the div containing the indicator as appropraite
	var style = (on_off == 'off') ? 'none' : '' ;
	if (document.getElementById)
	{
		document.getElementById("indicator").style.display = style ;
	}
	else
	{
		document.all.indicator.style.display = style ;
	}
} ;


// we'll be getting either an http.responseText or http.responseXML, whatever we specified.  Handle it here.
event_obj.prototype.ajax_success_handler=function( response)
{
	// NOTE: this just means status was 200; there could still be an error

	// need to reference global var instead of "this" b/c of scope issues
	event.update_ajax_div( response) ;
} ;


// ajax returned an error, so deal with it gracefully
event_obj.prototype.ajax_failure_handler=function( message, error_code, ajax_request)
{
	// case of a critical error, probably a developer goof
	if (error_code == 0)
	{
		detail_message = 'Error Details:\n ' + message ;
	}
	// response error from the server
	else
	{
		detail_message = 'Error Details:\n There was an http response error from the server, #' + error_code + ': "' + message + '"\n\n For full details, see:\n http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html';
	}

	// the message will have error details but also a link to the event they are looking for
//	message = '<br/><br/><center>Event Data Unavailable.<br/><a href="javascript:alert(detail_message)" style="font-size:80%">Error Details</a><br/><br/><a href="/page/event/detail/' + ajax_request.extended_data + '">View Details of this Event</a></center>';
	message = '<div id="event_error"><p id="error_details"><span class="error_title">Event Data Unavailable.</span><a href="javascript:alert(detail_message)" style="font-size:80%">Error Details</a></p><p id="event_details"><a href="/page/event/detail/' + ajax_request.extended_data + '">View Details of this Event</a></p></div>' ;

	// need to reference global var instead of "this" b/c of scope issues
	event.update_ajax_div( message) ;
} ;


// a helper function that updates the ajax target div contents
event_obj.prototype.update_ajax_div=function( message)
{
	if (document.getElementById)
	{
		document.getElementById("ajax").innerHTML = message ;
	}
	else
	{
		document.all.ajax.innerHTML = message ;
	}
} ;


// we have ajax, so breakout of the "noscript" fallback UI
event_obj.prototype.ajax_available_handler=function()
{
	this.update_ajax_div( '<br/><br/>Loading Event Details...') ;
} ;


// if we have js but not ajax
event_obj.prototype.ajax_unavailable_handler=function()
{
	// show noscript implementation

	// the fallback has already been setup, but we may have need to hide some divs in here
} ;


// if ajax is not enabled, implement our fallback strategy for linking... go to the page instead of ajax
event_obj.prototype.get_url=function( no_ajax_url, ajax_param)
{
	// we have ajax, so the links will be an ajax update
	if (this.ajax_is_enabled)
	{
//		return "window.event.ajax_params.test_http_404=true;window.event.ajax_comm_with_server('" + ajax_param + "');" ;
		return "window.event.ajax_comm_with_server('" + ajax_param + "');" ;
	}
	// no ajax, so the link will go directly to the event page
	else
	{
		return "location.href='" + no_ajax_url + "';" ;
	}
} ;


// (not ajax related) helper function for writing out the event listings
event_obj.prototype.write_item_contents=function( url, name, description, div_class)
{
	// we're trying to have clickable div; on IE these conflict with anchor link, so set that to void
	if ( this.ajax_is_enabled)
	{
		document.write( '<li class="' + div_class + '" onclick="' + url + '">' +
				'<a href="javascript:void(0);">' + name + '</a>' +
				'</li>') ;
	}
	// if there's no ajax, we need to forget the idea of clickable divs, and just do the normal URL
	else
	{
		document.write( '<li class="' + div_class + '">' +
				'<a href="javascript:' + url + '">' + name + '</a>' +
				'</li>') ;
	}
			
	// note: sadly the idea of a clickable div doesn't work very well in IE; the div is only clickable where the text is!?!
} ;


// now that the page is drawn, perform initial ajax call (or handle no ajax fallback measures)
event_obj.prototype.initial_load=function()
{
	if ( this.ajax_is_enabled)
	{
		this.ajax_available_handler() ;

		// make the server request only if we have a default value
		if (this.default_id != '')
		{
			this.ajax_comm_with_server( this.default_id) ;
		}
		else
		{
			this.update_ajax_div("") ;
		}

	}
	else
	{
		this.ajax_unavailable_handler() ;
	}
} ;
