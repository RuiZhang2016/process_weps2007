var base_url             = 'http://www.tv.com/misc/mod.php';
//var base_url             = 'http://staging.internal.tv.com:8080/misc/mod.php';
//var base_url             = 'http://sean.dev.tv.com:8080/tv/www/misc/mod.php';

var b_open_form          = false;        // THIS FLAG LETS ME KNOW WHETHER OR NOT THE FORM IS OPEN OR CLOSED (so we don't let the user keep hitting open open open, that looks like ass on the frontend.)
var b_open_thank_you_div = false;        // THIS FLAG LETS ME KNOW WHETHER OR NOT THE THANK YOU DIV IS VISIBLE (i can handle visual effects based on this)


/* SHOW ADD LINK FORM *******************************************************
 * DESC:
 *      - fold down the 'add a link' form.
 ****************************************************************************/
function showAddLinkForm(div_to_update, effect_time, height){
	if(!b_open_form){
		//HIDE THE THANK YOU DIV
		if(b_open_thank_you_div){
			fadeOut($('div_thanks'),  .8);
			b_open_thank_you_div = false;
		}

		$('div_validate_response').innerHTML = '';
		foldDown($(div_to_update), effect_time, height);
		b_open_form = true;
	}
}


/* HIDE ADD LINK FORM *******************************************************
 * DESC:
 *      - fold up the 'add a link' form.
 ****************************************************************************/
function hideAddLinkForm(div_to_update, effect_time, height){
	foldUp($(div_to_update), effect_time, height);
	b_open_form = false;
}


/* CHECK LINK ***************************************************************
 * DESC:
 *      - Quickly checks the link the user submits to make sure its valid
 *        and it isn't a dupe.
 ****************************************************************************/
function checkLink(div_to_update, txt_link_url){
	var b_valid = true;
	// Validate the link url
	if($(txt_link_url).value == '' || $(txt_link_url).value == 'http://'){
		alert('You must enter a link to be validated.');
		b_valid = false;
	}
	else if(!isValidUrl($(txt_link_url).value)){
		alert('You must enter a valid link.');
		b_valid = false;
	}

	// If everything is all good -> submit the link
	if(b_valid){
		pars            = 'type=38&action=ajax_validate_link&txtStoryURL='+encodeURIComponent($(txt_link_url).value);

		// AJAX > Go get all comments associated to this story/link
		var myAjax     = new Ajax.Updater(
						 div_to_update,
						 base_url, {
							method: 'get',
							parameters: pars,
							onComplete:function(){

							}
						 });
	}
}




/* FINALIZE LINK ************************************************************
 * DESC:
 *      - Validates the fields passed in and submits the link into the sls queue
 *      - Try not. Do or do not, there is no try. -- Yoda
 ****************************************************************************/
