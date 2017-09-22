function submitTags( the_form, base_url, instance ) {

  var target_url = base_url + '/index.php?type=42';
  var form = document.getElementById( the_form );

  new ajax (target_url, {method: 'post', postBody: $F(form), onComplete: function(results) { processTagResults(results,instance) } });

  // Adding dw tagging -coonce (9/17/2006)

  switch($(the_form).ref_type_id.value){
  	// User is tagging a story
  	case "1101":
  		var dw_url = 'http://dw.com.com/redir?ltype=&siteid=45&edid=3&asId=&astId=12&ptId=&ontid=9349&useract=109&destURL=http://img.gamespot.com/gamespot/b.gif';
		break;
  	// User is tagging a person
  	case "104":
  		var dw_url = 'http://dw.com.com/redir?ltype=&siteid=45&edid=3&asId=&astId=12&ptId=&ontid=9349&useract=106&destURL=http://img.gamespot.com/gamespot/b.gif';
		break;
  	// User is tagging a show
  	case "101":
  		var dw_url = 'http://dw.com.com/redir?ltype=&siteid=45&edid=3&asId=&astId=12&ptId=&ontid=9349&useract=108&destURL=http://img.gamespot.com/gamespot/b.gif';
		break;
  }
  var clrgif = document.createElement('img');
  clrgif.setAttribute('src', dw_url);
  document.body.appendChild(clrgif);
  return true;
}



function showAddTagForm(instance) {

  if (!instance) instance = 'single';

  var add_tags = $('add_tags_'+instance);
  var success = $('add_success_'+instance);

  add_tags.style.display = 'block';
  success.style.display = 'none';

  var tagging_module = $('tagging_module_'+instance);
  var btn_add_tag = $('btn_add_tag_'+instance);

  if (tagging_module.offsetHeight > 0)
    btn_add_tag.style.display = 'none';
  else
    setTimeout("fadeIn(document.getElementById('btn_add_tag_"+instance+"'))",140);

  foldToggle('tagging_module_'+instance, null, 150);

}


function processTagResults( results, instance ) {

  var json_results = eval( '(' + results.responseText + ')' );

	var str_results;

	var tags_str = json_results['my_tags']['tag_str'];
	var tags_arr = json_results['my_tags']['tag_arr'];

	//In case this is ever needed ...
	//alert("Confirm added: " + tags_str);

	if ( tags_str )
		str_results = "Tagged with " + tags_str;
	else
		str_results = "Saved with no tags.";

	var add_tags = $('add_tags_'+instance);
	var add_success = $('add_success_'+instance);

	add_success.innerHTML = str_results;
	add_tags.style.display = 'none';
	fadeIn(add_success);
	delay(function(){foldToggle('tagging_module_'+instance)},2);
}