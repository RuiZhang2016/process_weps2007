function pushToMyShowsSelectBox(new_option_name, new_option_value) {
    var the_form = document.getElementById('my_shows_jump_form');
    var the_list = the_form.my_shows_jump_list;
    var already_in_list = false;  
    for (var i = 0; i < the_list.options.length; i++) {
        var list_simple = the_list.options[i].value.substr(0, the_list.options[i].value.indexOf('.html') );
        var this_simple = new_option_value.substr(0, new_option_value.indexOf('.html') );
        if ( this_simple == list_simple )
            already_in_list = true;
    }
    	
    if (! already_in_list) {
        var my_shows_length = the_list.options.length;
        the_list.options[my_shows_length] = new Option('----------------', new_option_value);
        my_shows_length = the_list.options.length;
        the_list.options[my_shows_length] = new Option(new_option_name, new_option_value);
    }
}

function submitAddFavorite( the_form, base_url ) {

  var target_url = base_url + '/index.php?type=43'; // collection add via ajax
  var form = document.getElementById( the_form );
  
  fadeOut( document.getElementById("add_favorite_success") );
  
  new ajax (target_url, {method: 'post', postBody: $F(form), onComplete: processAddFavoriteResults});

  return true;
}



function showAddFavoriteForm(ref_id, ref_type_id, the_form, base_url, dw_url, new_option_name, new_option_value) {

  var add_collection_item = $('favorite_item');
  var success = $('add_favorite_success');

  document.getElementById("add_favorite").style.display = 'block';
  success.style.display = 'none';
//alert(base_url);
  var favorite_module = $('favorite_module');
  var btn_add_favorite = $('btn_add_favorite');

  foldToggle('favorite_module', null, 59);
  document.getElementById("add_favorite_success").innerHTML = 'please wait...';
  document.getElementById("add_favorite").style.display = 'none';
  fadeIn( document.getElementById("add_favorite_success") );
   
  var clrgif = document.createElement('img');
  clrgif.setAttribute('src', dw_url);
  document.body.appendChild(clrgif);
     
  submitAddFavorite( the_form, base_url );
  
  pushToMyShowsSelectBox(new_option_name, new_option_value);
}

function processAddFavoriteResults( results ) {

	var json_results = eval( '(' + results.responseText + ')' );

	str_results = json_results;
	
	var add_favorite = $('add_favorite');
	var add_favorite_success = $('add_favorite_success');

	add_favorite_success.innerHTML = str_results;
	add_favorite.style.display = 'none';
	fadeIn(add_favorite_success);
	delay(function(){foldToggle('favorite_module')},2);
}