function finalizeLink(ref_id, ref_type_id, txt_link_url, txt_link_title, txt_link_desc, div_thanks, div_add_a_link, div_place_holder, ajax_new_link_container, b_from_news_page){
	var b_valid = true;
	// Validate the link url
	if($(txt_link_url).value == '' || $(txt_link_url).value == 'http://'){
		alert('You must enter a link to be validated.');
		b_valid = false;
	}
	// Validate the link title
	else if($(txt_link_title).value == ''){
		alert('You must enter a title.');
		b_valid = false;
	}
	else if(!isValidUrl($(txt_link_url).value)){
		alert('You must enter a valid link.');
		b_valid = false;
	}

	// If everything is all good -> submit the link
	if(b_valid){

		var link = $(txt_link_url).value;

		$('div_save').innerHTML = '<b>Submitting Link...</b>';

		pars            = 'type=38&action=ajax_submit_link&txtStoryURL='+encodeURIComponent($(txt_link_url).value)+'&txtStoryTitle_mand='+encodeURIComponent($(txt_link_title).value)+'&tarStoryDesc_mand='+encodeURIComponent($(txt_link_desc).value)+'&ref_type_id='+ref_type_id+'&ref_id='+ref_id;

		// AJAX > SUBMIT THE COMMENT AND FOLD UP
		// The div to get updated should be the 'THANK YOU' div..... this should print either
		//   - 'Submitted Successfully'
		//   - 'Duplicate link'
		//   - 'Invalid (malformed) link'
		var myAjax     = new Ajax.Updater(
						 'div_thanks',
						 base_url, {
							method: 'get',
							parameters: pars,
							onComplete:function(){
								foldUp($(div_add_a_link), .5, 210);                 //HIDE THE FORM
								fadeIn($(div_thanks),  .8);                         //DISPLAY THE THANK YOU DIV
								$(txt_link_url).value = 'http://';                  //RESET THE FORM VALUES
								$(txt_link_title).value = '';                       //RESET THE FORM VALUES
								$(txt_link_desc).value = '';                        //RESET THE FORM VALUES
								b_open_form     = false;                            //THE FORM SHOULD HAVE FOLDED UP SO SET THIS BOOLEAN
								b_open_thank_you_div = true;                        //THE THANKS DIV SHOULD NOW BE VISIBLE SO SET THIS BOOLEAN

								// RESET THE SUBMIT/CLOSE LINKS (the form is closed - so it shouldn't be noticeable)
								if(b_from_news_page)
									pars           = 'type=38&action=ajax_get_submit_tpl&b_from_news_page=true&ref_type_id='+ref_type_id+'&ref_id='+ref_id;
								else
									pars           = 'type=38&action=ajax_get_submit_tpl&b_from_news_page=false&ref_type_id='+ref_type_id+'&ref_id='+ref_id;
								var secondAjax = new Ajax.Updater(
												 'div_save',
												 base_url, {
												 method: 'get',
												 parameters: pars,
												 onComplete:function(){

														//IF THIS CAME FROM THE NEWS PAGE, THEN DO THE DIV APPEND, ETC.
														if(b_from_news_page){
															// GRAB THE SUBMISSION AND POPULATE THE CONTAINER DIV WITH THE RECENTLY SUBMITTED LINK
															var container_div       = $(ajax_new_link_container);           // CONTAINER DIV
															var newdiv              = document.createElement('div');        // CREATE A NEW DIV TO BE APPENDED
															$(newdiv).style.display = 'none';                               // SEST THE STYLE TO NONE (SO WE CAN FADE IT IN SMOOTHLY)

															pars           = 'type=38&action=ajax_get_container_div&b_from_news_page=true&=true&txtStoryURL='+encodeURIComponent(link)+'&ref_type_id='+ref_type_id+'&ref_id='+ref_id;
															var secondAjax = new Ajax.Updater(
																			 newdiv,
																			 base_url, {
																			 method: 'get',
																			 parameters: pars,
																			 onComplete:function(){
																				container_div.appendChild(newdiv);          // APPEND THE NEW DIV TO THE CONTAINER
																				//container_div.prepend(newdiv);
																				//$(ajax_new_link_container).insertBefore(newdiv);
																				fadeIn($(newdiv));                          // NOW FADE THIS BAD BOY IN

																				// ADDING DW TAGGING -COONCE (11/3/2006)
																				var dw_url = 'http://dw.com.com/redir?ltype=&siteid=45&edid=3&asId=&astId=12&ptId=&ontid=9349&useract=156&destURL=http://img.gamespot.com/gamespot/b.gif';
																				var clrgif = document.createElement('img');
																				clrgif.setAttribute('src', dw_url);
																				document.body.appendChild(clrgif);
																				return true;

																			 }
															});
														}



														//IF THIS CAME FROM THE SUMMARY PAGE -> DO AN LI APPEND, ETC.
														else{
															// GRAB THE SUBMISSION AND POPULATE THE CONTAINER DIV WITH THE RECENTLY SUBMITTED LINK
															var container_list      = $('ul_updates');                      // CONTAINER List Element (UL)
															var new_li              = document.createElement('li');         // CREATE A NEW LI TO BE APPENDED
															$(new_li).style.display = 'none';                               // SEST THE STYLE TO NONE (SO WE CAN FADE IT IN SMOOTHLY)

															pars           = 'type=38&action=ajax_get_container_div&b_from_news_page=false&=true&txtStoryURL='+encodeURIComponent(link)+'&ref_type_id='+ref_type_id+'&ref_id='+ref_id;
															var secondAjax = new Ajax.Updater(
																			 new_li,
																			 base_url, {
																			 method: 'get',
																			 parameters: pars,
																			 onComplete:function(){
																				container_list.appendChild(new_li);         // APPEND THE NEW DIV TO THE CONTAINER
																				fadeIn($(new_li));                          // NOW FADE THIS BAD BOY IN

																				// ADDING DW TAGGING -COONCE (11/3/2006)
																				var dw_url = 'http://dw.com.com/redir?ltype=&siteid=45&edid=3&asId=&astId=12&ptId=&ontid=9349&useract=156&destURL=http://img.gamespot.com/gamespot/b.gif';
																				var clrgif = document.createElement('img');
																				clrgif.setAttribute('src', dw_url);
																				document.body.appendChild(clrgif);
																			 }
															});
														}
												 }
							    });

							}
						 });

	}


}



/* SAVE THUMB FROM PERSONSPACE/SHOWSPACE ************************************
 * DESC:
 *      - Save a thumbs up/thumbs down vote by the user.
 ****************************************************************************/
