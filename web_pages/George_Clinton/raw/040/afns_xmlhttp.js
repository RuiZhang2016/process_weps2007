function post_request(container, page, response_func, params )
{
	var url = afns_base_url + page;
	var myAjax = new Ajax.Request( url, {method: 'post', onComplete: response_func, parameters:params } );
}

function get_request(container, page, response_func, params )
{ 
	var url = afns_base_url + page;
	var myAjax = new Ajax.Request( url, {method: 'get', onComplete: response_func, parameters:params } );
}

