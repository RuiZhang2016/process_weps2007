function get_leo_profile() {

  //alert( "ONE: " + _leo_profile );

  if( _leo_profile == null )
    _leo_profile = get_profile_cookie();

  //alert( "TWO: " + _leo_profile );

  if( _leo_profile == null )
      return "";

  //alert( "THREE: " + _leo_profile );

  return _leo_profile;
}

function get_profile_cookie() {

  var cookies = document.cookie;

  var i0 = cookies.indexOf( "_leo_profile=" );

  if( i0 == -1 )
    return null;

  var i1 = cookies.indexOf( ";", i0+13 );

  if( i1 == -1 )
    i1 = cookies.length;

  var query = unescape(cookies.substring(i0+13,i1));

  //alert( "COOKIE: " + query );

  return query;
}

function get_oas_query() {

  return get_leo_profile();
}

function get_google_keywords() {

  return get_leo_profile();
}