function saveThumbsFromSpace(thumb_type, div_thumb, ref_id, ref_type_id, div_place_holder, ass_ref_id, ass_ref_type_id){
	var pars;

	// User gives this score a thumbs up
	if(thumb_type == 'Up'){
		$(div_thumb).innerHTML = '<img src="http://image.com.com/tv/images/sls/th_up.gif">';
		fadeIn($(div_thumb));
		pars                   = 'type=38&action=score_news&score_action=1&sls_ref_id='+ref_id+'&sls_ref_type_id='+ref_type_id+'&ref_id='+ass_ref_id+'&ref_type_id='+ass_ref_type_id;
	}
	// User gives this score a thumbs down
	else{
		$(div_thumb).innerHTML = '<img src="http://image.com.com/tv/images/sls/th_down.gif">';
		fadeIn($(div_thumb));
		pars                   = 'type=38&action=score_news&score_action=0&sls_ref_id='+ref_id+'&sls_ref_type_id='+ref_type_id+'&ref_id='+ass_ref_id+'&ref_type_id='+ass_ref_type_id;
	}

	// AJAX > Insert score into the USER_NEWS_SCORES table
	var myAjax     = new Ajax.Updater(
					 div_place_holder,
					 base_url, {
					 	method: 'get',
					 	parameters: pars,
					 	onComplete:function(){
					 		//$(div_to_update).innerHTML += $(div_to_update).innerHTML+'"'+unesc_comment+'"';
					 		//$(submit_link_div).innerHTML = '<a href="javascript:postModComment(\'new_comment_'+artist_id+'\', \''+artist_id+'\', \'submit_link_'+artist_id+'\');" style="font-size:12px;color:#006666;"><b>[submit]</b></a>';

							// ADDING DW TAGGING -COONCE (11/3/2006)
							var dw_url = 'http://dw.com.com/redir?ltype=&siteid=45&edid=3&asId=&astId=12&ptId=&ontid=9349&useract=157&destURL=http://img.gamespot.com/gamespot/b.gif';
							var clrgif = document.createElement('img');
							clrgif.setAttribute('src', dw_url);
							document.body.appendChild(clrgif);
							return true;
					 	}
					 });
}


/* IS VALID URL *************************************************************
 * DESC:
 *      - Checks to see whether the url entered by the useer is a proper url.
 ****************************************************************************/
function isValidUrl(s) {
	var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
	return regexp.test(s);
}






































/* EVERYTHING BELOW THIS LINE IS DEPRECATED OR IS WAITING FOR FUTURE IMPLEMENTATION ###########
 ##############################################################################################
 ##############################################################################################
 ##############################################################################################
 ##############################################################################################
 ##############################################################################################*/





/* SAVE THUMB  **************************************************************
 * DESC:
 *      - Save a thumbs up/thumbs down vote by the user.
 ****************************************************************************/
function saveThumbs(thumb_type, div_thumb, div_score, story_score, ref_id, ref_type_id){
	var pars;

	// User gives this score a thumbs up
	if(thumb_type == 'Up'){
		var new_score          = parseFloat(story_score) + 5;
		$(div_thumb).innerHTML = '<b style=\"color:green;\">Thumbs Up!</a>';
		$(div_score).innerHTML = '<b>Scoring News</b>';
		pars                   = 'type=38&action=score_news&score_action=1&ref_id='+ref_id+'&ref_type_id='+ref_type_id;
	}
	// User gives this score a thumbs down
	else{
		var new_score          = parseFloat(story_score) - 5;
		$(div_thumb).innerHTML = '<b style=\"color:red;\">Thumbs Down!</a>';
		$(div_score).innerHTML = '<b>Scoring News</b>';
		pars                   = 'type=38&action=score_news&score_action=0&ref_id='+ref_id+'&ref_type_id='+ref_type_id;
	}

	// AJAX > Insert score into the USER_NEWS_SCORES table
	var myAjax     = new Ajax.Updater(
					 div_score,
					 base_url, {
					 	method: 'get',
					 	parameters: pars,
					 	onComplete:function(){
					 		//$(div_to_update).innerHTML += $(div_to_update).innerHTML+'"'+unesc_comment+'"';
					 		//$(submit_link_div).innerHTML = '<a href="javascript:postModComment(\'new_comment_'+artist_id+'\', \''+artist_id+'\', \'submit_link_'+artist_id+'\');" style="font-size:12px;color:#006666;"><b>[submit]</b></a>';
					 	}
					 });
}




/* GRAB COMMENTS *************************************************************
 * DESC:
 *      - Ajax call to get all comments for a particular story or link
 ****************************************************************************/
function showComments(div_comments, sls_id, ref_type_id){
	pars           = 'type=38&action=view_comments&sls_id='+sls_id+'&ref_type_id='+ref_type_id;

	// AJAX > Go get all comments associated to this story/link
	var myAjax     = new Ajax.Updater(
					 div_comments,
					 base_url, {
					 	method: 'get',
					 	parameters: pars,
					 	onComplete:function(){
					 		$(div_comments).style.display = 'inline';

					 	}
					 });
}






/* SAVE COMMENTS ************************************************************
 * DESC:
 *      - Ajax call to save the current comments for a particular story or link
 ****************************************************************************/
function saveComments(div_comments, sls_id, ref_type_id, comment_text){
	pars            = 'type=38&action=save_comments&sls_id='+sls_id+'&ref_type_id='+ref_type_id+'&comment='+comment_text;

	// AJAX > Go get all comments associated to this story/link
	var myAjax     = new Ajax.Updater(
					 div_comments,
					 base_url, {
					 	method: 'get',
					 	parameters: pars,
					 	onComplete:function(){
					 		$(div_comments).style.display = 'inline';
					 	}
					 });
}

