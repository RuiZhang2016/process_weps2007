function dashboard_obj()
{
	///
	/// report to admin functionality
	///

	this.dash_obfuscated_cons_id = 0 ;
	this.dash_report_language = '' ;
	this.has_report_divider = false ;
} ;



///
/// report to admin functionality
///

// called when a link is pressed
dashboard_obj.prototype.flag_profile=function()
{
	if (confirm('Do you really want to alert an admin to this profile?'))
	{
		var url_base = '/page/profile' ;
		var url_page = '/report/' + this.dash_obfuscated_cons_id ;
		var ajax_params = {
				ajax_url : url_base + url_page,
				timeout : 5000,
				success_handler : this.report_to_admin_success,
				failure_handler : this.report_to_admin_failure,
				display_processing_message : this.report_to_admin_processing
				} ;
		var ajax = new ajax_class( ajax_params) ;
		ajax.comm_with_server() ;


		// update the display
		document.getElementById("report_to_admin").innerHTML = (this.has_report_divider) ? '&nbsp;|&nbsp; reported' : '&nbsp; reported'
	}
	else
	{
		return ;
	}
};


// displays the processing indicator
dashboard_obj.prototype.report_to_admin_processing=function(on_off)
{
	document.getElementById("report_to_admin").style.display = (on_off == 'on') ? 'none' : '' ;
	document.getElementById("report_to_admin_indicator").style.display = (on_off == 'on') ? '' : 'none' ;
};


// yay!
dashboard_obj.prototype.report_to_admin_success=function(response)
{
	alert( response) ;
};


// boo!
dashboard_obj.prototype.report_to_admin_failure=function(response)
{
	alert('Unable to report profile at this time.  Please try again later.') ;
};


// make the link to report if appropriate
dashboard_obj.prototype.create_report_link=function()
{
	if ((document.getElementById) && (document.getElementById("report_to_admin")))
	{
		document.getElementById("report_to_admin").innerHTML = '<a href="javascript:dashboard.flag_profile();">' + this.dash_report_language + '</a>' ;
	}
} ;


// make the link to report if appropriate for a socialnet menu
dashboard_obj.prototype.create_report_link_socialnet=function()
{
	if ((document.getElementById) && (document.getElementById("report_to_admin")))
	{
		this.has_report_divider = true ;
		document.getElementById("report_to_admin").innerHTML = '<span class="delimiter">|</span><a href="javascript:dashboard.flag_profile();">' + this.dash_report_language + '</a>' ;
	}
} ;
