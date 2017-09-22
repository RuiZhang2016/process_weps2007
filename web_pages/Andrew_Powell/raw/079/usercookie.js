<!--//

  // name - name of the desired cookie
  // * return string containing value of specified cookie or null if cookie does not exist
  function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
      begin = dc.indexOf(prefix);
      if (begin != 0) return null;
    } else
      begin += 2;
    var end = document.cookie.indexOf(";", begin);
    if (end == -1)
      end = dc.length;
    return unescape(dc.substring(begin + prefix.length, end));
  }

  function getCookieValue(cookieText, name) {
    var prefix = name + "=";
    var begin = cookieText.indexOf("&" + prefix);
    if (begin == -1) {
      begin = cookieText.indexOf(prefix);
      if (begin != 0) return null;
    } else
      begin += 1;
    var end = cookieText.indexOf("&", begin);
    if (end == -1)
      end = cookieText.length;
    return cookieText.substring(begin + prefix.length, end);
  }

//-->
