//This script determines reg status of user:  Not recognized or recognzied 
//and takes a different action for each.  

function determineReg(newsletter, returnURL)
{
// recognized users will have a uprof cookie and a wpniuser cookie
var uprof =null;
var wpniuser = getCookie("wpniuser");

        uprof = getCookie("UPROF");
        if (wpniuser!=null && uprof !=null)
                {
                   //User is recognized 
                   window.open("http://www.washingtonpost.com/ac2/wp-dyn?node=admin/email/express&action=subscribe&newsletter_code="+newsletter, "", "scrollbars=no,toolbar=no,width=300,height=232");
                }
        else
                {
                   //User is not recognized  
                   location.href = "http://www.washingtonpost.com/ac2/wp-dyn?node=admin/registration/register&destination=register&nextstep=gather&newsletter_code="+newsletter+"&application=Origin%20Page&applicationURL="+returnURL;
                }

}

function getCookie(name)
{
  var cookie = " " + document.cookie;
  var search = " " + name + "=";
  var setStr = null;
  var offset = 0;
  var end = 0;
  if (cookie.length > 0)
  {
    offset = cookie.indexOf(search);
    if (offset != -1)
        {
      offset += search.length;
      end = cookie.indexOf(";", offset)
      if (end == -1)
        end = cookie.length;
      setStr = unescape(cookie.substring(offset, end));
    }
  }
  return(setStr);
}

function setCookie (name, value, expires, path, domain, secure) {
      document.cookie = name + "=" + escape(value) +
        ((expires) ? "; expires=" + expires : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
}
